import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'button' | 'invalid' | 'invalid-button'>;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  modifiers,
  className: additionalClassName = '',
  ...inputProps
}) => {
  const componentClassName = mapModifiers('a-checkbox', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <label className={className}>
      <input type="checkbox" className="a-checkbox__input" {...inputProps} />
      <div className="a-checkbox__body">
        <span className="a-checkbox__indicator">
          {modifiers && !inputProps.disabled ? <Icon name="check-purple" /> : <Icon name="check-white" />}
        </span>
        <div className="a-checkbox__label">{children}</div>
      </div>
    </label>
  );
};
