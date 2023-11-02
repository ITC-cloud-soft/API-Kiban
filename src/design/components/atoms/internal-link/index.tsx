import { Icon, ICON_SHAPES } from 'design/components/atoms/icon';
import React from 'react';

export interface InternalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children: string;
  icon: typeof ICON_SHAPES[number];
}

export const InternalLink: React.FC<InternalLinkProps> = ({ children, icon, ...anchorProps }) => {
  return (
    <a {...anchorProps} className="a-internal-link">
      {children}
      <Icon name={icon} />
    </a>
  );
};
