import { Icon } from 'design/components/atoms/icon';
import { mapModifiers } from 'design/libs/component';
import React from 'react';

export interface SaveItemButtonProps {
  children: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  handleSaveItemClick?: () => void;
}

export const SaveItemButton: React.FC<SaveItemButtonProps> = ({
  children,
  disabled,
  id,
  className: additionalClassName = '',
  handleSaveItemClick,
}) => {
  const componentClassName = mapModifiers('a-save-item-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" id={id} className={className} onClick={disabled ? undefined : handleSaveItemClick}>
      <Icon name="save" />
      {children}
    </button>
  );
};
