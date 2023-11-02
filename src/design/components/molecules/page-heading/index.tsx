import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { Heading } from 'design/components/atoms/heading';

export interface PageHeadingProps {
  title: string;
  actions?: React.ReactNode;
  id?: string;
  className?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  actions,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-page-heading', actions ? 'with-actions' : '');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Heading tag="h1">{title}</Heading>
      {actions && <div className="m-page-heading__actions">{actions}</div>}
    </div>
  );
};
