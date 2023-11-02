import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UploadFieldSingle, UploadFieldSingleProps } from './';

export default {
  title: 'components/atoms/UploadFieldSingle',
  component: UploadFieldSingle,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<UploadFieldSingleProps> = args => <UploadFieldSingle {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      ここにファイルをドラッグ
      <br />
      または
    </>
  ),
  description: '形式：jpg / png | サイズ：30MBまで',
};

export const WithError = Template.bind({});
WithError.args = {
  children: (
    <>
      ここにファイルをドラッグ
      <br />
      または
    </>
  ),
  description: '形式：jpg / png | サイズ：30MBまで',
  modifiers: 'with-error',
};

export const CSVList = Template.bind({});
CSVList.args = {
  accept: 'text/csv',
  children: (
    <>
      CSVファイルをドラッグ＆ドロップするか
      <br />
      パソコンから画像を貼り付けしてください。
    </>
  ),
};
