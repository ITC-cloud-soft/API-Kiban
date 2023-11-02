import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { Tag } from 'design/components/atoms/tag';

import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';

import { Whole } from 'design/components/organisms/whole';
import { Radio } from 'design/components/atoms/radio';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Modal } from 'design/components/organisms/modal';
import { ModalOpener } from 'design/components/atoms/modal-opener';

const FormDivorceBereavement: React.FC = () => (
  <html>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          className="o-modal--opened"
          footer={
            <>
              <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
                下書き保存
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
                <Heading tag="h1">離婚・死別届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>
              </Section>
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">
                  <Heading tag="h3">社員情報</Heading>
                  <Text>
                    本申請により、既婚から独身へと変更申請を行います。
                    <br />
                    苗字変更がない場合は更新不要です。
                  </Text>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                      <TextField type="text" name="text" value="山田" />
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="佳子" disabled />
                    </FormField>
                    <FormField
                      label="姓（カナ）"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField type="text" name="text" value="ヤマダ" />
                    </FormField>
                    <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="ヨシコ" disabled />
                    </FormField>
                  </FormFieldRow>
                  <FormField label="婚姻区分" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" defaultValue="既婚" value="独身" disabled />
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">申請対象者</Heading>
                  <FormField label="従業員と続柄" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" value="配偶者" disabled />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="氏名" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" defaultValue="山田 佳子" disabled />
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">配偶者（対象者）情報</Heading>
                  <FormField
                    label="申請区分"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Radio modifiers="grey" name="regiclass" value="1">
                        離婚
                      </Radio>
                      <Radio modifiers="grey" name="regiclass" value="2" defaultChecked>
                        死別
                      </Radio>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="逝去日" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                    </FormFieldRow>
                  </FormField>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="山田" disabled />
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="佳子" disabled />
                    </FormField>
                    <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="ヤマダ" disabled />
                    </FormField>
                    <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="ヨシコ" disabled />
                    </FormField>
                  </FormFieldRow>
                  <FormField label="生年月日" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" value="1975/05/01" disabled />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="性別" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" value="女" disabled />
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">税扶養情報</Heading>
                  <Text>
                    離婚の場合には、離婚日にて、死別の場合には、当年12/31をもって、税扶養から外れます。
                    <br />
                    ※扶養控除対象外の場合には、変更ありません。
                  </Text>
                  <FormField label="税扶養区分" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" value="控除扶養対象外" disabled></TextField>
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">健康保険情報</Heading>
                  <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField type="text" name="text" value="健康保険扶養申請済み" disabled></TextField>
                    </FormFieldRow>
                  </FormField>
                  <CaptionList>
                    <React.Fragment key=".0">
                      健康保険扶養（削除）申請する場合、紙申請書を記入し、必ずBS業務部へ提出してください。
                    </React.Fragment>
                  </CaptionList>
                  <ModalOpener small={true}>税扶養変更手続き一式健康保険削除届.docx</ModalOpener>
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
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">離婚・死別届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>
              </Section>
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">
                  <Heading tag="h3">社員情報</Heading>
                  <Text>
                    本申請により、既婚から独身へと変更申請を行います。
                    <br />
                    苗字変更がない場合は更新不要です。
                  </Text>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field">
                      <Text>山田</Text>
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field">
                      <Text>佳子</Text>
                    </FormField>
                    <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                      <Text>ヤマダ</Text>
                    </FormField>
                    <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                      <Text>ヨシコ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="婚姻区分" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>独身</Text>
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">申請対象者</Heading>
                  <FormField label="従業員と続柄" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>配偶者</Text>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="氏名" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>山田 佳子</Text>
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">配偶者（対象者）情報</Heading>
                  <FormField label="申請区分" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text>離婚</Text>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="逝去日" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>2022/03/26</Text>
                    </FormFieldRow>
                  </FormField>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field">
                      <Text>山田</Text>
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field">
                      <Text>佳子</Text>
                    </FormField>
                    <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                      <Text>ヤマダ</Text>
                    </FormField>
                    <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                      <Text>ヨシコ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="生年月日" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>2022/03/26</Text>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="性別" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>女</Text>
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">税扶養情報</Heading>
                  <Text>
                    離婚の場合には、離婚日にて、死別の場合には、当年12/31をもって、税扶養から外れます。
                    <br />
                    ※扶養控除対象外の場合には、変更ありません。
                  </Text>
                  <FormField label="税扶養区分" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>控除扶養対象外</Text>
                    </FormFieldRow>
                  </FormField>
                  <Heading tag="h3">健康保険情報</Heading>
                  <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>健康保険扶養申請済み</Text>
                    </FormFieldRow>
                  </FormField>
                  <CaptionList>
                    <React.Fragment key=".0">
                      健康保険扶養（削除）申請する場合、紙申請書を記入し、必ずBS業務部へ提出してください。
                    </React.Fragment>
                  </CaptionList>
                  <ModalOpener small={true}>税扶養変更手続き一式健康保険削除届.docx</ModalOpener>
                </Section>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FormDivorceBereavement />);
