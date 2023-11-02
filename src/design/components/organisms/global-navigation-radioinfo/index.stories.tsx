import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalNavigationRadioInfo, GlobalNavigationProps } from './';
import { NavItem } from 'design/components/atoms/nav-item';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/organisms/GlobalNavigationRadioInfo',
  component: GlobalNavigationRadioInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as Meta;

const Template: Story<GlobalNavigationProps> = args => <GlobalNavigationRadioInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  brandHref: '#',
  hasNotification: true,
  children: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
      <NavItem icon="labor-menu" label="労務メニュー">
        <NavItem label="人事業務" href="#" subnav={true} />
        <NavItem label="BS業務" href="#" subnav={true} />
      </NavItem>
      <NavItem icon="settings" label="メンテナンス" href="#" />
    </>
  ),
  actions: (
    <>
      <NavItem icon="news" label="お知らせ" href="#"></NavItem>
      <NavItem icon="id-menu" label="会社を切り替える" href="#"></NavItem>
      <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
    </>
  ),
  shortcuts: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
    </>
  ),
  handleNotificationButtonClick: action('handleNotificationButtonClick'),
  handleApplyButtonClick: action('handleApplyButtonClick'),
  handleLogoutClick: action('handleLogoutClick'),
};

export const NoFloat = Template.bind({});
NoFloat.args = {
  brandHref: '#',
  hasNotification: true,
  children: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
      <NavItem icon="labor-menu" label="労務メニュー">
        <NavItem label="人事業務" href="#" subnav={true} />
        <NavItem label="BS業務" href="#" subnav={true} />
      </NavItem>
      <NavItem icon="settings" label="メンテナンス" href="#" />
    </>
  ),
  actions: (
    <>
      <NavItem icon="news" label="お知らせ" href="#"></NavItem>
      <NavItem icon="id-menu" label="会社を切り替える" href="#"></NavItem>
      <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
    </>
  ),
  shortcuts: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
    </>
  ),
  handleNotificationButtonClick: action('handleNotificationButtonClick'),
  handleApplyButtonClick: action('handleApplyButtonClick'),
  handleLogoutClick: action('handleLogoutClick'),
  showFloatButtons: false,
};
