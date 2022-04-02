import { ArticleForm } from "../../components/ArticleForm";
import React from 'react'
import apiClient from '../../services/api-client';
import { useState,useEffect} from "react";
import {useParams} from 'react-router-dom'
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {

  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function buscarArtigo() {
    const token = localStorage.getItem("access_token");
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );

    setArtigo(response.data);
  }

  const handleSubmit = (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      console.log('=====> devo atualizar o artigo');
    } else {
      console.log('=====> devo criar um novo artigo');
    }
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm
          article={artigo} />
          onSubmit={handleSubmit}
      </div>
    </>
  );
}
