import { Icon } from 'design/components/atoms/icon';
import { mapModifiers } from 'design/libs/component';
import React from 'react';

export interface CustItemButtonProps {
  children: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  handleCustItemClick?: () => void;
  icon?: React.ReactNode;
  isfront?: boolean;
}

export const CustItemButton: React.FC<CustItemButtonProps> = ({
  children,
  disabled,
  id,
  className: additionalClassName = '',
  handleCustItemClick,
  icon = <Icon name="search_p" />,
  isfront = true,
}) => {
  const componentClassName = mapModifiers('a-cust-item-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" id={id} className={className} onClick={disabled ? undefined : handleCustItemClick}>
      {isfront ? (
        <>
          {icon} {children}
        </>
      ) : (
        <>
          {children} {icon}
        </>
      )}
    </button>
  );
};
