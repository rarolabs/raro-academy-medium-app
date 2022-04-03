import faker from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import LoadingArtigo from "../../components/LoadingArtigo";
import { NotFound } from "../../components/NotFound";
import apiClient from '../../services/api-client';
import { NotFoundPage } from "../NotFoundPage";

type AutorType = {
  nome: string
  avatar: string
}

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState<AutorType>({ nome: '', avatar: '' });
  const [dataPublicacao, setDataPublicacao] = useState(new Date());
  const [readTime, setReadTime] = useState<string>('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadArticle() {

      setLoading(true);

      const response = await apiClient.get<ArticleThumbnailProps>(
        `/artigos/${id}`
      );

      setArticle(response.data.conteudo);
      setAutor({
        nome: response.data.autor.nome,
        avatar: response.data.autor.avatar
      });

      setLoading(false);
      setDataPublicacao(new Date(response.data.dataPublicacao));
      setReadTime(response.data.tempoDeLeitura || '')
    }

    loadArticle();
  }, []);

  const Article = () => {
    if (article === '') {
      return <NotFound/>
    }
    return <ArticleView
      article={article}
      autor={autor}
      dataPublicacao={dataPublicacao}
      tempoDeLeitura
      ={readTime}
    />
  }

    return (
      <div className="m-10">
           {loading ? <LoadingArtigo /> : <Article />}
      </div>
    );
  };