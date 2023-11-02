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
import { Icon } from 'design/components/atoms/icon';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { CaptionList } from 'design/components/atoms/caption-list';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Checkbox } from 'design/components/atoms/checkbox';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { mapModifiers } from 'design/libs/component';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>介護休職（新規・更新・変更代理申請）</title>
    <body>
      <Whole navigation={''}>
        {/* 介護休職（新規・更新・変更代理申請）入力画面 */}
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
                <Heading tag="h1">介護休職（新規・更新・変更代理申請）</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  ご注意：本申請は入力完了後、印刷をする必要がありますので、プリンターのご準備をお願いします。
                  印刷は後日でも可能です。
                </Text>
                <br />
              </Section>
              <br />
              {/*代理で申請をする方の社員情報区域 */}
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h3">代理で申請をする方の社員情報</Heading>
              <Accordion label="確認する" isopen={true}>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>代理　智子</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>BS業務部</span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請社員情報区域 */}
              <Heading tag="h3">申請社員情報</Heading>
              <FormField label="社員番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third">
                      社員検索
                    </Button>
                  </div>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名">
                  <TextField name="name" type="text" disabled value="申請　正明" />
                </FormField>
                <FormField label="氏名（カナ）">
                  <TextField name="name" type="text" disabled value="シンセイ　セイメイ" />
                </FormField>
                <FormField label="会社名称">
                  <TextField name="name" type="text" disabled value="イオンリテール株式会社" />
                </FormField>
                <FormField label="所属名称">
                  <TextField name="name" type="text" disabled value="津田沼店" />
                </FormField>
                <FormField label="入社日">
                  <CalendarField
                    className="a-calendar-field__content"
                    disabled
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                    onDateChange={() => {}}
                  />
                </FormField>
                <FormField label="勤続年数">
                  <UnitTextField defaultValue="1" disabled name="text" type="text" unit="year" />
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護休職申請区域 */}
              <Heading tag="h3">介護休職申請</Heading>
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
              {/* 介護休職情報区域 */}
              <Heading tag="h3">介護休職情報</Heading>
              <FormField
                label="介護休職期間"
                labelAddons={<Tag>必須</Tag>}
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">
                      今回の介護休職申請期間を入力してください。月度の開始・終了に合わせて取得してください。（例：
                      <span className="a-text--small-purple a-text--font-size">20日</span>締め会社の場合、
                      <span className="a-text--small-purple a-text--font-size">21日</span>開始、
                      <span className="a-text--small-purple a-text--font-size">20日</span>終了）
                      介護休職の申請は最長1年間です。1年を超える場合は、さらに1年単位で更新可能。
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
                新規で介護休職をする場合回答が必須です。
                <br />
                現在の適用制度を選択してください。また、配偶者の転居制限適用について希望有無を選択してください。
              </Text>
              <FormField
                label={
                  <Text className="a-text-tag">
                    現在適用制度
                    <span id="employee">
                      <Icon name="help" />
                    </span>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="teki" value="5" checked modifiers="grey">
                    ペア転勤制度
                  </Radio>
                  <Radio name="teki" value="6" modifiers="grey">
                    転居制限制度
                  </Radio>
                  <Radio name="teki" value="6" modifiers="grey">
                    制度適用なし
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="配偶者転居制限" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="hope" value="5" checked modifiers="grey">
                    希望する
                  </Radio>
                  <Radio name="hope" value="6" modifiers="grey">
                    希望しない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 子育て支援手当区域 */}
              <Heading tag="h3">子育て支援手当</Heading>
              <Text align="left">
                「子育て支援手当支給解除申請書」の提出は不要です。
                <br />
                子育て支援手当を受給中場合、介護休職に入るため、支給を停止する。
              </Text>
              <FormField label="現在受給状況" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="accept" value="5" modifiers="grey">
                    受給していない
                  </Radio>
                  <Radio name="accept" value="6" checked modifiers="grey">
                    受給している
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField
                label="子育て支援手当受給者"
                className="p-setting-input-form__form-field"
                instruction={
                  <CaptionList>
                    <React.Fragment key=".0">受給している場合、該当者全て選択してください。</React.Fragment>
                  </CaptionList>
                }
              >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Checkbox modifiers="button">申請者本人</Checkbox>
                  <Checkbox modifiers="button">配偶者</Checkbox>
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 介護休職（新規・更新・変更代理申請）確認画面 */}
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
                <Heading tag="h1">介護休職（新規・更新・変更代理申請）</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              <br />
              {/* 代理で申請をする方の社員情報区域 */}
              <Heading tag="h3">代理で申請をする方の社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>代理　智子</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>BS業務部</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請社員情報区域 */}
              <Heading tag="h3">申請社員情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号">
                  <Text>1234567</Text>
                </FormField>
                <FormField label="氏名">
                  <Text>申請　正明</Text>
                </FormField>
                <FormField label="氏名（カナ）">
                  <Text>シンセイ　セイメイ</Text>
                </FormField>
                <FormField label="会社名">
                  <Text>イオンリテール株式会社</Text>
                </FormField>
                <FormField label="所属名称">
                  <Text>津田沼店</Text>
                </FormField>
                <FormField label="入社日">
                  <Text>2001/05/03</Text>
                </FormField>
                <FormField label="勤続年数">
                  <Text>20年</Text>
                </FormField>
              </FormFieldRow>
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
              {/* 介護休職情報区域 */}
              <Heading tag="h3">介護休職情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="介護休職期間">
                  <Text>2021/08/21　～　2022/08/20</Text>
                </FormField>
                <FormField label="分割取得有無">
                  <Text>分割取得する/100日間/1回目</Text>
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
              <div className="m-info-table__header"></div>
              <br />
              {/* 子育て支援手当区域 */}
              <Heading tag="h3">子育て支援手当</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <Text>受給している/申請者本人/配偶者</Text>
              </FormFieldRow>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 適用制度について説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="適用制度について">
        <Heading tag="h4">ペア転勤制度適用とは</Heading>
        <Text>
          ・申請者本人・配偶者ともに自動解除します。申請は不要です。
          <br />
          ・配偶者は、転居制限を希望する場合、別途、配偶者が「転居制限適用申請書」を提出してください。
        </Text>
        <Heading tag="h4">転居制限制度とは</Heading>
        <Text>・申請者本人自動解除します。申請不要です。</Text>
        <Heading tag="h4">制度適用なしとは</Heading>
        <Text>・手続き不要です。申請不要です。</Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
