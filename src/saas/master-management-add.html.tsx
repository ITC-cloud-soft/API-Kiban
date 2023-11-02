import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';

import { Section } from 'design/components/molecules/section';

import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Tag } from 'design/components/atoms/tag';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { Heading } from 'design/components/atoms/heading';
import { TextField } from 'design/components/atoms/text-field';
import { ContentCellProps, DataTable, HeaderCellProps } from 'design/components/molecules/data-table';
import { Button } from 'design/components/atoms/button';
import { ButtonContainer } from 'design/components/molecules/button-container';
import { AddItemButton } from 'design/components/atoms/add-item-button';

const HomeRequestListPage: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: 'No.',
    },
    {
      value: '日本語名',
    },
    {
      value: '英語名',
    },
    {
      value: 'タイプ',
    },
    {
      value: '長さ',
    },
    {
      value: 'Pkeyフラグ',
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
        value: (
          <ButtonContainer modifiers="border">
            <TextField name="name" type="text" value="部署コード" />
          </ButtonContainer>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <TextField name="name" type="text" value="deptcode" />
          </ButtonContainer>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <TextField name="name" type="text" value="int" />
          </ButtonContainer>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <TextField name="name" type="text" value="10" />
          </ButtonContainer>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <TextField name="name" type="text" value="true" />
          </ButtonContainer>
        ),
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
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
                <NavItem label="マスター追加" href="master-management-add.html" subnav={true} selected={true} />
                <NavItem label="マスター一覧" href="master-management-list.html" subnav={true} />
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
            <PageHeading title="マスター追加" />
          </Section>
          <Section noPadding={true} className="p-list-content-holder">
            <Section modifiers="fill-white">
              {' '}
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField
                  label="テーブル名（日本語）"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="" />
                </FormField>
                <FormField
                  label="テーブル名（英語）"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <br />
              <Heading tag="h3">テーブル項目</Heading>
              <Section noPadding={true}>
                <DataTable modifiers="with-action-buttons" headers={headers} contents={contents} />
              </Section>
              <br />
              <AddItemButton>項目を追加する</AddItemButton>
              <footer className="o-modal__footer">
                {' '}
                <Button modifiers="primary" size="huge" id="input-form-check-button">
                  作成
                </Button>
              </footer>
            </Section>
          </Section>
        </Whole>
      </body>
    </html>
  );
};
export default renderVanillaExample(<HomeRequestListPage />);
