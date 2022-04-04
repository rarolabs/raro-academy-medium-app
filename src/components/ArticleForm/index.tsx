import { useEffect, useState } from "react";
import apiClient from '../../services/api-client';
import { render } from "@testing-library/react";
import React from "react";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";
import { Link, useNavigate } from "react-router-dom";

type ArticleFormProps = {
  article?: ArticleThumbnailProps;
  onSubmit?: (article: ArticleThumbnailProps) => void;
  onDelete?: (article: ArticleThumbnailProps) => void;
}

export const ArticleForm = ({ article, onSubmit, onDelete }: ArticleFormProps) => {

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [imagem, setImagem] = useState('');
  const [conteudo, setConteudo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || '');
    }
  }, [article]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (onSubmit) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo,
        imagem,
        conteudo
      };
      onSubmit(articleToSubmit as ArticleThumbnailProps)
    }
  }

  const handleDelete = () => {
    onDelete!(article!);
  }

  const transformImageInBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };

  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <h1 className="text-xl font-semibold">
          Hello there 👋,&nbsp;
          <span className="font-normal">please fill in your information to continue</span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            value={titulo}
            onChange={event => setTitulo(event.target.value)}
            required
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={resumo}
            onChange={event => setResumo(event.target.value)}
            required
          />

          <Input
            placeholder="Imagem do Banner"
            type="file"
            name="image"
            label="Banner"
            onChange={transformImageInBase64}

          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={conteudo}
            onChange={setConteudo}
          />

          <div className="flex flex-wrap -mx-3 mb-6">
            <Button type='button' buttonAction='delete' action={() => handleDelete()}>Deletar</Button>
            <Button buttonAction="back" action={() => navigate('/artigos')}>Voltar</Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};