import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { Checkbox } from 'design/components/atoms/checkbox';
import { InternalButtonLink2 } from 'design/components/atoms/internal-buttonlink';

const CommutingInputForm: React.FC = () => (
  <html>
    <title>転居制限解除 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 転居制限解除 (申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-questionnaire"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-form-Hininn-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-Syouninn-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">ペア転勤適用 (申請)   <br />

              ここは「転居制限適用申請_確認画面_事由①_PC」と同じ、省略



              <Section modifiers="border">
                <Heading tag="h3">提案情報（本社人事）</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="提案区分" >
                    <Text align="left">可（待機）提案</Text>
                  </FormField>
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
