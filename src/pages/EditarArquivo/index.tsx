import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import axios from 'axios'

export const EditarArquivoPage = () => {

  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams()
  const token = localStorage.getItem("access_token")
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

  const removeArticle = async (articleId: number) => {
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
        <ArticleForm article={artigo} onSubmit={handleSubmit} removeArticle={removeArticle}/>
      </div>
    </>
  );
};