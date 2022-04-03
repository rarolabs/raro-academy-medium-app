import { faker } from '@faker-js/faker';
import { ArticleThumbnailProps } from '../../components/ArticleThumbnail/ArticleThumbnail.types';

export const geraArtigos = (quantidade: number): ArticleThumbnailProps[] => {
  return Array.from(new Array(quantidade)).map(() => ({
    imagem: faker.image.imageUrl(),
    titulo: faker.lorem.sentence(),
    resumo: faker.lorem.paragraph(),
    dataPublicacao: faker.date.past(),
    tempoDeLeitura: `${faker.datatype.number({ min: 1, max: 10 })} min`,
    autor: {
      id: faker.datatype.number({ min: 1, max: 9999999}),
      nome: faker.name.firstName(),
      avatar: faker.image.avatar(),
    },
    id: faker.datatype.number({ min: 1, max: 9999999}),
    conteudo: faker.lorem.paragraph()
  }));
}