export type Artigo = {
  conteudo: string;
  autor: Usuario;
  dataPublicacao: string;
  tempoDeLeitura: string;
}
export type Usuario = {
  id: number;
  nome: string;
  login: string;
  avatar: string;
}

export type Auth = {
  access_token: string;
  id: number;
}

export type ArtigoEditado = {
  id: number;
  imagem: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  dataPublicacao: Date;
  dataAtualizacao: Date;
  tempoLeitura?: string;
  autor: {
    nome: string;
    id: number;
  };
}
