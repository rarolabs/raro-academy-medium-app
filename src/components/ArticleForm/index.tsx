import { wait } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArtigoEditado } from "../../types/API";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";

export const ArticleForm = () => {
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
      if (imagem !== null) {
        imagemBase64 = await gerarBase64(imagem!) ?? ""
      }

      const response = await axios.post<ArtigoEditado>(url, {
        titulo: titulo,
        imagem: imagemBase64,
        resumo: resumo,
        conteudo: conteudo
      }, {
        headers: {
          Authorization: `bearer ${token}`
        }
      });
      navigate(`/artigo/${response.data.id}`)
    }
    catch (erro: any) {
      console.log(erro.response.status)
    }
  }
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