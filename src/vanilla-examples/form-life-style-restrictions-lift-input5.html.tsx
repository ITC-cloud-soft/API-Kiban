import React from 'react';
import { renderVanillaExample } from './render';
import { Icon } from 'design/components/atoms/icon';
import { Button } from 'design/components/atoms/button';
import { Heading, HeadingForlabelAddons } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { Radio } from 'design/components/atoms/radio';
import { Checkbox } from 'design/components/atoms/checkbox';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { mapModifiers } from 'design/libs/component';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { Pulldown } from 'design/components/atoms/pulldown';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { HelpButton } from 'design/components/atoms/help-button';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { CustItemButton } from 'design/components/atoms/cust-item-button';
import { CalendarField } from 'design/components/atoms/calendar-field';

const CommutingInputForm: React.FC = () => (
  <html>
    <title>転居制限適用 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 転居制限適用 (申請) */}
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
                <Heading tag="h1">転居制限適用 (申請)</Heading>
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
                    ※ 申請に進みたい場合、□の中にチェックをつけてください。申請を取りやめる場合、画面の右上の「×」をクリックしてください。
                  </React.Fragment>
                </CaptionList>
                <Checkbox>
                  はい、残期間を利用して申請を希望します。
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
                {/*
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅"   >

                    <UnitTextField defaultValue="調布" disabled name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow> */}

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="※ 現住所の変更が必要な方へのご案内"   >
                    <Text>
                      XXXXXXX（説明文言未定）
                    </Text>
                  </FormField>
                </FormFieldRow>
                <br />
                <FormField label="転居制限解除後に住む予定の住所は、現住所ですか。" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR1" value="no" modifiers="grey">
                      はい
                    </Radio>

                    <Radio name="RR1" value="no" checked modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <br />
                <Text>
                  以下に予定住所を記載してください。（こちらに記載しても住所変更にはなりません）

                  <br />

                  住所が未定のときは、町村まで入力してください。
                </Text>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  {/* labelAddons={<Tag>必須</Tag>} */}
                  <FormField label="郵便番号" >
                    <CaptionList>
                      <React.Fragment key=".0">
                        <li>
                          郵便番号を入力して住所検索ボタンを押下してください。</li>
                      </React.Fragment>
                    </CaptionList>

                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField name="name" type="text" value="901-2306" />
                      <Button type="button" modifiers="third" >
                        住所検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>


                <br />
                <FormField label="都道府県・市郡区" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="沖縄県中頭郡" />
                  </FormFieldRow>
                </FormField>

                <FormField label="町村・番地" >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="中城村ライカム１−番地" />
                  </FormFieldRow>
                </FormField>

                <FormField label="建物名・部屋番号" >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="イオンモール" />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField defaultValue="調布" name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow>


              </Section>

              <Section modifiers="border">

                <Heading tag="h3">配偶者について</Heading>

                <FormField label="配偶者（これから入籍予定の方を含む）は、あなたの原籍会社の従業員ですか。" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR2" value="no" checked modifiers="grey">
                      はい
                    </Radio>

                    <Radio name="RR2" value="no" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <Text className="" >
                  配偶者が社内の日給月給制社員の場合、配偶者の情報が必要です。

                </Text>
                {/* <CaptionList>
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
                    <Radio name="RR13" value="no" checked modifiers="grey">
                      転居制限は利用していない
                    </Radio>

                    <Radio name="RR13" value="no" modifiers="grey">
                      転居制限を利用している
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <FormField label="配偶者は転居制限を" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="RR3" value="no" checked modifiers="grey">
                      今後も利用予定はない
                    </Radio>

                    <Radio name="RR3" value="no" modifiers="grey">
                      これから利用予定がある
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </Section>


              -------------------------申請事由は事由①-1　介護の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由①-1　介護" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象者の姓" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象者の名" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象者の姓（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象者の名（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormField label="あなたから見た続柄" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="実母" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <Heading tag="h5">医師の診断書等の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* <FormField
                    label="診断書書類のハードコピーの参考例"
                    className="a-upload-lable-display"
                    labelAddons2={<HelpButton id="help-a-icon--link-new-window" />}

                  > */}
                  <ModalOpener id="modal-opener" small={false} >診断書書類のハードコピーの参考例</ModalOpener>
                  {/* <CustItemButton
                      handleCustItemClick={() => { }}
                      icon={<Icon name="-link-new-window" />}
                      isfront={false}
                    >
                      診断書書類のハードコピーの参考例
                    </CustItemButton> */}
                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />
                <FormField label="会社に連絡が必要な事項がありましたら、記入してください。"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>
              </Section>

              -------------------------申請事由は事由①-1　介護の場合-----------------
              <br />
              -------------------------申請事由は事由②　結婚の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由②　結婚" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※②③④の申請事由に該当し、社内籍の配偶者も転居を制限する場合は、本人・配偶者双方の転居制限申請が必要です。
                    <br />
                    ※配偶者が日給月給社員と同格の働き方をしていることがじょうけん条件となります。
                  </React.Fragment>
                </CaptionList>
                <br />
                <FormField label="入籍日" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の姓" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="配偶者の名" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の姓（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="配偶者の名（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormField label="配偶者の職業" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="会社員" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <Heading tag="h5">配偶者の就労証明書の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  {/* <FormField
    label="診断書書類のハードコピーの参考例"
    className="a-upload-lable-display"
    labelAddons2={<HelpButton id="help-a-icon--link-new-window" />}

  > */}
                  <ModalOpener id="modal-opener" small={false} >就労証明書書類のハードコピーの参考例</ModalOpener>
                  {/* <CustItemButton
      handleCustItemClick={() => { }}
      icon={<Icon name="-link-new-window" />}
      isfront={false}
    >
      診断書書類のハードコピーの参考例
    </CustItemButton> */}
                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />
                {/* <FormField label="会社に連絡が必要な事項がありましたら、記入してください。"  >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField> */}
              </Section>

              -------------------------申請事由は事由②　結婚の場合-----------------
              <br />
              -------------------------申請事由は事由③-1　育児（子女）の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由③-1　育児（子女）" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※②③④の申請事由に該当し、社内籍の配偶者も転居を制限する場合は、本人・配偶者双方の転居制限申請が必要です。

                  </React.Fragment>
                </CaptionList>
                <br />
                <FormField label="対象子女の場合、転居制限できる期間は、子女が中学入学するXXXX年4月20日までとなります。" labelAddons={<Tag>必須</Tag>}>
                  {/* <FormFieldRow columnSize="12" columnSizePC="6"> */}
                  <Checkbox name="questionnaire-confirm" value="y">
                    利用制限期間を理解しました。
                  </Checkbox>
                  {/* </FormFieldRow> */}
                </FormField>



                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の姓" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象子女の名" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の姓（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象子女の名（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormField label="対象子女の生年月日" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の年齢"  >
                    <UnitTextField unit="unit-age" disabled />
                  </FormField>
                </FormFieldRow>
                {/* <FormField label="配偶者の職業" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="会社員" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField> */}

                {/* <Heading tag="h5">医師の診断書等の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <ModalOpener id="modal-opener" small={false} >診断書書類のハードコピーの参考例</ModalOpener>

                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>

                </FormFieldRow>
                <br /> */}
                {/* <FormField label="会社に連絡が必要な事項がありましたら、記入してください。"  >
  <FormFieldRow columnSize="12" columnSizePC="12">
    <TextField tag="textarea" type="text" rows="3" />
  </FormFieldRow>
</FormField> */}
              </Section>

              -------------------------申請事由は事由③-1　育児（子女）の場合-----------------


              <br />

              -------------------------申請事由は事由③-2　育児（妊娠出産）の場合-----------------


              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由③-2　育児（妊娠出産）" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※②③④の申請事由に該当し、社内籍の配偶者も転居を制限する場合は、本人・配偶者双方の転居制限申請が必要です。
                    <br />
                    あなた、または配偶者が妊娠・出産のためにこの申請を希望している場合は、出産予定日を記載し、証明書画像を添付してください。
                  </React.Fragment>
                </CaptionList>
                <br />
                <FormField label="出産予定日" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                  </FormFieldRow>
                </FormField>



                <Heading tag="h5">母子手帳の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <ModalOpener id="modal-opener" small={false} >母子手帳書類のハードコピーの参考例</ModalOpener>

                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />

              </Section>






              -------------------------申請事由は事由③-2　育児（妊娠出産）の場合-----------------

              <br />
              -------------------------申請事由は事由④　本人病気の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由④　本人病気" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    ※②③④の申請事由に該当し、社内籍の配偶者も転居を制限する場合は、本人・配偶者双方の転居制限申請が必要です。
                  </React.Fragment>
                </CaptionList>
                <br />
                <FormField label="事由詳細" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>



                <Heading tag="h5">診断書 または その他説明資料の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <ModalOpener id="modal-opener" small={false} >診断書のハードコピーの参考例</ModalOpener>

                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />
                <ul className="a-upload-img__preview">
                  <li className="a-upload-img__image-left">
                    <img src="C:\Users\wxf\Pictures\1.jpg" />
                  </li>
                </ul>
              </Section>


              -------------------------申請事由は事由④　本人病気の場合-----------------  <br />


              -------------------------申請事由は事由⑤　子女の問題の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由⑤　子女の問題" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>


                <FormField label="事由詳細" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>



                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の姓" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象子女の名" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の姓（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                  <FormField label="対象子女の名（カナ）" labelAddons={<Tag>必須</Tag>} >
                    <TextField type="text" name="text" value="" />
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の年齢"  >
                    <UnitTextField unit="unit-age" disabled />
                  </FormField>
                </FormFieldRow>

                <Heading tag="h5">診断書 または その他説明資料の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <ModalOpener id="modal-opener" small={false} >診断書のハードコピーの参考例</ModalOpener>

                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />
                <ul className="a-upload-img__preview">
                  <li className="a-upload-img__image-left">
                    <img src="C:\Users\wxf\Pictures\1.jpg" />
                  </li>
                </ul>
              </Section>

              -------------------------申請事由は事由⑤　子女の問題の場合-----------------
              <br />


              -------------------------申請事由は事由⑥　その他の場合-----------------
              <Section modifiers="border">

                <Heading tag="h3">申請事由について</Heading>
                <FormField label="申請事由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="事由⑥　その他" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <br />
                <FormField label="事由詳細" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3" />
                  </FormFieldRow>
                </FormField>



                <Heading tag="h5">その他説明資料の画像アップロードをして下さい。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <ModalOpener id="modal-opener" small={false} >その他説明資料のハードコピーの参考例</ModalOpener>

                  <UploadFieldSingle description="形式：jpg/png | サイズ：10MBまで">
                    ファイルをドラッグ＆ドロップするまたはパソコンから画像を貼り付けしてください。
                  </UploadFieldSingle>
                  {/* </FormField> */}
                </FormFieldRow>
                <br />
                <ul className="a-upload-img__preview">
                  <li className="a-upload-img__image-left">
                    <img src="C:\Users\wxf\Pictures\1.jpg" />
                  </li>
                </ul>
              </Section>

              -------------------------申請事由は事由⑥　その他の場合-----------------

            </div>
          </>
        </Modal>
        {/* 転居制限適用 (申請) */}
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
                <Heading tag="h1">転居制限適用 (申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
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
                <Heading tag="h3">いつまでの適用を予定していますか？</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="適用終了予定日"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      {/* <UnitTextField defaultValue="1" name="text" type="text" unit="year" />
                      <UnitTextField defaultValue="1" name="text" type="text" unit="month" />
                      <UnitTextField defaultValue="1" name="text" type="text" unit="days" /> */}

                      <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />

                    </FormFieldRow>


                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">転居制限予定住所に間違いがないかご確認ください。</Heading>

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

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅"   >

                    <UnitTextField defaultValue="調布" disabled name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow>

                <FormField label="よろしいですか？" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR12" value="no" checked modifiers="grey">
                      はい
                    </Radio>

                    <Radio name="RR12" value="no" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>
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

                        ●転居制限制度を利用できる期間は、延べ６年を上限とします。
                        <br />
                        ●制度利用による人事異動への反映は、原則定期異動時期とし、提出期限を次の通りとします。

                        <p className="  a-text--marginleft2">
                          〇春期定期異動対応、2月20日〆切厳守
                          <br />
                          〇秋期定期異動対応、8月20日〆切厳守

                        </p>
                        R区分は期日までにカンパニー人事総務部到着分、N区分・出向者は期日までに本社人事部到着分とします。
                        <br />
                        ●制度適用による人事異動に伴う引越し代・赴任旅費は自己負担となり、赴任手当の申請もできません。
                        <br />
                        ●内示発令後の「事後申告」に対しては一切認められません。
                        <br />
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
                <Heading tag="h1">転居制限適用 (申請)</Heading>
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
                    <Text align="left">適用希望</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="適用終了予定日" >
                    <Text align="left">YYYY年MM月21日</Text>
                  </FormField>

                </FormFieldRow>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由①-1　介護</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象者氏名" >
                    <Text align="left">開発　花子</Text>
                  </FormField>
                  <FormField label="対象者氏名（カナ）" >
                    <Text align="left">カイハツ　ハナコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="あなたから見た続柄" >
                    <Text align="left">実母</Text>
                  </FormField>
                  <FormField label="会社に連絡が必要な事項" >
                    <Text align="left">詳細内容</Text>
                  </FormField>
                </FormFieldRow>

                <FormField label="添付ファイル" >

                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <ul className="a-upload-img__preview">
                      <li className="a-upload-img__image">
                        <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                      </li>
                    </ul>
                  </FormFieldRow>
                </FormField>
              </Section>
              ----------------------事由②　結婚の場合
              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由②　結婚</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の名前" >
                    <Text align="left">開発　花子</Text>
                  </FormField>
                  <FormField label="配偶者の名前（カナ）" >
                    <Text align="left">カイハツ　ハナコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="入籍日" >
                    <Text align="left">2021/12/12</Text>
                  </FormField>
                  <FormField label="配偶者の職業" >
                    <Text align="left">会社員</Text>
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="添付ファイル" >
                    <ul className="a-upload-img__preview">
                      <li className="a-upload-img__image">
                        <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                      </li>
                    </ul>
                  </FormField>
                </FormFieldRow>

              </Section>
              ----------------------事由②　結婚の場合
              <br />

              ----------------------事由③-1　育児（子女）
              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由③-1　育児（子女）</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の名前" >
                    <Text align="left">開発　花子</Text>
                  </FormField>
                  <FormField label="対象子女の名前（カナ）" >
                    <Text align="left">カイハツ　ハナコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の生年月日" >
                    <Text align="left">2021/12/12</Text>
                  </FormField>
                  <FormField label="対象子女の年齢" >
                    <Text align="left">21歳</Text>
                  </FormField>
                </FormFieldRow>




              </Section>
              ----------------------事由③-1　育児（子女）
              <br />

              ----------------------事由③-2　育児（妊娠出産）
              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由③-2　育児（妊娠出産）</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="出産予定日" >
                    <Text align="left">2021/12/12</Text>
                  </FormField>

                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="添付ファイル" >
                    <ul className="a-upload-img__preview">
                      <li className="a-upload-img__image">
                        <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                      </li>
                    </ul>
                  </FormField>
                </FormFieldRow>

              </Section>
              ----------------------事由③-2　育児（妊娠出産）の場合
              <br />
              ----------------------事由④　本人病気の場合
              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由④　本人病気</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="事由詳細" >
                    <Text align="left">あああああああああああああああああ　いいいいいいいい　ううううううううううううううううう</Text>
                  </FormField>

                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="添付ファイル" >
                    <ul className="a-upload-img__preview">
                      <li className="a-upload-img__image">
                        <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                      </li>
                    </ul>
                  </FormField>
                </FormFieldRow>

              </Section>
              ----------------------事由④　本人病気の場合
              <br />

              ----------------------事由⑤　子女の問題の場合

              <Section modifiers="border">
                <Heading tag="h3">申請事由について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="申請事由" >
                    <Text align="left">事由⑤　子女の問題</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="事由詳細" >
                    <Text align="left">あああああああああああああああああ　いいいいいいいい　ううううううううううううううううう</Text>
                  </FormField>

                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の名前" >
                    <Text align="left">開発　花子</Text>
                  </FormField>
                  <FormField label="対象子女の名前（カナ）" >
                    <Text align="left">カイハツ　ハナコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象子女の年齢" >
                    <Text align="left">21歳</Text>
                  </FormField>

                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="添付ファイル" >
                    <ul className="a-upload-img__preview">
                      <li className="a-upload-img__image">
                        <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                      </li>
                    </ul>
                  </FormField>
                </FormFieldRow>

              </Section>


              ----------------------事由⑤　子女の問題の場合







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
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" >
                    <Text align="left">
                      調布
                    </Text>
                  </FormField>


                </FormFieldRow>

              </Section>

              <Section modifiers="border">
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

              </Section>
              ----------------------事由②　結婚の場合
              <Section modifiers="border">
                <Heading tag="h3">転居制限解除後の住所について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="転居制限解除後に住む予定の住所は、現住所ですか。" >
                    <Text align="left">
                      はい
                    </Text>
                  </FormField>
                </FormFieldRow>



              </Section>
              ----------------------事由②　結婚の場合




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
                  <FormField label="配偶者は転居制限を" >
                    <Text align="left">利用予定はない</Text>
                  </FormField>
                </FormFieldRow>


              </Section>
              ----------------------転居制限適用後に住む予定の住所は、現住所ですか。はいの場合
              <Section modifiers="border">
                <Heading tag="h3">配偶者について</Heading>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="配偶者情報有無" >
                    <Text align="left">なし</Text>
                  </FormField>
                </FormFieldRow>




              </Section>
              ----------------------転居制限適用後に住む予定の住所は、現住所ですか。はいの場合
            </div>
          </>
        </Modal>
      </Whole>
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          あなたには社内配偶者がいますので、この理由は選択できません。  </Text>
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
          あなたは転居制限の利用期間が上限6年に達しているため、この申請はご利用いただけません。<br />
          勤務エリア変更の申請がご利用いただけます。 <br />
          ※ご不明な点は、本籍人事部へお問い合わせください。 </Text>
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
          あなたは今年度末時点で満60歳以上到達のため、この申請はご利用いただけません。<br />
          勤務エリア変更の申請がご利用いただけます。<br />
          ※ご不明な点は、本籍人事部へお問い合わせください。 </Text>
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
          あなたの社員区分は「●」社員のため、この申請はご利用いただけません。 <br />
          ※ご不明な点は、本籍人事部へお問い合わせください。

        </Text>
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
          過去3年以内に変更履歴があります。前回変更から3年間は、申請ができません。  <br />
          ※ご不明な点は、本籍人事部へお問い合わせください。 </Text>
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
          産前産後・介護等の休職中はご利用いただけません。休職終了月度の翌月度以後を指定してください。 </Text>
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
          あなたの最大利用可能期間により、YYYY年MM月以後は選択できません。 </Text>
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
          あなたの選択した事由により、YYYY年4月20日を超えた期限は選択できません。 </Text>
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
          選択した開始日と終了日の範囲に、貴方が　●　区分である期間が含まれているため、本申請はご利用いただけません。
          <br />  詳細は、本籍人事部にお問合せください。 </Text>
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
          R区分のエリアブロックを超える申請です。勤務エリア変更の申請が必要です。 </Text>
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
