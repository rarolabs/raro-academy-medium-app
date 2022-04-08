import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";


export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [exibirMensagem, setExibirMensagem] = useState(true);
  const url = "http://3.221.159.196:3307/artigos/meus-artigos"
  const chamadoNaApi = async () => {
    const token = localStorage.getItem("access_token") ?? "";
    const response = await axios.get(url, {
      headers: {
        Authorization: `bearer ${token}`
      }
    });
    setArticles(response.data);
    setExibirMensagem(response.data.length === 0);
  }

  useEffect(() => {
    chamadoNaApi()
  }, []);

  if (exibirMensagem) {
    return (
      <p className="font-bold text-center">Não há artigos publicados</p>
    )
  }
  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};