import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { useNavigate } from "react-router-dom";

export const EditarArquivoPage = () => {
  
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>()
  const { id } = useParams();
  
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate()
 
  useEffect(() => { 
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    
    const response = await axios.get<ArticleThumbnailProps>(
      `http://3.221.159.196:3307/artigos/${id}`,
      {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );
    setArtigo(response.data);
  }
  
  async function handleSubmit (artigo: ArticleThumbnailProps) {

    if (artigo.id) {
      await axios.patch(
        `http://3.221.159.196:3307/artigos/${id}`, 
        { ...artigo },
        {
          headers: {
            'Authorization': `bearer ${token}`
        }}
      )   
      navigate(`/artigo/${artigo.id}`)    
    } else {
      await axios.post(
        `http://3.221.159.196:3307/artigos`, 
        { ...artigo },
        {
          headers: {
            'Authorization': `bearer ${token}`
        }}
      )
      navigate(`/artigos`)
    }
  }
  
  async function handleDelete () {
    await axios.delete(
      `http://3.221.159.196:3307/artigos/${id}`, 
      {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    )
    navigate(`/artigos`)
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm 
        article={artigo}
        onClick={handleDelete}
        onSubmitProp={handleSubmit}
         />
      </div>
    </>
  );
};

  