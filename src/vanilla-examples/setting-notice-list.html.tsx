import React from 'react';
import { renderVanillaExample } from './render';

import { CreateButton } from 'design/components/atoms/create-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';
import { TableActionButton } from 'design/components/atoms/table-action-button';

import { DataTable, HeaderCellProps, ContentCellProps } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';
import { SettingNoticeSearchModal } from './setting-notice-search-modal';

const SettingCheck: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: 'ID',
    },
    {
      value: 'タイトル',
    },
    {
      value: 'ステータス',
    },
    {
      value: '種別',
    },
    {
      value: '公開開始',
    },
    {
      value: '公開終了',
    },
    {
      value: '登録/更新日時',
    },
    {
      type: 'action',
      value: '',
    },
  ];

  const contents: Array<Array<ContentCellProps>> = [
    [
      {
        value: '1',
      },
      {
        value: '福島県沖で発生した地震による店舗の営業状況について',
      },
      {
        value: '公開中',
      },
      {
        value: '障害',
      },
      {
        value: '2021/02/10 10:00',
      },
      {
        value: '2021/04/01 10:00',
      },
      {
        value: (
          <>
            {'2021/02/09 18:21'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <TableActionButton>
            <NavItem href="#" label="編集する" subnav />
            <NavItem href="#" label="削除する" subnav />
          </TableActionButton>
        ),
      },
    ],
    [
      {
        value: '2',
      },
      {
        value: 'エスカレーターでの危険行為におけるお詫びと対応について',
      },
      {
        value: '公開中',
      },
      {
        value: 'お知らせ',
      },
      {
        value: '2021/02/12 15:00',
      },
      {
        value: '2021/05/01 10:00',
      },
      {
        value: (
          <>
            {'2021/02/11 09:58'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <TableActionButton>
            <NavItem href="#" label="編集する" subnav />
            <NavItem href="#" label="削除する" subnav />
          </TableActionButton>
        ),
      },
    ],
    [
      {
        value: '3',
      },
      {
        value: 'お問い合わせフォームへの社外の第三者によるアクセスについて',
      },
      {
        value: '公開中',
      },
      {
        value: '障害',
      },
      {
        value: '2021/02/14 19:00',
      },
      {
        value: '2021/04/14 19:00',
      },
      {
        value: (
          <>
            {'2021/02/08 15:02'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <TableActionButton>
            <NavItem href="#" label="編集する" subnav />
            <NavItem href="#" label="削除する" subnav />
          </TableActionButton>
        ),
      },
    ],
  ];
  return (
    <html>
      <body>
        <Whole navigation={<SettingHeader>設定</SettingHeader>}>
          <div className="p-wrapper">
            <SettingMenu
              className="p-setting-menu"
              navActiveIndex={3}
              subnav={[
                <SubMenuItem id="subnav-1" key="subnav-1" className="a-nav-item__remote-subnav">
                  <NavItem href="#" label="慶弔基準設定" subnav />
                  <NavItem href="#" label="名義マスタ設定" subnav />
                </SubMenuItem>,
                <SubMenuItem id="subnav-2" key="subnav-2" className="a-nav-item__remote-subnav">
                  <NavItem href="#" label="慶弔基準設定" subnav />
                  <NavItem href="#" label="名義マスタ設定" subnav />
                </SubMenuItem>,
              ]}
            >
              <NavItem id="nav-1" modifiers="menu-item" label="申請メニュー設定" remoteSubNav="#subnav-1"  hoverToOpen={true} />
              <NavItem id="nav-2" modifiers="menu-item" label="自動送信メール設定" />
              <NavItem id="nav-3" modifiers="menu-item" label="慶弔設定" remoteSubNav="#subnav-2" hoverToOpen={true} />
              <NavItem id="nav-4" modifiers="menu-item" label="お知らせ設定" hoverToOpen={true} />
            </SettingMenu>
            <PageHeading
              title="お知らせ設定"
              actions={
                <>
                  <CreateButton>新規作成</CreateButton>
                  <SearchButton inline={true}>絞り込み</SearchButton>
                </>
              }
            />
            <Section noPadding={true}>
              <DataTable modifiers="with-action-buttons" headers={headers} contents={contents} />
            </Section>
            <Section>
              <Pagination length={10} currentIndex={1} />
            </Section>
          </div>
          <SettingNoticeSearchModal />
        </Whole>
      </body>
    </html>
  );
};
export default renderVanillaExample(<SettingCheck />);
