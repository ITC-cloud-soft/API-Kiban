import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UploadList, UploadListItem, UploadListItemConfirm, UploadListProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/UploadList',
  component: UploadList,
} as Meta;

const Template: Story<UploadListProps> = args => <UploadList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="32.4KB" handleOnClick={action('remove')}>
      meibo.csv
    </UploadListItem>,
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="30KB" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={1} fileSize="40KB" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItem>,
  ],
};
export const MultipleConfirm = Template.bind({});
MultipleConfirm.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItemConfirm key={0} fileSize="30KB" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItemConfirm>,
    // eslint-disable-next-line no-console
    <UploadListItemConfirm key={1} fileSize="40KB" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItemConfirm>,
  ],
};
