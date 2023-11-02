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
import { Radio } from 'design/components/atoms/radio';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Tag } from 'design/components/atoms/tag';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';

import { ButtonContainer } from 'design/components/molecules/button-container';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { RecipientInput } from 'design/components/molecules/recipient-input';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { SettingMenu, SubMenuItem } from 'design/components/molecules/setting-menu';

import { Whole } from 'design/components/organisms/whole';
import { EmailTemplateEditor } from 'design/components/atoms/email-template-editor';
import { Modal } from 'design/components/organisms/modal';
import { CaptionList } from 'design/components/atoms/caption-list';


const SettingInputForm: React.FC = () => (
  <html>
    <body>
      <Whole navigation={<SettingHeader>設定</SettingHeader>}>
        <SettingMenu
          className="p-setting-menu"
          navActiveIndex={3}
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
          <NavItem id="nav-1" modifiers="menu-item" label="申請メニュー設定" remoteSubNav="#subnav-1"  hoverToOpen={true} />
          <NavItem id="nav-2" modifiers="menu-item" label="自動送信メール設定" />
          <NavItem id="nav-3" modifiers="menu-item" label="慶弔設定" remoteSubNav="#subnav-2" hoverToOpen={true} />
          <NavItem id="nav-4" modifiers="menu-item" label="お知らせ設定" hoverToOpen={true} />
        </SettingMenu>
        {/*
        <div className="p-wrapper">
          <Section className="p-setting-input-form__heading">
            <Heading tag="h1">お知らせ設定</Heading>
          </Section>
          <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
            <Section className="p-setting-input-form__body">
              <Heading tag="h3">新規作成</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="公開／非公開" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="3">
                    <Radio defaultChecked modifiers="grey" name="status" value="1">公開</Radio>
                    <Radio modifiers="grey" name="status" value="2">非公開</Radio>
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="公開開始" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField />
                    <TextField type="text" name="time" placeholder="10:00" />
                  </FormFieldRow>
                  <Text>※お知らせ日付として表示されます</Text>
                </FormField>
                <FormField label="公開終了" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField />
                    <TextField type="text" name="time" placeholder="10:00" />
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="種別" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="3">
                    <Radio defaultChecked modifiers="grey" name="status" value="1">お知らせ</Radio>
                    <Radio modifiers="grey" name="status" value="2">障害</Radio>
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="タイトル" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="title" />
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="本文" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="notice" tag="textarea" rows="8" />
                  </FormFieldRow>
                </FormField>
              </FormFieldRow>
            </Section>
          </Section>
          <Section className="p-footer-action">
            <ButtonContainer modifiers="veritcal">
              <Button modifiers="third">キャンセル</Button>
              <Button modifiers="primary" id="input-form-check-button2">確認</Button>
            </ButtonContainer>
          </Section>
        </div>
        */}


        <Modal
          modifiers="fullscreen"
          id="modal-input"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-form-cancel-button">
                キャンセル
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">お知らせ設定</Heading>
              </Section>
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">
                  <Heading tag="h3">新規作成</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="公開／非公開" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRow columnSize="12" columnSizePC="3">
                        <Radio defaultChecked modifiers="grey" name="status" value="1">公開</Radio>
                        <Radio modifiers="grey" name="status" value="2">非公開</Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="公開開始" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <CalendarField />
                        <TextField type="text" name="time" placeholder="10:00" />
                      </FormFieldRow>
                      <Text>※お知らせ日付として表示されます</Text>
                    </FormField>
                    <FormField label="公開終了" className="p-setting-input-form__form-field">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <CalendarField />
                        <TextField type="text" name="time" placeholder="10:00" />
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="種別" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRow columnSize="12" columnSizePC="3">
                        <Radio defaultChecked modifiers="grey" name="status" value="1">お知らせ</Radio>
                        <Radio modifiers="grey" name="status" value="2">障害</Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="タイトル" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        {/* TODO: update name when available */}
                        <TextField type="text" name="title" />
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="本文" className="p-setting-input-form__form-field" require labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        {/* TODO: update name when available */}
                        <TextField type="text" name="notice" tag="textarea" rows="8" />
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                </Section>
              </Section>
            </div>
          </>
        </Modal>

        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge" id="confirm-form-cancel-button">
                キャンセル
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-form-confirm-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">お知らせ</Heading>
              </Section>
              <br />
              <Section className="p-setting-input-form__body">
                <Heading tag="h3">新規作成</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="公開／非公開" className="p-setting-input-form__form-field">
                    <Text>公開</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="公開開始" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="3">
                      <Text>2021/10/01</Text>
                      <Text>10:00</Text>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="公開終了" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="3">
                      <Text>2021/12/01</Text>
                      <Text>10:00</Text>
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="種別" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>お知らせ</Text>
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="タイトル" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>営業停止のご案内</Text>
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="本文" className="p-setting-input-form__form-field">
                    <Text>ここに本文が入る</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<SettingInputForm />);
