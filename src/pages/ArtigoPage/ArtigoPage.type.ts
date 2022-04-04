export interface IArticle {
    autor: {
        id: number, 
        nome: string, 
        avatar: string, 
    },
    titulo: string,
    resumo: string, 
    imagem: string, 
    conteudo: string,
    dataPublicacao: Date, 
}
  