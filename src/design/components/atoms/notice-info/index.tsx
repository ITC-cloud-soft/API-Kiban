import React from 'react';
import { mapModifiers, ModifierProp } from 'design/libs/component';

export interface NoticeInfoProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children: React.ReactNode;
  date: string;
  modifiers?: ModifierProp<'unread'>;
}

export const NoticeInfo: React.FC<NoticeInfoProps> = ({ children, date, modifiers, ...anchorProps }) => {
  return (
    <a {...anchorProps} className={mapModifiers('a-notice-info', modifiers)}>
      <span className="a-notice-info__date">{date}</span>
      <p className="a-notice-info__description">{children}</p>
    </a>
  );
};
