import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [carregando, setCarregando] = useState(true);
  const url = "http://3.221.159.196:3307/artigos"
  const BuscarArtigos = async () => {
    const response = await axios.get(url);
    setArticles(response.data);
    setCarregando(false);
  }
  useEffect(() => { BuscarArtigos() }, []);

  if (carregando) {
    return (
      <p className="font-bold text-center">Carregando Artigos...</p>
    )
  }
  else if (articles.length === 0) {
    return (
      <p className="font-bold text-center">Não existem artigos publicados</p>
    )
  }
  else {
    return (
      <ArticleList articles={articles} />

    )
  }

};