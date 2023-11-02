import React, { InputHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';

type InheritedProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> &
  Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className'>;

export interface TextFieldProps extends InheritedProps {
  tag?: ModifierProp<'textarea'>;
  disabled?: boolean;
  modifiers?: ModifierProp<'invalid'>;
  rows?: number;
  id?: string;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  tag,
  rows = 3,
  disabled = false,
  modifiers,
  id,
  className: additionalClassName = '',
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName: any = tag || 'input';
  const componentClassName = mapModifiers(
    'a-text-field',
    modifiers,
    disabled && 'disabled',
    props.type ? `type-${props.type}` : ''
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div id={id} className={className}>
      {props.type === 'search' && (
        <span className="a-text-field__icon">
          <Icon name="search" />
        </span>
      )}
      <TagName
        {...props}
        disabled={disabled}
        className="a-text-field__input"
        rows={TagName === 'textarea' ? rows : undefined}
      />
    </div>
  );
};
