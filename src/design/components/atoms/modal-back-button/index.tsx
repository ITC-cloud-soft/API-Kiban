import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';

export interface ModalBackButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const ModalBackButton: React.FC<ModalBackButtonProps> = ({
  children,
  id,
  className: additionalClassName = '',
  ...anchorProps
}) => {
  const componentClassName = mapModifiers('a-modal-back-button');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <a className={className} id={id} {...anchorProps}>
      <Icon name="back" />
      {children}
    </a>
  );
};
