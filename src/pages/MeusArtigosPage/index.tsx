import apiClient from "../../services/api-client"
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [ showComponent, setShowComponent ] = useState(false)
  const [ erro, setErro ] = useState("")

  async function buscaMeusArtigos() {

    setErro('')
    
    try { 
      const response = await apiClient.get<ArticleThumbnailProps[]>
      ('/artigos/meus-artigos');

      setArticles(response.data);
    } catch (error: any) {
      error.response.data.statusCode === 401 ?
        setErro('Unauthorized') :
        setErro('Erro ao buscar artigos');
    }

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