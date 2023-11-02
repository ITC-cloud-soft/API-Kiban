import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { Text } from 'design/components/atoms/text';

type ColumnSize = '1' | '2' | '2.4' | '3' | '4' | '6' | '12';

export interface FormFieldRowProps {
  children?: React.ReactNode;
  columnSize?: ColumnSize;
  columnSizePC?: ColumnSize;
}

export const FormFieldRow: React.FC<FormFieldRowProps> = ({ children, columnSize, columnSizePC }) => (
  <div
    className={mapModifiers(
      'm-form-field__row',
      columnSize && `column-size-${columnSize}`,
      columnSizePC && `column-size-pc-${columnSizePC}`
    )}
    style={{ alignItems: 'center' }}
  >
    {children}
  </div>
);

export const FormFieldRow1: React.FC<FormFieldRowProps> = ({ children, columnSize, columnSizePC }) => (
  <div className={mapModifiers('m-form-field__row', columnSize && `column-size-5`, columnSizePC && `column-size-pc-5`)}>
    {children}
  </div>
);

export interface FormFieldRowCkbProps {
  children?: React.ReactNode;
  columnSize?: ColumnSize;
  columnSizePC?: ColumnSize;
}

export const FormFieldRowCkb: React.FC<FormFieldRowCkbProps> = ({ children, columnSize, columnSizePC }) => (
  <div
    className={mapModifiers(
      'm-form-field__row-ckb',
      columnSize && `column-size-${columnSize}`,
      columnSizePC && `column-size-pc-${columnSizePC}`
    )}
  >
    {children}
  </div>
);

export interface NewFormFieldRowProps {
  children?: React.ReactNode;
  columnSize?: ColumnSize;
  columnSizePC?: ColumnSize;
  classNameRow?: string;
}

export const NewFormFieldRow: React.FC<NewFormFieldRowProps> = ({
  children,
  columnSize,
  columnSizePC,
  classNameRow = 'm-form-field-new__line',
}) => {
  const componentClassName = mapModifiers(
    'm-form-field-new__row',
    columnSize && `column-size-${columnSize}`,
    columnSizePC && `column-size-pc-${columnSizePC}`
  );

  const classNameR = `${componentClassName} ${classNameRow}`.trim();
  return <div className={classNameR}>{children}</div>;
};

export interface FormFieldProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  labelAddons?: React.ReactNode;
  labelAddons2?: React.ReactNode;
  instruction?: React.ReactNode;
  className?: string;
  invalidMessage?: React.ReactNode;
  require?: boolean;
  normalLabel?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  labelAddons,
  labelAddons2,
  instruction,
  className: additionalClassName = '',
  invalidMessage,
  require,
  normalLabel = false,
}) => {
  const componentClassName = mapModifiers(
    'm-form-field',
    invalidMessage ? 'invalid' : undefined,
    require && 'required'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className}>
      <label className={mapModifiers('m-form-field__label', normalLabel && 'normal')}>
        {label}
        {labelAddons && <span className="m-form-field__label-addons">{labelAddons}</span>}
        {labelAddons2 && <span className="m-form-field__label-addons">{labelAddons2}</span>}
      </label>
      {instruction && (
        <Text modifiers="small" className="m-form-field__instruction">
          {instruction}
        </Text>
      )}
      <div className="m-form-field__content">
        {children}
        {invalidMessage && <div className="m-form-field__invalid-message">{invalidMessage}</div>}
      </div>
    </div>
  );
};

export interface FormFieldBorderProps {
  // children: React.ReactNode;
  label?: React.ReactNode;
  labelAddons?: React.ReactNode;
  labelAddons2?: React.ReactNode;
  instruction?: React.ReactNode;
  className?: string;
  invalidMessage?: React.ReactNode;
  require?: boolean;
  normalLabel?: boolean;
}

export const FormFieldBorder: React.FC<FormFieldBorderProps> = ({
  children,
  label,
  labelAddons,
  labelAddons2,
  className: additionalClassName = '',
  invalidMessage,
  require,
  normalLabel = false,
}) => {
  const componentClassName = mapModifiers(
    'm-form-field-new',
    invalidMessage ? 'invalid' : undefined,
    require && 'required'
  );
  const className = ` m-form-field-new__cell ${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className}>
      <label className={mapModifiers('m-form-field-new__label', normalLabel && 'normal')}>
        {label}
        {labelAddons && <span className="m-form-field-new__label-addons">{labelAddons}</span>}
        {labelAddons2 && <span className="m-form-field-new__label-addons">{labelAddons2}</span>}
      </label>
    </div>
  );
};

export const FormFieldRowNoCalc: React.FC<FormFieldRowProps> = ({ children, columnSize, columnSizePC }) => (
  <div
    className={mapModifiers(
      'm-form-field__row-nocalc',
      columnSize && `column-size-${columnSize}`,
      columnSizePC && `column-size-pc-${columnSizePC}`
    )}
  >
    {children}
  </div>
);

export interface FormFieldFontSizeProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  labelAddons?: React.ReactNode;
  labelAddons2?: React.ReactNode;
  instruction?: React.ReactNode;
  className?: string;
  invalidMessage?: React.ReactNode;
  require?: boolean;
  normalLabel?: boolean;
}

export const FormFieldFontSize: React.FC<FormFieldFontSizeProps> = ({
  children,
  label,
  labelAddons,
  labelAddons2,
  instruction,
  className: additionalClassName = '',
  invalidMessage,
  require,
  normalLabel = false,
}) => {
  const componentClassName = mapModifiers(
    'm-form-field',
    invalidMessage ? 'invalid' : undefined,
    require && 'required'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const lableClassName = mapModifiers('m-form-fieldcs__label', normalLabel && 'normal');

  return (
    <div className={className}>
      <label className={`${additionalClassName} ${lableClassName}`.trim()}>
        {label}
        {labelAddons && <span className="m-form-field__label-addons">{labelAddons}</span>}
        {labelAddons2 && <span className="m-form-field__label-addons">{labelAddons2}</span>}
      </label>
      {instruction && (
        <Text modifiers="small" className="m-form-field__instruction">
          {instruction}
        </Text>
      )}
      <div className="m-form-field__content">
        {children}
        {invalidMessage && <div className="m-form-field__invalid-message">{invalidMessage}</div>}
      </div>
    </div>
  );
};
