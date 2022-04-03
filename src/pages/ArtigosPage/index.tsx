import apiClient from '../../services/api-client';
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";
import NoArticlesPage from "../NoArticlesPage";
import LoadingPage from '../LoadingPage'

export const ArtigosPage = () => {

  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [loading, setLoading] = useState(false);

  async function buscaArtigos() {

    setLoading(true);

    const response = await apiClient.get<ArticleThumbnailProps[]>(
      '/artigos'
    );

    setLoading(false);
    setArticles(response.data);
  }

  useEffect(() => {
    buscaArtigos();
  }, []);

  const Article = () => {
    if (articles.length === 0) {
      return <NoArticlesPage />
    }
    return <ArticleList articles={articles} />
  }

  return (
    <div className="my-30">
      {loading ? <LoadingPage/> : <Article />}
    </div>
  );
};