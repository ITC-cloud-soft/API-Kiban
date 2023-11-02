import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Alert, AlertProps } from './';

export default {
  title: 'components/atoms/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  requestCount: 4,
  handleClearClick: action('handleClearClick'),
};
Normal.parameters = {
  backgrounds: {
    default: 'gray',
  },
  paddings: {
    default: 'small',
  },
};
