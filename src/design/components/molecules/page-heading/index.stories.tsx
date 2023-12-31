import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageHeading, PageHeadingProps } from './';
import { SearchButton } from 'design/components/atoms/search-button';
import { CreateButton } from 'design/components/atoms/create-button';

export default {
  title: 'components/molecules/PageHeading',
  component: PageHeading,
} as Meta;

const Template: Story<PageHeadingProps> = args => <PageHeading {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: '弔事の連絡',
};

export const WithSearchAction = Template.bind({});
WithSearchAction.args = {
  title: '自分の申請を見る',
  actions: <SearchButton>絞り込み検索</SearchButton>,
};

export const WithLightSearchAction = Template.bind({});
WithLightSearchAction.args = {
  title: '申請する',
  actions: <SearchButton modifiers="light">キーワード検索</SearchButton>,
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: '自動送信メール設定',
  actions: (
    <>
      <CreateButton>新規作成</CreateButton>
      <SearchButton inline={true}>絞り込み</SearchButton>
    </>
  ),
};
