import React from 'react';
import { Icon } from 'design/components/atoms/icon';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface HelpButtonProps {
  type?: ModifierProp<'with-children'>;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HelpButton: React.FC<HelpButtonProps> = ({ children, type, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('a-help-button', type);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Icon name="help" />
      {children && <span className="a-help-button__children">{children}</span>}
    </div>
  );
};

export const HelpButton1: React.FC<HelpButtonProps> = ({ children, type, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('a-help-button', type);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>

      {children && <span className="a-help-button__children">{children}</span>}
      &nbsp;&nbsp;<Icon name="help" />
    </div>
  );
};

export const HelpButton2: React.FC<HelpButtonProps> = ({ children, type, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('a-help-button', type);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>

      {children && <span className="a-help-button__children">{children} &nbsp;&nbsp;<Icon name="help" /></span>}

    </div>
  );
};

