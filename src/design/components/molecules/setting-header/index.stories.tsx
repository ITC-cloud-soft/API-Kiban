import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SettingHeader, SettingHeaderProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/SettingHeader',
  component: SettingHeader,
} as Meta;

const Template: Story<SettingHeaderProps> = args => <SettingHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '設定',
  onClick: action('back clicked'),
};
