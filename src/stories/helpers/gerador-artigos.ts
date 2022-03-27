import { faker } from '@faker-js/faker';
import { ArticleThumbnailProps } from '../../components/ArticleThumbnail/ArticleThumbnail.types';

export const geraArtigos = (quantidade: number): ArticleThumbnailProps[] => {
  return Array.from(new Array(quantidade)).map(() => ({
    imagem: faker.image.imageUrl(),
    titulo: faker.lorem.text(),
    resumo: faker.lorem.paragraph(),
    dataPublicacao: faker.date.past(),
    tempoLeitura: `${faker.datatype.number()} min`,
    autor: {
      nome: faker.name.firstName(),
      avatar: faker.image.avatar(),
    }
  }));
}