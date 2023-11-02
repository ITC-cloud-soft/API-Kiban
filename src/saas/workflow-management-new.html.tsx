import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';

import { Section } from 'design/components/molecules/section';

import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { Tag } from 'design/components/atoms/tag';
import { TextField } from 'design/components/atoms/text-field';
import { FormFieldRow, FormField } from 'design/components/molecules/form-field';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Radio } from 'design/components/atoms/radio';
import { Button } from 'design/components/atoms/button';

const HomeRequestListPage: React.FC = () => {
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
              <NavItem icon="labor-menu" label="マスター管理">
                <NavItem label="マスター追加" href="master-management-add.html" subnav={true} />
                <NavItem label="マスター一覧" href="master-management-list.html" subnav={true} />
              </NavItem>
              <NavItem icon="settings" label="ワークフロー管理" isOpen={true}>
                <NavItem label="新規ワークフロー" href="workflow-management-new.html" subnav={true} selected={true} />
                <NavItem label="ワークフロー管理" href="workflow-management-list.html" subnav={true} />
              </NavItem>
              <NavItem icon="labor-menu" label="バッチ管理" href="#" />
              <NavItem icon="labor-menu" label="ワークフロー監視" href="#" />
            </GlobalNavigationWithoutApply>
          }
        >
          <Section noPadding={true}>
            <PageHeading title="新規ワークフロー" />
          </Section>
          <Section noPadding={true} className="p-list-content-holder">
            <Section modifiers="fill-white">
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField
                  label="ワークフロー名"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField
                  label="フローテーブル名（英語）"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="" />
                </FormField>
                <FormField label="" className="p-setting-input-form__form-field">
                  <Checkbox>デフォルト名使用</Checkbox>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField
                  label="フロータイプ"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="sys" value="5" modifiers="grey">
                      ウォーターフォール式
                    </Radio>
                    <Radio name="sys" value="6" checked modifiers="grey">
                      途中合弁式
                    </Radio>
                    <Radio name="sys" value="7" checked modifiers="grey">
                      途中分散式
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
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
