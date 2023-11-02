import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';
import { Heading } from 'design/components/atoms/heading';
import { NavItem } from 'design/components/atoms/nav-item';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { Text } from 'design/components/atoms/text';

import { ButtonContainer } from 'design/components/molecules/button-container';
import { FormField } from 'design/components/molecules/form-field';
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
        <div className="p-wrapper">
          <Heading tag="h1">自動送信メール確認</Heading>
          <Section modifiers="card" className="p-card-main">
            <Section noPadding={true}>
              <Heading tag="h3">管理用タイトル</Heading>
              <FormField label="管理用タイトル">
                <Text>弔事連絡が新規作成されたら申請者に送信されるメール</Text>
              </FormField>
            </Section>
            <Section noPadding={true}>
              <Heading tag="h3">送信タイミング</Heading>
              <FormField label="申請メニュー">
                <Text>弔事連絡（本人）</Text>
              </FormField>
              <FormField label="ステータス">
                <Text>新規作成　が完了した時</Text>
              </FormField>
            </Section>
            <Section noPadding={true}>
              <Heading tag="h3">送信先</Heading>
              <FormField label="TO:">
                <Text>申請者</Text>
              </FormField>
              <FormField label="CC:">
                <Text>なし</Text>
              </FormField>
              <FormField label="BCC:">
                <Text>なし</Text>
              </FormField>
            </Section>
            <Section noPadding={true}>
              <Heading tag="h3">内容</Heading>
              <FormField label="件名">
                <Text>弔事連絡が送信されました。</Text>
              </FormField>
              <FormField label="テキスト">
                <EmailTemplateViewer>
                  <p>
                    <TextPlaceholder dataId={2} code="%%7892%%">
                      申請者 氏名（姓）
                    </TextPlaceholder>
                    <TextPlaceholder dataId={3} code="%%7892%%">
                      申請者 氏名（名）
                    </TextPlaceholder>
                    &nbsp;様
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>この度はお悔やみを申し上げます。</p>
                  <p>下記内容で弔事連絡を受け付けました。</p>
                  <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
                  <p>
                    供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>この度はお悔やみを申し上げます。</p>
                  <p>下記内容で弔事連絡を受け付けました。</p>
                  <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
                  <p>
                    供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>【申請内容】</p>
                  <p>亡くなられた方の情報</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    お名前：
                    <TextPlaceholder dataId={4} code="%%7892%%">
                      亡くなられた方の氏名（姓）
                    </TextPlaceholder>
                    <TextPlaceholder dataId={5} code="%%7892%%">
                      亡くなられた方の氏名（名）
                    </TextPlaceholder>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>・</p>
                  <p>・</p>
                  <p>・</p>
                  <p>・</p>
                  <p>
                    <br />
                  </p>
                  <p>お問い合わせはこちらまでご連絡ください。</p>
                  <p>00-0000-0000</p>
                  <p>
                    <br />
                  </p>
                  <p>——</p>
                  <p>
                    <br />
                  </p>
                  <p>署名</p>
                </EmailTemplateViewer>
              </FormField>
            </Section>
          </Section>
          <Section className="p-footer-action">
            <ButtonContainer modifiers="veritcal">
              <Button modifiers="third">保存せずに終了</Button>
              <Button modifiers="secondary">保存して終了</Button>
              <Button modifiers="primary">稼働開始</Button>
            </ButtonContainer>
          </Section>
        </div>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingCheck />);
