import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface NavListProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'menu'>;
  id?: string;
  className?: string;
}

export const NavList: React.FC<NavListProps> = ({ children, modifiers, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('m-nav-list', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};
