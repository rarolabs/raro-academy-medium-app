import { type } from "@testing-library/user-event/dist/type";
import { wait } from "@testing-library/user-event/dist/utils";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArtigoEditado } from "../../types/API";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";

type ArticleFormProps = {
  id?: number;
  artigo?: ArtigoEditado;
};

export const ArticleForm: React.FC<ArticleFormProps> = ({ id, artigo }) => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState<File>();
  const [resumo, setResumo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const gerarBase64 = (arquivo: File) => {
    return new Promise<string | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(arquivo);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
  const salvar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = 'http://3.221.159.196:3307/artigos'
    const token = localStorage.getItem("access_token") ?? "";
    try {
      let imagemBase64 = "";
      if (imagem) {
        imagemBase64 = await gerarBase64(imagem!) ?? ""
      }

      const dados = {
        titulo: titulo,
        imagem: imagemBase64,
        resumo: resumo,
        conteudo: conteudo
      };
      const configs = {
        headers: {
          Authorization: `bearer ${token}`
        }
      };

      let response: AxiosResponse<ArtigoEditado, any>;
      if (id) {
        if (dados.imagem === ""){
          dados.imagem = artigo?.imagem??""
        }
        response = await axios.patch(`${url}/${id}`, dados, configs);
      }
      else {
        response = await axios.post(url, dados, configs);
      }

      navigate(`/artigo/${response.data.id}`)
    }
    catch (erro: any) {
      console.log(erro.response.status)
    }
  }
  useEffect(() => {
    setTitulo(artigo?.titulo ?? "")
    setResumo(artigo?.resumo ?? "")
    setConteudo(artigo?.conteudo ?? "")
  }, [id, artigo])

  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <h1 className="text-xl font-semibold">
          Hello there 👋,&nbsp;
          <span className="font-normal">please fill in your information to continue</span>
        </h1>
        <form className="mt-6" action="#" onSubmit={salvar}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            required
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />

          <Input
            placeholder="Imagem do artigo"
            type="file"
            name="image"
            label="Banner"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImagem(e.target.files?.[0])}
          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={conteudo}
            onChange={(dados) => setConteudo(dados.text)}

          />

          <Button type="submit">Salvar</Button>
        </form>
      </div>
    </div>
  );
};