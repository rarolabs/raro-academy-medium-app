export type ArticleThumbnailProps = {
  id: number
  image: string;
  title: string;
  summary: string;
  content?: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
    id: number
  };
  editavel?: boolean;
}
