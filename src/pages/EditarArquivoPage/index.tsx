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
    dataPublicacao: new  Date,
    autor: {
      nome: "",
      avatar: "",
      id: 0,
    },
    conteudo: ""
  })
  const { id } = useParams();
  
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate()

  useEffect(() => { 
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );
    setArtigo(response.data);
  }
  
  async function handleSubmit (artigo: ArticleThumbnailProps) {

    if (artigo.id) {
      await apiClient.patch(
        `/artigos/${id}`, 
        { ...artigo }
      )   
      navigate(`/artigo/${artigo.id}`)    
    } else {
      const response = await apiClient.post(
        `/artigos`, 
        { ...artigo }
      )
      navigate(`/artigo/${response.data.id}`)
    }
  }
  
  async function handleDelete () {
    await apiClient.delete(
      `http://3.221.159.196:3307/artigos/${id}`
    )
    navigate(`/artigos`)
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

  