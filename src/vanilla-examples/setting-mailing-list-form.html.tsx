import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { NavItem } from 'design/components/atoms/nav-item';
import { TextField } from 'design/components/atoms/text-field';

import { ButtonContainer } from 'design/components/molecules/button-container';
import { FormField } from 'design/components/molecules/form-field';
import { RecipientInput } from 'design/components/molecules/recipient-input';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';

const SettingCheck: React.FC = () => (
  <html>
    <body>
      <Whole navigation={<SettingHeader>設定</SettingHeader>}>
        <SettingMenu
          className="p-setting-menu"
          navActiveIndex={-1}
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
        <div className="p-wrapper">
          <Heading tag="h1">慶弔基準作成</Heading>
          <Section modifiers="card" className="p-card-main">
            <Section noPadding={true} className="p-card-form-content">
              <Heading tag="h3">タイトル</Heading>
              <FormField label="グループ名">
                <TextField type="text" />
              </FormField>
              <FormField label="送信アドレス">
                <RecipientInput templateInput={<TextField type="email" />} addButtonLabel="メールアドレスを追加">
                  <TextField type="email" />
                  <TextField type="email" />
                </RecipientInput>
              </FormField>
            </Section>
          </Section>
          <Section className="p-footer-action p-footer-action--small">
            <ButtonContainer>
              <Button modifiers="third">キャンセル</Button>
              <Button modifiers="primary">登録</Button>
            </ButtonContainer>
          </Section>
        </div>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingCheck />);
