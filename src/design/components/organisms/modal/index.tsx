import React, { useEffect } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { Icon, ICON_SHAPES } from 'design/components/atoms/icon/index';
import { ScrollFreezer } from 'design/libs/scroll-freezer';
import { ModalBackButton } from 'design/components/atoms/modal-back-button';

export const MODAL_ICON_SHAPES = ['help'];

export type NavIconShape = typeof MODAL_ICON_SHAPES[number];

export interface ModalProps {
  children?: React.ReactNode;
  opened?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  headerIcon?: string;
  modifiers?: ModifierProp<'fullscreen' | 'dialog'>;
  modalSize?: ModifierProp<'medium' | 'maximum'>;
  id?: string;
  className?: string;
  hasBackButton?: boolean;
  onCloseRequested?: () => void;
  onBackRequested?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  opened,
  headerIcon,
  hasBackButton = false,
  onCloseRequested,
  onBackRequested,
  footer,
  modifiers,
  modalSize,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers(
    'o-modal',
    modifiers,
    modalSize,
    opened && 'opened',
    footer ? 'has-footer' : '',
    hasBackButton && 'has-back-button'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const iconName = headerIcon as typeof ICON_SHAPES[number];

  useEffect(() => {
    opened ? ScrollFreezer.freeze() : ScrollFreezer.unfreeze();

    return () => (opened ? ScrollFreezer.unfreeze() : undefined);
  }, [opened]);

  return (
    <div className={className} id={id}>
      <div className="o-modal__window">
        <button className="o-modal__close-button" type="button" onClick={onCloseRequested}>
          <Icon name="close" />
        </button>
        <main className="o-modal__body">
          {hasBackButton && (
            <ModalBackButton className="o-modal__back-button" onClick={onBackRequested}>
              戻る
            </ModalBackButton>
          )}
          {title && (
            <header className={`o-modal__header ${headerIcon && 'o-modal__header--has-icon'}`}>
              {headerIcon && <Icon name={iconName} />}
              <p>{title}</p>
            </header>
          )}
          {children}
        </main>
        {footer && <footer className="o-modal__footer">{footer}</footer>}
      </div>
    </div>
  );
};
