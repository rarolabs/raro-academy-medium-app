export type ArticleThumbnailProps = {
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
    id: number
  };
  editavel?: boolean;
  id: number,
  conteudo: string
}
