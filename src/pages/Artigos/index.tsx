import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import axios from 'axios'

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  useEffect(() => {
    getArticles()
  }, []);

  const getArticles = async () => {
    const response = await axios.get(`http://3.221.159.196:3307/artigos`)    
    setArticles(response.data)
  }

  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
      />
    </div>
  );
};