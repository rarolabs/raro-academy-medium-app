export type ArticleThumbnailProps = {
  id: number;
  imagem: string;
  titulo: string;
  resumo: string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    avatar: string;
    id:number;
  };
  editavel?: boolean;
  conteudo?: string;
}
