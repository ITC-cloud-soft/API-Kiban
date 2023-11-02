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
import { InternalButtonLink, InternalButtonLink2 } from 'design/components/atoms/internal-buttonlink';

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
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">

              <Section modifiers="border">

                <Heading tag="h3">確認情報（Co人事）</Heading>

                <FormField label="コメント欄"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>


                <Heading tag="h5">確認に関するファイルがある場合は、アップロードを行ってください。</Heading>
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
              <Button modifiers="third" size="huge" id="input-form-Hininn-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-Syouninn-button">
                承認
              </Button>
              {/* <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">

              <Section modifiers="border">
                <Heading tag="h3">確認情報（Co人事）</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="コメント欄" >
                    <Text align="left">詳細内容</Text>
                  </FormField>
                  <FormField label="添付ファイル1" >
                    <InternalButtonLink2 icon="unit-download" id="linkcheck" >
                      ファイル名称２.pdf
                    </InternalButtonLink2>
                  </FormField>
                </FormFieldRow>



              </Section>
              <Section modifiers="border">
                <Heading tag="h3">提案情報（Co人事）</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="提案区分" >
                    <Text align="left">可（適用・解除）提案</Text>
                  </FormField>
                  <FormField label="適用・解除日付" >
                    <Text align="left">YYYY/MM/20</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="コメント欄" >
                    <Text align="left">詳細内容</Text>
                  </FormField>
                  <FormField label="添付ファイル1" >

                    <InternalButtonLink2 icon="unit-download" id="linkcheck" >
                      ファイル名称１.pdf
                    </InternalButtonLink2>
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
        {/* 決裁_承認 */}
        <Modal
          id="setting-Syouninn-modal"
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
              本申請を承認します。

              <br />
              よろしいですか？<br /><br />
              申請番号：XXXXXXXXXXXXXXXX<br /><br />
              適用・解除日付：YYYY/MM/DD
            </Text>

            <Text>
              決裁区分
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="6">
              <Checkbox name="radio7" value="6" checked modifiers="button">
                可（適用・解除）
              </Checkbox>
              <Checkbox name="radio7" value="6" modifiers="button">
                可（待機）
              </Checkbox>




            </FormFieldRow>
            {/* <br />

            <Text>
              適用日付  &nbsp;  &nbsp;{<Tag>必須</Tag>}
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="6">
              <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />


            </FormFieldRow> */}
          </Section>
        </Modal>


        {/* 否認（共通） */}
        <Modal
          id="setting-Hininn-modal"
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
              本申請を否認します。

              <br />
              よろしいですか？<br /><br />
              申請番号：XXXXXXXXXXXXXXXX
            </Text>

            <Text>
              差戻先
            </Text>


            <Text>
              理由をご記入ください。
            </Text>
            <FormFieldRow columnSize="12" columnSizePC="12">
              <TextField tag="textarea" type="text" rows="3"
                value="" />
            </FormFieldRow>
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
