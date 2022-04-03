/* src/pages/MeusArtigos/index.tsx */
import axios from "axios";
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { SemArtigos } from "../../components/SemArtigos";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
  const [ control, setControl ] = useState(false)

  async function buscaMeusArtigos() {

    const token = localStorage.getItem("access_token")
    
    const response = await axios.get<ArticleThumbnailProps[]>(
      'http://3.221.159.196:3307/artigos/meus-artigos', 
      {
        headers: {
          "Authorization": `bearer ${token}`
        }
      }
    );

    setArticles(response.data);
    setControl(true)
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);


  if (control) {
    console.log("ole")
    return (<ArticleList articles={articles}/> ) 
  }
  return (
    <div />
  );
};