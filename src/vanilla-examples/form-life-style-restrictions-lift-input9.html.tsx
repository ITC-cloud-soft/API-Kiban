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
import { SearchButton } from 'design/components/atoms/search-button';

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
              {/* <Button modifiers="secondary" size="huge">
                下書き保存
              </Button> */}
              <Button modifiers="primary" size="huge" id="questionnaire-form-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              ここは「転居制限適用申請_確認画面_事由①_PC」と同じ、省略
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
              <Button modifiers="primary" size="huge" id="input-form-to-front-button">
                保留
              </Button>
              <Button modifiers="secondary" size="huge" id="input-form-sasimodosi-button">
                差戻
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-teiannka-button">
                提案
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">

              <Section modifiers="border">

                <Heading tag="h3">提案情報（Co人事）</Heading>

                <FormField label="コメント欄"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>


                <Heading tag="h5">提案に関するファイルがある場合は、アップロードを行ってください。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <UploadFieldSingle description="形式：任意 | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />

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


        {/* 差戻し（共通） */}
        <Modal
          id="setting-sasimodosi-modal"
          modalSize="medium"
          title=""
          footer={
            <>
              <Button modifiers="third" size="huge" type="button">
                いいえ
              </Button>
              <Button modifiers="primary" size="huge" type="button" id="search">
                はい
              </Button>
            </>
          }
        >
          <Section className="p-setting-input-form__body">

            <Text>
              本申請を差し戻します。
              <br />
              よろしいですか？<br /><br />
              申請番号：XXXXXXXXXXXXXXXX
            </Text>

            <Text>
              差戻先
            </Text>

            <FormFieldRow columnSize="12" columnSizePC="6">
              <Pulldown id="contel-start-time" placeholder="申請者" name="contel-start-time">
                <option value=""></option>
                <option value="1">テスト１</option>
                <option value="2">テスト２</option>
              </Pulldown>
            </FormFieldRow>
            <br />
            <Text>
              理由をご記入ください。
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="12">
              <TextField tag="textarea" type="text" rows="3"
                value="" />
            </FormFieldRow>
          </Section>
        </Modal>
        {/* 提案＿可（待機）提案*/}
        <Modal
          id="setting-teiannka-modal"
          modalSize="medium"
          title=""
          footer={
            <>
              <Button modifiers="third" size="huge" type="button">
                いいえ
              </Button>
              <Button modifiers="primary" size="huge" type="button" id="search">
                はい
              </Button>
            </>
          }
        >
          <Section className="p-setting-input-form__body">

            <Text>
              本申請を提案します。
              <br />
              よろしいですか？<br /><br />
              申請番号：XXXXXXXXXXXXXXXX
            </Text>

            <Text>
              提案区分
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="6">
              <Checkbox name="radio6" value="6" modifiers="button">
                可（適用・解除）提案
              </Checkbox>
              <Checkbox name="radio6" value="6" checked modifiers="button">
                可（待機）提案
              </Checkbox>

              <Checkbox name="radio6" value="6" modifiers="button">
                不可提案
              </Checkbox>


            </FormFieldRow>
            <br />

            {/* <Text>
              適用日付  &nbsp;  &nbsp;{<Tag>必須</Tag>}
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="6">
              <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />


            </FormFieldRow> */}
          </Section>
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
