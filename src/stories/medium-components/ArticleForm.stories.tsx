import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleForm } from '../../components/ArticleForm';

export default {
  title: 'Medium/ArticleForm',
  component: ArticleForm,
  argTypes: {}
} as ComponentMeta<typeof ArticleForm>;

const Template: ComponentStory<typeof ArticleForm> = (args) => <ArticleForm /* {...args} */ />;
export const DefaultArticleFormView = Template.bind({});
DefaultArticleFormView.args = {
  // articles: geraArtigos(10)
};
