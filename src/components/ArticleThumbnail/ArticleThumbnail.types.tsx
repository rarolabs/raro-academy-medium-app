export type ArticleThumbnailProps = {
  id: any;
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
}
