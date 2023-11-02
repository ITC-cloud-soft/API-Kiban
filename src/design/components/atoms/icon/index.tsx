import React from 'react';
import { mapModifiers } from 'design/libs/component';

export const ICON_SHAPES = [
  'add-item',
  'arrow-down',
  'arrow-down-white',
  'arrow-left',
  'arrow-left-white',
  'arrow-right',
  'arrow-right-white',
  'arrow-up',
  'close-bold',
  'check-purple',
  'check-white',
  'close',
  'close-hover',
  'dot-action',
  'edit',
  'menu',
  'news',
  'waiting',
  'remand',
  'draft',
  'download',
  'download-disabled',
  'in-progress',
  'approval',
  'denial',
  'request',
  'request-list',
  'approval-list',
  'labor-menu',
  'settings',
  'avatar',
  'request-list-selected',
  'approval-list-selected',
  'labor-menu-selected',
  'settings-selected',
  'news-selected',
  'avatar-selected',
  'search',
  'search-white',
  'calendar',
  'back',
  'back-white',
  'link',
  'link-new-window',
  'help',
  'status-a',
  'status-b',
  'unit-age',
  'unit-age-white',
  'unit-age-black',
  'unit-hour',

  'unit-hour-white',
  'unit-hour-black',
  'unit-minute',
  'unit-minute-white',
  'unit-minute-black',
  'unit-yen',
  'unit-yen-white',
  'unit-yen-black',
  'unit-manyen',
  'unit-manyen-white',
  'unit-manyen-black',
  'unit-km',
  'unit-km-white',
  'unit-km-black',
  'unit-go',
  'unit-go-white',
  'unit-go-black',
  'save',
  'search_p',
  'search_p-white',
  'edit_link',
  'unit-people',
  'unit-phone',
  'days',
  'days-white',
  'timenum',
  'timenum-white',
  'times',
  // 'times-white',
  'year',
  'year-white',
  'year-black',
  'month',
  'month-white',
  'month-black',
  'day',
  'day-white',
  'day-black',
  'station',
  'station-white',
  'station-black',
  'unit-download',
  'unit-post',
  'status-a-no1',
  'status-a-no2',
  'status-a-no3',
  'status-a-no4',
  'status-a-no5',
  'status-b-no1',
  'status-b-no2',
  'status-b-no3',
  'status-b-no4',
  'status-b-no5',
  'modify',
  'minus',
  'download-thick',
  'maps',
  'mei',
  'mei-white',
  'mei-black',
  'unit-dai',
  'unit-dai-white',
  'unit-dai-black',
  'unit-haku',
  'unit-haku-white',
  'unit-haku-black',
  'id-grey',
  'id-white',
  'id-menu',
  'id-menu-selected',
] as const;

export type IconShape = typeof ICON_SHAPES[number];

export interface IconProps {
  name: typeof ICON_SHAPES[number];
}

export const Icon: React.FC<IconProps> = ({ name }) => <i className={mapModifiers('a-icon', name)} />;
