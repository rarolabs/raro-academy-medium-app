export type ArticleThumbnailProps = {
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
  };
  editavel?: boolean;
  id:number;
}
