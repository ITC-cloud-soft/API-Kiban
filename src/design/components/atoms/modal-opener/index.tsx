import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';

export interface ModalOpenerProps {
  id?: string;
  className?: string;
  children: string;
  disabled?: boolean;
  small?:boolean;
  handleOpenClick?: () => void;
}

export const ModalOpener: React.FC<ModalOpenerProps> = ({
  children,
  disabled = false,
  small = false,
  id,
  className: additionalClassName,
  handleOpenClick,
}) => {
  let componentClassName = "";
  if ( small === true){
    componentClassName = mapModifiers('a-modal-opener-small', disabled && 'disabled');
  } else {
    componentClassName = mapModifiers('a-modal-opener', disabled && 'disabled');
  }
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <a id={id} className={className} onClick={disabled ? undefined : handleOpenClick}>
      {children}
      <Icon name="link-new-window" />
    </a>
  );
};
