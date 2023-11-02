import { Icon, ICON_SHAPES } from 'design/components/atoms/icon';
import React from 'react';

export interface InternalButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children: string;
  id?: string;
  icon: typeof ICON_SHAPES[number];
  className?: string;
}

export const InternalButtonLink: React.FC<InternalButtonLinkProps> = ({ children, id, icon, className }) => {
  return (
    <button className={className ? className : "m-accordion__label"} id={id}>
      {children}
      <Icon name={icon} />
    </button>
  );
};

export const InternalButtonLink2: React.FC<InternalButtonLinkProps> = ({ children, id, icon, className }) => {
  return (
    <button className={className ? className : "m-accordion__label"} id={id}>
      <Icon name={icon} />&nbsp;&nbsp;
      {children}
    </button>
  );
};
