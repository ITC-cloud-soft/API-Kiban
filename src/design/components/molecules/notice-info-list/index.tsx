import React from 'react';

export const NoticeInfoList: React.FC = ({ children }) => {
  return (
    <ul className="m-notice-info-list">
      {React.Children.map(children, (item, index) => (
        <li key={index} className="m-notice-info-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
};
