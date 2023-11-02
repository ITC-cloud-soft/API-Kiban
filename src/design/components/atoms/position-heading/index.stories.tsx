import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PosHeading, PosHeadingProps } from '.';

export default {
  title: 'components/atoms/Pos-Heading',
  component: PosHeading,
} as Meta;

const Template: Story<PosHeadingProps> = args => <PosHeading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = { tag: 'h1', pos: 'center', children: '自分の申請を見る' };

export const Heading2 = Template.bind({});
Heading2.args = { tag: 'h2', pos: 'left', children: '手配状況' };

export const Heading3 = Template.bind({});
Heading3.args = { tag: 'h3', pos:'right', children: '社員情報' };

export const Heading4 = Template.bind({});
Heading4.args = { tag: 'h4', children: '後飾りのお届け先情報' };

export const Heading5 = Template.bind({});
Heading5.args = { tag: 'h5', children: '自動承認' };
