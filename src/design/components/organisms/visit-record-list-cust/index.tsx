import React from 'react';
import { AddItemButton } from 'design/components/atoms/add-item-button';
import { VisitRecordInputCust } from 'design/components/molecules/visit-record-input-cust';
import { FormField, FormFieldRow, FormFieldRowNoCalc } from 'design/components/molecules/form-field';
import { SaveItemButton } from 'design/components/atoms/save-button';

export interface VisitRecordListCustProps {
  children?: React.ReactNode;
  templateInput?: React.ReactNode;
  id?: string;
  onAddRequested?: () => void;
  onRemoveRequested?: (index: number) => void;
  className?: string;
  titles?: React.ReactNode;
  addText: string;
  saveBtn?: boolean;
  saveText?: string;
}

export const VisitRecordListCust: React.FC<VisitRecordListCustProps> = ({
  children,
  templateInput,
  id,
  onAddRequested,
  onRemoveRequested,
  className: additionalClassName = '',
  titles = '経費',
  addText = '追加',
  saveBtn = false,
  saveText = '一時保存',
}) => {
  const className = `o-visit-record-list-cust ${additionalClassName}`.trim();
  if (saveBtn) {
    return (
      <div className={className} id={id}>
        <template className="o-visit-record-list-cust__template">
          <VisitRecordInputCust title={titles}>{templateInput}</VisitRecordInputCust>
        </template>
        <div className="o-visit-record-list-cust__items">
          {React.Children.map(children, (input, index) => (
            <VisitRecordInputCust
              key={index}
              title={titles}
              handleCloseClick={() => {
                onRemoveRequested && onRemoveRequested(index);
              }}
            >
              {input}
            </VisitRecordInputCust>
          ))}
        </div>
        <div className="o-visit-record-list-cust__add-button">
          <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
            <FormField label="" className="p-setting-input-form__form-field">
              <AddItemButton handleAddItemClick={onAddRequested}>{addText}</AddItemButton>
            </FormField>
            <FormField label="" className="p-setting-input-form__form-field">
              <SaveItemButton>{saveText}</SaveItemButton>
            </FormField>
          </FormFieldRowNoCalc>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className} id={id}>
        <template className="o-visit-record-list-cust__template">
          <VisitRecordInputCust title={titles}>{templateInput}</VisitRecordInputCust>
        </template>
        <div className="o-visit-record-list-cust__items">
          {React.Children.map(children, (input, index) => (
            <VisitRecordInputCust
              key={index}
              title={titles}
              handleCloseClick={() => {
                onRemoveRequested && onRemoveRequested(index);
              }}
            >
              {input}
            </VisitRecordInputCust>
          ))}
        </div>
        <div className="o-visit-record-list-cust__add-button">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <FormField label="" className="p-setting-input-form__form-field">
              <AddItemButton handleAddItemClick={onAddRequested}>{addText}</AddItemButton>
            </FormField>
          </FormFieldRow>
        </div>
      </div>
    );
  }
};


export const VisitRecordListCustNoAddButton: React.FC<VisitRecordListCustProps> = ({
  children,
  id,

  onRemoveRequested,
  className: additionalClassName = '',
  titles = '経費',


}) => {
  const className = `o-visit-record-list-cust ${additionalClassName}`.trim();

  return (
    <div className={className} id={id}>

      <div className="o-visit-record-list-cust__items">
        {React.Children.map(children, (input, index) => (
          <VisitRecordInputCust
            key={index}
            title={titles}
            handleCloseClick={() => {
              onRemoveRequested && onRemoveRequested(index);
            }}
          >
            {input}
          </VisitRecordInputCust>
        ))}
      </div>

    </div>
  );

};
