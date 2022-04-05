import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import axios from 'axios'
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {

  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams()
  const token = localStorage.getItem("token")
  const navigator = useNavigate()

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
    )
    setArtigo(response.data);
  }

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      await axios.patch<ArticleThumbnailProps>(`http://3.221.159.196:3307/artigos/${id}`, {...artigo} , {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
    navigator(`/artigo/${artigo.id}`)
    } else {
      const response = await axios.post<ArticleThumbnailProps>(`http://3.221.159.196:3307/artigos`, {...artigo} , {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      navigator(`/artigo/${response.data.id}`)
    }
  }

  const deleteArticle = async (articleId: number) => {
    await axios.delete<ArticleThumbnailProps>(`http://3.221.159.196:3307/artigos/${articleId}`, {
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
      navigator('/artigos')
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={artigo} onSubmit={handleSubmit} deleteArticle={deleteArticle}/>
      </div>
    </>
  );
};