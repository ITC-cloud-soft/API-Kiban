import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconHeader, IconHeaderProps } from './';
import logo from 'design/images/common/logo.svg';

export default {
  title: 'components/molecules/IconHeader',
  component: IconHeader,
} as Meta;

const Template: Story<IconHeaderProps> = args => <IconHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children :  <div className="o-global-navigation__logo">
  <img src={logo} alt="Densin" />
</div>
};
