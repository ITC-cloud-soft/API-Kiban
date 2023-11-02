import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UnitTextField, UnitTextFieldProps } from './';

export default {
  title: 'components/atoms/UnitTextField',
  component: UnitTextField,
} as Meta;

const Template: Story<UnitTextFieldProps> = args => <UnitTextField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'text',
  name: 'text',
  defaultValue: '東京　太郎',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  name: 'text',
  defaultValue: '東京　太郎',
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  modifiers: 'invalid',
  type: 'text',
  name: 'text',
  defaultValue: '東京　太郎',
};
