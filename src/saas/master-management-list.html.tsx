import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';

import { Section } from 'design/components/molecules/section';

import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { Heading } from 'design/components/atoms/heading';
import { ContentCellProps, DataTable, HeaderCellProps } from 'design/components/molecules/data-table';
import { Button } from 'design/components/atoms/button';
import { AddItemButton } from 'design/components/atoms/add-item-button';

const HomeRequestListPage: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: 'No.',
    },
    {
      value: 'マスタ日本語名',
    },
    {
      value: 'マスタ英語名',
    },
    {
      value: '項目数',
    },
    {
      value: 'データ数',
    },
    {
      type: 'action',
      value: '操作',
    },
  ];
  const contents: Array<Array<ContentCellProps>> = [
    [
      {
        value: '1',
      },
      {
        value: '部署マスタ',
      },
      {
        value: 'Dept_Master',
      },
      {
        value: '15',
      },
      {
        value: '115',
      },
      {
        value: (
          <>
            <Button modifiers="text">テーブル編集</Button>
            <Button modifiers="text">データ管理</Button>
          </>
        ),
      },
    ],
  ];
  return (
    <html>
      <body>
        <Whole
          modifiers="with-bg"
          navigation={
            <GlobalNavigationWithoutApply>
              <Section noPadding={true}>
                {' '}
                <TextPlaceholder dataId={2} code="%%7892%%">
                  フローシステム設定
                </TextPlaceholder>
              </Section>
              <NavItem icon="request-list" label="システム全般" href="system-general.html" />
              <NavItem icon="approval-list" label="ホワイトリスト" href="whitelist-add-user.html" />
              <NavItem icon="labor-menu" label="マスター管理" isOpen={true}>
                <NavItem label="マスター追加" href="master-management-add.html" subnav={true} />
                <NavItem label="マスター一覧" href="master-management-list.html" subnav={true} selected={true} />
              </NavItem>
              <NavItem icon="settings" label="ワークフロー管理">
                <NavItem label="新規ワークフロー" href="workflow-management-new.html" subnav={true} />
                <NavItem label="ワークフロー管理" href="workflow-management-list.html" subnav={true} />
              </NavItem>
              <NavItem icon="labor-menu" label="バッチ管理" href="#" />
              <NavItem icon="labor-menu" label="ワークフロー監視" href="#" />
            </GlobalNavigationWithoutApply>
          }
        >
          <Section noPadding={true}>
            <PageHeading title="マスター一覧" />
          </Section>
          <Section noPadding={true} className="p-list-content-holder">
            <Section modifiers="fill-white">
              <Heading tag="h3">テーブル項目</Heading>
              <Section noPadding={true}>
                <DataTable modifiers="with-action-buttons" headers={headers} contents={contents} />
              </Section>
              <br />
              <AddItemButton>項目を追加する</AddItemButton>
            </Section>
          </Section>
        </Whole>
      </body>
    </html>
  );
};
export default renderVanillaExample(<HomeRequestListPage />);
