import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './';

export default {
  title: 'components/atoms/Button',
  component: Button,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'button',
  children: 'ボタン',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'button',
  children: 'ボタン',
  disabled: true,
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
  disabled: true,
};

export const Third = Template.bind({});
Third.args = {
  type: 'button',
  children: '否認',
  modifiers: 'third',
};

export const ThirdDisabled = Template.bind({});
ThirdDisabled.args = {
  type: 'button',
  children: '否認',
  modifiers: 'third',
  disabled: true,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
  size: 'large',
};

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
  size: 'large',
  disabled: true,
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
  size: 'large',
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
  size: 'large',
  disabled: true,
};

export const ThirdLarge = Template.bind({});
ThirdLarge.args = {
  type: 'button',
  children: '否認',
  modifiers: 'third',
  size: 'large',
};

export const ThirdLargeDisabled = Template.bind({});
ThirdLargeDisabled.args = {
  type: 'button',
  children: '否認',
  modifiers: 'third',
  size: 'large',
  disabled: true,
};

export const PrimaryHuge = Template.bind({});
PrimaryHuge.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
  size: 'huge',
};

export const PrimaryHugeDisabled = Template.bind({});
PrimaryHugeDisabled.args = {
  type: 'button',
  children: '承認',
  modifiers: 'primary',
  size: 'huge',
  disabled: true,
};

export const SecondaryHuge = Template.bind({});
SecondaryHuge.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
  size: 'huge',
};

export const SecondaryHugeDisabled = Template.bind({});
SecondaryHugeDisabled.args = {
  type: 'button',
  children: '差戻し',
  modifiers: 'secondary',
  size: 'huge',
  disabled: true,
};

export const ThirdHuge = Template.bind({});
ThirdHuge.args = {
  type: 'button',
  children: '保存せずに終了',
  modifiers: 'third',
  size: 'huge',
};

export const ThirdHugeDisabled = Template.bind({});
ThirdHugeDisabled.args = {
  type: 'button',
  children: '保存せずに終了',
  modifiers: 'third',
  size: 'huge',
  disabled: true,
};

export const Postal = Template.bind({});
Postal.args = {
  type: 'button',
  children: '住所検索',
  modifiers: 'postal',
};

export const PostalDisabled = Template.bind({});
PostalDisabled.args = {
  type: 'button',
  children: '住所検索',
  modifiers: 'postal',
  disabled: true,
};

export const Upload = Template.bind({});
Upload.args = {
  type: 'button',
  children: 'ファイルから選択',
  modifiers: 'upload',
};

export const UploadDisabled = Template.bind({});
UploadDisabled.args = {
  type: 'button',
  children: 'ファイルから選択',
  modifiers: 'upload',
  disabled: true,
};

export const Text = Template.bind({});
Text.args = {
  type: 'button',
  children: 'コピーして作成する',
  modifiers: 'text',
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  type: 'button',
  children: 'コピーして作成する',
  modifiers: 'text',
  disabled: true,
};
