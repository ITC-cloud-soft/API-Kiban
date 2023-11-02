import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';

import { Tabs } from 'design/components/molecules/tabs';
import { Section } from 'design/components/molecules/section';

import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Tag } from 'design/components/atoms/tag';
import { UploadField } from 'design/components/atoms/upload-field';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { InfoTable } from 'design/components/molecules/info-table';
import { Button } from 'design/components/atoms/button';

const HomeRequestListPage: React.FC = () => (
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
            <NavItem icon="approval-list" label="ホワイトリスト" href="whitelist-add-user.html" selected={true} />
            <NavItem icon="labor-menu" label="マスター管理">
              <NavItem label="マスター追加" href="master-management-add.html" subnav={true} />
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
          <PageHeading title="ホワイトリスト" />
        </Section>
        <Section noPadding={true} className="p-list-content-holder">
          <Tabs tabs={[<>ユーザー追加</>, <>CSVで追加</>]}>
            <>
              {' '}
              <Section modifiers="fill-white">
                {' '}
                <FormField label="社員番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <AddressSearchField
                      id="address-search-field"
                      inputProps={{
                        defaultValue: '',
                      }}
                      buttonProps={{
                        type: 'button',
                      }}
                      buttonName="検索"
                    />
                  </FormFieldRow>
                </FormField>
                <br />
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>申請　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>津田沼店</span>
                  </InfoTableCell>
                </InfoTable>
                <br />
                <footer className="o-modal__footer">
                  {' '}
                  <Button modifiers="third" size="huge">
                    追加
                  </Button>
                  <Button modifiers="primary" size="huge" id="input-form-check-button">
                    クリア
                  </Button>
                </footer>
              </Section>
            </>
            <>
              {' '}
              <Section modifiers="fill-white">
                {' '}
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="アップロードCSVファイル"
                    labelAddons={<Tag>必須</Tag>}
                    className="a-upload-lable-display"
                  >
                    <UploadField accept="*" description="形式：*.CSV | サイズ：10MBまで">
                      {' '}
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <footer className="o-modal__footer">
                  {' '}
                  <Button modifiers="primary" size="huge" id="input-form-check-button">
                    アップロード
                  </Button>
                </footer>
              </Section>
            </>
          </Tabs>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<HomeRequestListPage />);
