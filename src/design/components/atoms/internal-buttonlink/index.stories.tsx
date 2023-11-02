import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InternalLink, InternalLinkProps } from './';

export default {
  title: 'components/atoms/InternalLink',
  component: InternalLink,
} as Meta;

const Template: Story<InternalLinkProps> = args => <InternalLink {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '「駅すぱあと」で交通費を調べる',
  icon: 'link',
  href: '#',
};
