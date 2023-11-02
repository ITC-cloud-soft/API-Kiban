import { Icon } from 'design/components/atoms/icon';
import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { ICON_SHAPES } from 'design/components/atoms/icon';

export interface DownloadButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children,
  disabled,
  id,
  className: additionalClassName = '',
  ...anchorProps
}) => {
  const componentClassName = mapModifiers('a-download-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const iconName = `download${disabled ? '-disabled' : ''}` as typeof ICON_SHAPES[number];
  return (
    <a id={id} className={className} download={anchorProps.href} {...anchorProps}>
      <span className="a-download-button__content">{children}</span> {'\u00A0'}
      <Icon name={iconName} />
    </a>
  );
};
