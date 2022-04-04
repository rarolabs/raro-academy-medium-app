import { useEffect } from "react";
import apiClient from "../../services/api-client"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { useNavigate } from "react-router-dom";

export const EditarArquivoPage = () => {
  
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>({
    id: 0,
    imagem: "",
    titulo: "",
    resumo: "",
    dataPublicacao: new Date,
    autor: {
      nome: "",
      avatar: "",
      id: 0,
    },
    conteudo: ""
  })
  const [ erro, setErro ] = useState('')
  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => { 
    id && buscarArtigo();
  }, [id]);

  async function buscarArtigo() {
    setErro('')
    try {
      const response = await apiClient.get<ArticleThumbnailProps>(
        `/artigos/${id}`
      );
      setArtigo(response.data);
    } catch (error: any) {
      error.response.data.statusCode === 401 ?
        setErro('Unauthorized') :
        setErro('Erro ao buscar artigo')
    }
  }
  
  async function handleSubmit (artigo: ArticleThumbnailProps) {
    setErro('')

    if (artigo.id) {
      try {
        await apiClient.patch<ArticleThumbnailProps>(
          `/artigos/${id}`, 
          { ...artigo }
        )   
        navigate(`/artigo/${artigo.id}`)    
      } catch (error: any) {
        error.response.data.statusCode === 401 ? 
          setErro("Unauthorized") :
          setErro('Erro ao editar artigo')
      }
    } else {
      try {
        const response = await apiClient.post(
          `/artigos`, 
          { ...artigo }
        )
        navigate(`/artigo/${response.data.id}`)
      } catch (error: any) {
        error.response.data.statusCode === 401 ?
          setErro("Unauthorized") : 
          setErro('Erro ao criar novo artigo')
      }
    }
  }
  
  async function handleDelete () {
    try {
      await apiClient.delete( `/artigos/${id}`)
      navigate(`/artigos`)
    } catch (error:any) {
      error.response.data.statusCode === 401 ?
        setErro('Unauthorized') : 
        setErro('Erro ao deletar artigo')
    }
  }

  return (
    <div className="items-center justify-center m-10">
      <ArticleForm 
      article={artigo}
      onClick={handleDelete}
      onSubmitProp={handleSubmit}
      />
    </div>
  );
};

  