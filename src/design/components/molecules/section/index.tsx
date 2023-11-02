import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface SectionProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'border' | 'card' | 'card-border' | 'fill' | 'fill-white' | 'fullpage'>;
  noPadding?: boolean;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  modifiers,
  noPadding = false,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-section', modifiers, noPadding && 'no-padding');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};
