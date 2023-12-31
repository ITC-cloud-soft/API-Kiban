import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface RequestInfoItemProps {
  label: string;
  value: string;
  modifiers?: ModifierProp<'long'>;
  id?: string;
  className?: string;
}

export const RequestInfoItem: React.FC<RequestInfoItemProps> = ({
  value,
  label,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-request-info-item', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const separator = (value == '' && label == '') ? '　' : '：';
  return (
    <div className={className} id={id}>
      <span className="a-request-info-item__label">{label}</span>
      <span className="a-request-info-item__separator">{separator}</span>
      <span className="a-request-info-item__value">{value}</span>
    </div>
  );
};

export const RequestInfoItemLong: React.FC<RequestInfoItemProps> = ({
  value,
  label,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-request-info-item', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <span className="a-request-info-item__label-long">{label}</span>
      <span className="a-request-info-item__separator">：</span>
      <span className="a-request-info-item__value">{value}</span>
    </div>
  );
};
