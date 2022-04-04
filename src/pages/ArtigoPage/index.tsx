import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";
import apiClient from "../../services/api-client";
import { IArticle } from "./ArtigoPage.type";

export const ArtigoPage = () => {
  const [ article, setArticle ] = useState<IArticle>({
    autor: {
      id: 0, 
      nome: "string", 
      avatar: ""
    },
    titulo: "",
    resumo: "", 
    imagem: "",
    conteudo: "",
    dataPublicacao: new Date,
  });
  const [dataPublicacao, setDataPublicacao] = useState(new Date());
  const [ showComponent, setshowComponent ] = useState(false)
  const [ erro, setErro ] = useState('')
  const { id } = useParams()

  useEffect(() => { buscaArtigo() }, []);

  async function buscaArtigo() {
    setErro('')
    try {
      const response = await apiClient.get<IArticle>(`/artigos/${id}`)
      setArticle(response.data)   
    } catch (error: any) {
      error.response.data.statusCode === 401 ?
        setErro('Unauthorized') :
        setErro('Erro ao buscar artigo')
    }
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