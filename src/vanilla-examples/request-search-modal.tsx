import { Button } from 'design/components/atoms/button';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { TextField } from 'design/components/atoms/text-field';
import { FormFieldRow, FormField } from 'design/components/molecules/form-field';
import { Modal } from 'design/components/organisms/modal';
import React from 'react';
import { renderVanillaExample } from 'vanilla-examples/render';

export const RequestSearchModal: React.FC = () => (
  <Modal
    id="request-search-modal"
    title="絞り込み検索"
    footer={
      <>
        <Button modifiers="primary" size="large" type="button">
          検索
        </Button>
      </>
    }
  >
    <FormFieldRow columnSize="12" columnSizePC="12">
      <FormField label="キーワード">
        <TextField defaultValue="" name="name" type="search" placeholder="北海道 吉田" />
      </FormField>
      <FormField label="申請日">
        <DateRangeField />
      </FormField>
    </FormFieldRow>
  </Modal>
);
export default renderVanillaExample(<RequestSearchModal />);
