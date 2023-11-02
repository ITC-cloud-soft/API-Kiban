import { Button } from 'design/components/atoms/button';
import { Checkbox } from 'design/components/atoms/checkbox';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { TextField } from 'design/components/atoms/text-field';
import { FormFieldRow, FormField } from 'design/components/molecules/form-field';
import { Modal } from 'design/components/organisms/modal';
import React from 'react';
import { renderVanillaExample } from 'vanilla-examples/render';

export const SettingSearchModal: React.FC = () => (
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
      <FormField label="伝票番号">
        <TextField defaultValue="" name="name" rows={3} type="text" />
      </FormField>
      <FormField label="申請日">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
    <FormFieldRow columnSize="12" columnSizePC="6">
      <FormField label="会社名">
        <TextField defaultValue="" name="name" rows={3} type="text" />
      </FormField>
      <FormField label="申請日">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
    <FormFieldRow columnSize="12" columnSizePC="6">
      <FormField label="会社名">
        <TextField defaultValue="" name="name" rows={3} type="text" />
      </FormField>
      <FormField label="配送先">
        <FormFieldRow columnSize="12" columnSizePC="4">
          <Checkbox checked modifiers="button">
            通夜
          </Checkbox>
          <Checkbox modifiers="button">後飾り</Checkbox>
          <Checkbox modifiers="button">告別式</Checkbox>
        </FormFieldRow>
      </FormField>
    </FormFieldRow>
  </Modal>
);
export default renderVanillaExample(<SettingSearchModal />);
