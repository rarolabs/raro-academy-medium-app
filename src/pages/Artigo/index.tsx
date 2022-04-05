import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState({
    nome: "",
    avatar: "",
  });
  const [dataPublicacao] = useState(new Date());
  const {id} = useParams()

  useEffect(() => {    
    loadArticle();
  }, []);

  async function loadArticle() {
    const response = await axios.get(`http://3.221.159.196:3307/artigos/${id}`)
    setArticle(response.data.conteudo)    
    setAutor({nome: response.data.autor.nome, avatar: response.data.autor.avatar})
  }

  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={ '10min' }
      />
    </div>
  );
};