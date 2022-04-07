import apiClient from "../../services/api-client"
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Carregando } from "../../components/Carregando";
import { useDeleted } from "../../data/DeletedContext";

export const ArtigosPage = () => {
    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
    const [ showComponent, setShowComponent ] = useState(false)
    const [ erro, setErro ] = useState('')

    const {deleted}= useDeleted()
    
    async function buscaArtigos() {
        setErro('')
        setShowComponent(false)

        try { 
            const response = await apiClient.get<ArticleThumbnailProps[]>("/artigos")
            setArticles( response.data )
        } catch (error:any) { 
            error.response.data.statusCode === 401 ? 
                setErro("Unauthorized") :
                setErro("Erro ao buscar artigos");
        }
        setShowComponent(true)
    }

    useEffect(() => { buscaArtigos() }, []);
    useEffect(() => { buscaArtigos() }, [deleted]);

    return ( showComponent ? 
        <ArticleList articles={articles}/> :
        <Carregando /> 
    );
};