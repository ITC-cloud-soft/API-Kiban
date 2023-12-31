import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface InfoTableCellProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  modifiers?: ModifierProp<'pair'>;
  label?: string;
  label2?: string;
}

export const InfoTableCell: React.FC<InfoTableCellProps> = ({ children, header, modifiers, label, label2 }) => {
  const componentClassName = mapModifiers('a-info-table-cell', modifiers);

  return (
    <div className={componentClassName}>
      {header && <div className="a-info-table-cell__header">{header}</div>}
      <div className="a-info-table-cell__content">
        {label && <span className="a-info-table-cell__label">{label}<br />{label2}</span>}

        {children}
      </div>
    </div>
  );
};
