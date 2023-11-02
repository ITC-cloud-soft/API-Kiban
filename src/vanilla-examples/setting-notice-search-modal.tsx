import { Button } from 'design/components/atoms/button';
import { Checkbox } from 'design/components/atoms/checkbox';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { TextField } from 'design/components/atoms/text-field';
import { FormFieldRow, FormField } from 'design/components/molecules/form-field';
import { Modal } from 'design/components/organisms/modal';
import { Radio } from 'design/components/atoms/radio';

import React from 'react';
import { renderVanillaExample } from 'vanilla-examples/render';

export const SettingNoticeSearchModal: React.FC = () => (
  <Modal
    id="setting-search-modal"
    modalSize="medium"
    title="絞り込み検索"
    footer={
      <>
        <Button modifiers="third" size="huge" type="button">
          クリア
        </Button>
        <Button modifiers="primary" size="huge" type="button">
          検索
        </Button>
      </>
    }
  >
    <FormFieldRow columnSize="12" columnSizePC="6">
      <FormField label="タイトル">
        <TextField defaultValue="" name="name" rows={3} type="text" />
      </FormField>
      <FormField label="公開開始">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
    <FormFieldRow columnSize="12" columnSizePC="6">
      <FormField label="更新者">
        <TextField defaultValue="" name="name" rows={3} type="text" />
      </FormField>
      <FormField label="公開終了">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
    <FormFieldRow columnSize="12" columnSizePC="6">
      <FormField label="種別">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <Checkbox checked modifiers="button"name="kind" value="1">お知らせ</Checkbox>
            <Checkbox modifiers="button"name="kind" value="2">障害</Checkbox>
          </FormFieldRow>
        </FormField>
      <FormField label="更新日">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
    <FormFieldRow columnSize="12" columnSizePC="12">
      <FormField label="ステータス">
        <FormFieldRow columnSize="12" columnSizePC="3">
          <Checkbox checked modifiers="button" name="status" value="1">公開</Checkbox>
          <Checkbox modifiers="button" name="status" value="2">公開予約</Checkbox>
          <Checkbox modifiers="button" name="status" value="3">非公開</Checkbox>
          <Checkbox modifiers="button" name="status" value="4">公開終了</Checkbox>
        </FormFieldRow>
      </FormField>
    </FormFieldRow>
  </Modal>
);
export default renderVanillaExample(<SettingNoticeSearchModal />);
