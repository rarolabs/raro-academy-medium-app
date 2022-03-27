import faker from '@faker-js/faker';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from '../../components/Login';

export default {
  title: 'Medium/Login',
  component: Login,
  argTypes: {}
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login /* {...args} */ />;
export const DefaultLoginView = Template.bind({});
DefaultLoginView.args = {
  // article,
  // dataPublicacao: faker.date.past(),
  // tempoLeitura: `${faker.datatype.number({ min: 1, max: 10 })} min`,
  // autor: {
  //   nome: faker.name.firstName(),
  //   avatar: faker.image.avatar(),
  // }
};
