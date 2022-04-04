import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";
import { IArticle } from "./ArtigoPage.type";

export const ArtigoPage = () => {
  const [ article, setArticle ] = useState< IArticle >({
    autor: {
      id: 0, 
      nome: "string", 
      avatar: ""
    },
    titulo: "",
    resumo: "", 
    imagem: "",
    conteudo: "",
    dataPublicacao: new Date(),
  });
  const [dataPublicacao, setDataPublicacao] = useState(new Date());
  const [ showComponent, setshowComponent ] = useState(false)
  const { id } = useParams()

  useEffect(() => { buscaArtigo() }, []);

  async function buscaArtigo() {
    const token = localStorage.getItem("access_token")
    const response = await axios.get(
      `http://3.221.159.196:3307/artigos/${id}`, {
        headers: {
          "Authorization": `bearer ${token}`
        }
      }
    )
    setArticle(response.data)   
    setshowComponent(true)
  }

  return (
    showComponent ?
      <div className="m-10">
        <ArticleView
          article={article}
          dataPublicacao={dataPublicacao}
          tempoLeitura={ '10min' }
        />
      </div> :
      <div />
  );
};