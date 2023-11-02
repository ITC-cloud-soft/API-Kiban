import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Whole, WholeProps } from './';
import { Heading } from 'design/components/atoms/heading';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Section } from 'design/components/molecules/section';
import { Text } from 'design/components/atoms/text';
import { NavItem } from 'design/components/atoms/nav-item';
import { CaptionList } from 'design/components/atoms/caption-list';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { RequestInfo } from 'design/components/molecules/request-info';
import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { action } from '@storybook/addon-actions';
import { NoticeInfoList } from 'design/components/molecules/notice-info-list';
import { NoticeInfo } from 'design/components/atoms/notice-info';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

export default {
  title: 'components/organisms/Whole',
  component: Whole,
} as Meta;

const Template: Story<WholeProps> = args => <Whole {...args} />;

const handleCardClick = action('handleCardClick');

export const Normal = Template.bind({});
Normal.args = {
  navigation: <SettingHeader>設定</SettingHeader>,
  children: (
    <>
      <SettingMenu
        subnav={[
          <SubMenuItem id="subnav-1" key={1} className="a-nav-item__remote-subnav">
            <NavItem href="#" label="慶弔基準設定" subnav />
            <NavItem href="#" label="名義マスタ設定" subnav />
          </SubMenuItem>,
          <SubMenuItem id="subnav-2" key={2} className="a-nav-item__remote-subnav">
            <NavItem href="#" label="慶弔基準設定" subnav />
            <NavItem href="#" label="名義マスタ設定" subnav />
          </SubMenuItem>,
        ]}
      >
        <NavItem
          id="nav-1"
          key={1}
          modifiers="menu-item"
          label="申請メニュー設定"
          remoteSubNav="#subnav-1"
          hoverToOpen={true}
        />
        <NavItem id="nav-2" key={2} modifiers="menu-item" label="自動送信メール設定" />
        <NavItem
          id="nav-3"
          key={3}
          modifiers="menu-item"
          label="慶弔設定"
          remoteSubNav="#subnav-2"
          hoverToOpen={true}
        />
      </SettingMenu>
      <Section noPadding={true}>
        <Heading>弔事の連絡</Heading>
        <Section modifiers="fill-white">
          <Text>
            香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
          </Text>
          <CaptionList>
            <li>
              供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
            </li>
          </CaptionList>
        </Section>
      </Section>
    </>
  ),
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  modifiers: 'with-bg',
  navigation: (
    <GlobalNavigation
      actions={
        <>
          <NavItem icon="news" label="お知らせ" href="#"></NavItem>
          <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
        </>
      }
      shortcuts={
        <>
          <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
          <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
        </>
      }
    >
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
      <NavItem icon="labor-menu" label="労務メニュー">
        <NavItem label="人事業務" href="#" subnav={true} />
        <NavItem label="BS業務" href="#" subnav={true} />
      </NavItem>
      <NavItem icon="settings" label="メンテナンス" href="#" />
    </GlobalNavigation>
  ),
  children: (
    <>
      <Section noPadding={true}>
        <Heading>弔事の連絡</Heading>
        <Section modifiers="fill-white">
          <Text>
            香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
          </Text>
          <CaptionList>
            <li>
              供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
            </li>
          </CaptionList>
        </Section>
      </Section>
      <Section>
        <RequestInfoList>
          <RequestInfo status={'approval'} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'in-progress'} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'approval'} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'in-progress'} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
          <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
            <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
            <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
            <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
          </RequestInfo>
        </RequestInfoList>
      </Section>
      <Section>
        <NoticeInfoList>
          <NoticeInfo key={1} date="2021/02/20" modifiers="unread">
            福島県沖で発生した地震による店舗の営業状況について
          </NoticeInfo>
          <NoticeInfo key={2} date="2021/02/11">
            エスカレーターでの危険行為におけるお詫びと対応について
          </NoticeInfo>
          <NoticeInfo key={3} date="2021/01/25">
            お問い合わせフォームへの社外の第三者によるアクセスについて
          </NoticeInfo>
          <NoticeInfo key={4} date="2020/12/28">
            トップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品のトップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品の
          </NoticeInfo>
          <NoticeInfo key={5} date="2020/12/22">
            山陽マルナカ　公正取引委員会に対する訴訟の件
          </NoticeInfo>
        </NoticeInfoList>
      </Section>
    </>
  ),
};
