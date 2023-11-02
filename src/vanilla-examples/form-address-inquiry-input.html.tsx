import React from 'react';
import { renderVanillaExample } from './render';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow, FormFieldFontSize } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { mapModifiers } from 'design/libs/component';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { InternalButtonLink2 } from 'design/components/atoms/internal-buttonlink';
import { HelpButton } from 'design/components/atoms/help-button';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { Accordion } from 'design/components/molecules/accordion';
import { CaptionList } from 'design/components/atoms/caption-list';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { Icon } from 'design/components/atoms/icon';

const AddressInquiryInputForm: React.FC = () => (
  <html>
    <title>住所届(本人申請)</title>
    {/* <title>住所届(代理申請)</title> */}
    <body>
      <Whole navigation={''}>
        {/* 住所届(本人申請) */}
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
                <Heading tag="h1">住所届(本人申請)</Heading>
                {/* <Heading tag="h1">住所届(代理申請)</Heading> */}
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
                <br />
              </Section>

              {/* 住所届(代理申請) */}
              --------------------------------------------------* 住所届(代理申請) *-------------------------------------
              <Section modifiers="border">
                <HelpButton type="with-children" id="help-opener">を押すと項目の詳しい説明が表示されます。</HelpButton>

                <Heading tag="h3">代理で申請をする方の社員情報</Heading>
                <Accordion label="確認する">
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="社員番号" modifiers="pair">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell label="氏名" modifiers="pair">
                      <span>申請　太郎</span>
                    </InfoTableCell>

                    <InfoTableCell label="会社名称" modifiers="pair">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell label="所属名称" modifiers="pair">
                      <span>社会保険Ｇ</span>
                    </InfoTableCell>

                  </InfoTable>
                </Accordion>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="社員番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField />
                      <Button type="button" modifiers="third" >
                        検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="氏名" className="p-setting-input-form__form-field" >
                    <TextField name="name" type="text" disabled value="山田　佳子" />
                  </FormField>
                  <FormField label="氏名（カナ）" className="p-setting-input-form__form-field" >
                    <TextField name="name" type="text" disabled value="ヤマダ　ヨシコ" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="会社名称" className="p-setting-input-form__form-field" >
                    <TextField name="name" type="text" disabled value="イオンリテール株式会社" />
                  </FormField>
                  <FormField label="所属名称" className="p-setting-input-form__form-field" >
                    <TextField name="name" type="text" disabled value="社会保険Ｇ" />
                  </FormField>
                </FormFieldRow>
              </Section>
              --------------------------------------------------* 住所届(代理申請) *-------------------------------------

              {/* 住所届(本人申請) */}
              ------------------------------------------------------* 住所届(本人申請) *-----------------------------------------
              <Section modifiers="border">
                <HelpButton type="with-children" id="help-opener">を押すと項目の詳しい説明が表示されます。</HelpButton>
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する">
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="社員番号" modifiers="pair">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell label="氏名" modifiers="pair">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                    <InfoTableCell label="氏名（カナ）" modifiers="pair">
                      <span>ヤマダ　タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell label="会社名称" modifiers="pair">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell label="所属名称" modifiers="pair">
                      <span>社会保険Ｇ</span>
                    </InfoTableCell>
                    <InfoTableCell label="" modifiers="pair">
                      <span></span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
              </Section>
              --------------------------------------------------* 住所届(本人申請) *-------------------------------------
              <Section modifiers="border">
                <Heading tag="h3">共通情報</Heading>
                <FormField label="婚姻区分" labelAddons={<HelpButton id="help-opener" />} labelAddons2={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="dependent" value="yes" modifiers="grey">
                      独身者
                    </Radio>
                    <Radio name="dependent" value="no" checked modifiers="grey">
                      既婚者
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <FormField label="入居年月日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                  </FormFieldRow>
                </FormField>

                <FormField label="変更の理由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField label="理由記入欄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※その他を選択の場合は、下記に変更理由を記入してください。
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3"
                      value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                  </FormFieldRow>
                </FormField>

                <FormField label="変更後の状況について" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <Text align="left" className="">
                    変更後の状況を選択して下さい。
                  </Text>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※経済的援助あり単身赴任と答えた方は、決裁がおりてから入力してください。
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="dependent1" value="no" modifiers="grey">
                      家族同居
                    </Radio>
                    <Radio name="dependent1" value="no" modifiers="grey">
                      経済的援助あり単身赴任
                    </Radio>
                    <Radio name="dependent1" value="yes" checked modifiers="grey">
                      経済的援助なし単身赴任
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <FormField label="社宅費・住宅助成金を申請する住居ついて" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <Text align="left" className="">
                    経済的援助なし単身赴任の方にお伺いします。
                  </Text>
                  <Text align="left" className="">
                    社宅費もしくは住宅助成金は「現住居」と「家族住居」のどちらで申請しますか？
                  </Text>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="dependent2" value="yes" modifiers="grey">
                      現住居
                    </Radio>
                    <Radio name="dependent2" value="no" checked modifiers="grey">
                      家族住居
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">現住所情報</Heading>
                <FormField label="変更の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※「変更なし」を選択すると自分が現在登録している内容を確認することができます。内容に変更がない場合は「変更なし」で登録してください。
                      <br />
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="dependent3" value="yes" modifiers="grey">
                      変更あり
                    </Radio>
                    <Radio name="dependent3" value="no" checked modifiers="grey">
                      変更なし
                    </Radio>
                  </FormFieldRow>
                </FormField>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="genjyusyoChange">
                  <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        住所検索ボタンを押下して、市区町村コードを入力してください
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <AddressSearchField
                        id="address-search-field"
                        inputProps={{
                          defaultValue: '',
                        }}
                        buttonProps={{
                          type: 'button',
                        }}
                      />
                    </FormFieldRow>

                  </FormField>
                  <FormField label="市区町村コード" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField name="name" type="text" disabled value="0005" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="美浜１－１－１" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="ミハマイチノイチノイチ" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>

                  <FormField label="連絡の取れる電話番号/携帯番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormField label="電話番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                    <br />
                    <FormField label="携帯番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分記入欄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※その他を選択の場合は、下記に住居区分を記入してください。
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField tag="textarea" type="text" rows="3"
                        value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                    </FormFieldRow>
                  </FormField>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="genjyusyoChangeNoChange">
                  <br />
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="郵便番号" modifiers="pair">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell label="市区町村コード" modifiers="pair">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区" modifiers="pair">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区(カナ)" modifiers="pair">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell label="町村・番地" modifiers="pair">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>

                    <InfoTableCell label="町村・番地(カナ)" modifiers="pair">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号" modifiers="pair">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号(カナ)" modifiers="pair">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="電話番号" modifiers="pair">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="携帯電話" modifiers="pair">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分" modifiers="pair">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分記入欄" modifiers="pair">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">家族住所情報</Heading>
                <FormField label="変更の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※「変更なし」を選択すると自分が現在登録している内容を確認することができます。内容に変更がない場合は「変更なし」で登録してください。
                      <br />
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="Radio0" value="yes" checked modifiers="grey">
                      変更あり
                    </Radio>
                    <Radio name="Radio0" value="no" modifiers="grey">
                      変更なし
                    </Radio>
                  </FormFieldRow>
                </FormField>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="kazokuChange">
                  <FormField label="現住所選択" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Radio name="Radio1" value="yes" checked modifiers="grey">
                        現住所と同じ
                      </Radio>
                      <Radio name="Radio1" value="no" modifiers="grey">
                        現住所と別
                      </Radio>
                      <Radio name="Radio1" value="no" modifiers="grey">
                        家族住所を削除
                      </Radio>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <AddressSearchField
                        id="address-search-field"
                        inputProps={{
                          defaultValue: '',
                        }}
                        buttonProps={{
                          type: 'button',
                        }}
                      />
                    </FormFieldRow>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※検索ボタンを押下して、市区町村コードを入力してください
                      </React.Fragment>
                    </CaptionList>
                  </FormField>
                  <FormField label="市区町村コード" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField name="name" type="text" disabled value="0005" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="美浜１－１－１" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="ミハマイチノイチノイチ" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>

                  <FormField label="連絡の取れる電話番号/携帯番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormField label="電話番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                    <br />
                    <FormField label="携帯番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分記入欄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※その他を選択の場合は、下記に住居区分を記入してください。
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField tag="textarea" type="text" rows="3"
                        value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                    </FormFieldRow>
                  </FormField>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------

                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="kazokuNoChange">
                  <br />
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="郵便番号" modifiers="pair">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell label="市区町村コード" modifiers="pair">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区" modifiers="pair">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区(カナ)" modifiers="pair">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell label="町村・番地" modifiers="pair">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>

                    <InfoTableCell label="町村・番地(カナ)" modifiers="pair">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号" modifiers="pair">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号(カナ)" modifiers="pair">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="電話番号" modifiers="pair">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="携帯電話" modifiers="pair">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分" modifiers="pair">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分記入欄" modifiers="pair">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">社宅・住宅助成金（現住居）確認情報</Heading>
                <FormField label="住居区分" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" disabled value="自己賃貸" />
                  </FormFieldRow>
                </FormField>

                <FormField label="勤務地" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" value="人事G" />
                  </FormFieldRow>
                </FormField>
                <FormField label="広さ" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="20K" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormField label="世帯主" labelAddons={<HelpButton id="help-opener4" />} labelAddons2={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="世帯主" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormField label="同居している所得税扶養者人数" labelAddons={<HelpButton id="help-opener5" />} labelAddons2={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-people" />
                  </FormFieldRow>
                </FormField>

                <FormField label="婚姻区分（扶養家族関連）" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="独身者" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                {/* <FormFieldFontSize label="原籍会社以外から住宅助成金を受けていますか" className="a-text--font-size-14" labelAddons={<Tag>必須</Tag>} > */}
                <FormFieldFontSize label="原籍会社以外から住宅助成金を受けていますか" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="受けていない" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormFieldFontSize>


                <FormField label="住宅助成金" className="p-setting-input-form__form-field"  >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-yen" disabled />
                  </FormFieldRow>
                </FormField>
                <FormField label="社宅費" className="p-setting-input-form__form-field" >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-yen" disabled />
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="アップロードファイル"
                    className="a-upload-lable-display"
                  >
                    <UploadFieldSingle description="形式：任意">
                      ファイルをドラッグ＆ドロップする<br />
                      または
                    </UploadFieldSingle>
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">社宅・住宅助成金（家族住居）確認情報</Heading>
                <FormField label="住居区分" className="p-setting-input-form__form-field" >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" disabled value="自己賃貸" />
                  </FormFieldRow>
                </FormField>

                <FormField label="広さ" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="2DK" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormField label="世帯主" labelAddons={<HelpButton id="help-opener2" />} labelAddons2={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="世帯主" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormField label="同居している所得税扶養者人数" labelAddons={<HelpButton id="help-opener3" />} labelAddons2={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-people" />
                  </FormFieldRow>
                </FormField>

                <FormFieldFontSize label="原籍会社以外から住宅助成金を受けていますか" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="受けていない" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormFieldFontSize>



                <FormField label="住宅助成金" className="p-setting-input-form__form-field"  >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-yen" disabled />
                  </FormFieldRow>
                </FormField>
                <FormField label="社宅費" className="p-setting-input-form__form-field" >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-yen" disabled />
                  </FormFieldRow>
                </FormField>


              </Section>

              <Section modifiers="border">
                <Heading tag="h3">帰省先(緊急連絡先)住所情報</Heading>
                <FormField label="変更の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※「変更なし」を選択すると自分が現在登録している内容を確認することができます。内容に変更がない場合は「変更なし」で登録してください。
                      <br />
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="Radio2" value="yes" checked modifiers="grey">
                      変更あり
                    </Radio>
                    <Radio name="Radio2" value="no" modifiers="grey">
                      変更なし
                    </Radio>
                  </FormFieldRow>
                </FormField>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="kisyosakiChange">
                  <FormField label="現住所選択" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Radio name="Radio3" value="yes" checked>
                        現住所と同じ
                      </Radio>
                      <Radio name="Radio3" value="no" modifiers="grey">
                        現住所と別
                      </Radio>
                      <Radio name="Radio3" value="no" modifiers="grey">
                        帰省先住所を削除
                      </Radio>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        住所検索ボタンを押下して、市区町村コードを入力してください
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="6">

                      <AddressSearchField
                        id="address-search-field"
                        inputProps={{
                          defaultValue: '',
                        }}
                        buttonProps={{
                          type: 'button',
                        }}
                      />
                    </FormFieldRow>

                  </FormField>
                  <FormField label="市区町村コード" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField name="name" type="text" disabled value="0005" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="美浜１－１－１" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="ミハマイチノイチノイチ" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>

                  <FormField label="連絡の取れる電話番号/携帯番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormField label="電話番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                    <br />
                    <FormField label="携帯番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分" labelAddons={<Tag>必須</Tag>} >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分記入欄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※その他を選択の場合は、下記に住居区分を記入してください。
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField tag="textarea" type="text" rows="3"
                        value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                    </FormFieldRow>
                  </FormField>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="kisyosakiNoChange">
                  <br />
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="郵便番号" modifiers="pair">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell label="市区町村コード" modifiers="pair">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区" modifiers="pair">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区(カナ)" modifiers="pair">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell label="町村・番地" modifiers="pair">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>

                    <InfoTableCell label="町村・番地(カナ)" modifiers="pair">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号" modifiers="pair">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号(カナ)" modifiers="pair">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="電話番号" modifiers="pair">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="携帯電話" modifiers="pair">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分" modifiers="pair">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分記入欄" modifiers="pair">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">住民票住所情報</Heading>
                <FormField label="変更の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※「変更なし」を選択すると自分が現在登録している内容を確認することができます。内容に変更がない場合は「変更なし」で登録してください。
                      <br />
                    </React.Fragment>
                  </CaptionList>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="Radio4" value="yes" checked modifiers="grey">
                      変更あり
                    </Radio>
                    <Radio name="Radio4" value="no" modifiers="grey">
                      変更なし
                    </Radio>
                  </FormFieldRow>
                </FormField>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="jyumehyouChange">
                  <FormField label="現住所選択" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Radio name="Radio5" value="yes" checked modifiers="grey">
                        現住所と同じ
                      </Radio>
                      <Radio name="Radio5" value="no" modifiers="grey">
                        現住所と別
                      </Radio>

                    </FormFieldRow>
                  </FormField>
                  <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        住所検索ボタンを押下して、市区町村コードを入力してください
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <AddressSearchField
                        id="address-search-field"
                        inputProps={{
                          defaultValue: '',
                        }}
                        buttonProps={{
                          type: 'button',
                        }}
                      />
                    </FormFieldRow>

                  </FormField>
                  <FormField label="市区町村コード" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <TextField name="name" type="text" disabled value="0005" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="美浜１－１－１" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="ミハマイチノイチノイチ" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField type="text" name="text" value="チバケンチバシミハマク" />
                    </FormFieldRow>
                  </FormField>

                  <FormField label="連絡の取れる電話番号/携帯番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <FormField label="電話番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                    <br />
                    <FormField label="携帯番号" >
                    </FormField>
                    <FormFieldRow columnSize="4" columnSizePC="2">
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                      <TextField type="text" name="text" />
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分" labelAddons={<Tag>必須</Tag>} >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormFieldRow>
                  </FormField>
                  <FormField label="住居区分記入欄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※その他を選択の場合は、下記に住居区分を記入してください。
                      </React.Fragment>
                    </CaptionList>
                    <br />
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField tag="textarea" type="text" rows="3"
                        value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                    </FormFieldRow>
                  </FormField>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="kisyosakiNoChange">
                  <br />
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="郵便番号" modifiers="pair">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell label="市区町村コード" modifiers="pair">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区" modifiers="pair">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell label="都道府県・市郡区(カナ)" modifiers="pair">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell label="町村・番地" modifiers="pair">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>

                    <InfoTableCell label="町村・番地(カナ)" modifiers="pair">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号" modifiers="pair">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell label="建物名・部屋番号(カナ)" modifiers="pair">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell label="電話番号" modifiers="pair">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="携帯電話" modifiers="pair">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分" modifiers="pair">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell label="住居区分記入欄" modifiers="pair">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
              </Section>
            </div>
          </>
        </Modal>

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
              {/* 住所届(本人申請) */}
              --------------------------------------------------* 住所届(代理申請) *-------------------------------------
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">住所届(確認)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
                {/* </Section>
              <Section modifiers="border"> */}
                <Heading tag="h3">代理で申請をする方の社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell label="社員番号" modifiers="pair">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell label="氏名" modifiers="pair">
                    <span>申請　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell label="会社名称" modifiers="pair">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell label="所属名称" modifiers="pair">
                    <span>社会保険Ｇ</span>
                  </InfoTableCell>

                </InfoTable>
              </Section>
              <div className="m-info-table__header"></div>
              <br />
              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="社員番号">
                    <Text align="left">1234567</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="氏名">
                    <Text align="left">山田　佳子</Text>
                  </FormField>
                  <FormField label="氏名（カナ）">
                    <Text align="left">ヤマダ　ヨシコ</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="会社名称">
                    <Text align="left">イオンリテール株式会社</Text>
                  </FormField>
                  <FormField label="所属名称">
                    <Text align="left">社会保険Ｇ</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              --------------------------------------------------* 住所届(代理申請) *-------------------------------------

              {/* 住所届(本人申請) */}
              ------------------------------------------------------* 住所届(本人申請) *-----------------------------------------
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">住所届(確認)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
                <Heading tag="h3">社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell label="社員番号" modifiers="pair">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell label="氏名" modifiers="pair">
                    <span>申請　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell label="氏名（カナ）" modifiers="pair">
                    <span>ヤマダ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell label="会社名称" modifiers="pair">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell label="所属名称" modifiers="pair">
                    <span>社会保険Ｇ</span>
                  </InfoTableCell>
                  <InfoTableCell label="" modifiers="pair">
                    <span></span>
                  </InfoTableCell>
                </InfoTable>
              </Section>

              ------------------------------------------------------* 住所届(本人申請) *-----------------------------------------
              <div className="m-info-table__header"></div>
              <br />
              <Section modifiers="border">
                <Heading tag="h3">共通情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="婚姻区分">
                    <Text align="left">既婚者</Text>
                  </FormField>
                  <FormField label="入居年月日">
                    <Text align="left">2021/09/12</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更の理由">
                    <Text align="left">その他</Text>
                  </FormField>
                  <FormField label="理由記入欄">
                    <Text align="left">あああああああああああああああああああああああああああああああああああああああああ
                      いいいいいい</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更後の状況について">
                    <Text align="left">経済的援助なし単身赴任</Text>
                  </FormField>
                  <FormField label="社宅費・住宅助成金を申請する住居ついて">
                    <Text align="left">現住居</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">現住所情報</Heading>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="変更の有無">
                      <Text align="left">変更あり</Text>
                    </FormField>

                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="郵便番号">
                      <Text align="left">261-0022</Text>
                    </FormField>
                    <FormField label="市区町村コード">
                      <Text align="left">123456</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="都道府県・市郡区">
                      <Text align="left">千葉県千葉市美浜区</Text>
                    </FormField>
                    <FormField label="都道府県・市郡区（カナ）">
                      <Text align="left">チバケンチバシミハマク</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="町村・番地">
                      <Text align="left">美浜１－１－１</Text>
                    </FormField>
                    <FormField label="町村・番地（カナ）">
                      <Text align="left">ミハマイチノイチノイチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="建物名・部屋番号">
                      <Text align="left">美浜１１１</Text>
                    </FormField>
                    <FormField label="建物名・部屋番号（カナ）">
                      <Text align="left">ミハマイチイチチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="電話番号">
                      <Text align="left">090-1234-5678</Text>
                    </FormField>
                    <FormField label="携帯番号">
                      <Text align="left">030-9234-5678</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="住居区分">
                      <Text align="left">その他</Text>
                    </FormField>
                    <FormField label="住居区分記入欄">
                      <Text align="left">あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</Text>
                    </FormField>
                  </FormFieldRow>
                </div>

                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="変更の有無">
                      <Text align="left">変更なし</Text>
                    </FormField>

                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">家族住所情報</Heading>

                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="変更の有無">
                      <Text align="left">変更なし</Text>
                    </FormField>

                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="変更の有無">
                      <Text align="left">変更あり</Text>
                    </FormField>
                    <FormField label="現住所選択">
                      <Text align="left">現住所と別</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="郵便番号">
                      <Text align="left">261-0022</Text>
                    </FormField>
                    <FormField label="市区町村コード">
                      <Text align="left">123456</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="都道府県・市郡区">
                      <Text align="left">千葉県千葉市美浜区</Text>
                    </FormField>
                    <FormField label="都道府県・市郡区（カナ）">
                      <Text align="left">チバケンチバシミハマク</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="町村・番地">
                      <Text align="left">美浜１－１－１</Text>
                    </FormField>
                    <FormField label="町村・番地（カナ）">
                      <Text align="left">ミハマイチノイチノイチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="建物名・部屋番号">
                      <Text align="left">美浜１１１</Text>
                    </FormField>
                    <FormField label="建物名・部屋番号（カナ）">
                      <Text align="left">ミハマイチイチチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="電話番号">
                      <Text align="left">090-1234-5678</Text>
                    </FormField>
                    <FormField label="携帯番号">
                      <Text align="left">030-9234-5678</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="住居区分">
                      <Text align="left">その他</Text>
                    </FormField>
                    <FormField label="住居区分記入欄">
                      <Text align="left">あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</Text>
                    </FormField>
                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">社宅・住宅助成金（現住居）確認情報</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分">
                    <Text align="left">自己賃貸</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="勤務地">
                    <Text align="left">人事G</Text>
                  </FormField>
                  <FormField label="広さ">
                    <Text align="left">2DK</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="世帯主">
                    <Text align="left">世帯主</Text>
                  </FormField>
                  <FormField label="同居している所得税扶養者人数">
                    <Text align="left">0 人</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="婚姻区分（扶養家族関連）">
                    <Text align="left">独身者</Text>
                  </FormField>
                  <FormField label="原籍会社以外から住宅助成金を受けていますか">
                    <Text align="left">受けていない</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住宅助成金">
                    <Text align="left">37,000 円</Text>
                  </FormField>
                  <FormField label="社宅費">
                    <Text align="left">0 円</Text>
                  </FormField>
                </FormFieldRow>

                <FormField label="アップロードファイル">
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text align="left">ファイル名称２.pdf</Text>


                </FormFieldRow>

              </Section>
              <Section modifiers="border">
                <Heading tag="h3">社宅・住宅助成金（家族住居）確認情報</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分">
                    <Text align="left">自己賃貸</Text>
                  </FormField>
                  <FormField label="広さ">
                    <Text align="left">2DK</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="世帯主">
                    <Text align="left">世帯主</Text>
                  </FormField>
                  <FormField label="同居している所得税扶養者人数">
                    <Text align="left">0 人</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="原籍会社以外から住宅助成金を受けていますか">
                    <Text align="left">受けていない</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住宅助成金">
                    <Text align="left">37,000 円</Text>
                  </FormField>
                  <FormField label="社宅費">
                    <Text align="left">0 円</Text>
                  </FormField>
                </FormFieldRow>

              </Section>
              <Section modifiers="border">
                <Heading tag="h3">帰省先(緊急連絡先)住所情報</Heading>

                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="変更の有無">
                      <Text align="left">変更なし</Text>
                    </FormField>

                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="変更の有無">
                      <Text align="left">変更あり</Text>
                    </FormField>
                    <FormField label="現住所選択">
                      <Text align="left">現住所と別</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="郵便番号">
                      <Text align="left">261-0022</Text>
                    </FormField>
                    <FormField label="市区町村コード">
                      <Text align="left">123456</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="都道府県・市郡区">
                      <Text align="left">千葉県千葉市美浜区</Text>
                    </FormField>
                    <FormField label="都道府県・市郡区（カナ）">
                      <Text align="left">チバケンチバシミハマク</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="町村・番地">
                      <Text align="left">美浜１－１－１</Text>
                    </FormField>
                    <FormField label="町村・番地（カナ）">
                      <Text align="left">ミハマイチノイチノイチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="建物名・部屋番号">
                      <Text align="left">美浜１１１</Text>
                    </FormField>
                    <FormField label="建物名・部屋番号（カナ）">
                      <Text align="left">ミハマイチイチチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="電話番号">
                      <Text align="left">090-1234-5678</Text>
                    </FormField>
                    <FormField label="携帯番号">
                      <Text align="left">030-9234-5678</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="住居区分">
                      <Text align="left">その他</Text>
                    </FormField>
                    <FormField label="住居区分記入欄">
                      <Text align="left">あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</Text>
                    </FormField>
                  </FormFieldRow>


                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">住民票住所情報</Heading>

                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="変更の有無">
                      <Text align="left">変更なし</Text>
                    </FormField>

                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更なしの場合 *-------------------------------------
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
                <div id="">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="変更の有無">
                      <Text align="left">変更あり</Text>
                    </FormField>
                    <FormField label="現住所選択">
                      <Text align="left">現住所と別</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="郵便番号">
                      <Text align="left">261-0022</Text>
                    </FormField>
                    <FormField label="市区町村コード">
                      <Text align="left">123456</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="都道府県・市郡区">
                      <Text align="left">千葉県千葉市美浜区</Text>
                    </FormField>
                    <FormField label="都道府県・市郡区（カナ）">
                      <Text align="left">チバケンチバシミハマク</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="町村・番地">
                      <Text align="left">美浜１－１－１</Text>
                    </FormField>
                    <FormField label="町村・番地（カナ）">
                      <Text align="left">ミハマイチノイチノイチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="建物名・部屋番号">
                      <Text align="left">美浜１１１</Text>
                    </FormField>
                    <FormField label="建物名・部屋番号（カナ）">
                      <Text align="left">ミハマイチイチチ</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="電話番号">
                      <Text align="left">090-1234-5678</Text>
                    </FormField>
                    <FormField label="携帯番号">
                      <Text align="left">030-9234-5678</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="住居区分">
                      <Text align="left">その他</Text>
                    </FormField>
                    <FormField label="住居区分記入欄">
                      <Text align="left">あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</Text>
                    </FormField>
                  </FormFieldRow>
                </div>
                --------------------------------------------------* 変更ありの場合 *-------------------------------------
              </Section>



            </div>
          </>
        </Modal>

        <Modal id="modal-help" headerIcon="help" title="世帯主とは？">
          <Heading tag="h4">世帯主(せたいぬし)とは</Heading>
          <Text>「世帯主」は家計の主たる生計（その家計の５０％以上）を維持するものを世帯主とします。</Text>
        </Modal>
        <Modal id="modal-help2" headerIcon="help" title="世帯主とは？">
          <Heading tag="h4">世帯主(せたいぬし)とは</Heading>
          <Text>「世帯主」は家計の主たる生計（その家計の５０％以上）を維持するものを世帯主とします。</Text>
        </Modal>
        <Modal id="modal-help3" headerIcon="help" title="同居している所得税扶養者数とは？">
          <Heading tag="h4">同居している所得税扶養者数とは</Heading>
          <Text>「同居している所得税扶養者数」は申請者が所得税法上に扶養している人数とします。</Text>
        </Modal>
      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<AddressInquiryInputForm />);
