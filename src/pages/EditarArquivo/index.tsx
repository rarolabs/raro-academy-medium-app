import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {
  const [artigo, setArtigo] = useState<ArticleThumbnailProps>()
  const { id } = useParams()

  useEffect(() => {
    if(id) {
      buscarArtigo()
    }
  }, [id])

  async function buscarArtigo() {
    const token = localStorage.getItem("acess_token");
    const response = await axios.get<ArticleThumbnailProps>(
      `http://3.221.159.196:3307/artigos/${id}`,
      {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    )

    setArtigo(response.data)
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
        <ArticleForm article={artigo} onSubmit={ handleSubmit }/>
      </div>
    </>
  );
};
