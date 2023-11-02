import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { Text } from 'design/components/atoms/text';


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

export const FormFieldOneColumn: React.FC<FormFieldProps> = ({
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
      <div className="m-form-field__content-onecolumn">
        {children}
        {invalidMessage && <div className="m-form-field__invalid-message">{invalidMessage}</div>}
      </div>
    </div>
  );
};
