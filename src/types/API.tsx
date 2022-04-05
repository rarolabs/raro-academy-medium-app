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