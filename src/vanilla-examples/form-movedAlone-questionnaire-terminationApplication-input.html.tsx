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
    <title>認定単身赴任申請（終了申請）</title>

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
                <Heading tag="h1">認定単身赴任申請（終了申請）</Heading>

                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
                <br />
              </Section>
              <br />

              <HelpButton type="with-children" id="help-opener99">を押すと項目の詳しい説明が表示されます。</HelpButton>


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



              <FormField label="申請日" className="p-setting-input-form__form-field"  >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>

              <FormField label="終了事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="家族を呼び寄せる" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="経済的援助適用期間終了日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="引越日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>


              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">単身赴任継続情報</Heading>
              <Text>
                認定単身赴任終了後、単身赴任を続ける場合、下記のいずれか1つを選択してください。
                <br />
                ※受託に関する助成が、単身住居、家族住居のいずれか１つになります。
              </Text>



              <FormField label="助成金選択" labelAddons={<HelpButton id="help-opener" />} >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="mqt1" value="yes" checked modifiers="grey">
                    単身住居の助成
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                    家族住居の助成
                  </Radio>
                  <Radio name="mqt1" value="no" modifiers="grey">
                    現在の住居を継続し、４月２０日までに家族呼寄
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="単身助成金対象" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="mqt2" value="no" modifiers="grey">
                    単身社宅
                  </Radio>
                  <Radio name="mqt2" value="no" modifiers="grey">
                    単身住居（自己賃貸・持家）
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="家族助成金対象" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="mqt3" value="no" modifiers="grey">
                    家族社宅
                  </Radio>
                  <Radio name="mqt3" value="no" modifiers="grey">
                    家族住居（自己賃貸・持家）
                  </Radio>
                </FormFieldRow>
              </FormField>



              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField
                  label="関連書類アップロード"
                  className="a-upload-lable-display"
                  labelAddons2={<HelpButton id="help-opener2" />}
                  labelAddons={<Tag>必須</Tag>}
                >
                  <UploadFieldSingle description="形式：任意| サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">終了後ご本人住居</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="所属名称" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField name="name" type="text" disabled value="イオンモール沖縄ランカムイ" />
                    <Button type="button" modifiers="third" >
                      所属検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>
              <FormField label="居住区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="社宅" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="郵便番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
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

              <FormField label="連絡先" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>

              </FormField>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">終了後ご家族住居</Heading>

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
              <FormField label="特記事項" className="p-setting-input-form__form-field" >

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>

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
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">認定単身赴任申請（終了申請）</Heading>

                <Text>
                  ※内容に問題がなければ、ページ下部のボタンを押下してください。
                </Text>

                <Heading tag="h2">申請内容</Heading>
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

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="申請日">
                  <Text align="left">2021/10/15</Text>
                </FormField>
                <FormField label="終了事由">
                  <Text align="left">家族を呼び寄せる</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="経済的援助適用期間終了日">
                  <Text align="left">2021/10/15</Text>
                </FormField>
                <FormField label="引越日">
                  <Text align="left">2021/10/15</Text>
                </FormField>
              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">単身赴任継続情報</Heading>


              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="助成金選択">
                  <Text align="left">単身住居の助成/単身住居（自己賃貸・持家）</Text>
                </FormField>

              </FormFieldRow>





              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="関連書類アップロード">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                    </li>
                  </ul>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">終了後ご本人住居</Heading>

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


              <Heading tag="h3">終了後ご家族住居</Heading>

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




              <FormFieldRow columnSize="12" columnSizePC="12">

                <FormField label="特記事項">
                  <Text align="left">ああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                    いいいいいい</Text>
                </FormField>
              </FormFieldRow>

            </div>
          </>
        </Modal>

        <Modal id="modal-help" headerIcon="help" title="単身赴任継続について">
          <Heading tag="h4">現在の住居を継続する場合</Heading>
          <Text>・８/２１以降に異動が発生し、認定事由「学期途中（小１～小５）」で適用中の方のみ選択可  <br />
            ・単身赴任手当・帰省旅費は１月２０日終了  <br />
            ・単身社宅は２８，５００円の社宅費控除発生  <br />
            ・家族社宅の場合、家族社宅費控除発生  <br />
            ・持家・自己賃貸の住宅助成金支給なし<br />
          </Text>
        </Modal>
        <Modal id="modal-help2" headerIcon="help" title="関連書類について">
          <Heading tag="h4">関連書類について</Heading>
          <Text>適用期間終了後住宅助成金支給を希望される方で、該当住居の住宅助成金を初めて受ける場合確認書類をご提出ください。<br />
            ・住居区分「持家」　・・・「住民票（コピー可）」　<br />
            ・住居区分「賃貸/借家」　・・・「賃貸契約書（コピー）」<br />
            ・配偶者が扶養に入っていない場合、配偶者の収入が確認できるもの（コピー可・源泉徴収票等）をご提出下さい。<br />
          </Text>

        </Modal>

      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<MovedAloneQuestionnaireApplicationinput />);
