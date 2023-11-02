import React from 'react';
import { renderVanillaExample } from './render';

import { CreateButton } from 'design/components/atoms/create-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';
import { TableActionButton } from 'design/components/atoms/table-action-button';

import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';

import { SettingCreateModal } from './setting-create-modal';
import { SettingSearchModal } from './setting-search-modal';

const SettingListPage: React.FC = () => (
  <html>
    <body>
      <Whole navigation={<SettingHeader>設定</SettingHeader>}>
        <SettingMenu
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
          <PageHeading
            title="自動送信メール設定"
            actions={
              <>
                <CreateButton>新規作成</CreateButton>
                <SearchButton inline>絞り込み</SearchButton>
              </>
            }
          />
        </Section>
        <Section noPadding={true} className="p-data-table-holder">
          <DataTable
            id="setting-list-data-table"
            contents={[
              [
                {
                  value: '1',
                },
                {
                  value:
                    '弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
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
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
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
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '4',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '5',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '6',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '7',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '8',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '9',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
              [
                {
                  value: '10',
                },
                {
                  value: '弔事連絡が新規作成された時のメール',
                },
                {
                  value: '稼働中',
                },
                {
                  value: (
                    <>
                      弔事連絡の
                      <br />
                      新規作成が完了した時
                    </>
                  ),
                },
                {
                  value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
                },
                {
                  value: (
                    <>
                      2021/02/10 10:00
                      <br />
                      更新者：山田 太郎
                    </>
                  ),
                },
                {
                  value: (
                    <TableActionButton>
                      <NavItem href="#" label="編集する" subnav />
                      <NavItem href="#" label="稼働を再開する" subnav />
                      <NavItem href="#" label="コピーする" subnav />
                      <NavItem href="#" label="削除する" subnav />
                    </TableActionButton>
                  ),
                },
              ],
            ]}
            headers={[
              {
                type: 'id',
                value: 'ID',
              },
              {
                value: '管理用タイトル',
              },
              {
                value: '送信状況',
              },
              {
                value: '送信タイミング',
                minWidth: '220px',
              },
              {
                value: '送信先',
                minWidth: '200px',
              },
              {
                value: '更新日時',
                minWidth: '200px',
              },
              {
                type: 'action',
                value: '',
              },
            ]}
          />
          <Pagination length={10} currentIndex={5} />
        </Section>
        <SettingCreateModal />
        <SettingSearchModal />
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingListPage />);
