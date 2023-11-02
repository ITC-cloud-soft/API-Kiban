import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { HelpButton } from 'design/components/atoms/help-button';
import { Radio } from 'design/components/atoms/radio';
import { mapModifiers } from 'design/libs/component';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Checkbox } from 'design/components/atoms/checkbox';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>健康保険扶養 (変更申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 健康保険被扶養者異動届_PC_イオン健保-パターンA,C,D */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge" id="input-form-check-button1">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto">
                <ApprovalStepNo
                  isDone
                  modifiers="auto"
                  step={1}
                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }
                  name2=" 健康保険被扶養者異動届"
                />
                <ApprovalStepNo
                  modifiers="auto"
                  step={2}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届"
                />
                <ApprovalStepNo modifiers="auto" step={3} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                健康保険被扶養者（異動）届 について、以下の情報を入力してください。
                <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　イオン健保　　</span>
              </TextPlaceholder>
              <br />
              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="異動の種別">
                  <span>追加</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属店舗･部署">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="提出日（和暦）">
                  <span>令和1年5月17日</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被保険者情報 */}
              <Heading tag="h3">被保険者情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="被保険者証（記号）">
                  <span>8</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="被保険者証（番号）">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>伊音　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属会社">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                  <span>昭和50年5月5日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="取得年月日（和暦）">
                  <span>平成21年4月1日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="給与">
                  <span>日給月給</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="郵便番号">
                  <span>123-4567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                  <span>東京都港区</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="町村・番地">
                  <span>赤坂8-5-32</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                  <span>田中駒ビル2F</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="*****">
                  <span>*****</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被扶養者欄（1人目） */}
              <Heading tag="h3">被扶養者欄（1人目）</Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
                <FormField label="姓（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="イオン" />
                </FormField>
                <FormField label="名（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="ハナコ" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="昭和50年5月5日" />
                </FormFieldRow>
              </FormField>
              <FormField label="性別">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="女性" />
                </FormFieldRow>
              </FormField>
              <FormField label="職業" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="無職" />
                </FormFieldRow>
              </FormField>
              <FormField label="続柄">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="配偶者" />
                </FormFieldRow>
              </FormField>
              <FormField
                label="同居/別居"
                labelAddons={<Tag>必須</Tag>}
                instruction="別居の場合は、以下に現住所を入力してください。"
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="live" value="1" modifiers="grey">
                    同居
                  </Radio>
                  <Radio name="live" value="2" checked modifiers="grey">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField value="123-4567" />
                    <Button type="button" modifiers="third">
                      住所検索
                    </Button>
                  </div>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="都道府県・市郡区" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="東京都港区" />
                </FormField>
                <FormField label="町村・番地" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="赤坂8-5-32" />
                </FormField>
                <FormField label="建物名・部屋番号" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="田中駒ビル2F" />
                </FormField>
                <FormField label="備考（30文字まで）">
                  <TextField
                    name="name"
                    type="text"
                    value="ああああああああああああああああああああああああああああああ"
                  />
                </FormField>
              </FormFieldRow>
              <FormField
                label="被扶養者になった日"
                labelAddons={<HelpButton id="help1"></HelpButton>}
                labelAddons2={<Tag>必須</Tag>}
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="被扶養者になった日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和1年5月11日" />
                </FormFieldRow>
              </FormField>
              <FormField label="追加の理由">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown>
                    <option>婚姻により扶養</option>
                    <option>テスト２</option>
                    <option>テスト３</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 健康保険被扶養者異動届_PC_イオン健保-パターンB*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          footer={
            <>
              <Button modifiers="third" size="huge" id="confirm-button-before">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge" id="confirm-button-save">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-button-next1">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto">
                <ApprovalStepNo
                  isDone
                  modifiers="auto"
                  step={1}
                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }
                  name2=" 健康保険被扶養者異動届"
                />
                <ApprovalStepNo
                  modifiers="auto"
                  step={2}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届"
                />
                <ApprovalStepNo modifiers="auto" step={3} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                健康保険被扶養者（異動）届 について、以下の情報を入力してください。
                <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　イオン健保　　</span>
              </TextPlaceholder>
              <br />
              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="異動の種別">
                  <span>追加</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属店舗･部署">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="提出日（和暦）">
                  <span>令和1年5月17日</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被保険者情報 */}
              <Heading tag="h3">被保険者情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="被保険者証（記号）">
                  <span>8</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="被保険者証（番号）">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>伊音　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属会社">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                  <span>昭和50年5月5日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="取得年月日（和暦）">
                  <span>平成21年4月1日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="給与">
                  <span>日給月給</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="郵便番号">
                  <span>123-4567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                  <span>東京都港区</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="町村・番地">
                  <span>赤坂8-5-32</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                  <span>田中駒ビル2F</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被扶養者欄（1人目） */}
              <Heading tag="h3">被扶養者欄（1人目）</Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
                <FormField label="姓（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="イオン" />
                </FormField>
                <FormField label="名（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="ハナコ" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="昭和50年5月5日" />
                </FormFieldRow>
              </FormField>
              <FormField label="性別">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="女性" />
                </FormFieldRow>
              </FormField>
              <FormField label="職業" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="無職" />
                </FormFieldRow>
              </FormField>
              <FormField label="続柄">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="長女" />
                </FormFieldRow>
              </FormField>
              <FormField
                label="同居/別居"
                labelAddons={<Tag>必須</Tag>}
                instruction="別居の場合は、以下に現住所を入力してください。"
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="live" value="1" checked modifiers="grey">
                    同居
                  </Radio>
                  <Radio name="live" value="2" modifiers="grey">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="備考（30文字まで）" labelAddons={<HelpButton id="help2"></HelpButton>}>
                  <TextField
                    name="name"
                    type="text"
                    value="ああああああああああああああああああああああああああああああ"
                  />
                </FormField>
              </FormFieldRow>
              <FormField
                label="被扶養者になった日"
                labelAddons={<HelpButton id="help3"></HelpButton>}
                labelAddons2={<Tag>必須</Tag>}
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="被扶養者になった日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和1年5月11日" />
                </FormFieldRow>
              </FormField>
              <FormField label="追加の理由">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="出生" />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 健康保険被扶養者異動届_PC_イオン健保-パターンE,F,G*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input3"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-button-over1">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto">
                <ApprovalStepNo
                  isDone
                  modifiers="auto"
                  step={1}
                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }
                  name2=" 健康保険被扶養者異動届"
                />
                <ApprovalStepNo
                  modifiers="auto"
                  step={2}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届"
                />
                <ApprovalStepNo modifiers="auto" step={3} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                健康保険被扶養者（異動）届 について、以下の情報を入力してください。
                <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　イオン健保　　</span>
              </TextPlaceholder>
              <br />
              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="異動の種別">
                  <span>追加</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属店舗･部署">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="提出日（和暦）">
                  <span>令和1年5月17日</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被保険者情報 */}
              <Heading tag="h3">被保険者情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="被保険者証（記号）">
                  <span>8</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="被保険者証（番号）">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>伊音　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属会社">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                  <span>昭和50年5月5日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="取得年月日（和暦）">
                  <span>平成21年4月1日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="給与">
                  <span>日給月給</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="郵便番号">
                  <span>123-4567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                  <span>東京都港区</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="町村・番地">
                  <span>赤坂8-5-32</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                  <span>田中駒ビル2F</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被扶養者欄（1人目） */}
              <Heading tag="h3">被扶養者欄（1人目）</Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
                <FormField label="姓（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="イオン" />
                </FormField>
                <FormField label="名（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="ハナコ" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="昭和50年5月5日" />
                </FormFieldRow>
              </FormField>
              <FormField label="性別">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="女性" />
                </FormFieldRow>
              </FormField>
              <FormField label="職業" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="無職" />
                </FormFieldRow>
              </FormField>
              <FormField label="続柄">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="長女" />
                </FormFieldRow>
              </FormField>
              <FormField
                label="同居/別居"
                labelAddons={<Tag>必須</Tag>}
                instruction="別居の場合は、以下に現住所を入力してください。"
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="live" value="1" checked modifiers="grey">
                    同居
                  </Radio>
                  <Radio name="live" value="2" modifiers="grey">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="備考（30文字まで）">
                  <TextField
                    name="name"
                    type="text"
                    value="ああああああああああああああああああああああああああああああ"
                  />
                </FormField>
              </FormFieldRow>
              <FormField
                label="被扶養者になった日"
                labelAddons={<HelpButton id="help4"></HelpButton>}
                labelAddons2={<Tag>必須</Tag>}
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="被扶養者になった日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和1年5月11日" />
                </FormFieldRow>
              </FormField>
              <FormField label="追加の理由">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="出生" />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 国民年金第3号被保険者関係届_PC*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input6"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge" id="input-form-check-button">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-button-over4">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto">
                <ApprovalStepNo
                  isDone
                  modifiers="auto"
                  step={1}
                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }
                  name2=" 健康保険被扶養者異動届"
                />
                <ApprovalStepNo
                  isDone
                  modifiers="auto"
                  step={2}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届"
                />
                <ApprovalStepNo modifiers="auto" step={3} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                国民年金 第3号被保険者関係届 について、以下の情報を入力してください。
                <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="提出日（和暦）">
                  <span>令和1年5月17日</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 配偶者欄（第2号被保険者） */}
              <Heading tag="h3">配偶者欄（第2号被保険者）</Heading>
              <Text>イオン健保の被保険者（従業員本人）について記入してください。</Text>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>伊音　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名（カナ）">
                  <span>イオン　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                  <span>昭和50年5月5日</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="性別">
                  <span>女性</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="郵便番号">
                  <span>123-4567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                  <span>東京都港区</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="町村・番地">
                  <span>赤坂8-5-32</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                  <span>田中駒ビル2F</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 第3号被保険者欄 */}
              <Heading tag="h3">第3号被保険者欄</Heading>
              <div className="o-form-nobottom">
                <Text>被扶養者として申請する配偶者について記入してください。</Text>
              </div>
              <Checkbox>
                届出の提出は配偶者（第2号被保険者）に委託します。<Tag>必須</Tag>
              </Checkbox>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
                <FormField label="姓（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="イオン" />
                </FormField>
                <FormField label="名（カナ）" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="ハナコ" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="昭和50年5月5日" />
                </FormFieldRow>
              </FormField>
              <FormField label="性別（続柄）" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="relation" value="1" modifiers="grey">
                    夫
                  </Radio>
                  <Radio name="relation" value="2" modifiers="grey">
                    夫（未届）
                  </Radio>
                  <Radio name="relation" value="3" checked modifiers="grey">
                    妻
                  </Radio>
                  <Radio name="relation" value="4" modifiers="grey">
                    妻（未届）
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="同居/別居">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="同居" />
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="123-4567" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="都道府県・市郡区">
                  <TextField name="name" type="text" disabled value="東京都港区" />
                </FormField>
                <FormField label="町村・番地">
                  <TextField name="name" type="text" disabled value="赤坂8-5-32" />
                </FormField>
                <FormField label="建物名・部屋番号">
                  <TextField name="name" type="text" disabled value="田中駒ビル2F" />
                </FormField>
              </FormFieldRow>
              <FormField label="電話番号（区分）" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="tel" value="1" modifiers="grey">
                    自宅
                  </Radio>
                  <Radio name="tel" value="2" modifiers="grey">
                    携帯
                  </Radio>
                  <Radio name="tel" value="3" checked modifiers="grey">
                    勤務先
                  </Radio>
                  <Radio name="tel" value="4" modifiers="grey">
                    その他
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="電話番号" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField name="name" type="text" value="" />
                  <TextField name="name" type="text" value="" />
                  <TextField name="name" type="text" value="" />
                </FormFieldRow>
              </FormField>
              <FormField label="第3号被保険者になった日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和1年5月11日" />
                </FormFieldRow>
              </FormField>
              <FormField label="理由" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown>
                    <option>その他</option>
                    <option>テスト２</option>
                    <option>テスト３</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="その他の理由" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="content" type="text" value="ああああああ" />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 被保険者になった日とは？ */}
      <Modal id="modal_help_info4" headerIcon="help" title="被扶養者になった日とは？">
        <Text>
          イオン健康保険組合に加入すると同時に扶養者の申請をされる場合、資格取得日と被扶養者になる日は、同じ年月日になります。
        </Text>
      </Modal>
      {/* 備考とは？ */}
      <Modal id="modal_help_info2" headerIcon="help" title="備考とは？">
        <Text>
          配偶者もイオン健保の被保険者（または被扶養者）の場合は、こちらに保険証の記号･番号･氏名を記入してください。
          <br />
          その場合は収入確認書類は不要です。
          <br />
          <br />
          配偶者がイオン健保の保険証をもっていない場合は、配偶者の収入確認書類が必要です。
          <br />
          配偶者がいない場合は、「世帯全員の住民票（戸籍筆頭者･世帯主･続柄記載のもの）」と「被扶養者現況届」を提出してください。
        </Text>
      </Modal>
      {/* 被保険者になった日とは？ */}
      <Modal id="modal_help_info3" headerIcon="help" title="被扶養者になった日とは？">
        <Text>
          被保険者になった日は、出生日になります。
          <br />
          <br />
          健康保険組合への到着が出生日より2ヵ月以上遅れた場合は、手続き遅延理由書の提出が必要となります。
        </Text>
      </Modal>
      {/* 被保険者になった日とは？ */}
      <Modal id="modal_help_info1" headerIcon="help" title="被扶養者になった日とは？">
        <Text>
          申請希望日または事由発生日。
          <br />
          <br />
          ・被扶養者の離職
          <br />
          　離職日の翌日
          <br />
          ・被扶養者の所得減少
          <br />
          　年間収入が130万円未満になると分かった日
          <br />
          ・失業給付受給終了
          <br />
          　受給者証に印字されている終了日翌日
          <br />
          ・婚姻
          <br />
          　離婚日の翌日
          <br />
          <br />
          認定日は必ず記入した希望日になるわけではありません。希望日より2週間遅れて健康保険組合に到着した場合は、BS業務部での受付日が認定日となります。
          <br />
          申請書類の提出が遅れると、認定日は遅くなりますのでできるだけ早く提出してください。
        </Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
