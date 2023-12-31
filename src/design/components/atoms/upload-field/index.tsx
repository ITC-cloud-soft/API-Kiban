import React, { useRef, useState } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { UploadList, UploadListItem } from 'design/components/molecules/upload-list';

import { Icon } from 'design/components/atoms/icon';

import { ENV } from 'design/libs/env';
import { bytesToSize } from 'design/libs/utils';

import 'event-target-polyfill';
import { Button } from 'design/components/atoms/button';

export interface UploadFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children: React.ReactNode;
  description?: string;
  accept?: string;
  modifiers?: ModifierProp<'with-error'>;
}

export const UploadField: React.FC<UploadFieldProps> = ({
  onChange,
  children,
  description,
  accept = 'image/*',
  modifiers,
  ...inputProps
}) => {
  const [imageUrl, setImageUrl] = useState<Array<File>>([]);
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelText = 'ファイルを選択';

  const isImage = accept.startsWith('image/', 0);

  const getCurrentImages = (arrayFile: File[]) => {
    const dataTransfer = new DataTransfer();

    for (const file of arrayFile) {
      dataTransfer.items.add(file);
    }

    return dataTransfer.files;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const arrayImage = [...imageUrl, ...Array.from(e.target.files)];
      setImageUrl(arrayImage);
    }

    // Prevent Chrome to clear current file list when clicking `Cancel` button in file dialog
    else if (!ENV.IS_SAFARI && e.isTrusted && inputRef.current) {
      inputRef.current.files = getCurrentImages(imageUrl);
    }

    onChange && onChange(e);
  };

  const handleClearButtonClick = (index: number) => {
    const arrayImage = Array.from(imageUrl).filter(image => image != imageUrl[index]);

    // Update current file list
    if (inputRef.current && !ENV.IS_SAFARI) {
      inputRef.current.files = getCurrentImages(arrayImage);
    }

    setImageUrl(arrayImage);
  };

  const checkValidFileType = (fileType: string): boolean => {
    let isValid = false;

    if (accept === '*' || accept === '*/*') {
      isValid = true;
    } else if (accept.indexOf('/') !== -1) {
      const [acceptBase, acceptExt] = accept.split('/') as [string, string];
      if (fileType.indexOf('/') !== -1) {
        const [base, ext] = fileType.split('/') as [string, string];
        if (acceptBase === base) {
          if (acceptExt === '*') {
            isValid = true;
          } else if (acceptExt === ext) {
            isValid = true;
          }
        }
      }
    }
    return isValid;
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0 && inputRef.current) {
      const dt = new DataTransfer();
      const arrayFile = e.dataTransfer.files;

      for (let i = 0; i < arrayFile.length; i++) {
        if (checkValidFileType(e.dataTransfer.files[i].type)) {
          dt.items.add(e.dataTransfer.files[i]);
        }
      }

      inputRef.current.files = dt.files;
      inputRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div ref={divRef} className={mapModifiers('a-upload-field', modifiers)}>
      <label
        className="a-upload-field__input-area"
        onDrop={handleDrop}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
      >
        <input
          {...inputProps}
          type="file"
          accept={accept}
          className="a-upload-field__input"
          multiple
          onChange={handleInputChange}
          ref={inputRef}
        />
        <div className="a-upload-field__placeholder">
          <span className="a-upload-field__title">{children}</span>
          <span className="a-upload-field__label">{labelText}</span>
          <span className="a-upload-field__description">{description}</span>
        </div>
      </label>
      <div className="a-upload-field__preview-holder">
        {imageUrl.length > 0 && accept.indexOf('image/') !== -1 && (
          <ul className="a-upload-field__preview">
            {imageUrl.map((item, index) => (
              <li key={index} className="a-upload-field__image">
                <img src={URL.createObjectURL(item)} />
                <button className="a-upload-field__clear-button" onClick={() => handleClearButtonClick(index)}>
                  <Icon name="close-bold" />
                </button>
              </li>
            ))}
          </ul>
        )}
        <UploadList
          className={mapModifiers('a-upload-field__file-list', isImage && 'image', imageUrl.length === 0 && 'no-child')}
          label="アップロード済みファイル"
        >
          {imageUrl.length > 0 &&
            accept.indexOf('image/') === -1 &&
            imageUrl.map((file, index) => {
              return (
                <UploadListItem
                  key={index}
                  fileSize={bytesToSize(file.size)}
                  handleOnClick={() => handleClearButtonClick(index)}
                >
                  {file.name}
                </UploadListItem>
              );
            })}
        </UploadList>
      </div>
      <Button type="button" modifiers="text" className="a-upload-field__reset">
        アップロードしたファイルを削除
      </Button>
    </div>
  );
};
