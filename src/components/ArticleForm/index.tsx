import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";

type ArticleFormProps = {
  article?: ArticleThumbnailProps;
  onSubmit?: (article: ArticleThumbnailProps) => void;
  deleteArticle?: (articleId: number) => void;
}

export const ArticleForm: React.FC<ArticleFormProps> = ({ article, onSubmit, deleteArticle }) => {

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    if (article) {
      console.log(article);
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || '');
    }
  }, [article]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo,
        imagem,
        conteudo,
      };
      onSubmit(articleToSubmit as ArticleThumbnailProps)
    }
  }

  const transformaImagemEmBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };


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
            value={ titulo }
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={ resumo }
            onChange={(e) => setResumo(e.target.value)}
            required
          />

          <Input
            placeholder="Imagem do artigo"
            type="file"
            name="image"
            label="Banner"
            onChange={transformaImagemEmBase64}
            required={imagem === ""}
          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={ conteudo }
            onChange={ setConteudo }
          />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3">
              <Button type="submit">Salvar</Button>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <button 
                className={`
                    w-full mt-6 tracking-widest
                    border-b-gray-600 bg-gray-500 py-3 text-white font-bold
                    hover:bg-gray-400 active:translate-y-[0.125rem] active:border-b-gray-400
                  `}
                onClick={() => navigate('/artigos')}
              >
                Voltar
              </button>
            </div>
            <div className="w-full md:w-1/3 px-3">
              <button 
                  className={`
                    w-full mt-6 tracking-widest
                    border-b-red-600 bg-red-500 py-3 text-white font-bold
                    hover:bg-red-400 active:translate-y-[0.125rem] active:border-b-red-400
                  `}
                  onClick={() => {if(article && deleteArticle) deleteArticle(article.id)}}
                >
                  Deletar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};