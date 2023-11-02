import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { UnitTextField } from 'design/components/atoms/unit-text-field';

const SpecialShoppongRebate: React.FC = () => (
  <html>
    <title>特別買物割引制度(特別買物割引証申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 入力画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
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
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">特別買物割引制度(特別買物割引証申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                </Text>
                <br />
              </Section>
              {/* <Section className="p-setting-input-form__body"> */}
              {/* 社員情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する">
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員情報">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>山田　太郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>ヤマダ　タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンリテール株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>社会保険G</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
              </Section>
              <Section modifiers="border">
                {/* 申請情報区域 */}
                <Heading tag="h3">申請情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="AAAA12345678" />
                  </FormField>
                  <FormField label="申請日"
                    className="p-setting-input-form__form-field">
                    <CalendarField disabled
                      className="a-calendar-field__content"
                      defaultValue={new Date('2021-09-01T20:44:23.000Z')}
                      onDateChange={() => { }}
                    />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="申請理由"
                    labelAddons={<Tag>必須</Tag>}>
                    <Pulldown name="something" placeholder="本人または子女の結婚">
                      <React.Fragment key=".0">
                        <option value="create_new">テスト1</option>
                        <option value="reapply">テスト2</option>
                        <option value="arrangement_completed">テスト3</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>

                <FormField label="詳細理由" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="6"
                      value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                  </FormFieldRow>
                </FormField>

                <FormField label="利用希望期間"
                  labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <DateRangeField />
                  </FormFieldRow>
                  <CaptionList>
                    <React.Fragment key=".0">
                      最長3ヵ月まで。<br />
                      期間内に支払を完了させる必要があります。
                    </React.Fragment>
                  </CaptionList>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="購入予定金額"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField unit="unit-manyen" />
                    <CaptionList >
                      <React.Fragment key=".0">
                        30万円以上300万円まで。
                      </React.Fragment>
                    </CaptionList>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* </Section> */}
            </div>
          </>
        </Modal>
        {/* 確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="primary" size="huge" id="input-form-confirm-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">特別買物割引制度(特別買物割引証申請)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
              </Section>
              {/* <Section className="p-setting-input-form__body"> */}
              <Section modifiers="border">
                <Heading tag="h2">申請内容</Heading>
                {/* 社員情報区域 */}
                <Heading tag="h3">社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員情報">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>社会保険G</span>
                  </InfoTableCell>
                </InfoTable>
              </Section>

              <Section modifiers="border">
                {/* 申請情報 */}
                <Heading tag="h3">申請情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                    <Text>AAAA12345678</Text>
                  </FormField>
                  {/* </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6"> */}
                  <FormField label="申請日">
                    <Text>2021/09/01</Text>
                  </FormField>
                  <FormField label="申請理由">
                    <Text>本人または子女の結婚</Text>
                  </FormField>
                  <FormField label="詳細理由">
                    <Text>ああああああああああああああああああああああああああああああああああああああああああ</Text>
                  </FormField>
                  <FormField label="利用希望期間">
                    <Text>2021/09/01 ― 2021/11/01</Text>
                  </FormField>
                  <FormField label="購入予定金額">
                    <Text>30万円</Text>
                  </FormField>

                </FormFieldRow>



              </Section>
              {/* </Section> */}
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<SpecialShoppongRebate />);
