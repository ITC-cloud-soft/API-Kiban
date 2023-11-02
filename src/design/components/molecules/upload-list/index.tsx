import React from 'react';
import { Icon } from 'design/components/atoms/icon';
import { mapModifiers } from 'design/libs/component';

export interface UploadListItemProps {
  children: string;
  fileSize?: string;
  handleOnClick?: () => void;
}

export const UploadListItem: React.FC<UploadListItemProps> = ({ handleOnClick, children, fileSize }) => {
  return (
    <li className="m-upload-list__item">
      <div className="m-upload-list__file">
        <span className="m-upload-list__file-name">{children}</span>
        <span className="m-upload-list__file-size">{fileSize}</span>
      </div>
      <button type="button" className="m-upload-list__button-remove" onClick={handleOnClick}>
        <Icon name="close" />
      </button>
    </li>
  );
};

export const UploadListItemConfirm: React.FC<UploadListItemProps> = ({ handleOnClick, children, fileSize }) => {
  return (
    <li className="m-upload-list__item">
      <div className="m-upload-list__file">
        <span className="m-upload-list__file-name">{children}</span>
        <span className="m-upload-list__file-size">{fileSize}</span>
      </div>
      <button type="button" className="m-upload-list__button-remove" onClick={handleOnClick}>
        <Icon name="download" />
      </button>
    </li>
  );
};

export interface UploadListProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  label: string;
}

export const UploadList: React.FC<UploadListProps> = ({ children, label, className: additionalClassName, id }) => {
  const componentClassName = mapModifiers('m-upload-list');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className} id={id}>
      <label className="m-upload-list__label">{label}</label>
      <ul className="m-upload-list__items">{children}</ul>
      <template className="m-upload-list__template">
        <UploadListItem fileSize="40KB">_</UploadListItem>
      </template>
    </div>
  );
};

export const UploadListConfirm: React.FC<UploadListProps> = ({
  children,
  label,
  className: additionalClassName,
  id,
}) => {
  const componentClassName = mapModifiers('m-upload-list');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className} id={id}>
      <label className="m-upload-list__label">{label}</label>
      <ul className="m-upload-list__items">{children}</ul>
      <template className="m-upload-list__template">
        <UploadListItemConfirm fileSize="40KB">_</UploadListItemConfirm>
      </template>
    </div>
  );
};
