import apiClient from "../../services/api-client"
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Carregando } from "../../components/Carregando";

export const ArtigosPage = () => {
    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
    const [ showComponent, setShowComponent ] = useState(false)

    useEffect(() => { buscaArtigos() }, []);

    async function buscaArtigos() {
        const token = localStorage.getItem("access_token")
        const response = await apiClient.get("/artigos")

        setArticles( response.data )
        setShowComponent(true)
    }
    console.log(showComponent)

    return ( showComponent ? 
        <ArticleList articles={articles}/> :
        <Carregando /> 
    );
};