import React, { useEffect, useState } from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { SettingHeader, SettingHeaderForBack } from 'design/components/molecules/setting-header';
import { IconHeader } from 'design/components/molecules/icon-header';
import { ScrollSpy, ScrollStatus } from 'design/libs/scroll-spy';
import { GlobalNavigationRadioInfo } from 'design/components/organisms/global-navigation-radioinfo';

export interface WholeProps {
  // navigation?: typeof SettingHeader | typeof GlobalNavigation;
  // navigation?: React.FC<SettingHeaderProps> | React.FC<GlobalNavigationProps>;
  navigation?: React.ReactNode;
  children?: React.ReactNode;
  modifiers?: ModifierProp<'with-bg'>;
  id?: string;
  className?: string;
}

export const Whole: React.FC<WholeProps> = ({
  navigation,
  children,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const [hideNav, setHideNav] = useState(false);
  const onScrollStatusUpdated = (params: ScrollStatus) => {
    const direction = params.direction;
    if (direction === 'down') {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  };
  // eslint-enable @typescript-eslint/no-explicit-any
  useEffect(() => {
    ScrollSpy.addListener(onScrollStatusUpdated);
    return () => {
      ScrollSpy.removeListener(onScrollStatusUpdated);
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navType = (navigation as any)?.type;
  const isGlobalNav =
    navType === GlobalNavigation || navType === GlobalNavigationWithoutApply || navType === GlobalNavigationRadioInfo;
  const isSettingHeader = navType === SettingHeader;
  const isSettingHeaderForBack = navType === SettingHeaderForBack;
  const isIconHeader = navType === IconHeader;
  const componentClassName = mapModifiers(
    'o-whole',
    modifiers,
    navigation ? 'with-navigation' : '',
    isGlobalNav && 'global',
    isSettingHeader && 'settings',
    isSettingHeaderForBack && 'settings',
    isIconHeader && 'settings',
    hideNav && 'hide-nav'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  // ScrollSpy.addListener(onScrollStatusUpdated);
  return (
    <div className={className} id={id}>
      <div className="o-whole__body-container">
        {isGlobalNav && (
          <div className="o-whole__navigation" data-simplebar>
            {navigation}
          </div>
        )}
        {!isGlobalNav && <div className="o-whole__navigation">{navigation}</div>}
        <div className="o-whole__body">{children}</div>
      </div>
    </div>
  );
};
