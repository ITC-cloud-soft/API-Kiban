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
    <title>認定単身赴任申請（新規・継続申請）</title>

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
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">認定単身赴任申請（新規・継続申請）</Heading>
                {/* <Heading tag="h1">住所届(代理申請)</Heading> */}
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
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
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">認定単身赴任申請（新規・継続申請）</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
                {/* </Section>
              <Section modifiers="border"> */}
                <Heading tag="h3">申請社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell label="社員番号" modifiers="pair">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell label="氏名" modifiers="pair">
                    <span>申請　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell label="資格／等級" modifiers="pair">
                    <span>M1</span>
                  </InfoTableCell>
                  <InfoTableCell label="所属名称" modifiers="pair">
                    <span>津田沼店</span>
                  </InfoTableCell>

                </InfoTable>
              </Section>
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">連絡先</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="連絡先（メールアドレス）">
                  <Text align="left">ichi-kaihatsu@aeonpeople.biz</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">申請情報</Heading>
              <Heading tag="h5">申請区分</Heading>
              <Text>
                新規申請
              </Text>
              <Heading tag="h5">申請認定事由</Heading>
              <Text>
                ④：扶養家族又は（義）親の病気・看病のため、特定の病院・医師の治療が必要である。 <br />

              </Text>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="申請日">
                  <Text align="left">2021/10/15</Text>
                </FormField>
                <FormField label="異動発令日">
                  <Text align="left">2021/09/05</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">ご確認事項</Heading>


              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名">
                  <Text align="left">山田　佳子</Text>
                </FormField>
                <FormField label="氏名（カナ）">
                  <Text align="left">ヤマダ　ヨシコ</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="続柄">
                  <Text align="left">長女</Text>
                </FormField>
                <FormField label="性別">
                  <Text align="left">女</Text>
                </FormField>
              </FormFieldRow>


              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="生年月日">
                  <Text align="left">2008/10/01</Text>
                </FormField>

              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="事由対象者氏名">
                  <Text align="left">昭和　花子</Text>
                </FormField>
                <FormField label="事由対象者続柄">
                  <Text align="left">祖母（実・義）</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="同居情報">
                  <Text align="left">同居</Text>
                </FormField>

              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="認定単身赴任期限">
                  <Text align="left">2022/09/20</Text>
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="理由書・診断書アップロード">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                    </li>
                  </ul>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="理由書の意見欄について">
                  <Text>
                    理由書の意見欄について、医師又は、専門機関の方に、記入の案内文書を提示し、確認いただいた上で、医師又は、専門機関の方の記載が完了しています。  <br />
                  </Text>
                </FormField>

              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">異動前ご本人住居</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="所属名称">
                  <Text align="left">千葉事業部　稲毛店</Text>
                </FormField>
                <FormField label="居住区分">
                  <Text align="left">持家</Text>
                </FormField>
              </FormFieldRow>



              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号">
                  <Text align="left">261-0022</Text>
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
                <FormField label="連絡先（TEL）">
                  <Text align="left">090-1234-5678</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">異動後ご本人住居</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="所属名称">
                  <Text align="left">千葉事業部　稲毛店</Text>
                </FormField>
                <FormField label="居住区分">
                  <Text align="left">持家</Text>
                </FormField>
              </FormFieldRow>



              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号">
                  <Text align="left">261-0022</Text>
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
                <FormField label="連絡先（TEL）">
                  <Text align="left">090-1234-5678</Text>
                </FormField>
              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">ご家族住居</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="居住区分">
                  <Text align="left">持家</Text>
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号">
                  <Text align="left">261-0022</Text>
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
                <FormField label="連絡先（TEL）">
                  <Text align="left">090-1234-5678</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="新所属へ移動時間">
                  <Text align="left">1時間以上</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">

                <FormField label="転居理由">
                  <Text align="left">ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    いいいいいい</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">

                <FormField label="特記事項">
                  <Text align="left">ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    いいいいいい</Text>
                </FormField>
              </FormFieldRow>

































            </div>
          </>
        </Modal>


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<AddressInquiryInputForm />);
