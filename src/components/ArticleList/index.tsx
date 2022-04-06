import React from "react";
import { ArticleThumbnail } from "../ArticleThumbnail";
import { ArticleListProps } from "./ArticleList.types";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles
}) => {
  return (
    <div className="flex flex-col items-center justify-center mx-10 mt-10">
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