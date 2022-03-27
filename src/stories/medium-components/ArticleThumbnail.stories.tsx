import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleThumbnail } from '../../components/ArticleThumbnail';
import { geraArtigos } from '../helpers/gerador-artigos';

export default {
  title: 'Medium/ArticleThumbnail',
  component: ArticleThumbnail,
  argTypes: {}
} as ComponentMeta<typeof ArticleThumbnail>;

const Template: ComponentStory<typeof ArticleThumbnail> = (args) => <ArticleThumbnail {...args} />;

export const DefaultArticleThumbnailView = Template.bind({});
DefaultArticleThumbnailView.args = geraArtigos(1)[0]
// DefaultArticleThumbnailView.args = {
//   imagem: 'https://miro.medium.com/max/1060/1*UyxLNZAlPtQGyoEVVtHhYw.jpeg',
//   titulo: 'Madeleine Albright’s Iraq Legacy',
//   resumo: 'How the former Secretary of State and UN Ambassador, who died this week, failed the test of history',
//   dataPublicacao: new Date(),
//   autor: {
//     nome: 'Micah Sifry',
//     avatar: 'https://picsum.photos/30/30'
//   }
// };