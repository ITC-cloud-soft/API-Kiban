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
import { Radio } from 'design/components/atoms/radio';

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
            <NavItem icon="request-list" label="システム全般" href="system-general.html" selected={true} />
            <NavItem icon="approval-list" label="ホワイトリスト" href="whitelist-add-user.html" />
            <NavItem icon="labor-menu" label="マスター管理">
              <NavItem label="マスター追加" href="master-management-add.html" subnav={true} />
              <NavItem label="マスター一覧" href="master-management-list.html" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="ワークフロー管理">
              <NavItem label="新規ワークフロー" href="workflow-management-new.html" subnav={true} />
              <NavItem label="ワークフロー一覧" href="workflow-management-list.html" subnav={true} />
            </NavItem>
            <NavItem icon="labor-menu" label="バッチ管理" href="#" />
            <NavItem icon="labor-menu" label="ワークフロー監視" href="#" />
          </GlobalNavigationWithoutApply>
        }
      >
        <Section noPadding={true}>
          <PageHeading title="システム全般" />
        </Section>
        <Section noPadding={true} className="p-list-content-holder">
          <Section modifiers="fill-white">
            {' '}
            <FormField label="システム区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <Radio name="sys" value="5" modifiers="grey">
                  ワークフロー特化システム
                </Radio>
                <Radio name="sys" value="6" checked modifiers="grey">
                  特定システムのワークフローサブシステム
                </Radio>
              </FormFieldRow>
            </FormField>
            <FormField label="ADFS認証有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <Radio name="sex" value="5" modifiers="grey">
                  あり
                </Radio>
                <Radio name="sex" value="6" checked modifiers="grey">
                  なし
                </Radio>
              </FormFieldRow>
            </FormField>
          </Section>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<HomeRequestListPage />);
