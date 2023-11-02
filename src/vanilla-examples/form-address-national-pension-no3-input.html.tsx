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

const CommutingInputForm: React.FC = () => (
  <html>
    <title>厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届</title>
    <body>
      <Whole navigation={''}>
        {/* 厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届_インプット画面 */}
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
                <Heading tag="h1">厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                  　
                </Text>
              </Section>
              <Section modifiers="border">
                <Text className="a-text-tag">
                  本届出は、会社保険加入の従業員と、その配偶者（健保の被扶養者）の方について、以下の場合に申請が必要です。
                  <br />
                  ①転居してから「ねんきん定期便」が届かなくなった。
                  <br />
                  ②住民票住所ではなく、別の居住地で「ねんきん定期便」を受け取りたい。
                  <br />
                  ③いままで、住民票住所以外で「ねんきん定期便」を受け取っていたが、住民票住所に変更したい。
                </Text>
                <FormField label="">
                  <EmailTemplateViewer>
                    <Heading tag="h3">注意事項</Heading>
                    <p>
                      本申請は<span className="a-text--purple">配偶者の方の申請がある場合</span>
                      、入力完了後、印刷をする必要があります。
                    </p>
                    <p>プリンターの準備をお願いします。印刷は後日でも可能です。</p>
                    <p>※ご本人申請のみの場合は印刷はありません。</p>
                  </EmailTemplateViewer>
                </FormField>
              </Section>
              {/* 申請の内容について区域 */}
              <Section modifiers="border">
                <Heading tag="h3">申請の内容について</Heading>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      住所変更届を提出したい対象者を選択してください。
                      <Tag>必須</Tag>
                    </Text>
                  }
                  className="p-setting-input-form__form-field"
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="reason" value="1" modifiers="grey">
                      ご自身のみ
                    </Radio>
                    <Radio name="reason" value="3" modifiers="grey">
                      配偶者のみ
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      ご自身と配偶者
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 変更前住所の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">変更前住所の入力</Heading>
                <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <AddressSearchField
                      id="address-search-field"
                      inputProps={{
                        defaultValue: '',
                      }}
                      buttonProps={{
                        type: 'button',
                      }}
                    />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="都道府県・市郡区"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="町村・番地"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="美浜１－１－１" />
                  </FormFieldRow>
                </FormField>
                <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="チバケンチバシミハマク" />
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 変更後住所、変更日、変更理由区域 */}
              <Section modifiers="border">
                <Heading tag="h3">変更後住所、変更日、変更理由</Heading>
                <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <AddressSearchField
                      id="address-search-field"
                      inputProps={{
                        defaultValue: '',
                      }}
                      buttonProps={{
                        type: 'button',
                      }}
                    />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="都道府県・市郡区"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="町村・番地"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="美浜１－１－１" />
                  </FormFieldRow>
                </FormField>
                <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="チバケンチバシミハマク" />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="変更年月日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      変更理由
                      <Tag>必須</Tag>
                    </Text>
                  }
                  className="p-setting-input-form__form-field"
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="reason" value="1" modifiers="grey">
                      住民票以外の居住地を登録したい
                      <br />
                      ※今後、住所（居所）を変更した際、再度本手続きが必要です。
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      住民票住所に登録を変更したい
                    </Radio>
                    <Radio name="reason" value="3" modifiers="grey">
                      短期在留
                    </Radio>
                    <Radio name="reason" value="1" modifiers="grey">
                      海外居住
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      その他
                    </Radio>
                    <TextField placeholder="その他の理由（10文字まで）" name="name" type="text" value="" />
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 配偶者の情報の確認区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者の情報の確認</Heading>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      登録されている家族情報より、配偶者情報を表示しています。
                      <br />
                      この方の住所変更届も同時に申請します（この方の住所変更届を申請します←「※配偶者のみの場合表示する」）。よろしいですか？
                      <Tag>必須</Tag>
                    </Text>
                  }
                  className="p-setting-input-form__form-field"
                >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="reason" value="1" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="配偶者氏名"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" disabled value="" />
                  </FormFieldRow>
                </FormField>
                <FormField label="生年月日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField name="name" type="text" disabled value="" />
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 配偶者情報の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者情報の入力</Heading>
                <Text className="a-text-tag">
                  配偶者の「基礎年金番号」を入力して下さい。
                  <br />
                  ※基礎年金番号は年金手帳に記載されています。
                  <br />
                  不明の場合は、年金ダイヤル（０５７０－０５－１１６５）へ問合せをし、確認ができてから本届出を実施下さい。
                </Text>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        基礎年金記号（前の4ケタ）
                        <Tag>必須</Tag>
                      </Text>
                    }
                    className="p-setting-input-form__form-field"
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField name="name" type="text" value="" />
                    </FormFieldRow>
                  </FormField>
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        基礎年金番号（後の6ケタ）
                        <Tag>必須</Tag>
                      </Text>
                    }
                    className="p-setting-input-form__form-field"
                  >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField name="name" type="text" value="" />
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      配偶者の方とは同居していますか？
                      <Tag>必須</Tag>
                    </Text>
                  }
                  className="p-setting-input-form__form-field"
                >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="reason" value="1" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 配偶者　変更前住所の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者　変更前住所の入力</Heading>
                <Text className="a-text-tag">配偶者の変更前住所を入力して下さい。</Text>
                <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <AddressSearchField
                      id="address-search-field"
                      inputProps={{
                        defaultValue: '',
                      }}
                      buttonProps={{
                        type: 'button',
                      }}
                    />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="都道府県・市郡区"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="町村・番地"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="美浜１－１－１" />
                  </FormFieldRow>
                </FormField>
                <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="チバケンチバシミハマク" />
                  </FormFieldRow>
                </FormField>
              </Section>
              {/* 配偶者　変更後住所、変更日、変更理由区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者　変更後住所、変更日、変更理由</Heading>
                <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <AddressSearchField
                      id="address-search-field"
                      inputProps={{
                        defaultValue: '',
                      }}
                      buttonProps={{
                        type: 'button',
                      }}
                    />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="都道府県・市郡区"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="千葉県千葉市美浜区" />
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="町村・番地"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="美浜１－１－１" />
                  </FormFieldRow>
                </FormField>
                <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField type="text" name="text" value="チバケンチバシミハマク" />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="変更年月日"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                </FormFieldRow>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      変更理由
                      <Tag>必須</Tag>
                    </Text>
                  }
                  className="p-setting-input-form__form-field"
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio name="reason" value="1" modifiers="grey">
                      住民票以外の居住地を登録したい
                      <br />
                      ※今後、住所（居所）を変更した際、再度本手続きが必要です。
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      住民票住所に登録を変更したい
                    </Radio>
                    <Radio name="reason" value="3" modifiers="grey">
                      短期在留
                    </Radio>
                    <Radio name="reason" value="1" modifiers="grey">
                      海外居住
                    </Radio>
                    <Radio name="reason" value="2" modifiers="grey">
                      その他
                    </Radio>
                    <TextField placeholder="その他の理由（10文字まで）" name="name" type="text" value="" />
                  </FormFieldRow>
                </FormField>
              </Section>
            </div>
          </>
        </Modal>
        {/* 通勤許可申請_PC_確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge" id="confirm-app-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                承認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届(確認)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 申請の内容について区域 */}
              <Section modifiers="border">
                <Heading tag="h3">申請の内容について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="住所変更届を提出したい対象者を選択してください。"
                    className="p-setting-input-form__form-field"
                  >
                    <Text align="left">ご自身のみ</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 変更前住所の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">変更前住所の入力</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" className="p-setting-input-form__form-field">
                    <Text align="left">111-0032</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field">
                    <Text align="left">東京都台東区</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" className="p-setting-input-form__form-field">
                    <Text align="left">浅草2-3-1 イオンビル2F</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                    <Text align="left">テストマンション　502号</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 変更後住所、変更日、変更理由区域 */}
              <Section modifiers="border">
                <Heading tag="h3">変更後住所、変更日、変更理由</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" className="p-setting-input-form__form-field">
                    <Text align="left">111-0032</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field">
                    <Text align="left">東京都台東区</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" className="p-setting-input-form__form-field">
                    <Text align="left">浅草2-3-1 イオンビル2F</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                    <Text align="left">テストマンション　502号</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更年月日" className="p-setting-input-form__form-field">
                    <Text align="left">2021/07/12</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更理由" className="p-setting-input-form__form-field">
                    <Text align="left">その他</Text>
                    <Text align="left">その他の理由（10文字まで）</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 配偶者の情報の確認区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者の情報の確認</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        登録されている家族情報より、配偶者情報を表示しています。
                        <br />
                        この方の住所変更届も同時に申請します（この方の住所変更届を申請します←「※配偶者のみの場合表示する」）。よろしいですか？
                      </Text>
                    }
                    className="p-setting-input-form__form-field"
                  >
                    <Text align="left">はい</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者氏名" className="p-setting-input-form__form-field">
                    <Text align="left">XX XX</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="生年月日" className="p-setting-input-form__form-field">
                    <Text align="left">XX XX</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 配偶者情報の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者情報の入力</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の「基礎年金番号」" className="p-setting-input-form__form-field">
                    <Text align="left">0000-000000</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の方とは同居していますか？" className="p-setting-input-form__form-field">
                    <Text align="left">はい</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 配偶者　変更前住所の入力区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者　変更前住所の入力</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" className="p-setting-input-form__form-field">
                    <Text align="left">111-0032</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field">
                    <Text align="left">東京都台東区</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" className="p-setting-input-form__form-field">
                    <Text align="left">浅草2-3-1 イオンビル2F</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                    <Text align="left">テストマンション　502号</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* 配偶者　変更後住所、変更日、変更理由区域 */}
              <Section modifiers="border">
                <Heading tag="h3">配偶者　変更後住所、変更日、変更理由</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" className="p-setting-input-form__form-field">
                    <Text align="left">111-0032</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="都道府県・市郡区" className="p-setting-input-form__form-field">
                    <Text align="left">東京都台東区</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="町村・番地" className="p-setting-input-form__form-field">
                    <Text align="left">浅草2-3-1 イオンビル2F</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="建物名・部屋番号" className="p-setting-input-form__form-field">
                    <Text align="left">テストマンション　502号</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更年月日" className="p-setting-input-form__form-field">
                    <Text align="left">2021/07/12</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更理由" className="p-setting-input-form__form-field">
                    <Text align="left">その他</Text>
                    <Text align="left">その他の理由（10文字まで）</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<CommutingInputForm />);
