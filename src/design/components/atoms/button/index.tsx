import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, useRef } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { useLinkSpy } from 'design/components/utils/link-spy';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>;

export interface ButtonProps extends InheritedProps {
  modifiers?: ModifierProp<'primary' | 'secondary' | 'third' | 'postal' | 'upload' | 'text'>;
  size?: ModifierProp<'large' | 'huge'>;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  disabled?: boolean;
  useNativeHashLink?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  modifiers,
  size,
  children,
  href,
  target,
  type,
  onClick,
  disabled = false,
  className: additionalClassName = '',
  id,
  useNativeHashLink,
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { dataProps } = useLinkSpy({ ref: linkRef });

  if (href) {
    const componentClassName = mapModifiers('a-button', modifiers, size, disabled && 'disabled');
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <a
        ref={!useNativeHashLink ? linkRef : undefined}
        href={href}
        target={target}
        className={className}
        id={id}
        onClick={onClick}
        {...(!useNativeHashLink ? dataProps : {})}
      >
        <div className="a-button__label">{children}</div>
      </a>
    );
  } else {
    const componentClassName = mapModifiers('a-button', modifiers, size);
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <button type={type} disabled={disabled} onClick={onClick} className={className} id={id}>
        <div className="a-button__label">{children}</div>
      </button>
    );
  }
};
