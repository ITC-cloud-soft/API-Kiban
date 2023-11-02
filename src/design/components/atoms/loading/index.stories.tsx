import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Loading, LoadingProps } from '.';

export default {
  title: 'components/atoms/Loading',
  component: Loading,
} as Meta;

const Template: Story<LoadingProps> = args => <Loading {...args} />;

export const Normal = Template.bind({});

export const Overlay = Template.bind({});
Overlay.args = { overlay: true };
