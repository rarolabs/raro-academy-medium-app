import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm"
import { ArtigoEditado } from "../../types/API";

export const EditarArtigoPage = () => {
  const param = useParams();
  const id = Number(param["id"]);
  const [artigo, setArtigo] = useState<ArtigoEditado>()

  async function carregarArtigo() {
    const url = `http://3.221.159.196:3307/artigos/${id}`;
    const response = await axios.get<ArtigoEditado>(url);
    setArtigo(response.data);
  }
  useEffect(() => {
    carregarArtigo();
  }, [])
  return (
    <ArticleForm id={id} artigo={artigo} />
  )
}