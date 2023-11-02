import React, { MouseEventHandler } from 'react';
import { Icon } from 'design/components/atoms/icon';

export interface VisitRecordInputCustProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  id?: string;
  className?: string;
  handleCloseClick?: MouseEventHandler;
  haveclose?: boolean;
}

export const VisitRecordInputCust: React.FC<VisitRecordInputCustProps> = ({
  children,
  title,
  id,
  handleCloseClick,
  className: additionalClassName = '',
  haveclose = true,
}) => {
  const className = `m-visit-record-input-cust ${additionalClassName}`.trim();
  return (
    <div id={id} className={className}>
      <header className="m-visit-record-input-cust__header">
        <span className="m-visit-record-input-cust__header-title">{title}</span>
        {haveclose && (
          <button className="m-visit-record-input-cust__button-close" onClick={handleCloseClick}>
            <Icon name="close" />
          </button>
        )}
      </header>
      <div className="m-visit-record-input-cust__body">{children}</div>
    </div>
  );
};
