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

const MovedAloneQuestionnaireApplicationinput: React.FC = () => (
  <html>
    <title>認定単身赴任申請（新規・継続申請）</title>

    <body>
      <Whole navigation={''}>
        {/* 認定単身赴任申請（新規・継続申請） */}
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

                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
                <br />
              </Section>


              <br />

              <Heading tag="h3">申請社員情報</Heading>
              <Accordion label="確認する">
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
              </Accordion>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">連絡先</Heading>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="連絡先（メールアドレス）" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="ichi-kaihatsu@aeonpeople.biz" />
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

              <FormField label="申請日" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="異動発令日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※着任日ではありません
                  </React.Fragment>
                </CaptionList>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>


              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">ご確認事項</Heading>
              <FormField label="対象子女" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqa1" value="no" checked modifiers="grey">
                    長女　申請　花子
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqa1" value="no" modifiers="grey">
                    長男　申請　太郎
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqa1" value="yes" modifiers="grey">
                    次男　申請　次郎
                  </Radio>
                </FormFieldRow>  <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqa1" value="yes" modifiers="grey">
                    上記に該当する子女がいない
                  </Radio>
                </FormFieldRow>  <br />
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="氏名" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="山田　佳子" />
                </FormField>
                <FormField label="氏名（カナ）" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="ヤマダ　ヨシコ" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="続柄" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="長女" />
                </FormField>
                <FormField label="性別" className="p-setting-input-form__form-field" >
                  <TextField name="name" type="text" disabled value="女" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField
                  label="生年月日"
                  className="p-setting-input-form__form-field"
                >
                  <CalendarField
                    className="a-calendar-field__content"
                    defaultValue={new Date('2008-03-26T20:44:23.000Z')}
                    onDateChange={() => { }}
                  />
                </FormField>

                <FormField label="学年"  >
                  <Pulldown id="contel-start-time" placeholder="高校１年" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>

              </FormFieldRow>


              <FormField label="認定単身赴任期限" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2008-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField
                  label="アップロードファイル"
                  className="a-upload-lable-display"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <UploadFieldSingle description="形式：任意| サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">異動前ご本人住居</Heading>
              <FormField label="所属名称" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="千葉事業部　稲毛店" />
                </FormFieldRow>
              </FormField>
              <FormField label="居住区分" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="持家" />
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="261-8515" />
                </FormFieldRow>
              </FormField>

              <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="千葉県千葉市美浜区" />
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="チバケンチバシミハマク" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="中瀬１－５－１" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="ナカセ１－５－１" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンタワー" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="チバケンチバシミハマク" />
                </FormFieldRow>
              </FormField>

              <FormField label="連絡先（TEL）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>

              </FormField>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">異動後ご本人住居</Heading>
              <Text>
                転居異動なしで継続申請の方は現住所記入
              </Text>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="所属名称" className="p-setting-input-form__form-field">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField name="name" type="text" disabled value="イオンモール沖縄ランカムイ" />
                    <Button type="button" modifiers="third" >
                      所属検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>
              <FormField label="居住区分" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="社宅" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号" className="p-setting-input-form__form-field">
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
              <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="沖縄県中頭郡" />
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="オキナワケンナカガミグン" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="中城村ライカム１−番地" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="キタナカグスクソンライカム１−バンチ" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>

              <FormField label="連絡先" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>

              </FormField>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">ご家族住居</Heading>
              <FormField label="居住区分" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="持家" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号" className="p-setting-input-form__form-field">
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

              <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="沖縄県中頭郡" />
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="オキナワケンナカガミグン" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="中城村ライカム１−番地" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="キタナカグスクソンライカム１−バンチ" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号（カナ）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" disabled value="イオンモール" />
                </FormFieldRow>
              </FormField>

              <FormField label="連絡先" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>

              </FormField>

              <FormField label="新所属へ移動時間" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="mqa2" value="no" checked modifiers="grey">
                    1時間以上
                  </Radio>
                  <Radio name="mqa2" value="no" modifiers="grey">
                    1時間未満
                  </Radio>
                </FormFieldRow>

              </FormField>
              <FormField label="転居理由" className="p-setting-input-form__form-field" >
                <CaptionList>
                  <React.Fragment key=".0">
                    ※1時間未満選択の方【転居理由】を入力ください。
                  </React.Fragment>
                </CaptionList>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>

              <FormField label="特記事項" className="p-setting-input-form__form-field" >

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <Heading tag="h3">注意事項</Heading>
                    <Text>
                      ※決裁『可』通知メールが（申請者へ）届きましたら、住所変更等の変更を着任後に必ず実施ください。
                    </Text>
                    <br />
                  </div>
                </InfoTableNone>
              </FormFieldRow>
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
