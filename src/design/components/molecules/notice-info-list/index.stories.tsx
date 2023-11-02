import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NoticeInfoList } from './';
import { NoticeInfo } from 'design/components/atoms/notice-info';

export default {
  title: 'components/molecules/NoticeInfoList',
  component: NoticeInfoList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story = args => <NoticeInfoList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <NoticeInfo key={1} date="2021/02/20" modifiers="unread">
      福島県沖で発生した地震による店舗の営業状況について
    </NoticeInfo>,
    <NoticeInfo key={2} date="2021/02/11">
      エスカレーターでの危険行為におけるお詫びと対応について
    </NoticeInfo>,
    <NoticeInfo key={3} date="2021/01/25">
      お問い合わせフォームへの社外の第三者によるアクセスについて
    </NoticeInfo>,
    <NoticeInfo key={4} date="2020/12/28">
      トップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品のトップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品の
    </NoticeInfo>,
    <NoticeInfo key={5} date="2020/12/22">
      山陽マルナカ　公正取引委員会に対する訴訟の件
    </NoticeInfo>,
  ],
};
