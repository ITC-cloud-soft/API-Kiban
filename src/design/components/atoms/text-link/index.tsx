import React, { AnchorHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'>;

export interface TextLinkProps extends InheritedProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  modifiers?: ModifierProp<'underline'>;
  disabled?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  id,
  className: additionalClassName = '',
  modifiers,
  href,
  target,
  onClick,
  disabled = false,
}) => {
  const className = `${mapModifiers('a-text-link', modifiers, disabled && 'disabled')} ${additionalClassName}`.trim();
  return (
    <a className={className} id={id} href={href} target={target} onClick={onClick}>
      {children}
    </a>
  );
};
