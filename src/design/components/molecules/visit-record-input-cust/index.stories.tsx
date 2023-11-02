import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { VisitRecordInputCust, VisitRecordInputCustProps } from './';
import { FormField } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field/index';

export default {
  title: 'components/molecules/VisitRecordInputCust',
  component: VisitRecordInputCust,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<VisitRecordInputCustProps> = args => <VisitRecordInputCust {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: '経費',
  handleCloseClick: action('handleCloseClick'),
  children: [
    <FormField key="1" label="明細">
      <TextField type="text" name="companyName" placeholder="会社名、事務所名、店舗名など" />
    </FormField>,
    <FormField key="2" label="用件">
      <TextField type="text" name="companyName" placeholder="業務、社外教育、社内教育など" />
    </FormField>,
  ],
};
