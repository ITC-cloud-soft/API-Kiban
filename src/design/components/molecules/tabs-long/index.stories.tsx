import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TabsLong, TabsLongProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/TabsLong',
  component: TabsLong,
} as Meta;

const Template: Story<TabsLongProps> = args => <TabsLong {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [<>未完了</>, <>承認待ち</>, <>完了</>, <>下書き</>],
  badges: [0, 2],
  onChange: idx => {
    action(`tab changed: ${idx}`);
  },
  children: [<div key="1">a</div>, <div key="2">b</div>, <div key="3">c</div>, <div key="4">d</div>],
};
