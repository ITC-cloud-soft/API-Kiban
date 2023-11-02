import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalBackButton, ModalBackButtonProps } from './';

export default {
  title: 'components/atoms/ModalBackButton',
  component: ModalBackButton,
} as Meta;

const Template: Story<ModalBackButtonProps> = args => <ModalBackButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '戻る',
};
