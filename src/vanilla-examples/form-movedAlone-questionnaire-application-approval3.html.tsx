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
import { DateRangeField } from 'design/components/atoms/date-range-field';

const AddressInquiryInputForm: React.FC = () => (
  <html>
    <title>認定単身赴任申請（承認）</title>

    <body>
      <Whole navigation={''}>

        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge">
                否認
              </Button>
              <Button modifiers="secondary" size="huge">
                差戻
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">認定単身赴任申請（承認）</Heading>

                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY

                </Text>

                <div className="m-info-table__header"></div>
                <br />

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
                ①　子女が中学・あるいは高校在学中であり、転校が困難である。
              </Text>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="申請日">
                  <Text align="left">2021/10/15</Text>
                </FormField>
                <FormField label="申請番号">
                  <Text align="left">CCFSTA202110150001</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="異動発令日">
                  <Text align="left">2021/10/15</Text>
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
                <FormField label="学年">
                  <Text align="left">高校１年</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="認定単身赴任期限">
                  <Text align="left">2022/09/20</Text>
                </FormField>

              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="学生証アップロード">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                    </li>
                  </ul>
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
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">所属上司確認</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="確認日">
                  <Text align="left">2021/10/21</Text>
                </FormField>
                <FormField label="氏名">
                  <Text align="left">承認　太郎</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="役職">
                  <Text align="left">千葉事業部　稲毛店管理課長</Text>
                </FormField>

              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">

                <FormField label="特記事項">
                  <Text align="left">ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    いいいいいい</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">BS業務処理</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="経済的援助適用見込期間" className="p-setting-input-form__form-field" >
                  <Text align="left">2021/11/21~2022/08/20</Text>
                </FormField>
                <FormField label="単身赴任手当" className="p-setting-input-form__form-field" >
                  <Text align="left">30,000円</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="異動前社宅費・住宅助成金" className="p-setting-input-form__form-field" >
                  <Text align="left">25,000円</Text>
                </FormField>
                <FormField label="異動後社宅費・住宅助成金" className="p-setting-input-form__form-field">
                  <Text align="left">24,000円</Text>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="家族住居社宅費・住宅助成金" className="p-setting-input-form__form-field">
                  <Text align="left">12,000円</Text>
                </FormField>

              </FormFieldRow>


              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">決済</Heading>
              <FormField label="決済日" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="決済者" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="決済　太郎" />
                </FormField>

              </FormFieldRow>


              <FormField label="条件付き承認" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="mqa1" value="no" modifiers="grey">
                    はい
                  </Radio>

                  <Radio name="mqa1" value="no" checked modifiers="grey">
                    いいえ
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="コメント" className="p-setting-input-form__form-field" >

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>




            </div>
          </>
        </Modal>

        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              {/* <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">認定単身赴任申請（承認）</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>

              </Section>






























            </div>
          </>
        </Modal>


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<AddressInquiryInputForm />);
