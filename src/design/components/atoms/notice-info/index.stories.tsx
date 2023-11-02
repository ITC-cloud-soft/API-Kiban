import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NoticeInfo, NoticeInfoProps } from './';

export default {
  title: 'components/atoms/NoticeInfo',
  component: NoticeInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NoticeInfoProps> = args => <NoticeInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'エスカレーターでの危険行為におけるお詫びと対応について',
  date: '2021/02/11',
  href: '#',
};

export const OverflowText = Template.bind({});
OverflowText.args = {
  children:
    'エスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応について',
  date: '2021/02/11',
  href: '#',
};

export const UnreadMessage = Template.bind({});
UnreadMessage.args = {
  children: '福島県沖で発生した地震による店舗の営業状況について',
  date: '2021/02/20',
  modifiers: 'unread',
  href: '#',
};
