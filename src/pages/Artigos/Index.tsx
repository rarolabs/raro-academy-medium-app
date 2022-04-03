import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const url = "http://3.221.159.196:3307/artigos"
  const BuscarArtigos = async () => {
    const response = await axios.get(url);
    setArticles(response.data)
  }
  useEffect(() => { BuscarArtigos() }, []);

  if (articles.length === 0) {
    return (
      <p>Não existem artigos publicados</p>
    )

  }
  else {
    return (
      <ArticleList articles={articles} />

    )
  }

};