import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const url = "http://3.221.159.196:3307/artigos"
  const BuscarArtigos = async () => {
    const response = await axios.get(url);
    setArticles(response.data)
  }
  useEffect(() => { BuscarArtigos() }, []);
  
  return (
    <ArticleList articles={articles} />
  );
};