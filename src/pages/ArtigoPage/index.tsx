/* src/pages/Artigo/index.tsx */
import faker from "@faker-js/faker";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";
import { Carregando } from "../../components/Carregando";

interface IArticle {
  autor: {
    id: number, 
    nome: string, 
    login: string,
    senha: string
    avatar: string, 
  },
  resumo: string, 
  imagem: string, 
  conteudo: string,
}

export const ArtigoPage = () => {
  const [ article, setArticle ] = useState< IArticle >({
    autor: {
      id: 0, 
      nome: "string", 
      login: "",
      senha: "",
      avatar: ""
    },
    resumo: "", 
    imagem: "",
    conteudo: "",
  });
  const [ autor, setAutor ] = useState({
    nome: "",
    avatar: ""
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
          article={article.conteudo}
          autor={{nome: article.autor.nome, avatar: article.autor.avatar }}
          dataPublicacao={dataPublicacao}
          tempoLeitura={ '10min' }
        />
      </div> :
      <Carregando />
  );
};