import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustItemButton, CustItemButtonProps } from './';
import { action } from '@storybook/addon-actions';
import { Icon } from 'design/components/atoms/icon';

export default {
  title: 'components/atoms/CustItemButton',
  component: CustItemButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<CustItemButtonProps> = args => <CustItemButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '銀行名・銀行コード検索',
  icon: <Icon name="search_p" />,
  handleCustItemClick: action('click'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '銀行名・銀行コード検索',
  icon: <Icon name="search_p" />,
  handleCustItemClick: action('click'),
  disabled: true,
};
