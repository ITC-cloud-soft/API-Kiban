import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface HeadingProps {
  id?: string;
  className?: string;
  labelAddons?: React.ReactNode;
  children?: React.ReactNode;
  tag?: ModifierProp<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
}

export const Heading: React.FC<HeadingProps> = ({ id, className: additionalClassName, tag, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName: any = tag || 'h1';
  const componentClassName = mapModifiers('a-heading', tag);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <TagName id={id} className={className}>
      <span className="a-heading__label">{children}</span>
    </TagName>
  );
};
export const HeadingForlabelAddons: React.FC<HeadingProps> = ({ id, className: additionalClassName, tag, labelAddons, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagName: any = tag || 'h1';
  const componentClassName = mapModifiers('a-heading', tag);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <TagName id={id} className={className}>
      <span className="a-heading__label">{children}</span>
      {labelAddons && <span className="m-form-field__label-addons">{labelAddons}</span>}
    </TagName>
  );
};
