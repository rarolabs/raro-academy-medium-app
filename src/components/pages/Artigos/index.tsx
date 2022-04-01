import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import { geraArtigos } from "../../../stories/helpers/gerador-artigos";
import { ArticleList } from "../../ArticleList";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../ArticleView";

export const ArtigosPage = () => {
    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

    useEffect(() => {
        setArticles(geraArtigos(5));

    }, [])

    return (
        <div className="my-30">
            <ArticleList articles={articles} />
        </div>
    );
}