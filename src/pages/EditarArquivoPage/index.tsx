import { useEffect } from 'react';
import apiClient from '../../services/api-client';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnail } from "../../components/ArticleThumbnail";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {

  const [article, setArticle] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );

    setArticle(response.data);
  }

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  const handleSubmit = async (article: ArticleThumbnailProps) => {

    const data = {
      titulo: article.titulo,
      resumo: article.resumo,
      imagem: article.imagem,
      conteudo: article.conteudo,
    }

    if (article.id) {
      const response = await apiClient.patch<ArticleThumbnailProps>(
        `/artigos/${id}`, data);

      navigate('/artigos');
    } else {
      const response: any = await apiClient.post<ArticleThumbnailProps>(
        `/artigos`, data);

      navigate('/artigos');
    }
  }

  const handleDelete = async (article: ArticleThumbnailProps) => {

    console.log('delete')
    if (article.id) {
    const response = await apiClient.delete<ArticleThumbnailProps>(
      `/artigos/${id}`);
    }

    navigate('/artigos')
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={article} onSubmit={handleSubmit} onDelete={handleDelete}/>
      </div>
    </>
  );
};
