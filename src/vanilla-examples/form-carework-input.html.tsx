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
import { HelpButton } from 'design/components/atoms/help-button';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { CaptionList } from 'design/components/atoms/caption-list';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Checkbox } from 'design/components/atoms/checkbox';
import { UnitTextField } from 'design/components/atoms/unit-text-field';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>介護勤務（新規・更新・変更申請）</title>
    <body>
      <Whole navigation={''}>
        {/* 介護勤務（新規・更新・変更申請）入力画面 */}
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
                <Heading tag="h1">介護勤務（新規・更新・変更申請）</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  ご注意：本申請は入力完了後、印刷をする必要がありますので、プリンターのご準備をお願いします。
                  印刷は後日でも可能です。
                </Text>
                <br />
              </Section>
              <br />
              {/* 申請社員情報区域 */}
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
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
              {/* 介護勤務申請区域 */}
              <Heading tag="h3">介護勤務申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown placeholder="新規" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護対象情報区域 */}
              <Heading tag="h3">介護対象情報</Heading>
              <FormField
                label="対象家族"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">
                      介護を受ける家族について選択してください。対象となる家族がない場合は、家族登録画面にて追加してください。
                    </React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="relation" value="5" checked modifiers="grey">
                    父　申請　正明
                  </Radio>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="relation" value="6" modifiers="grey">
                    長男　申請　五十嵐
                  </Radio>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="relation" value="6" modifiers="grey">
                    配偶者　申請　花子
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名">
                  <TextField name="name" type="text" disabled value="申請　正明" />
                </FormField>
                <FormField label="氏名（カナ）">
                  <TextField name="name" type="text" disabled value="シンセイ　セイメイ" />
                </FormField>
                <FormField label="続柄">
                  <TextField name="name" type="text" disabled value="父" />
                </FormField>
                <FormField label="性別">
                  <TextField name="name" type="text" disabled value="男" />
                </FormField>
                <FormField label="生年月日">
                  <CalendarField
                    className="a-calendar-field__content"
                    disabled
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormField>
                <FormField label="同居/別居">
                  <TextField name="name" type="text" disabled value="同居" />
                </FormField>
              </FormFieldRow>
              <FormField label="傷病名" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" value="ああああああ" />
                </FormFieldRow>
              </FormField>
              <FormField label="傷病発生年月日" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormField label="介護または看護を受ける方の日常生活・行動の状況（１００文字まで）">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField
                    name="content"
                    rows={3}
                    tag="textarea"
                    defaultValue="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
                  />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務情報区域 */}
              <Heading tag="h3">介護勤務情報</Heading>
              <FormField
                label="介護勤務期間"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">
                      今回の介護勤務申請期間を入力してください。月度の開始・終了に合わせて取得してください。（例：
                      <span className="a-text--small-purple a-text--font-size">20日</span>
                      締め会社の場合、<span className="a-text--small-purple a-text--font-size">21日</span>開始、
                      <span className="a-text--small-purple a-text--font-size">20日</span>終了）
                      3年の間で3回まで取得可能です。だたし、3年間を超える場合は1年単位で更新可能。
                    </React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <DateRangeField onDateRangeChange={() => {}} />
                </FormFieldRow>
              </FormField>

              <FormField label="分割取得有無" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="wari" value="5" checked modifiers="grey">
                    分割取得する
                  </Radio>
                  <Radio name="wari" value="6" modifiers="grey">
                    分割取得しない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="今回の取得期間">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="100" name="text" type="text" unit="days" />
                </FormFieldRow>
              </FormField>
              <FormField label="取得回数">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="1" name="text" type="text" unit="timenum" />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 短時間勤務区域 */}
              <Heading tag="h3">短時間勤務</Heading>
              <FormField
                label="短縮勤務種別"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">短時間勤務について、該当するものを選択してください。</React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="1時間短縮" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField
                label="通常勤務時間"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">短縮勤務以前の1日当たりの平均勤務時間を選択ください。</React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="8時間" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField
                label="短時間勤務始業・終業時刻"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">
                      申出の短縮時間に従って記載ください。例：2時間短縮　9:00～16:00
                    </React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className="a-date-range-field undefined">
                    <TextField type="text" name="text" />
                    <span className="a-date-range-field__line">~</span>
                    <TextField type="text" name="text" />
                  </div>
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
              <Text align="left">配偶者がイオンリテール・イオンリテールストア籍の場合、以下を入力下さい。</Text>
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
              <div className="m-info-table__header"></div>
              <br />
              {/* ライフスタイルプラン区域 */}
              <Heading tag="h3">ライフスタイルプラン</Heading>
              <Text align="left">
                新規で介護勤務をする場合回答が必須です。
                <br />
                介護勤務開始後の適用制度を選択ください。該当の申請書は速やかに提出をお願いします。
              </Text>
              <FormField
                label="適用制度"
                className="p-setting-input-form__form-field"
                labelAddons={<Tag>必須</Tag>}
                labelAddons2={<HelpButton id="employee"></HelpButton>}
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Checkbox modifiers="button">転居制限制度&nbsp;&nbsp;&nbsp;&nbsp;</Checkbox>
                  <Checkbox modifiers="button">ペア転勤制度適用&nbsp;&nbsp;</Checkbox>
                  <Checkbox modifiers="button">制度適用なし&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Checkbox>
                  <Checkbox modifiers="button">勤務エリア区分変更</Checkbox>
                </FormFieldRow>
              </FormField>
              <FormField
                label="配偶者転居制限制度"
                className="p-setting-input-form__form-field"
                labelAddons={<Tag>必須</Tag>}
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="sex" value="5" checked modifiers="grey">
                    希望する
                  </Radio>
                  <Radio name="sex" value="6" modifiers="grey">
                    希望しない
                  </Radio>
                  <Radio name="sex" value="6" modifiers="grey">
                    適用中
                  </Radio>
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 介護勤務（新規・更新・変更申請）確認画面 */}
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
                <Heading tag="h1">介護勤務（新規・更新・変更申請）</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              <br />
              {/* 申請社員情報区域 */}
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
              {/* 介護勤務申請区域 */}
              <Heading tag="h3">介護勤務申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>新規</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護対象情報区域 */}
              <Heading tag="h3">介護対象情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名">
                  <Text>申請　正明</Text>
                </FormField>
                <FormField label="氏名（カナ）">
                  <Text>シンセイ　セイメイ</Text>
                </FormField>
                <FormField label="続柄">
                  <Text>父</Text>
                </FormField>
                <FormField label="性別">
                  <Text>男</Text>
                </FormField>
                <FormField label="生年月日">
                  <Text>1952/12/01</Text>
                </FormField>
                <FormField label="同居/別居">
                  <Text>同居</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="傷病名">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>ああああああ</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="傷病発生年月日">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>2021/07/23</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="介護または看護を受ける方の日常生活・行動の状況">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>
                    ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                  </Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務情報区域 */}
              <Heading tag="h3">介護勤務情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="介護勤務期間">
                  <Text>2021/08/21　～　2022/08/20</Text>
                </FormField>
                <FormField label="分割取得有無">
                  <Text>分割取得する/100日間/1回目</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 短時間勤務区域 */}
              <Heading tag="h3">短時間勤務</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="短縮勤務種別">
                  <Text>1時間短縮</Text>
                </FormField>
                <FormField label="通常勤務時間">
                  <Text>8時間</Text>
                </FormField>
                <FormField label="短時間勤務始業・終業時刻">
                  <Text>9:00　～　18:00</Text>
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
              <div className="m-info-table__header"></div>
              <br />
              {/* ライフスタイルプラン区域 */}
              <Heading tag="h3">ライフスタイルプラン</Heading>
              <FormField label="適用制度" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>転居制限制度/配偶者転居制限制度適用中/勤務エリア区分変更</Text>
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 適用制度について説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="適用制度について">
        <Heading tag="h4">転居制限制度とは</Heading>
        <Text>
          ・「転居制限適用申請書」をご提出ください。
          <br />
          ・配偶者も適用希望の場合、配偶者も「転居制限適用申請書」の提出が必要です。
        </Text>
        <Heading tag="h4">ペア転勤制度適用とは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・「ペア転勤適用申請書」をご提出ください。
        </Text>
        <Heading tag="h4">制度適用なしとは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・申請書提出が不要です。
        </Text>
        <Heading tag="h4">勤務エリア区分変更とは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・縮小のみ申請できます。所轄人事にご相談ください。
        </Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
