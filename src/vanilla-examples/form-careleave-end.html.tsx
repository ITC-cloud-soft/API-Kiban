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
import { InfoTable } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { CaptionList } from 'design/components/atoms/caption-list';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>介護休職（撤回・終了申請）</title>
    <body>
      <Whole navigation={''}>
        {/* 介護休職（撤回・終了申請）画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
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
                <Heading tag="h1">介護休職（撤回・終了申請）</Heading>
                <Text>
                  介護休職の撤回は、介護休職を申請したが、全て取得せずを取りやめる事です。
                  <br />
                  介護休職開始予定日の前日までに申し出る必要があります。
                </Text>
                <br />
              </Section>
              <br />
              <Heading tag="h3">申請社員情報</Heading>
              <Accordion label="確認する" isopen={true}>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="会社コード">
                    <span>0005</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属コード">
                    <span>12345</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>津田沼店</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>申請　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>シンセイ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="入社日">
                    <span>2001/05/03</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="勤続年数">
                    <span>20年</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="">
                    <span></span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職申請区域 */}
              <Heading tag="h3">介護休職申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown placeholder="終了" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 対象家族情報区域 */}
              <Heading tag="h3">対象家族情報</Heading>
              <Accordion label="確認する" isopen={true}>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="対象者氏名">
                    <span>イオン　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="対象者氏名（カナ）">
                    <span>イオン　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="対象者生年月日">
                    <span>1941/12/20</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="性別">
                    <span>男性</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="続柄">
                    <span>父</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="同居/別居">
                    <span>同居</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="傷病名">
                    <span>低酸素脳症、アルツハイマー型認知症</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="傷病発生年月日">
                    <span>2020/10/25</span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職情報区域 */}
              <Heading tag="h3">介護休職情報</Heading>
              <Accordion label="確認する" isopen={true}>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="申請日">
                    <span>2020/11/02</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="申請区分">
                    <span>介護休職</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="開始日">
                    <span>2020/11/21</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="終了日（予定）">
                    <span>2021/11/20</span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職　撤回・終了について区域 */}
              <Heading tag="h3">介護休職　撤回・終了について</Heading>
              <FormField label="終了事由" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown placeholder="要介護者が既定の家族の範囲ではなくなったため" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField
                label="事由解消日"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">※要介護者死亡の場合は死亡日</React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormFieldRow>
              </FormField>
              <FormField
                label="終了日"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※当初の申請より早く介護休職を終了する場合は、月度終了日の締め日が終了日となります。
                      <br />
                      ・10日締めの場合、10日。
                      <br />
                      ・20日締めの場合、20日。
                      <br />
                      ・月末締めの場合、月末日
                    </React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 連絡の取れる電話番号区域 */}
              <Heading tag="h3">連絡の取れる電話番号</Heading>
              <Text align="left">本申請について日中に連絡取れる電話番号となります。</Text>
              <FormField label="電話番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 配偶者情報区域 */}
              <Heading tag="h3">配偶者情報</Heading>
              <Text align="left">配偶者がイオンリテール・イオンリテールストア在籍の場合、以下を入力ください。</Text>
              <FormField label="社員番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="AEON123456" />
                </FormFieldRow>
              </FormField>
              <FormField label="所属">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="イオンリテール株式会社　海浜幕張店" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <TextField name="name" type="text" value="申請" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" value="花子" />
                </FormField>
              </FormFieldRow>
            </div>
          </>
        </Modal>
        {/* 介護休職（撤回・終了申請）確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">介護休職（撤回・終了申請）</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              <br />
              <Heading tag="h3">申請社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0005</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンリテール株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>申請　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名（カナ）">
                  <span>シンセイ　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2001/05/03</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="勤続年数">
                  <span>20年</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職申請区域 */}
              <Heading tag="h3">介護休職申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>新規</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 対象家族情報区域 */}
              <Heading tag="h3">対象家族情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="対象者氏名">
                  <span>イオン　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者氏名（カナ）">
                  <span>イオン　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者生年月日">
                  <span>1941/12/20</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="性別">
                  <span>男性</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="続柄">
                  <span>父</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="同居/別居">
                  <span>同居</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病名">
                  <span>低酸素脳症、アルツハイマー型認知症</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病発生年月日">
                  <span>2020/10/25</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職情報区域 */}
              <Heading tag="h3">介護休職情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="申請日">
                  <span>2020/11/02</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="申請区分">
                  <span>介護勤務</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="開始日">
                  <span>2020/11/21</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="終了日（予定）">
                  <span>2021/11/20</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職　撤回・終了について区域 */}
              <Heading tag="h3">介護休職　撤回・終了について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="終了事由">
                  <Text>要介護者が既定の家族の範囲ではなくなったため</Text>
                </FormField>
                <FormField label="事由解消日">
                  <Text>2021/08/31</Text>
                </FormField>
                <FormField label="終了日">
                  <Text>2021/08/31</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 連絡の取れる電話番号区域 */}
              <Heading tag="h3">連絡の取れる電話番号</Heading>
              <FormField label="電話番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>090-1234-5678</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 配偶者情報区域 */}
              <Heading tag="h3">配偶者情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号">
                  <Text>AEON123456</Text>
                </FormField>
                <FormField label="所属">
                  <Text>イオンリテール株式会社　海浜幕張店</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <Text>申請</Text>
                </FormField>
                <FormField label="名">
                  <Text>花子</Text>
                </FormField>
              </FormFieldRow>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
