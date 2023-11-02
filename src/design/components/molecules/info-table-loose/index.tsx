import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface InfoTableProps {
  children?: React.ReactNode;
  header?: string;
  modifiers?: ModifierProp<'full-border' | 'no-border-header' | 'no-border-header-single'>;
  className?: string;
}

export const InfoTableLoose: React.FC<InfoTableProps> = ({ children, header, modifiers, className }) => {
  const componentClassName = mapModifiers('m-info-table-loose', modifiers);

  const renderTableCell = () => {
    return React.Children.map(children, (item, idx) => (
      <div key={idx} className={className ? className : 'm-info-table-loose__item'}>
        {item}
      </div>
    ));
  };

  return (
    <div className={componentClassName}>
      {header && <div className="m-info-table-loose__header">{header}</div>}
      <div className="m-info-table-loose__container">{renderTableCell()}</div>
    </div>
  );
};
export const InfoTableNone: React.FC<InfoTableProps> = ({ children, header, modifiers }) => {
  const componentClassName = mapModifiers('m-info-table-loose', modifiers);

  return (
    <div className={componentClassName}>
      {header && <div className="m-info-table-loose__headernone">{header}</div>}
      <div className="m-info-table-loose__itemnone">{children}</div>
    </div>
  );
};
export const InfoTableNoneGrey: React.FC<InfoTableProps> = ({ children, header, modifiers }) => {
  const componentClassName = mapModifiers('m-info-table-loose', modifiers);

  return (
    <div className={componentClassName}>
      {header && <div className="m-info-table-loose__headernone-grey">{header}</div>}
      <div className="m-info-table-loose__itemnone">{children}</div>
    </div>
  );
};
