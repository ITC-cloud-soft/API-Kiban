import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { mapModifiers } from 'design/libs/component';
import { TabNavItem } from 'design/components/atoms/tab-nav-item';

export interface TabLongProps {
  children?: React.ReactNode;
  isActive?: boolean;
  hasBadge?: boolean;
  onClick?: () => void;
}

export const TabLong: React.FC<TabLongProps> = ({ children, isActive, hasBadge, onClick }) => (
  <li className={mapModifiers('m-tabs-long__tab', isActive && 'active')} onClick={onClick}>
    <TabNavItem active={isActive} badge={hasBadge}>
      {children}
    </TabNavItem>
  </li>
);

export interface TabsLongProps {
  children?: React.ReactNode;
  tabs: React.ReactNodeArray;
  id?: string;
  className?: string;
  badges?: number[];
  onChange?: (index: number) => void;
}

export const TabsLong: React.FC<TabsLongProps> = ({
  children,
  tabs,
  badges,
  onChange,
  id,
  className: additionalClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const adjustTabIndicator = useCallback(() => {
    const widthItem = document.querySelector('.m-tabs-long__tab--active') as HTMLLIElement;
    tabsRef.current?.style?.setProperty('--active-index', activeIndex.toString());
    tabsRef.current?.style?.setProperty('--width', `${widthItem.offsetWidth}px`);
  }, [activeIndex]);

  useLayoutEffect(() => {
    adjustTabIndicator();
  }, [adjustTabIndicator]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', adjustTabIndicator);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', adjustTabIndicator);
      }
    };
  }, [adjustTabIndicator]);

  const componentClassName = mapModifiers('m-tabs-long');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id} ref={tabsRef}>
      <ul className="m-tabs-long__tab-list">
        {tabs.map((tab, index) => (
          <TabLong
            key={index}
            isActive={index === activeIndex}
            hasBadge={badges && badges.indexOf(index) !== -1}
            onClick={() => {
              setActiveIndex(index);
              onChange && onChange(index);
            }}
          >
            {tab}
          </TabLong>
        ))}
      </ul>
      <div className="m-tabs-long__indicator" />
      <div className="m-tabs-long__contents">
        {React.Children.map(children, (child, idx) => (
          <div className={mapModifiers('m-tabs-long__content', activeIndex === idx && 'active')}>{child}</div>
        ))}
      </div>
    </div>
  );
};
