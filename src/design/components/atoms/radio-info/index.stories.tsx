import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadioInfo, RadioProps } from './';

export default {
  title: 'components/atoms/RadioInfo',
  component: RadioInfo,
} as Meta;

const Template: Story<RadioProps> = args => <RadioInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'イオンアイビス株式会社',
  children2:'0987654321',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'イオンアイビス株式会社',
  children2:'1234567890',
  disabled: true,
};

export const WithChecked = Template.bind({});
WithChecked.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
};

export const WithCheckedDisabled = Template.bind({});
WithCheckedDisabled.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
  disabled: true,
};

export const Grey = Template.bind({});
Grey.args = {
  modifiers: 'grey',
  children: '辞退する',
};

export const Invalid = Template.bind({});
Invalid.args = {
  modifiers: 'invalid',
  children: '辞退する',
};

export const MenuNormal = Template.bind({});
MenuNormal.args = {
  children: 'イオンアイビス株式会社',
  children2:'0987654321',
  isMenu:true,
};

export const MenuDisabled = Template.bind({});
MenuDisabled.args = {
  children: 'イオンアイビス株式会社',
  children2:'1234567890',
  disabled: true,
  isMenu:true,
};

export const MenuWithChecked = Template.bind({});
MenuWithChecked.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
  isMenu:true,
};

export const MenuWithCheckedDisabled = Template.bind({});
MenuWithCheckedDisabled.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
  disabled: true,
  isMenu:true,
};

export const MenuGrey = Template.bind({});
MenuGrey.args = {
  modifiers: 'grey',
  children: '辞退する',
  isMenu:true,
};

export const MenuInvalid = Template.bind({});
MenuInvalid.args = {
  modifiers: 'invalid',
  children: '辞退する',
  isMenu:true,
};

