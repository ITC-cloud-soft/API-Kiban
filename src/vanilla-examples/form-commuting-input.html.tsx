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
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { ButtonContainer } from 'design/components/molecules/button-container';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Icon } from 'design/components/atoms/icon';
import { Pagination } from 'design/components/atoms/pagination';
import { DataTable } from 'design/components/molecules/data-table';
import { CustItemButton } from 'design/components/atoms/cust-item-button';
import { UploadField } from 'design/components/atoms/upload-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { HelpButton } from 'design/components/atoms/help-button';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { mapModifiers } from 'design/libs/component';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';
import { TextLink } from 'design/components/atoms/text-link';
import { Price } from 'design/components/atoms/price';
import { VisitRecordListCust } from 'design/components/organisms/visit-record-list-cust';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { WithInstruction } from 'design/components/molecules/form-field/index.stories';

const CommutingInputForm: React.FC = () => (
  <html>
    <title>通勤許可申請</title>
    <body>
      <Whole navigation={''}>
        {/* 通勤許可申請_アンケート画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-questionnaire"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="questionnaire-form-check-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">通勤許可申請</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />　
                </Text>
              </Section>
              <br />
              {/* 事前アンケート区域 */}
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              {/* 申請を実施する前に（事前アンケート）区域 */}
              <Heading tag="h3">申請を実施する前に（事前アンケート）</Heading>
              <Text className="a-text-tag">まず、申請を実施する前に、事前アンケートに回答をお願いします。</Text>
              <FormField
                label={
                  <Text className="a-text-tag">
                    １、今回の申請理由を以下から選択してください。（複数選択不可）
                    <Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Radio name="reason" value="1" modifiers="grey">
                    ①入社、その他の理由で、初めて通勤費情報を登録する。
                  </Radio>
                  <Radio name="reason" value="2" modifiers="grey">
                    ②人事異動その他の理由により転居をした。
                  </Radio>
                  <Radio name="reason" value="3" modifiers="grey">
                    ③転居はしていないが、通勤方法を変更した。
                  </Radio>
                  <Radio name="reason" value="4" modifiers="grey">
                    ④休職終了等により復職をするために、通勤方法を再登録する。
                  </Radio>
                  <Radio name="reason" value="5" modifiers="grey">
                    ⑤利用交通機関の通勤費が値上げ・値下げになる。
                  </Radio>
                  <Radio name="reason" value="6" modifiers="grey">
                    ⑥マイカー通勤に使用する車体を変更する。
                  </Radio>
                  <Radio name="reason" value="7" modifiers="grey">
                    ⑦通勤方法や通勤費（金額）に変更はないが、現在登録している運転免許証・任意保険の情報が変更になった。
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    ２、今回登録する予定の新しい通勤方法について、以下から当てはまるものを選択してください。（複数選択可）
                    <Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="method" value="A" modifiers="button">
                    A．公共交通機関
                  </Checkbox>
                  <Checkbox name="method" value="B" modifiers="button">
                    B．マイカー
                  </Checkbox>
                  <Checkbox name="method" value="C" modifiers="button">
                    C．バイク（50cc超え）
                  </Checkbox>
                  <Checkbox name="method" value="D" modifiers="button">
                    D．原動機付自転車
                  </Checkbox>
                  <Checkbox name="method" value="E" modifiers="button">
                    E．自転車
                  </Checkbox>
                  <Checkbox name="method" value="F" modifiers="button">
                    F．徒歩
                  </Checkbox>
                </FormFieldRow>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    ３、支給方法について、以下から当てはまるものを選択してください。
                    <Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Radio name="payment-method" value="1" modifiers="grey">
                    通常支給
                  </Radio>
                  <Radio name="payment-method" value="2" modifiers="grey">
                    出社実績精算（テレワーク対象者はこちらを選択してください。）
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    ４、上記で　②を選択した方にお伺いします。住所届の申請は完了しましたか。
                    <Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Radio name="when-applied" value="a" modifiers="grey">
                    a. 完了している（昨日以前に実施した）
                  </Radio>
                  <Radio name="when-applied" value="b" modifiers="grey">
                    b. 完了している（本日実施した）
                  </Radio>
                  <Radio name="when-applied" value="c" modifiers="grey">
                    c. まだ申請していない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    ５、上記で　bまたはcを選択した方は、以下の欄に新住所を入力してください。（この情報は本申請のためにのみ利用しますので、住所届は別途実施下さい）
                    <Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
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
                </FormField>
                <FormField
                  label="都道府県・市郡区"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="町村・番地"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="美浜１－１－１" />
                  </FormFieldRow>
                </FormField>
                <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="チバケンチバシミハマク" />
                  </FormFieldRow>
                </FormField>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    ※住所届を実施する方へのご案内文（追加予定）
                    <span id="address-help">
                      <Icon name="help" />
                    </span>
                  </Text>
                }
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  　
                </FormFieldRow>
              </FormField>
              <FormField
                label={
                  <Text className="a-text-tag">
                    上記のアンケート回答に誤りはありませんか？<Tag>必須</Tag>
                  </Text>
                }
                className="p-setting-input-form__form-field"
              >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="questionnaire-confirm" value="y">
                    内容を確認しましたので、申請に進みます
                  </Checkbox>
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 通勤許可申請_インプット画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-form-to-front-button">
                前へ
              </Button>
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
                <Heading tag="h1">通勤許可申請</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />　
                </Text>
              </Section>
              {/* 代理申請社員情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">代理で申請をする方の社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="所属">
                      <span>津田沼店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
              </Section>
              {/* 通勤許可を申請する方の社員情報 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤許可を申請する方の社員情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="社員番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField />
                      <Button type="button" modifiers="third">
                        社員検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="名前" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="開発　一郎" />
                  </FormField>
                  <FormField label="会社コード" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="0005" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="会社名称" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="イオンリテール株式会社" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="所属コード" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="12345" />
                  </FormField>
                  <FormField label="所属名称" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" disabled value="習志野店" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="連絡先" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="ichi-kaihatsu@aeonpeople.biz" />
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 本人申請社員情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="所属">
                      <span>津田沼店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="連絡先" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="ichi-kaihatsu@aeonpeople.biz" />
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">申請理由</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="あなたの選択した変更理由" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="②人事異動その他の理由により転居をした。" />
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">通勤情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="旧住所（変更前）" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="〒330-0031　埼玉県川口市青木1-5" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="新住所（変更後）" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="〒201-0001　東京都狛江市西野川1-25" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="旧通勤方法（変更前）" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" value="公共交通機関" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="新通勤方法（変更後）" className="p-setting-input-form__form-field">
                    <TextField name="name" tag="textarea" type="text" rows={3} />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="新通勤方法開始日"
                    labelAddons={<Tag>必須</Tag>}
                    className="p-setting-input-form__form-field"
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormField label="">
                  <EmailTemplateViewer>
                    <Heading tag="h3">注意事項</Heading>
                    <p>■居住地から会社までの順に経済的最短距離で記入ください。</p>
                    <p>■不正記入、記入もれ等の場合は手当を支給しないことがあります。</p>
                    <p>■申請通期費に変更が生じた場合は必ずその都度申請をしてください。</p>
                  </EmailTemplateViewer>
                </FormField>
              </Section>
              {/* 通勤情報詳細－公共交通機関区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－公共交通機関</Heading>
                <VisitRecordListCust
                  onAddRequested={() => {}}
                  onRemoveRequested={function noRefCheck() {}}
                  templateInput={
                    <>
                      <Section className="p-setting-input-form__body">
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="交通機関" className="p-setting-input-form__form-field">
                            <TextField name="name" type="text" disabled value="電車" />
                          </FormField>
                          <FormField label="区間" className="p-setting-input-form__form-field">
                            <TextField name="name" type="text" disabled value="東京～千葉" />
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="片道通勤距離" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="39.2" name="text" disabled type="text" unit="unit-km" />
                          </FormField>
                          <FormField label="1日往復運賃" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="650" name="text" disabled type="text" unit="unit-yen" />
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="1ヶ月定期代" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="19,430" name="text" disabled type="text" unit="unit-yen" />
                          </FormField>
                          <FormField label="6ヶ月定期代" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="93,270" name="text" disabled type="text" unit="unit-yen" />
                          </FormField>
                        </FormFieldRow>
                      </Section>
                    </>
                  }
                  titles={<>経路1</>}
                  addText="電車経路の追加（駅すぱあとから経路取込）"
                >
                  <Section className="p-setting-input-form__body">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="交通機関" className="p-setting-input-form__form-field">
                        <TextField name="name" type="text" disabled value="電車" />
                      </FormField>
                      <FormField label="区間" className="p-setting-input-form__form-field">
                        <TextField name="name" type="text" disabled value="東京～千葉" />
                      </FormField>
                    </FormFieldRow>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="片道通勤距離" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="39.2" name="text" disabled type="text" unit="unit-km" />
                      </FormField>
                      <FormField label="1日往復運賃" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="650" name="text" disabled type="text" unit="unit-yen" />
                      </FormField>
                    </FormFieldRow>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="1ヶ月定期代" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="19,430" name="text" disabled type="text" unit="unit-yen" />
                      </FormField>
                      <FormField label="6ヶ月定期代" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="93,270" name="text" disabled type="text" unit="unit-yen" />
                      </FormField>
                    </FormFieldRow>
                  </Section>
                </VisitRecordListCust>
                <br />
                <VisitRecordListCust
                  onAddRequested={() => {}}
                  onRemoveRequested={function noRefCheck() {}}
                  templateInput={
                    <>
                      <Section className="p-setting-input-form__body">
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="交通機関" className="p-setting-input-form__form-field">
                            <TextField name="name" type="text" value="バス（千葉交通）" />
                          </FormField>
                          <FormField label="区間" className="p-setting-input-form__form-field">
                            <div className="a-date-range-field undefined">
                              <TextField name="name" type="text" value="千葉" />
                              <span className="a-date-range-field__line">~</span>
                              <TextField name="name" type="text" value="成田" />
                            </div>
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="片道通勤距離" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                          </FormField>
                          <FormField label="1日往復運賃" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="150" name="text" type="text" unit="unit-yen" />
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="1ヶ月定期代" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="4,430" name="text" type="text" unit="unit-yen" />
                          </FormField>
                          <FormField label="6ヶ月定期代" className="p-setting-input-form__form-field">
                            <UnitTextField defaultValue="22,330" name="text" type="text" unit="unit-yen" />
                          </FormField>
                        </FormFieldRow>
                      </Section>
                    </>
                  }
                  titles={<>経路2</>}
                  addText="電車以外経路の追加（手入力）"
                >
                  <Section className="p-setting-input-form__body">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="交通機関" className="p-setting-input-form__form-field">
                        <TextField name="name" type="text" value="バス（千葉交通）" />
                      </FormField>
                      <FormField label="区間" className="p-setting-input-form__form-field">
                        <div className="a-date-range-field undefined">
                          <TextField name="name" type="text" value="千葉" />
                          <span className="a-date-range-field__line">~</span>
                          <TextField name="name" type="text" value="成田" />
                        </div>
                      </FormField>
                    </FormFieldRow>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="片道通勤距離" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                      </FormField>
                      <FormField label="1日往復運賃" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="150" name="text" type="text" unit="unit-yen" />
                      </FormField>
                    </FormFieldRow>
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="1ヶ月定期代" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="4,430" name="text" type="text" unit="unit-yen" />
                      </FormField>
                      <FormField label="6ヶ月定期代" className="p-setting-input-form__form-field">
                        <UnitTextField defaultValue="22,330" name="text" type="text" unit="unit-yen" />
                      </FormField>
                    </FormFieldRow>
                  </Section>
                </VisitRecordListCust>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="距離合計" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="57.9" name="text" disabled type="text" unit="unit-km" />
                  </FormField>
                  <FormField label="1日往復運賃合計" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="800" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="1ヶ月定期代合計" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="23,860" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                  <FormField label="6ヶ月定期代合計" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="115,600" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－マイカー区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－マイカー</Heading>
                <Heading tag="h4">車両情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">例）千葉　530　あ　1234</React.Fragment>
                      </CaptionList>
                    }
                    label="登録番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className="a-date-range-field undefined">
                      <TextField name="name" type="text" value="千葉" />
                      <span>　</span>
                      <TextField name="name" type="text" value="530" />
                      <span>　</span>
                      <TextField name="name" type="text" value="あ" />
                      <span>　</span>
                      <TextField name="name" type="text" value="1234" />
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">例）カローラ</React.Fragment>
                      </CaptionList>
                    }
                    label="車名"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="カローラ" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="塗色" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField name="name" type="text" value="黄色" />
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">運転免許証</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="取得年月日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          下記日付まで有効
                          <br />
                          ※令和の場合は2018を加算し、平成の場合は1988を加算し西歴を求めてください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="更新日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="種類" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <Pulldown id="contel-start-time" placeholder="普通免許" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="普通免許">普通免許</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="運転免許証番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="123456" name="text" type="text" unit="unit-go" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        必要証明書をアップロードして下さい。
                        <br />
                        <ModalOpener id="modal-opener">運転免許証のハードコピーの参考例</ModalOpener>
                      </Text>
                    }
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12"></FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="運転免許証表面"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="運転免許証裏面"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">自動車保険（任意）</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">例）三井住友海上火災</React.Fragment>
                      </CaptionList>
                    }
                    label="保険会社名"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="三井住友海上火災" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="保険の種類"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown id="contel-start-time" placeholder="普通免許" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="普通免許">普通免許</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="証券番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="保険金額（対人賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown id="contel-start-time" placeholder="無制限" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="無制限">無制限</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">※金額入力または、無制限にチェックしてください</React.Fragment>
                      </CaptionList>
                    }
                    label="保険金額（対物賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="115,600" name="text" type="text" unit="unit-manyen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="questionnaire-confirm" value="y">
                    無制限（対物賠償）
                  </Checkbox>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※人身傷害に加入している場合は、高いほうの金額を搭乗者傷害欄に入力してください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="保険金額（搭乗者賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="115,600" name="text" type="text" unit="unit-manyen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="questionnaire-confirm" value="y">
                    無制限（搭乗者賠償）
                  </Checkbox>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="出張期間" labelAddons={<Tag>必須</Tag>}>
                    <DateRangeField />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        必要証明書をアップロードして下さい。
                        <br />
                        <ModalOpener id="modal-opener">保険証のハードコピーの参考例</ModalOpener>
                      </Text>
                    }
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12"></FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="保険証１"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="保険証２" className="p-setting-input-form__form-field">
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">通勤手当</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※距離は100m単位で入力してください。
                          <br />
                          例）13,600mの場合、13.6と入力します。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="片道通勤距離（経済的最短）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                      <Button type="button" modifiers="third">
                        GoogleMap
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="片道所要時間（約）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="6" name="text" type="text" unit="unit-minute" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="通勤手当（月額）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">駐車料金</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※会社契約の社外駐車料金は店舗管理者に確認してください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="駐車場区分"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown id="contel-start-time" placeholder="" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="駐車料金"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="上限値額" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="付加額" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="マイカー通勤希望理由"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown
                      id="contel-start-time"
                      placeholder="公共交通機関の運転が終了、または６０分に１本程度のため"
                      name="contel-start-time"
                    >
                      <React.Fragment key=".0">
                        <option value="公共交通機関の運転が終了、または６０分に１本程度のため">
                          公共交通機関の運転が終了、または６０分に１本程度のため
                        </option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <CaptionList>
                    <React.Fragment key=".0">※その事由をご記入ください。</React.Fragment>
                  </CaptionList>
                  <TextField name="name" tag="textarea" type="text" rows={4} />
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="誓約書" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <Checkbox name="method" value="y">
                      この度、私は、マイカーによる通勤を申請いたします。
                      <br />
                      通勤中の安全運転の施行、ならびに、会社の定めるマイカー・バイクに関する通勤管理規定を遵守することを誓約いたします。
                    </Checkbox>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－バイク（原動機付自転車を含む）区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－バイク（原動機付自転車を含む）</Heading>
                <Heading tag="h4">車両情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          例１：ナンバープレートが「１千葉 あ 1234」の場合
                          <br />
                          →「千葉」　「1」　「あ」　「1234」と入力。
                          <br />
                          （左から2番目のボックスに分類番号を入力してください。）
                          <br />
                          例２：ナンバープレートが「千葉 あ 1234」の場合
                          <br />
                          →「千葉」　「（ブランク）」　「あ」　「1234」と入力。
                          <br />
                          　分類番号の数字の記載がない場合は、左から2番目のボックスを空欄にしてください。
                          <br />
                          ※３つ目のボックスはひらがなで入力してください。
                          <br />
                          ※数字は半角で入力してください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="登録番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className="a-date-range-field undefined">
                      <TextField name="name" type="text" value="千葉" />
                      <span>　</span>
                      <TextField name="name" type="text" value="" />
                      <span>　</span>
                      <TextField name="name" type="text" value="あ" />
                      <span>　</span>
                      <TextField name="name" type="text" value="1234" />
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">例）ホンダ</React.Fragment>
                      </CaptionList>
                    }
                    label="車名"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="ホンダ" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="塗色" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField name="name" type="text" value="黄色" />
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">運転免許証</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="取得年月日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          下記日付まで有効
                          <br />
                          ※令和の場合は2018を加算し、平成の場合は1988を加算し西歴を求めてください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="更新日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="種類" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <Pulldown id="contel-start-time" placeholder="普通免許" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="普通免許">普通免許</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="運転免許証番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="123456" name="text" type="text" unit="unit-go" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        必要証明書をアップロードして下さい。
                        <br />
                        <ModalOpener id="modal-opener">運転免許証のハードコピーの参考例</ModalOpener>
                      </Text>
                    }
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12"></FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="運転免許証表面"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="運転免許証裏面"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">バイク/原付保険（任意）</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">例）三井住友海上火災</React.Fragment>
                      </CaptionList>
                    }
                    label="保険会社名"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="三井住友海上火災" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="保険の種類"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown id="contel-start-time" placeholder="普通免許" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="普通免許">普通免許</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="証券番号"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField name="name" type="text" value="" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="保険金額（対人賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown id="contel-start-time" placeholder="無制限" name="contel-start-time">
                      <React.Fragment key=".0">
                        <option value="無制限">無制限</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">※金額入力または、無制限にチェックしてください</React.Fragment>
                      </CaptionList>
                    }
                    label="保険金額（対物賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="115,600" name="text" type="text" unit="unit-manyen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="questionnaire-confirm" value="y">
                    無制限（対物賠償）
                  </Checkbox>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※人身傷害に加入している場合は、高いほうの金額を搭乗者傷害欄に入力してください。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="保険金額（搭乗者賠償）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="115,600" name="text" type="text" unit="unit-manyen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Checkbox name="questionnaire-confirm" value="y">
                    無制限（搭乗者賠償）
                  </Checkbox>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="出張期間" labelAddons={<Tag>必須</Tag>}>
                    <DateRangeField />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        必要証明書をアップロードして下さい。
                        <br />
                        <ModalOpener id="modal-opener">保険証のハードコピーの参考例</ModalOpener>
                      </Text>
                    }
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12"></FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="保険証１"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="保険証２" className="p-setting-input-form__form-field">
                    <UploadField description="形式：任意">
                      ファイルをドラッグ＆ドロップする
                      <br />
                      または
                    </UploadField>
                  </FormField>
                </FormFieldRow>
                <Heading tag="h4">通勤手当</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※距離は100m単位で入力してください。
                          <br />
                          例）13,600mの場合、13.6と入力します。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="片道通勤距離（経済的最短）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                      <Button type="button" modifiers="third">
                        GoogleMap
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="片道所要時間（約）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="6" name="text" type="text" unit="unit-minute" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="通勤手当（月額）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="駐車料金"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="上限値額" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="付加額" className="p-setting-input-form__form-field">
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="バイク通勤希望理由"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <Pulldown
                      id="contel-start-time"
                      placeholder="公共交通機関の運転が終了、または６０分に１本程度のため"
                      name="contel-start-time"
                    >
                      <React.Fragment key=".0">
                        <option value="公共交通機関の運転が終了、または６０分に１本程度のため">
                          公共交通機関の運転が終了、または６０分に１本程度のため
                        </option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <CaptionList>
                    <React.Fragment key=".0">※その事由をご記入ください。</React.Fragment>
                  </CaptionList>
                  <TextField name="name" tag="textarea" type="text" rows={4} />
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="誓約書" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <Checkbox name="method" value="y">
                      この度、私は、バイクによる通勤を申請いたします。
                      <br />
                      通勤中の安全運転の施行、ならびに、会社の定めるマイカー・バイクに関する通勤管理規定を遵守することを誓約いたします。
                    </Checkbox>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－自転車区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－自転車</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※距離は100m単位で入力してください。
                          <br />
                          例）13,600mの場合、13.6と入力します。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="片道通勤距離（経済的最短）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                      <Button type="button" modifiers="third">
                        GoogleMap
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="通勤手当（月額）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <UnitTextField defaultValue="30,000" name="text" disabled type="text" unit="unit-yen" />
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－徒歩区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－徒歩</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    instruction={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※距離は100m単位で入力してください。
                          <br />
                          例）13,600mの場合、13.6と入力します。
                        </React.Fragment>
                      </CaptionList>
                    }
                    label="片道通勤距離（経済的最短）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField defaultValue="18.7" name="text" type="text" unit="unit-km" />
                      <Button type="button" modifiers="third">
                        GoogleMap
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
              </Section>
            </div>
          </>
        </Modal>
        {/* 通勤許可申請_PC_確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge" id="confirm-app-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                承認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">通勤許可申請</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 代理申請社員情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">代理で申請をする方の社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="所属">
                      <span>津田沼店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
                <br />
                {/* 通勤許可を申請する方の社員情報区域 */}
                <Heading tag="h3">通勤許可を申請する方の社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="所属">
                      <span>津田沼店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="連絡先" className="p-setting-input-form__form-field">
                    <Text align="left">ichi-kaihatsu@aeonpeople.biz</Text>
                  </FormField>
                </FormFieldRow>
                {/* 本人申請社員情報区域 */}
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="所属">
                      <span>津田沼店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>申請　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="連絡先" className="p-setting-input-form__form-field">
                    <Text align="left">ichi-kaihatsu@aeonpeople.biz</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 申請理由区域 */}
              <Section modifiers="border">
                <Heading tag="h3">申請理由</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="あなたの選択した変更理由" className="p-setting-input-form__form-field">
                    <Text align="left">②　人事異動その他の理由により転居した</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 支給方法区域 */}
              <Section modifiers="border">
                <Heading tag="h3">支給方法</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="あなたの選択した支給方法" className="p-setting-input-form__form-field">
                    <Text align="left">通常支給</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="旧住所（変更前）" className="p-setting-input-form__form-field">
                    <Text align="left">〒330-0031　埼玉県川口市青木1-5</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="新住所（変更後）" className="p-setting-input-form__form-field">
                    <Text align="left">〒201-0001　東京都狛江市西野川1-25</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="旧通勤方法（変更前）" className="p-setting-input-form__form-field">
                    <Text align="left">公共交通機関</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="新通勤方法（変更後）" className="p-setting-input-form__form-field">
                    <Text align="left">
                      A. 公共交通機関
                      <br />
                      B. マイカー
                      <br />
                      C. バイク（50cc超え）
                    </Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="新通勤方法開始日" className="p-setting-input-form__form-field">
                    <Text align="left">2021/07/12</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－公共交通機関区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－公共交通機関</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTable header="経路情報">
                    <InfoTableCell>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">経路1</Text>
                        <span className="a-alert__text a-text--align-right"></span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">交通機関</Text>
                        <span className="a-alert__text a-text--align-right">電車</span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">区間</Text>
                        <span className="a-alert__text a-text--align-right">東京～千葉</span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">片道通勤距離</Text>
                        <Price unit="km" modifiers="total-mid-rgt">
                          39.2
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">1日往復運賃</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          650
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">1ヶ月定期代</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          19,430
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">6ヶ月定期代</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          93,270
                        </Price>
                      </FormFieldRow>
                    </InfoTableCell>
                    <InfoTableCell>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">経路2</Text>
                        <span className="a-alert__text a-text--align-right"></span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">交通機関</Text>
                        <span className="a-alert__text a-text--align-right">バス（千葉交通）</span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">区間</Text>
                        <span className="a-alert__text a-text--align-right">千葉～成田</span>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">片道通勤距離</Text>
                        <Price unit="km" modifiers="total-mid-rgt">
                          18.7
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">1日往復運賃</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          150
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">1ヶ月定期代</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          4,430
                        </Price>
                      </FormFieldRow>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Text align="left">6ヶ月定期代</Text>
                        <Price unit="円" modifiers="total-mid-rgt">
                          22,330
                        </Price>
                      </FormFieldRow>
                    </InfoTableCell>
                  </InfoTable>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="距離合計" className="p-setting-input-form__form-field">
                    <Text align="left">57.9 km</Text>
                  </FormField>
                  <FormField label="1日往復運賃合計" className="p-setting-input-form__form-field">
                    <Text align="left">800 円</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="1ヶ月定期代合計" className="p-setting-input-form__form-field">
                    <Text align="left">23,860 円</Text>
                  </FormField>
                  <FormField label="6ヶ月定期代合計" className="p-setting-input-form__form-field">
                    <Text align="left">115,600 円</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－マイカー区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－マイカー</Heading>
                <InfoTableNone header="車両情報">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="登録番号">
                      <Text align="left">千葉　530　あ　1234</Text>
                    </FormField>
                    <FormField label="車名">
                      <Text align="left">カローラ</Text>
                    </FormField>
                    <FormField label="塗色">
                      <Text align="left">黄色</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="運転免許証">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="取得年月日">
                      <Text align="left">2000/02/12</Text>
                    </FormField>
                    <FormField label="更新日">
                      <Text align="left">2000/02/12</Text>
                    </FormField>
                    <FormField label="種類">
                      <Text align="left">普通免許</Text>
                    </FormField>
                    <FormField label="運転免許証番号">
                      <Text align="left">123456 号</Text>
                    </FormField>
                    <FormField label="運転免許証表面">
                      <Text align="left">ファイル名称１.pdf</Text>
                    </FormField>
                    <FormField label="運転免許証裏面">
                      <Text align="left">ファイル名称２.pdf</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="自動車保険（任意）">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="保険会社名">
                      <Text align="left">三井住友海上火災</Text>
                    </FormField>
                    <FormField label="保険の種類">
                      <Text align="left">自家用自動車保険</Text>
                    </FormField>
                    <FormField label="証券番号">
                      <Text align="left">123456</Text>
                    </FormField>
                    <FormField label="保険金額（対人賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険金額（対物賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険金額（搭乗者賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険期間">
                      <Text align="left">2000/02/12 ～ 2001/02/12</Text>
                    </FormField>
                    <FormField label="">
                      <Text align="left"></Text>
                    </FormField>
                    <FormField label="保険証１">
                      <Text align="left">ファイル名称３.pdf</Text>
                    </FormField>
                    <FormField label="保険証２">
                      <Text align="left"></Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="通勤手当">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="片道通勤距離（経済的最短）">
                      <Text align="left">10 km</Text>
                    </FormField>
                    <FormField label="片道所要時間（約）">
                      <Text align="left">15 分</Text>
                    </FormField>
                    <FormField label="通勤手当（月額）">
                      <Text align="left">23,860 円</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="駐車料金">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="駐車場区分">
                      <Text align="left">社外駐車場（会社契約）</Text>
                    </FormField>
                    <FormField label="駐車料金">
                      <Text align="left">3,000 円</Text>
                    </FormField>
                    <FormField label="上限値額">
                      <Text align="left">2,500 円</Text>
                    </FormField>
                    <FormField label="付加額">
                      <Text align="left">500 円</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="マイカー通勤希望理由" className="p-setting-input-form__form-field">
                    <Text align="left">公共交通機関の運転が終了、または６０分に１本程度のため</Text>
                    <Text align="left">その他の理由</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細－バイク（原動機付自転車を含む）区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細－バイク（原動機付自転車を含む）</Heading>
                <InfoTableNone header="車両情報">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="登録番号">
                      <Text align="left">千葉　 　あ　1234</Text>
                    </FormField>
                    <FormField label="車名">
                      <Text align="left">ホンダ</Text>
                    </FormField>
                    <FormField label="塗色">
                      <Text align="left">黄色</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="運転免許証">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="取得年月日">
                      <Text align="left">2000/02/12</Text>
                    </FormField>
                    <FormField label="更新日">
                      <Text align="left">2000/02/12</Text>
                    </FormField>
                    <FormField label="種類">
                      <Text align="left">普通免許</Text>
                    </FormField>
                    <FormField label="運転免許証番号">
                      <Text align="left">123456 号</Text>
                    </FormField>
                    <FormField label="運転免許証表面">
                      <Text align="left">ファイル名称１.pdf</Text>
                    </FormField>
                    <FormField label="運転免許証裏面">
                      <Text align="left">ファイル名称２.pdf</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="バイク/原付保険（任意）">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="保険会社名">
                      <Text align="left">三井住友海上火災</Text>
                    </FormField>
                    <FormField label="保険の種類">
                      <Text align="left">自家用自動車保険</Text>
                    </FormField>
                    <FormField label="証券番号">
                      <Text align="left">123456</Text>
                    </FormField>
                    <FormField label="保険金額（対人賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険金額（対物賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険金額（搭乗者賠償）">
                      <Text align="left">無制限</Text>
                    </FormField>
                    <FormField label="保険期間">
                      <Text align="left">2000/02/12 ～ 2001/02/12</Text>
                    </FormField>
                    <FormField label="">
                      <Text align="left"></Text>
                    </FormField>
                    <FormField label="保険証１">
                      <Text align="left">ファイル名称３.pdf</Text>
                    </FormField>
                    <FormField label="保険証２">
                      <Text align="left"></Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <InfoTableNone header="通勤手当">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="片道通勤距離（経済的最短）">
                      <Text align="left">10 km</Text>
                    </FormField>
                    <FormField label="片道所要時間（約）">
                      <Text align="left">15 分</Text>
                    </FormField>
                    <FormField label="通勤手当（月額）">
                      <Text align="left">23,860 円</Text>
                    </FormField>
                  </FormFieldRow>
                </InfoTableNone>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="バイク通勤希望理由" className="p-setting-input-form__form-field">
                    <Text align="left">公共交通機関の運転が終了、または６０分に１本程度のため</Text>
                    <Text align="left">その他の理由</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細ー自転車区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細ー自転車</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="片道通勤距離（経済的最短）" className="p-setting-input-form__form-field">
                    <Text align="left">10 km</Text>
                  </FormField>
                  <FormField label="通勤手当（月額）" className="p-setting-input-form__form-field">
                    <Text align="left">800 円</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 通勤情報詳細ー徒歩区域 */}
              <Section modifiers="border">
                <Heading tag="h3">通勤情報詳細ー徒歩</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="片道通勤距離（経済的最短）" className="p-setting-input-form__form-field">
                    <Text align="left">10 km</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 住所届の箇所は？の説明文言 */}
      <Modal id="modal_help_address_info" headerIcon="help" title="住所届の箇所は？">
        <Text>
          ・住所届を実施する方は、下記のメニューに沿って申請してください。
          <br />
          「メインメニュー」→「申請する」ボタン→「申請別に選ぶ」→「住所に関する手続き」→「住所届」
        </Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<CommutingInputForm />);
