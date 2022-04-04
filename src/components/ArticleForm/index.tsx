import "./styles.css"

import { useEffect, useState } from "react";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IArticleFormProps {
  article: ArticleThumbnailProps, 
  onClick: () => void,
  onSubmitProp?: (article: ArticleThumbnailProps) => void,
}

export const ArticleForm: React.FC<IArticleFormProps> = ({
  article, 
  onClick,
  onSubmitProp,
}) => {

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");

  const navigate = useNavigate()
  
  useEffect(() => {
    if (article) {
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || '');
    }
  }, [article]);

  const transformaImagemEmBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (onSubmitProp) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo, 
        imagem, 
        conteudo,
      }
      onSubmitProp(articleToSubmit as ArticleThumbnailProps)
    }

  }

  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <h1 className="text-xl font-semibold">
          Hello there 👋,&nbsp;
          <span className="font-normal">please fill in your information to continue</span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            value={titulo}
            onChange = { (e) => setTitulo(e.target.value) }
            required
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={resumo}
            onChange = { (e) => setResumo(e.target.value) }
            required
          />
          <Input
            placeholder="Imagem do artigo"
            type="file"
            name="image"
            label="Banner"
            onChange = { transformaImagemEmBase64 }
            required
          />
          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={conteudo}
            onChange = { setConteudo }
          />

          <div className="divButtons">
            <Button 
              type="submit">Salvar</Button>

            {article.id !== 0 && <Button 
              className={`
              w-full mt-6 tracking-widest
              border-b-red-600 bg-red-500 py-3 text-white font-bold
              hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
              `}
              onClick={onClick}
              type="button">Delete</Button>}

              <Button 
                onClick={() => navigate("/artigos")}
                className={`
                w-full mt-6 tracking-widest
                border-b-gray-600 bg-gray-500 py-3 text-white font-bold
                hover:bg-gray-400 active:translate-y-[0.125rem] active:border-b-gray-400
                `}
                type="button">Voltar</Button>
          </div>

        </form>
      </div>
    </div>
  );
};

