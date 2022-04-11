import { useEffect, useState } from "react";
import faker from "@faker-js/faker";
import { ArticleView } from "../../components/ArticleView";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Artigo } from "../../types/API";

export const ArtigoPage = () => {
  const param = useParams();
  const idArtigo = param["id"]

  const [article, setArticle] = useState<string>('');
  const [autor, setAutor] = useState({
    nome: faker.name.firstName(),
    avatar: faker.image.avatar(),
  });
  const [tempoLeitura, setTempoLeitura] = useState('')


  const [dataPublicacao, setdataPublicacao] = useState(new Date());

  useEffect(() => {
    async function carregarArtigo() {
      const url = `http://3.221.159.196:3307/artigos/${idArtigo}`;
      const response = await axios.get<Artigo>(url);
      setArticle(response.data.conteudo);
      setAutor(response.data.autor);
      setdataPublicacao(new Date(response.data.dataPublicacao));
      setTempoLeitura(response.data.tempoDeLeitura)

    }

    carregarArtigo();
  }, []);

  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={tempoLeitura}
      />
    </div>
  );
};