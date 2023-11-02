import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface TagProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'filled'>;
}

export const Tag: React.FC<TagProps> = ({ children, modifiers }) => {
  return <span className={mapModifiers('a-tag', modifiers)}>{children}</span>;
};
