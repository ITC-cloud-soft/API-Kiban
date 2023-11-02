import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag, TagProps } from './';

export default {
  title: 'components/atoms/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '必須',
};

export const Filled = Template.bind({});
Filled.args = {
  modifiers: 'filled',
  children: '北海道',
};
