import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ApprovalStepNo, ApprovalStepNoProps } from './';

export default {
  title: 'components/atoms/ApprovalStepNo',
  component: ApprovalStepNo,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ApprovalStepNoProps> = args => <ApprovalStepNo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  step: 1,
  name: '山田太郎',
};

export const WithAuto = Template.bind({});
WithAuto.args = {
  step: 1,
  name: '承認者：山田太郎',
  modifiers: 'auto',
};

export const WithAutoAndRequester = Template.bind({});
WithAutoAndRequester.args = {
  step: 1,
  name: '承認者：山田太郎',
  modifiers: 'auto',
  requester: true,
};

export const WithDoneStatus = Template.bind({});
WithDoneStatus.args = {
  step: 1,
  name: '承認者：山田太郎',
  modifiers: 'auto',
  requester: true,
  isDone: true,
};
