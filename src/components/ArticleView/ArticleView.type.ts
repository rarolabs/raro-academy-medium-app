export type ArticleViewProps = {
  article: string;
  autor: {
    nome: string;
    avatar: string;
  };
  dataPublicacao: Date;
  tempoDeLeitura: string;
}