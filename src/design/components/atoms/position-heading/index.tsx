import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface PosHeadingProps {
  id?: string;
  className?: string;
  labelAddons?: React.ReactNode;
  children?: React.ReactNode;
  tag?: ModifierProp<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
  pos?: ModifierProp<'left' | 'center' | 'right'>;
}

export const PosHeading: React.FC<PosHeadingProps> = ({ id, className: additionalClassName, tag, pos, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName: any = tag || 'h1';
  const componentClassName = mapModifiers('a-pos-heading', tag);
  const posClassName = mapModifiers('a-pos-heading', pos);
  const className = `${componentClassName} ${posClassName} ${additionalClassName}`.trim();
  return (
    <TagName id={id} className={className}>
      <span className="a-pos-heading__label">{children}</span>
    </TagName>
  );
};
