import React from 'react';
import { mapModifiers } from 'design/libs/component';


export interface IconHeaderProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const IconHeader: React.FC<IconHeaderProps> = ({
  children,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-icon-header');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <div className="m-icon-header__title">{children}</div>
    </div>
  );
};
