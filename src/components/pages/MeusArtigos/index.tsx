import { useEffect } from "react";
import { useState } from "react";
import { geraArtigos } from "../../../stories/helpers/gerador-artigos";
import { ArticleList } from "../../ArticleList";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {

    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

    useEffect(() => {
        setArticles(
            geraArtigos(5).map((artigo) => ({ ...artigo, editavel: true }))
        );
    }, []);

    console.log('entrou aqui')


    return (
        <>
            <div className="my-30">
                <ArticleList articles={articles} />
            </div>
        </>
    );
}