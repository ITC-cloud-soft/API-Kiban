import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Heading } from 'design/components/atoms/heading';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { NavItem } from 'design/components/atoms/nav-item';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';

import { ButtonContainer } from 'design/components/molecules/button-container';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { RecipientInput } from 'design/components/molecules/recipient-input';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';
import { EmailTemplateEditor } from 'design/components/atoms/email-template-editor';

const SettingInputForm: React.FC = () => (
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
          <Section className="p-setting-input-form__heading">
            <Heading tag="h1">弔事の連絡</Heading>
          </Section>
          <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
            <Section className="p-setting-input-form__body">
              <Heading tag="h3">管理用タイトル</Heading>
              <Text>管理者がどの目的で作成したメールかを理解するための項目です。メール受信者には表示されません。</Text>
              <FormField label="管理用タイトル" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* TODO: update name when available */}
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <Heading tag="h3">送信タイミング</Heading>
              <Text>送信タイミングを設定してください。</Text>
              <FormField label="申請メニュー" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  {/* TODO: update name when available */}
                  <Pulldown
                    id="application-menu-pulldown"
                    placeholder="選択してください"
                    name="pulldown-application-menu"
                  >
                    <option value="">選択してください</option>
                    <option value="condolence-contact-human">弔事連絡（本人）</option>
                    <option value="condolence-contact-proxy">弔事連絡（代理）</option>
                    <option value="arrangements-and-offerings">弔電・供花の手配</option>
                    <option value="business-trip-advance">外出・出張申請（事前）</option>
                    <option value="business-trip-after-fact">外出・出張申請（事後）</option>
                    <option value="business-trip-report">外出・出張完了報告</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="ステータス" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="status-pulldown" disabled placeholder="選択してください" name="pulldown-status">
                    <option value="">選択してください</option>
                    <option value="create-new">新規作成</option>
                    <option value="reapply">修正後再申請</option>
                    <option value="arrangement-completed">手配完了</option>
                    <option value="unable-to-range">手配不能</option>
                    <option value="pull-back">引き戻し</option>
                    <option value="remand">差し戻し</option>
                    <option value="cancel">取り消し</option>
                    <option value="approval">承認</option>
                    <option value="denial">否認</option>
                  </Pulldown>
                  <Text className="p-input-form__label">になった時</Text>
                </FormFieldRow>
              </FormField>
              <Heading tag="h3">送信先</Heading>
              <Text>
                送信先を選択してください。（複数選択可）
                <br />
                その他の配信先がある場合は、メールアドレスを入力してください。
              </Text>
              <FormField label="TO:" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Checkbox modifiers="button" checked>
                    申請者
                  </Checkbox>
                  <Checkbox modifiers="button">承認者</Checkbox>
                  <Checkbox modifiers="button">株式会社日花</Checkbox>
                </FormFieldRow>
              </FormField>
              <FormField label="その他の送信先" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <RecipientInput templateInput={<TextField type="email" />} addButtonLabel="メールアドレスを追加">
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                  </RecipientInput>
                </FormFieldRow>
              </FormField>
              <FormField label="CC:" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Checkbox modifiers="button" checked>
                    申請者
                  </Checkbox>
                  <Checkbox modifiers="button">承認者</Checkbox>
                  <Checkbox modifiers="button">株式会社日花</Checkbox>
                </FormFieldRow>
              </FormField>
              <FormField label="その他の送信先" className="p-setting-input-form__form-field" normalLabel>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <RecipientInput templateInput={<TextField type="email" />} addButtonLabel="メールアドレスを追加">
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                  </RecipientInput>
                </FormFieldRow>
              </FormField>
              <FormField label="BCC:" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Checkbox modifiers="button" checked>
                    申請者
                  </Checkbox>
                  <Checkbox modifiers="button">承認者</Checkbox>
                  <Checkbox modifiers="button">株式会社日花</Checkbox>
                </FormFieldRow>
              </FormField>
              <FormField label="その他の送信先" className="p-setting-input-form__form-field" normalLabel>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <RecipientInput templateInput={<TextField type="email" />} addButtonLabel="メールアドレスを追加">
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                  </RecipientInput>
                </FormFieldRow>
              </FormField>
              <Heading tag="h3">内容</Heading>
              <Text>
                申請者や承認者の名前、申請内容の詳細などをメール文面に記載したい場合は、埋め込みコマンドをご利用ください。
              </Text>
              <ModalOpener>埋め込みコマンド</ModalOpener>
              <FormField label="件名" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* TODO: update name when available */}
                  <TextField type="text" name="subject" />
                </FormFieldRow>
              </FormField>
              <FormField label="テキスト" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* TODO: update name when available */}
                  <EmailTemplateEditor></EmailTemplateEditor>
                </FormFieldRow>
              </FormField>
            </Section>
            <Section modifiers="card-border" className="p-setting-input-form__test-transmission">
              <Heading tag="h3">テスト送信</Heading>
              <Text>
                実際に稼働を開始する前に、件名やテキストに謝りがないか、テスト送信をして確認しましょう。
                <br />
                問題なければ確認へ進んでください。
              </Text>
              <FormField label="その他の送信先" className="p-setting-input-form__form-field" normalLabel>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <RecipientInput templateInput={<TextField type="email" />}>
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                    <TextField type="email" defaultValue="dummy@aeon.co.jp" />
                  </RecipientInput>
                </FormFieldRow>
              </FormField>
              <Button modifiers="secondary">テスト送信</Button>
            </Section>
          </Section>
          <Section className="p-footer-action">
            <Text>問題なければ「確認」を押して次へ進んでください。</Text>
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

export default renderVanillaExample(<SettingInputForm />);
