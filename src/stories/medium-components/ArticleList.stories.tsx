import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleList } from '../../components/ArticleList';
import { geraArtigos } from '../../helpers/gerador-artigos';

export default {
  title: 'Medium/ArticleList',
  component: ArticleList,
  argTypes: {}
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;
export const DefaultArticleListView = Template.bind({});
DefaultArticleListView.args = {
  articles: geraArtigos(10)
};
