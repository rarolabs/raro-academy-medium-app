import faker from '@faker-js/faker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleView } from '../../components/ArticleView';
const article = require('../assets/markdown/article.md');

export default {
  title: 'Medium/ArticleView',
  component: ArticleView,
  argTypes: {}
} as ComponentMeta<typeof ArticleView>;

const Template: ComponentStory<typeof ArticleView> = (args) => <ArticleView {...args} />;
export const DefaultArticleViewView = Template.bind({});
DefaultArticleViewView.args = {
  article,
  dataPublicacao: faker.date.past(),
  tempoDeLeitura: `${faker.datatype.number({ min: 1, max: 10 })} min`,
  autor: {
    nome: faker.name.firstName(),
    avatar: faker.image.avatar(),
  }
};
