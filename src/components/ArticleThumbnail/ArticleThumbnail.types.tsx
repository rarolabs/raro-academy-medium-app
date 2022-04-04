import { NumericLiteral } from "typescript";

export type ArticleThumbnailProps = {
  imagem: string
  titulo: string
  resumo: string
  dataPublicacao: Date
  tempoDeLeitura?: string
  autor: {
    id: number
    nome: string
    avatar: string
  };
  editavel?: boolean
  id: number
  conteudo: string
}
