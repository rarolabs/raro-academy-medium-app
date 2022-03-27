import React from "react";
import { ArticleThumbnail } from "../ArticleThumbnail";
import { ArticleListProps } from "./ArticleList.types";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {
        articles.map(article => (
          <ArticleThumbnail
            key={ article.titulo }
            {...article}
          />
        ))
      }
    </div>
  );
}