import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading, HeadingForlabelAddons } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldBorder, FormFieldRow, NewFormFieldRow } from 'design/components/molecules/form-field';
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
import { PriceTable, PriceTableItem, PriceTableItemDetail } from 'design/components/molecules/price-table';

const CommutingInputForm: React.FC = () => (
  <html>
    <title>転居制限解除 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 転居制限解除 (申請) */}
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
                <Heading tag="h1">転居制限解除 (申請)</Heading>
                <Text>
                  申請を実施する前に、事前アンケートに回答をお願いします。
                  <br />
                </Text>
                <br />
              </Section>


              <Section modifiers="border">
                <Heading tag="h3">転居制限について</Heading>

                <Text className="" >
                  <p>あなたの転居制限利用可能は、あと【XXヶ月】です。</p>
                  <p>
                    現在、転居制限を【<span className="a-text--purple">利用しています
                    </span>】。

                  </p>
                </Text>

                <HeadingForlabelAddons tag="h5" labelAddons={<Tag>必須</Tag>}>上記を確認のうえで、申請に進みますか？</HeadingForlabelAddons>

                <CaptionList>
                  <React.Fragment key=".0">
                    ※ 申請に進みたい場合、□の中にチェックをつけてください。申請を取りやめる場合、画面の右上の「×」をクリックしてください。</React.Fragment>
                </CaptionList>
                <Checkbox>
                  はい、転居制限　解除申請に進みます。
                </Checkbox>


              </Section>

              <Section modifiers="border">

                <Heading tag="h3">現住所について</Heading>
                <Text>
                  あなたの現住所情報は以下の通りとなっています。間違いがないかご確認ください。
                </Text>
                <FormField label="郵便番号"  >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" disabled value="182-0022" />
                  </FormFieldRow>
                </FormField>

                <FormField label="都道府県・市郡区"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="東京都調布市" />
                  </FormFieldRow>
                </FormField>

                <FormField label="町村・番地"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="小島町３－３－３" />
                  </FormFieldRow>
                </FormField>

                <FormField label="建物名・部屋番号"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="住宅１０１号" />
                  </FormFieldRow>
                </FormField>


              </Section>

              <Section modifiers="border">
                <Heading tag="h3">配偶者について</Heading>
                <FormField label="配偶者（これから入籍予定の方を含む）は、あなたの原籍会社の従業員ですか。" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR1" value="no" checked modifiers="grey">
                      はい
                    </Radio>

                    <Radio name="RR1" value="no" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <Text className="" >
                  配偶者が社内の日給月給制社員の場合、配偶者の情報が必要です。

                </Text>
                {/* <br /> */}
                {/* <Text>
                  以下に予定住所を記載してください。（こちらに記載しても住所変更にはなりません）

                  <br />

                  住所が未定のときは、町村まで入力してください。
                </Text> */}
                {/* <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の社員番号" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                      配偶者が社内の日給月給制社員の場合、配偶者の情報が必要です。
                      </React.Fragment>
                    </CaptionList>
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField name="name" type="text" value="901-2306" />
                      <Button type="button" modifiers="third" >
                        検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow> */}


                {/* <br /> */}
                {/* <FormField label="都道府県・市郡区" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="沖縄県中頭郡" />
                  </FormFieldRow>
                </FormField>

                <FormField label="町村・番地" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="中城村ライカム１−番地" />
                  </FormFieldRow>
                </FormField>

                <FormField label="建物名・部屋番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" disabled value="イオンモール" />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField defaultValue="調布" disabled name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow> */}

                {/* </Section> */}

                {/* <Heading tag="h5">配偶者について</Heading> */}


                {/*
                <Text className="" >
                  配偶者が社内の日給月給制社員の場合、配偶者の情報が必要です。

                </Text>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※ ※②③④の申請事由に該当し、社内籍の配偶者も転居を制限する場合は、本人・配偶者双方の転居制限申請が必要です。
                  </React.Fragment>
                </CaptionList> */}

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の社員番号" labelAddons={<Tag>必須</Tag>}>
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField name="name" type="text" value="0200287" />
                      <Button type="button" modifiers="third" >
                        検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">

                  <FormField label="配偶者の氏名" >

                    <TextField type="text" name="text" disabled value="開発　良子" />

                  </FormField>
                </FormFieldRow>

                <FormField label="配偶者の転居制限利用" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR3" value="no" checked modifiers="grey">
                      転居制限は利用していない
                    </Radio>

                    <Radio name="RR3" value="no" modifiers="grey">
                      転居制限を利用している
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </Section>
            </div>
          </>
        </Modal>
        {/* 転居制限解除 (申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-form-to-front-button">
                アンケートに戻る
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
                <Heading tag="h1">転居制限解除 (申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
                <br />
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>01234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社（原籍）">
                      <span>イオンアイビス（株）</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>ヤマダ　タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンリテール（株）</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>山田　太郎</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="正式組織名・上">
                      <span>BS業務部</span>
                    </InfoTableCell>




                    <InfoTableCell modifiers="pair" label="資格/等級">
                      <span>G5 - 1</span>
                    </InfoTableCell>



                    <InfoTableCell modifiers="pair" label="正式組織名・下">
                      <span>BS業務課</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                      <span>45歳</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="勤務エリア区分">
                      <span>R</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="ISM区分">
                      <span>B</span>
                    </InfoTableCell>


                    <InfoTableCell modifiers="pair" label="ISMブロック">
                      <span>関東ブロック</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="ISM職務系統">
                      <span>R</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISM給与待遇">
                      <span>R</span>
                    </InfoTableCell>

                  </InfoTable>
                </Accordion>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">ライフスタイル申請情報</Heading>
                <Heading tag="h5">転居制限</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">その事由</Text>
                      <span>事由③-1　育児（子女）</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">利用可能残月数</Text>
                      <span>26ヶ月</span>
                    </FormFieldRow>


                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得累積月数</Text>
                      <span>12ヶ月</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得可能残月数</Text>
                      <span>60ヶ月</span>
                    </FormFieldRow>

                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>

                </InfoTable>
                <br />
                <Heading tag="h5">ペア転勤</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の社員番号</Text>
                      <span>0123456</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の者氏名</Text>
                      <span>開発　花子</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">勤務エリア区分</Text>
                      <span className="">B　関東ブロック</span>
                    </FormFieldRow> */}
                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>なし</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">&nbsp;</Text>
                      <span></span>
                    </FormFieldRow>

                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>





                </InfoTable>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">解除を行う理由を記載してください。</Heading>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="具体的理由"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <HeadingForlabelAddons tag="h3" labelAddons={<Tag>必須</Tag>}>解除を行う理由を記載してください。</HeadingForlabelAddons>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Radio name="R1" value="no" checked modifiers="grey">
                    ①転居制限の適用解除日以降、勤務エリア区分内において転居を伴う人事異動が可能である
                  </Radio>
                  <Radio name="R1" value="no" modifiers="grey">
                    ②事由解消せず、転居を伴う人事異動は困難なため、勤務エリアを縮小したい
                  </Radio>
                  <Radio name="R1" value="no" modifiers="grey">
                    ③新たな転居制限の事由が生じたので、適用残期間内で、再度転居制限申請をしたい
                  </Radio>
                  <Radio name="R1" value="no" modifiers="grey">
                    ④ペア転勤を利用したい
                  </Radio>
                </FormFieldRow>
              </Section>


              <Section modifiers="border">
                <Heading tag="h3">申請に当たってのご注意事項</Heading>

                <Text>
                  以下の内容を事前にご確認ください。
                </Text>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone>
                    <div className="o-form-nobottom">

                      <Text>

                        ●解除後は、転居を伴う人事異動が発生します。<br />

                        <p className="  a-text--marginleft2">
                          そのため、転居制限の適用事由が現在も継続中である等、転居を伴う人事異動が困難と想定される状況に<br />
                          おいては、解除申請が認められない場合があります。
                        </p>

                        ●解除時に面談を実施する場合があります。<br />
                        ●転居制限制度を利用できる期間は延べ6年を上限とします。<br />
                      </Text>


                    </div>
                  </InfoTableNone>
                </FormFieldRow>
                <Checkbox name="questionnaire-confirm" value="y">
                  上記を読み、規定を理解いたしました。
                </Checkbox>
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
              {/* <Button modifiers="third" size="huge" id="confirm-app-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                承認
              </Button> */}
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">転居制限解除 (申請)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>

                <Heading tag="h3">社員情報</Heading>


                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>01234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社（原籍）">
                    <span>イオンアイビス（株）</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　太郎</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="正式組織名・上">
                    <span>BS業務部</span>
                  </InfoTableCell>




                  <InfoTableCell modifiers="pair" label="資格/等級">
                    <span>G5 - 1</span>
                  </InfoTableCell>



                  <InfoTableCell modifiers="pair" label="正式組織名・下">
                    <span>BS業務課</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                    <span>45歳</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="勤務エリア区分">
                    <span>R</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="ISM区分">
                    <span>B</span>
                  </InfoTableCell>


                  <InfoTableCell modifiers="pair" label="ISMブロック">
                    <span>関東ブロック</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="ISM職務系統">
                    <span>R</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISM給与待遇">
                    <span>R</span>
                  </InfoTableCell>

                </InfoTable>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">ライフスタイル申請情報</Heading>
                <Heading tag="h5">転居制限</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">その事由</Text>
                      <span>事由③-1　育児（子女）</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">利用可能残月数</Text>
                      <span>26ヶ月</span>
                    </FormFieldRow>


                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得累積月数</Text>
                      <span>12ヶ月</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得可能残月数</Text>
                      <span>60ヶ月</span>
                    </FormFieldRow>

                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>

                </InfoTable>
                <br />
                <Heading tag="h5">ペア転勤</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の社員番号</Text>
                      <span>0123456</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の者氏名</Text>
                      <span>開発　花子</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">勤務エリア区分</Text>
                      <span className="">B　関東ブロック</span>
                    </FormFieldRow> */}
                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>なし</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">&nbsp;</Text>
                      <span></span>
                    </FormFieldRow>

                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>





                </InfoTable>
              </Section>




              <Section modifiers="border">
                <Heading tag="h3">ライフスタイル申請情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="申請種別" >
                    <Text align="left">転居制限解除申請</Text>
                  </FormField>
                  <FormField label="転居制限適用状況" >
                    <Text align="left">解除希望</Text>
                  </FormField>
                </FormFieldRow>


              </Section>

              <Section modifiers="border">
                <Heading tag="h3">解除理由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="具体的理由" >
                    <Text align="left">ああああああああああああああああああああああああああああ</Text>
                  </FormField>
                </FormFieldRow>
              </Section>


              <Section modifiers="border">
                <Heading tag="h3">解除後の対応について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* <FormField label="" > */}
                  <Text align="left">①転居制限の適用解除日以降、勤務エリア区分内において転居を伴う人事異動が可能である</Text>
                  {/* </FormField> */}
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">現住所について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" >
                    <Text align="left">182-0022</Text>
                  </FormField>

                  <FormField label="都道府県・市郡区" >
                    <Text align="left">東京都調布市</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" >
                    <Text align="left">
                      小島町３－３－３
                    </Text>
                  </FormField>

                  <FormField label="建物名・部屋番号" >
                    <Text align="left">住宅１０１号</Text>
                  </FormField>
                </FormFieldRow>
                {/* <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" >
                    <Text align="left">
                      調布
                    </Text>
                  </FormField>


                </FormFieldRow> */}

              </Section>

              {/* <Section modifiers="border">
                <Heading tag="h3">転居制限解除後の住所について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="転居制限解除後に住む予定の住所は、現住所ですか。" >
                    <Text align="left">
                      いいえ
                    </Text>
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" >
                    <Text align="left">261-0022</Text>
                  </FormField>
                  <FormField label="都道府県・市郡区" >
                    <Text align="left">千葉県千葉市美浜区</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" >
                    <Text align="left">美浜１－１－１</Text>
                  </FormField>
                  <FormField label="建物名・部屋番号" >
                    <Text align="left">美浜住宅５０１号</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" >
                    <Text align="left">美浜</Text>
                  </FormField>

                </FormFieldRow>

              </Section> */}

              <Section modifiers="border">
                <Heading tag="h3">配偶者について</Heading>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="配偶者情報有無" >
                    <Text align="left">あり</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の社員番号" >
                    <Text align="left">0765432</Text>
                  </FormField>
                  <FormField label="配偶者の氏名" >
                    <Text align="left">開発　良子</Text>
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の転居制限利用" >
                    <Text align="left">利用していない</Text>
                  </FormField>

                </FormFieldRow>


              </Section>

            </div>
          </>
        </Modal>
      </Whole>
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          ここまでの申請を保存しました。続いて、勤務エリア変更申請を開始します。  </Text>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <div className="o-modal__footer">
            <Button modifiers="primary" size="huge" id="input-form-check-button">
              はい
            </Button>
          </div>
        </FormFieldRow>

      </Modal>
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          ここまでの申請を保存しました。続いて、勤務エリア変更申請を開始します。  </Text>
        <br />
        <FormFieldRow columnSize="12" columnSizePC="12">
          <div className="o-modal__footer">
            <Button modifiers="primary" size="huge" id="input-form-check-button">
              はい
            </Button>
          </div>
        </FormFieldRow>

      </Modal>
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          ここまでの申請を保存しました。続いて、新たな転居制限申請を開始します。 </Text>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <div className="o-modal__footer">
            <Button modifiers="primary" size="huge" id="input-form-check-button">
              はい
            </Button>
          </div>
        </FormFieldRow>

      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<CommutingInputForm />);
