import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { SemArtigos } from "../../components/SemArtigos";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const ArtigosPage = () => {
    const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);
    const [ control, setControl ] = useState(false)

    useEffect(() => { buscaArtigos() }, []);

    async function buscaArtigos() {
        const token = localStorage.getItem("access_token")
        const response = await axios.get("http://3.221.159.196:3307/artigos", {
            headers: {
                "Authorization": `bearer ${token}`
            }
        })

        setArticles( response.data )
        setControl(true)
    }
    console.log(control)

    if (control) {
        console.log("ole")
        return (<ArticleList articles={articles}/> ) 
    }
    return (
        <div />
    );
};