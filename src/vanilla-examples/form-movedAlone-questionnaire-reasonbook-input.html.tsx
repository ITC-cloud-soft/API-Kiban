import React from 'react';
import { renderVanillaExample } from './render';
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
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
import { InternalButtonLink, InternalButtonLink2 } from 'design/components/atoms/internal-buttonlink';
import { HelpButton } from 'design/components/atoms/help-button';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { Accordion } from 'design/components/molecules/accordion';
import { CaptionList } from 'design/components/atoms/caption-list';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { Icon } from 'design/components/atoms/icon';
import { VisitRecordListCustNoAddButton } from 'design/components/organisms/visit-record-list-cust';

const MovedAloneQuestionnaireApplicationinput: React.FC = () => (
  <html>
    <title>介護による経済的援助適用申請理由書</title>

    <body>
      <Whole navigation={''}>
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
                PDF作成
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">介護による経済的援助適用申請理由書</Heading>

                <Text>
                  ※税法上の扶養家族及び同居の場合であっても、根本的に転居できないのであれば　介護事由の認定になりません。
                </Text>
                <br />
              </Section>
              <br />

              <Heading tag="h3">申請社員情報</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号" >
                  <TextField name="name" type="text" disabled value="1234567" />
                </FormField>
                <FormField label="氏名"  >
                  <TextField name="name" type="text" disabled value="申請　太郎" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="新所属名称" labelAddons={<Tag>必須</Tag>}>
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField name="name" type="text" disabled value="イオンモール沖縄ランカムイ" />
                    <Button type="button" modifiers="third" >
                      所属検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">介護対象情報</Heading>

              <FormField label="対象家族" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqr1" value="no" checked modifiers="grey">
                    父　申請　正銘
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqr1" value="no" modifiers="grey">
                    配偶者　申請　花子
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqr1" value="yes" modifiers="grey">
                    長男　申請　太郎
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqr1" value="yes" modifiers="grey">
                    上記に該当する家族がいない
                  </Radio>
                </FormFieldRow>  <br />
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名"  >
                  <TextField name="name" type="text" disabled value="申請　正銘" />
                </FormField>
                <FormField label="続柄"  >
                  <TextField name="name" type="text" disabled value="父" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="生年月日"

                >
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2008-03-26T20:44:23.000Z')}
                    onDateChange={() => { }}
                  />
                </FormField>

                <FormField label="年齢"  >
                  <UnitTextField unit="unit-age" disabled />
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="事由対象者氏名" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" disabled value="申請　正銘" />
                </FormField>

                <FormField label="事由対象者続柄" labelAddons={<Tag>必須</Tag>}>
                  <Pulldown id="contel-start-time" placeholder="祖母（実・義）" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>

              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="生年月日"
                  labelAddons={<Tag>必須</Tag>}>

                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2008-03-26T20:44:23.000Z')}
                    onDateChange={() => { }}
                  />
                </FormField>

                <FormField label="年齢"  >
                  <UnitTextField unit="unit-age" disabled />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号" >
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField name="name" type="text" value="901-2306" />
                    <Button type="button" modifiers="third" >
                      住所検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>

              <InternalButtonLink2 icon="unit-post" className="m-form-field a-text--align-left m-accordion__label" id="detailed1" >
                郵便番号の検索サイトはこちら
              </InternalButtonLink2>
              <br />
              <FormField label="都道府県・市郡区"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" value="沖縄県中頭郡" />
                </FormFieldRow>
              </FormField>

              <FormField label="町村・番地"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" value="中城村ライカム１−番地" />
                </FormFieldRow>
              </FormField>

              <FormField label="建物名・部屋番号"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">

                <FormField label="単身赴任先まで移動手段" >
                  <Pulldown id="contel-start-time" placeholder="バス" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="単身赴任先まで所要時間" className="p-setting-input-form__form-field"  >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-hour" />
                    <UnitTextField unit="unit-minute" />
                  </FormFieldRow>

                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">

                <FormField label="居住場所" >
                  <Pulldown id="contel-start-time" placeholder="配偶者と同居" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>

              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />


              <Heading tag="h3">施設利用状況</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="デイサービス利用（週）"
                >
                  <UnitTextField unit="times" />
                </FormField>

                <FormField label="介護ヘルパー利用（週）"  >
                  <UnitTextField unit="times" />
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="訓練施設等の利用（週）"
                >
                  <UnitTextField unit="times" />
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">介護者・保護者状況</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名"  >
                  <TextField name="name" type="text" disabled value="申請　正銘" />
                </FormField>
                <FormField label="続柄"  >
                  <TextField name="name" type="text" disabled value="父" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="生年月日"

                >
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2008-03-26T20:44:23.000Z')}
                    onDateChange={() => { }}
                  />
                </FormField>

                <FormField label="年齢"  >
                  <UnitTextField unit="unit-age" disabled />
                </FormField>

              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号" >
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField name="name" type="text" value="901-2306" />
                    <Button type="button" modifiers="third" >
                      住所検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>

              <InternalButtonLink2 icon="unit-post" className="m-form-field a-text--align-left m-accordion__label" id="detailed1" >
                郵便番号の検索サイトはこちら
              </InternalButtonLink2>
              <br />
              <FormField label="都道府県・市郡区"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" value="沖縄県中頭郡" />
                </FormFieldRow>
              </FormField>

              <FormField label="町村・番地"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" value="中城村ライカム１−番地" />
                </FormFieldRow>
              </FormField>

              <FormField label="建物名・部屋番号"  >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">

                <FormField label="対象者宅まで移動手段" >
                  <Pulldown id="contel-start-time" placeholder="徒歩" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="対象者まで所要時間" className="p-setting-input-form__form-field" >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField unit="unit-hour" />
                    <UnitTextField unit="unit-minute" />
                  </FormFieldRow>

                </FormField>

              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">介護・介助状況</Heading>

              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    通院の付添
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    食品の買い出し
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    居室の掃除
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    食事の準備
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>

              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    家の中での移動補助
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    着替えの補助
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>

              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    食事の補助
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>

              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    入浴の介助
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>


              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    整髪・洗髪
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>

              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    問題行動があり、常に見守りが必要
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="該当有無" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="有" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField
                      label="頻度（週）" className="p-setting-input-form__form-field"
                    >
                      <UnitTextField unit="times" />
                    </FormField>
                  </FormFieldRow>


                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField className="p-setting-input-form__form-field"
                      label="時間（回）"
                    >
                      <UnitTextField unit="unit-hour" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />


              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="1週間の訪問回数" className="p-setting-input-form__form-field"
                >
                  <UnitTextField unit="times" />
                </FormField>
              </FormFieldRow>

              <FormField label="介護・介護状況に上記以外にある場合は、記入して下さい。"  >

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>

              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">その他</Heading>
              <Text>
                配偶者以外に介護義務がある方について記入して下さい。 <br />
                &nbsp; &nbsp;介護義務がある方とは、対象者が（義）親の場合、対象者の配偶者・子です。  <br />
                &nbsp; &nbsp;対象者と同居している方についても、ご記入ください。
              </Text>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    介助者1
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="氏名" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="介助　智子" />
                    </FormField>
                    <FormField label="続柄" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="妻" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12" >
                    <FormField label="介護できない理由" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="高齢のため（60歳）" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    介助者2
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="氏名" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="介助　智子" />
                    </FormField>
                    <FormField label="続柄" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="妻" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="介護できない理由" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="高齢のため（60歳）" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>

              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    介助者3
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="氏名" className="p-setting-input-form__form-field">
                      <TextField name="name" type="text" disabled value="介助　智子" />
                    </FormField>
                    <FormField label="続柄" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="妻" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="介護できない理由" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="高齢のため（60歳）" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    介助者4
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="氏名" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="介助　智子" />
                    </FormField>
                    <FormField label="続柄" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="妻" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="介護できない理由" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="高齢のため（60歳）" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCustNoAddButton

                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    介助者5
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="氏名" className="p-setting-input-form__form-field"  >
                      <TextField name="name" type="text" disabled value="介助　智子" />
                    </FormField>
                    <FormField label="続柄" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="妻" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="介護できない理由" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" disabled value="高齢のため（60歳）" />
                    </FormField>
                  </FormFieldRow>

                </Section>
              </VisitRecordListCustNoAddButton>







              <br />










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

export default renderVanillaExample(<MovedAloneQuestionnaireApplicationinput />);
