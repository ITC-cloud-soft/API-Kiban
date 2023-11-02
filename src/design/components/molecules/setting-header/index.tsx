import React from 'react';
import { mapModifiers } from 'design/libs/component';
import { SettingBackButton } from 'design/components/atoms/setting-back-button';
import { ModalBackButton } from 'design/components/atoms/modal-back-button';
import { Icon } from 'design/components/atoms/icon';

export interface SettingHeaderProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

export const SettingHeader: React.FC<SettingHeaderProps> = ({
  onClick,
  children,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-setting-header');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <SettingBackButton onClick={onClick}>ホームへ</SettingBackButton>
      <div className="m-setting-header__title">{children}</div>
    </div>
  );
};
export const SettingHeaderForBack: React.FC<SettingHeaderProps> = ({
  onClick,
  children,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-setting-header__back');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    // <div >
    //   <SettingBackButton onClick={onClick}>戻る</SettingBackButton>
    //   <div className="m-setting-header__title">{children}</div>
    // </div>
    <div className={className} id={id}>
      <div className="o-modal__window">

        <main className="o-modal__body">
          {(
            <ModalBackButton className="o-modal__back-button1" >
              戻る
            </ModalBackButton>
          )}
          {(
            <header className={`o-modal__header ${'o-modal__header--has-icon'}`}>


            </header>
          )}
          {children}
        </main>
        {/* {footer && <footer className="o-modal__footer">{footer}</footer>} */}
      </div>
    </div>
  );
};
