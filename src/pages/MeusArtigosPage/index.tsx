import apiClient from "../../services/api-client"
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [ showComponent, setShowComponent ] = useState(false)

  async function buscaMeusArtigos() {
    const token = localStorage.getItem("access_token")
    
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      '/artigos/meus-artigos'
    );

    setArticles(response.data);
    setShowComponent(true)
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return ( showComponent ?
    <ArticleList articles={articles}/> :
    <div />
  );
};