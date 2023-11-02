import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SaveItemButton, SaveItemButtonProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/atoms/SaveItemButton',
  component: SaveItemButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<SaveItemButtonProps> = args => <SaveItemButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '訪問先を追加する',
  handleSaveItemClick: action('click'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '訪問先を追加する',
  handleSaveItemClick: action('click'),
  disabled: true,
};
