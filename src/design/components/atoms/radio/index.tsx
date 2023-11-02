import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  modifiers?: ModifierProp<'grey' | 'invalid'>;
  checked?: boolean;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  className: additionalClassName,
  modifiers,
  children,
  disabled = false,
  checked = false,
  ...inputProps
}) => {
  const componentClassName = mapModifiers('a-radio', modifiers, checked && 'checked', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <label id={id} className={className}>
      <input {...inputProps} checked={checked} disabled={disabled} className="a-radio__input" type="radio" />
      <div className="a-radio__body">
        <span className="a-radio__indicator" />
        <div className="a-radio__label">{children}</div>
      </div>
    </label>
  );
};
