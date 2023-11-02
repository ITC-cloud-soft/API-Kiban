import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, IconProps } from './';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const AddItem = Template.bind({});
export const ArrowDown = Template.bind({});
export const ArrowDownWhite = Template.bind({});
export const ArrowLeft = Template.bind({});
export const ArrowLeftWhite = Template.bind({});
export const ArrowRight = Template.bind({});
export const ArrowRightWhite = Template.bind({});
export const ArrowUp = Template.bind({});
export const CloseBold = Template.bind({});
export const CheckPurple = Template.bind({});
export const CheckWhite = Template.bind({});
export const Close = Template.bind({});
export const DotAction = Template.bind({});
export const Edit = Template.bind({});
export const Menu = Template.bind({});
export const News = Template.bind({});
export const Waiting = Template.bind({});
export const Remand = Template.bind({});
export const Draft = Template.bind({});
export const Download = Template.bind({});
export const DownloadDisabled = Template.bind({});
export const InProgress = Template.bind({});
export const Approval = Template.bind({});
export const Denial = Template.bind({});
export const Request = Template.bind({});
export const RequestList = Template.bind({});
export const ApprovalList = Template.bind({});
export const LaborMenu = Template.bind({});
export const Settings = Template.bind({});
export const Avatar = Template.bind({});
export const RequestListSelected = Template.bind({});
export const ApprovalListSelected = Template.bind({});
export const LaborMenuSelected = Template.bind({});
export const SettingsSelected = Template.bind({});
export const NewsSelected = Template.bind({});
export const AvatarSelected = Template.bind({});
export const Search = Template.bind({});
export const SearchWhite = Template.bind({});
export const Calendar = Template.bind({});
export const Back = Template.bind({});
export const BackWhite = Template.bind({});
export const Link = Template.bind({});
export const LinkNewWindow = Template.bind({});
export const Help = Template.bind({});
export const StatusA = Template.bind({});
export const StatusB = Template.bind({});
export const UnitAge = Template.bind({});
export const UnitHour = Template.bind({});
export const UnitMinute = Template.bind({});
export const UnitYen = Template.bind({});
export const UnitManYen = Template.bind({});
export const UnitKm = Template.bind({});
export const UnitGo = Template.bind({});
export const Save = Template.bind({});
export const Search_P = Template.bind({});
export const Search_PWhite = Template.bind({});
export const Days = Template.bind({});
export const DaysWhite = Template.bind({});
export const Timenum = Template.bind({});
export const TimenumWhite = Template.bind({});
export const Times = Template.bind({});
// export const TimesWhite = Template.bind({});
export const Year = Template.bind({});
export const YearWhite = Template.bind({});
export const YearBlack = Template.bind({});
export const Month = Template.bind({});
export const MonthWhite = Template.bind({});
export const MonthBlack = Template.bind({});
export const Day = Template.bind({});
export const DayWhite = Template.bind({});
export const DayBlack = Template.bind({});

export const Station = Template.bind({});
export const StationWhite = Template.bind({});
export const StationBlack = Template.bind({});
export const StatusANo1 = Template.bind({});
export const StatusANo2 = Template.bind({});
export const StatusANo3 = Template.bind({});
export const StatusANo4 = Template.bind({});
export const StatusANo5 = Template.bind({});
export const StatusBNo1 = Template.bind({});
export const StatusBNo2 = Template.bind({});
export const StatusBNo3 = Template.bind({});
export const StatusBNo4 = Template.bind({});
export const StatusBNo5 = Template.bind({});
export const Modify = Template.bind({});
export const Minus = Template.bind({});
export const DownloadThick = Template.bind({});
export const Maps = Template.bind({});
export const Mei = Template.bind({});
export const MeiWhite = Template.bind({});
export const MeiBlack = Template.bind({});
export const UnitDai = Template.bind({});
export const UnitDaiWhite = Template.bind({});
export const UnitDaiBlack = Template.bind({});
export const UnitHaku = Template.bind({});
export const UnitHakuWhite = Template.bind({});
export const UnitHakuBlack = Template.bind({});
export const IDGrey = Template.bind({});
export const IDWhite = Template.bind({});
export const IDMenu = Template.bind({});
export const IDMenuSelected = Template.bind({});

AddItem.args = { name: 'add-item' };
ArrowDown.args = { name: 'arrow-down' };
ArrowDownWhite.args = { name: 'arrow-down-white' };
ArrowLeft.args = { name: 'arrow-left' };
ArrowLeftWhite.args = { name: 'arrow-left-white' };
ArrowRight.args = { name: 'arrow-right' };
ArrowRightWhite.args = { name: 'arrow-right-white' };
ArrowUp.args = { name: 'arrow-up' };
CloseBold.args = { name: 'close-bold' };
CloseBold.parameters = {
  backgrounds: {
    default: 'black',
  },
};
CheckPurple.args = { name: 'check-purple' };
CheckWhite.args = { name: 'check-white' };
Close.args = { name: 'close' };
DotAction.args = { name: 'dot-action' };
Edit.args = { name: 'edit' };
Menu.args = { name: 'menu' };
News.args = { name: 'news' };
Waiting.args = { name: 'waiting' };
Remand.args = { name: 'remand' };
Draft.args = { name: 'draft' };
Download.args = { name: 'download' };
DownloadDisabled.args = { name: 'download-disabled' };
InProgress.args = { name: 'in-progress' };
Approval.args = { name: 'approval' };
Denial.args = { name: 'denial' };
Request.args = { name: 'request' };
Request.parameters = {
  backgrounds: {
    default: 'black',
  },
};
RequestList.args = { name: 'request-list' };
ApprovalList.args = { name: 'approval-list' };
LaborMenu.args = { name: 'labor-menu' };
Settings.args = { name: 'settings' };
Avatar.args = { name: 'avatar' };
RequestListSelected.args = { name: 'request-list-selected' };
ApprovalListSelected.args = { name: 'approval-list-selected' };
LaborMenuSelected.args = { name: 'labor-menu-selected' };
SettingsSelected.args = { name: 'settings-selected' };
NewsSelected.args = { name: 'news-selected' };
AvatarSelected.args = { name: 'avatar-selected' };
Search.args = { name: 'search' };
SearchWhite.args = { name: 'search-white' };
SearchWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Calendar.args = { name: 'calendar' };
Back.args = { name: 'back' };
BackWhite.args = { name: 'back-white' };
BackWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Link.args = { name: 'link' };
LinkNewWindow.args = { name: 'link-new-window' };
Help.args = { name: 'help' };
StatusA.args = { name: 'status-a' };
StatusB.args = { name: 'status-b' };
UnitAge.args = { name: 'unit-age' };
UnitHour.args = { name: 'unit-hour' };
UnitMinute.args = { name: 'unit-minute' };
UnitYen.args = { name: 'unit-yen' };
UnitManYen.args = { name: 'unit-manyen' };
UnitKm.args = { name: 'unit-km' };
UnitGo.args = { name: 'unit-go' };
Save.args = { name: 'save' };
Search_P.args = { name: 'search_p' };
Search_PWhite.args = { name: 'search_p-white' };
Search_PWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Days.args = { name: 'days' };
DaysWhite.args = { name: 'days-white' };
DaysWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
Times.args = { name: 'times' };
// TimesWhite.args = { name: 'times-white' };
// TimesWhite.parameters = {
//   backgrounds: {
//     default: 'black',
//   },
// };
Timenum.args = { name: 'timenum' };
TimenumWhite.args = { name: 'timenum-white' };
TimenumWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};

Year.args = { name: 'year' };
YearWhite.args = { name: 'year-white' };
YearWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
YearBlack.args = { name: 'year-black' };

Month.args = { name: 'month' };
MonthWhite.args = { name: 'month-white' };
MonthWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
MonthBlack.args = { name: 'month-black' };


Day.args = { name: 'day' };
DayWhite.args = { name: 'day-white' };
DayWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
DayBlack.args = { name: 'day-black' };



Station.args = { name: 'station' };
StationWhite.args = { name: 'station-white' };
StationWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};


StationBlack.args = { name: 'station-black' };

StatusANo1.args = { name: 'status-a-no1' };
StatusANo2.args = { name: 'status-a-no2' };
StatusANo3.args = { name: 'status-a-no3' };
StatusANo4.args = { name: 'status-a-no4' };
StatusANo5.args = { name: 'status-a-no5' };
StatusBNo1.args = { name: 'status-b-no1' };
StatusBNo2.args = { name: 'status-b-no2' };
StatusBNo3.args = { name: 'status-b-no3' };
StatusBNo4.args = { name: 'status-b-no4' };
StatusBNo5.args = { name: 'status-b-no5' };
Modify.args = { name: 'modify' };
Minus.args = { name: 'minus' };
DownloadThick.args = { name: 'download-thick' };
Maps.args = { name: 'maps' };
Mei.args = { name: 'mei' };
MeiWhite.args = { name: 'mei-white' };
MeiWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
MeiBlack.args = { name: 'mei-black' };
UnitDai.args = { name: 'unit-dai' };
UnitDaiWhite.args = { name: 'unit-dai-white' };
UnitDaiWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
UnitDaiBlack.args = { name: 'unit-dai-black' };
UnitHaku.args = { name: 'unit-haku' };
UnitHakuWhite.args = { name: 'unit-haku-white' };
UnitHakuWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
IDGrey.args = { name: 'id-grey' };
IDWhite.args = { name: 'id-white' };
IDWhite.parameters = {
  backgrounds: {
    default: 'black',
  },
};
IDMenu.args = { name: 'id-menu' };
IDMenuSelected.args = { name: 'id-menu-selected' };
