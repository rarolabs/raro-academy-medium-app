import React from "react";
import { ArticleThumbnail } from "../ArticleThumbnail";
import { SemArtigos } from "../SemArtigos";
import { ArticleListProps } from "./ArticleList.types";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles
}) => {
  return (
    articles.length !== 0 ? 
      <div className="flex flex-col items-center justify-center m-10"> 
        {
          articles.map(article => (
            <ArticleThumbnail
              key={ article.titulo }
              {...article}
            />
          ))
        }
      </div> :
      <SemArtigos />
  );
}