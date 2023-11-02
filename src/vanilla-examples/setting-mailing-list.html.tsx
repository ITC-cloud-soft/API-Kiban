import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { CreateButton } from 'design/components/atoms/create-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';

import { ButtonContainer } from 'design/components/molecules/button-container';
import { DataTable, HeaderCellProps, ContentCellProps } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';
import { SettingSearchModal } from './setting-search-modal';

const SettingCheck: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: 'ID',
    },
    {
      value: 'グループ名',
    },
    {
      value: '送信先アドレス',
    },
    {
      value: '更新記録',
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
        value: '人事部',
      },
      {
        value: 'jinji1@aeon.co.jp, jinji2@aeon.co.jp, jinji2@aeon.co.jp, 他 10件',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '2',
      },
      {
        value: '総務部',
      },
      {
        value: 'soumu1@aeon.co.jp, soumu2@aeon.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '3',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '4',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '5',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '6',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '7',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '8',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '9',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '10',
      },
      {
        value: '株式会社日花',
      },
      {
        value: 'aaa@nikka.co.jp',
      },
      {
        value: (
          <>
            {'2021/02/10 10:00'}
            <br />
            {'更新者：山田 太郎'}
          </>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">編集</Button>
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
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
              navActiveIndex={1}
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
                modifiers="menu-item"
                label="申請メニュー設定"
                remoteSubNav="#subnav-1"
                hoverToOpen={true}
              />
              <NavItem id="nav-2" modifiers="menu-item" label="自動送信メール設定" />
              <NavItem id="nav-3" modifiers="menu-item" label="慶弔設定" remoteSubNav="#subnav-2" hoverToOpen={true} />
            </SettingMenu>
            <PageHeading
              title="メーリングリスト一覧"
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
          <SettingSearchModal />
        </Whole>
      </body>
    </html>
  );
};
export default renderVanillaExample(<SettingCheck />);
