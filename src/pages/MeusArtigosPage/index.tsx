import apiClient from "../../services/api-client"
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { useNavigate } from "react-router-dom";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [ showComponent, setShowComponent ] = useState(false)
  const [ erro, setErro ] = useState("")
  const [ artigoDeletado, setArtigoDeletado ] = useState(false)
  
  const navigate = useNavigate()

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

  useEffect(() => {
    buscaMeusArtigos();
  }, [artigoDeletado]);

  async function remove(id:number) {
    try {
      setArtigoDeletado(  await apiClient.delete(`/artigos/${id}`) )
    } catch (error:any ) {
      error.response.data.statusCode === 401 ?
        setErro('Unauthorized') :
        setErro('Erro ao deletar artigo')
    }
  }

  return ( showComponent ?
    <ArticleList 
      articles={articles}
      remove= {remove}/> :
    <div />
  );
};