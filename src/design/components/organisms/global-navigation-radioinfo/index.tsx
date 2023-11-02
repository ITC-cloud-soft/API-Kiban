import React, { MouseEventHandler, useCallback, useState } from 'react';
import { mapModifiers } from 'design/libs/component';
import { Icon } from 'design/components/atoms/icon';
import { NavIcon } from 'design/components/atoms/nav-icon';
import { ApplyButton } from 'design/components/atoms/apply-button';
import { NavList } from 'design/components/molecules/nav-list';
import { ShortcutNav } from 'design/components/molecules/shortcut-nav';
import { ScrollFreezer } from 'design/libs/scroll-freezer';
import { RadioInfo} from 'design/components/atoms/radio-info';
import { FormFieldRow } from 'design/components/molecules/form-field'
import logo from 'design/images/common/logo.svg';

export interface GlobalNavigationProps {
  brandHref?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  shortcuts?: React.ReactNode;
  hasNotification?: boolean;
  showFloatButtons?: boolean;
  id?: string;
  className?: string;
  handleNotificationButtonClick?: MouseEventHandler;
  handleApplyButtonClick?: MouseEventHandler;
  handleLogoutClick?: MouseEventHandler;
}

export const GlobalNavigationRadioInfo: React.FC<GlobalNavigationProps> = ({
  brandHref = '#',
  children,
  actions,
  shortcuts,
  hasNotification = false,
  showFloatButtons = true,
  id,
  className: additionalClassName = '',
  handleNotificationButtonClick,
  handleApplyButtonClick,
  handleLogoutClick,
}) => {
  const [isOpened, setOpened] = useState(false);
  const handleMenuClick = useCallback(() => {
    setTimeout(() => {
      !isOpened ? ScrollFreezer.freeze() : ScrollFreezer.unfreeze();
      setOpened(!isOpened);
    });
  }, [isOpened]);

  const componentClassName = mapModifiers(
    'o-global-navigation',
    isOpened && 'opened',
    hasNotification && 'notified',
    !showFloatButtons && 'no-float'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <header className="o-global-navigation__header">
        <button type="button" className="o-global-navigation__toggle-button" onClick={handleMenuClick}>
          <Icon name="menu" />
        </button>
        <div className="o-global-navigation__logo">
          <a href={brandHref}>
            <img src={logo} alt="Densin" />
          </a>
        </div>
        <button type="button" className="o-global-navigation__noti-button" onClick={handleNotificationButtonClick}>
          <NavIcon icon="news" size="large" badge={hasNotification} />
        </button>
      </header>
      <div className="o-global-navigation__apply-button">
        <ApplyButton onClick={handleApplyButtonClick}>申請する</ApplyButton>
      </div>

      <button type="button" className="o-global-navigation__close-button" onClick={handleMenuClick}>
        <Icon name="close" />
      </button>
      <nav className="o-global-navigation__nav">
        <NavList className="o-global-navigation__nav-items">{children}</NavList>
        <button type="button" className="o-global-navigation__logout-button" onClick={handleLogoutClick}>
          ログアウト
        </button>
        <NavList className="o-global-navigation__nav-system-action">{actions}</NavList>
        <div className="o-global-navigation__radio-info">
        <FormFieldRow columnSize="12" columnSizePC="12" >
          <RadioInfo name="RR1" value="0" children2='1234567890' isMenu={true} checked>
            会社
          </RadioInfo>
          <br/>
          <RadioInfo name="RR1" value="1" children2='1234567890' isMenu={true} >
            会社
          </RadioInfo>
         </FormFieldRow>
      </div>
      </nav>

      <ShortcutNav>{shortcuts}</ShortcutNav>
    </div>
  );
};
