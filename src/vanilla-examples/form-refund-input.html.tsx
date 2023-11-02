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
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { Price } from 'design/components/atoms/price';
import { VisitRecordListCust } from 'design/components/organisms/visit-record-list-cust';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { DateRangeField } from 'design/components/atoms/date-range-field';
// import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { UploadField } from 'design/components/atoms/upload-field';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>特別買物割引制度 (還付金申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 還付金申請_PC_入力画面 */}
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
                <Heading tag="h1">特別買物割引制度 (還付金申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />　
                </Text>
              </Section>
              <br />
              {/* 社員情報区域 */}
              <Heading tag="h3">社員情報</Heading>
              <Accordion label="確認する">
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234556</span>
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
                    <span>社会保険Ｇ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="">
                    <span></span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請情報区域 */}
              <Heading tag="h3">申請情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="ABC123456789" />
                </FormField>
                <FormField label="購入予定金額" className="p-setting-input-form__form-field">
                  <UnitTextField defaultValue="20,000" disabled name="text" type="text" unit="unit-manyen" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="利用希望期間" className="p-setting-input-form__form-field">
                  <DateRangeField disabled onDateRangeChange={() => {}} />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="特別買物割引証" labelAddons={<Tag>必須</Tag>}>
                  <UploadField description="形式：jpg/png | サイズ：10MBまで">
                    画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                  </UploadField>
                </FormField>
              </FormFieldRow>
              {/* レシート明細区域 */}
              <Heading tag="h4">レシート明細</Heading>
              <VisitRecordListCust
                onAddRequested={() => {}}
                onRemoveRequested={function noRefCheck() {}}
                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="金額" className="p-setting-input-form__form-field">
                          <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                        </FormField>
                      </FormFieldRow>
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        <FormField label="添付ファイル" className="p-setting-input-form__form-field">
                          <UploadField description="形式：jpg/png | サイズ：10MBまで">
                            画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                          </UploadField>
                        </FormField>
                      </FormFieldRow>
                    </Section>
                  </>
                }
                titles={
                  <>
                    明細情報　<Tag>必須</Tag>
                  </>
                }
                addText="レシート明細を追加"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="添付ファイル" className="p-setting-input-form__form-field">
                      <UploadField description="形式：jpg/png | サイズ：10MBまで">
                        画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                      </UploadField>
                    </FormField>
                  </FormFieldRow>
                </Section>
              </VisitRecordListCust>
            </div>
          </>
        </Modal>
        {/* 還付金申請_PC_確認画面 */}
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
                <Heading tag="h1">特別買物割引制度 (還付金申請)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 申請社員情報区域 */}
              <Heading tag="h3">社員情報</Heading>
              <Accordion label="確認する">
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234556</span>
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
                    <span>社会保険Ｇ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="">
                    <span></span>
                  </InfoTableCell>
                </InfoTable>
              </Accordion>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請情報区域 */}
              <Heading tag="h3">申請情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                  <Text>ABC123456789</Text>
                </FormField>
                <FormField label="購入予定金額" className="p-setting-input-form__form-field">
                  <Text>20,000万円</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="利用希望期間" className="p-setting-input-form__form-field">
                  <Text>2021/09/01 ~ 2021/11/01</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="特別買物割引証">
                  <img src="https://images.app.goo.gl/eGevkZ5BKedjmVQx8"></img>
                </FormField>
              </FormFieldRow>
              {/* レシート明細区域 */}
              <Heading tag="h4">レシート明細</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTable header="明細情報">
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      {/* <Text align="right">
                        <img style={{ width: '40px', height: '80px' }} src="C:\Users\exp20\Pictures\license.jpg"></img>
                      </Text> */}

                      {/* <img style={{ width: '40px', height: '80px' }} src="C:\Users\exp20\Pictures\license.jpg"></img> */}
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      {/* <span className="a-alert__text a-text--align-right">200,000円</span> */}
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                </InfoTable>
              </FormFieldRow>
              <br />
            </div>
          </>
        </Modal>
        {/* 還付金申請_PC_BS業務部承認画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-compbs"
          hasBackButton={true}
          opened
          footer={
            <>
              <Button modifiers="third" size="huge" id="">
                否認
              </Button>
              <Button modifiers="secondary" size="huge" id="">
                差戻し
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-bs-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">特別買物割引制度 (還付金申請)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 社員情報区域 */}
              <Heading tag="h3">社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234556</span>
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
                  <span>社会保険Ｇ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請情報区域 */}
              <Heading tag="h3">申請情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                  <Text>ABC123456789</Text>
                </FormField>
                <FormField label="購入予定金額">
                  <Text>30 万円</Text>
                </FormField>
                <FormField label="利用希望期間">
                  <Text>2021/09/01 ~ 2021/11/01</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証">
                  <img src="https://images.app.goo.gl/eGevkZ5BKedjmVQx8"></img>
                </FormField>
              </FormFieldRow>
              {/* レシート明細区域 */}
              <Heading tag="h4">レシート明細</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTable header="明細情報">
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      {/* <Text align="right" className="a-alert__text">
                          100,000円
                        </Text> */}
                      {/* <span className="a-alert__text a-text--align-right">100,000</span>円 */}
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      {/* <span className="a-alert__text a-text--align-right">200,000円</span> */}
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                </InfoTable>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 経費分担情報区域 */}
              <Heading tag="h3">経費分担情報</Heading>
              <VisitRecordListCust
                onAddRequested={() => {}}
                onRemoveRequested={function noRefCheck() {}}
                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="No" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" disabled />
                        </FormField>
                        <FormField label="会社コード" className="p-setting-input-form__form-field">
                          <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time">
                            <option value=""></option>
                            <option value="1">テスト１</option>
                            <option value="2">テスト２</option>
                          </Pulldown>
                        </FormField>
                        <FormField label="所属コード" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" />
                        </FormField>
                        <FormField label="財務部署コード" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" disabled />
                        </FormField>
                        <FormField label="店舗名" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" disabled />
                        </FormField>
                        <FormField label="購入金額" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" />
                        </FormField>
                        <FormField label="WAONポイント" className="p-setting-input-form__form-field">
                          <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time">
                            <option value=""></option>
                            <option value="1">テスト１</option>
                            <option value="2">テスト２</option>
                          </Pulldown>
                        </FormField>
                        <FormField label="還付金額" className="p-setting-input-form__form-field">
                          <TextField type="text" name="text" />
                        </FormField>
                      </FormFieldRow>
                    </Section>
                  </>
                }
                titles={
                  <>
                    経費分担先　<Tag>必須</Tag>
                  </>
                }
                addText="経費分担明細を追加"
                saveBtn
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="No" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="1" disabled />
                    </FormField>
                    <FormField label="会社コード" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField label="所属コード" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" />
                    </FormField>
                    <FormField label="財務部署コード" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" disabled />
                    </FormField>
                    <FormField label="店舗名" className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" disabled />
                    </FormField>
                    <FormField label="購入金額" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                    </FormField>
                    <FormField label="WAONポイント" className="p-setting-input-form__form-field">
                      <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField label="還付金額" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                    </FormField>
                  </FormFieldRow>
                </Section>
              </VisitRecordListCust>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="還付金額合計">
                  <UnitTextField defaultValue="20,000" disabled name="text" type="text" unit="unit-yen" />
                </FormField>
              </FormFieldRow>
              <br />
            </div>
          </>
        </Modal>
        {/* 還付金申請_PC_人事部長承認画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-comppp"
          hasBackButton={true}
          opened
          footer={
            <>
              <Button modifiers="third" size="huge" id="">
                否認
              </Button>
              <Button modifiers="secondary" size="huge" id="">
                差戻し
              </Button>
              <Button modifiers="primary" size="huge" id="">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">特別買物割引制度 (還付金申請)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 社員情報区域 */}
              <Heading tag="h3">社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234556</span>
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
                  <span>社会保険Ｇ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              {/* </Section> */}
              <div className="m-info-table__header"></div>
              <br />
              {/* 申請情報区域 */}
              <Heading tag="h3">申請情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証番号" className="p-setting-input-form__form-field">
                  <Text>ABC123456789</Text>
                </FormField>
                <FormField label="購入予定金額">
                  <Text>30 万円</Text>
                </FormField>
                <FormField label="利用希望期間">
                  <Text>2021/09/01 ~ 2021/11/01</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="特別買物割引証">
                  <img src="https://images.app.goo.gl/eGevkZ5BKedjmVQx8"></img>
                </FormField>
              </FormFieldRow>
              {/* レシート明細区域 */}
              <Heading tag="h4">レシート明細</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTable header="明細情報">
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      {/* <Text align="right" className="a-alert__text">
                          100,000円
                        </Text> */}
                      {/* <span className="a-alert__text a-text--align-right">100,000</span>円 */}
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                  <InfoTableCell>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">金額</Text>
                      {/* <span className="a-alert__text a-text--align-right">200,000円</span> */}
                      <Price unit="円" modifiers="total-mid-rgt">
                        100,000
                      </Price>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left">添付ファイル</Text>
                      <ul className="a-upload-img__preview">
                        <li className="a-upload-img__image">
                          <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                        </li>
                      </ul>
                    </FormFieldRow>
                  </InfoTableCell>
                </InfoTable>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 経費分担情報区域 */}
              <Heading tag="h3">経費分担情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="No">
                  <span>1</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>1234</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="財務部署コード">
                  <span>1234567890</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="店舗名">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="購入金額">
                  <span>300,000 円</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="WAONポイント">
                  <span>有</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="還付金額">
                  <span>300,000 円</span>
                </InfoTableCell>
              </InfoTable>
              <br />
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="No">
                  <span>1</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>1234</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="財務部署コード">
                  <span>1234567890</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="店舗名">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="購入金額">
                  <span>300,000 円</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="WAONポイント">
                  <span>有</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="還付金額">
                  <span>300,000 円</span>
                </InfoTableCell>
              </InfoTable>
              <br />
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="還付金額合計">
                  <span>20,000円</span>
                </InfoTableCell>
              </InfoTable>
              <br />
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
