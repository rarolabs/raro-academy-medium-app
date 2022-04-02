import { useEffect, useState } from "react";
import React from 'react'

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";
import axios from 'axios'


export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  

  async function buscaMeusArtigos() {
    const token = localStorage.getItem("access_token");
    // através de generics, posso informar ao axios o tipo de objeto que vamos
    // operar.
    const response = await axios.get<ArticleThumbnailProps[]>(
      'http://3.221.159.196:3307/artigos/meus-artigos',
      {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};