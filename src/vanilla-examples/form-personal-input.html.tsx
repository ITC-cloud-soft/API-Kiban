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
import { InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single';
import { ButtonContainer } from 'design/components/molecules/button-container';
import { HelpButton } from 'design/components/atoms/help-button';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { Icon } from 'design/components/atoms/icon';
import { Pagination } from 'design/components/atoms/pagination';
import { DataTable } from 'design/components/molecules/data-table';
import { CustItemButton } from 'design/components/atoms/cust-item-button';
import { UploadField } from 'design/components/atoms/upload-field';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>本人情報変更届</title>
    <body>
      <Whole navigation={''}>
        {/* 本人情報変更申請_PC_入力画面 */}
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
                <Heading tag="h1">本人情報変更届</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />　
                </Text>
              </Section>
              <br />
              {/* 本人情報変更区域 */}
              <HelpButton type="with-children">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h3">本人情報変更</Heading>
              <FormField
                label="修正理由区分"
                className="p-setting-input-form__form-field"
                labelAddons={<Tag>必須</Tag>}
              >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="変更日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormField label="社員番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="1234567" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="会社コード" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="0005" />
                </FormField>
                <FormField label="会社名" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="イオンリテール株式会社" />
                </FormField>
                <FormField label="所属コード" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="12345" />
                </FormField>
                <FormField label="所属" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="津田沼店" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="山田" />
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="佳子" />
                </FormField>
                <FormField
                  label="姓（カナ）"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="ヤマダ" />
                </FormField>
                <FormField
                  label="名（カナ）"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <TextField name="name" type="text" value="ヨシコ" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormField label="性別" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="sex" value="5" modifiers="grey">
                    男
                  </Radio>
                  <Radio name="sex" value="6" checked modifiers="grey">
                    女
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="婚姻区分" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="独身" />
                </FormFieldRow>
              </FormField>
              <FormField label="国籍" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="空欄" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">日本</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <Text align="left" modifiers="small-purple" className="">
                ※国籍情報が空である場合、「空欄」を設定しております。
              </Text>
              <div className="m-info-table__header"></div>
              <br />
              {/* 税扶養申告区域 */}
              <Heading tag="h3">税扶養申告</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の税表区分" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="月額甲" />
                </FormField>
                <FormField label="税表区分を変更しますか" className="p-setting-input-form__form-field">
                  <Pulldown id="contel-start-time" placeholder="変更する" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>
                <FormField
                  label="税表区分変更理由"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <Pulldown id="contel-start-time" placeholder="給与収入のみ" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>
                <FormField label="（変更後）税表区分" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="月額甲" />
                </FormField>
              </FormFieldRow>
              <FormField label="申請日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              {/* 寡婦・ひとり親区分について区域 */}
              <Heading tag="h4">寡婦・ひとり親区分について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の寡婦・ひとり親区分">
                  <TextField name="name" type="text" disabled value="対象外" />
                </FormField>
              </FormFieldRow>
              <InfoTableNone header="寡婦・ひとり親確認事項">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="①申請者性別">
                    <TextField name="name" type="text" disabled value="男" />
                  </FormField>
                  <FormField label="②申請者婚姻区分">
                    <TextField name="name" type="text" disabled value="独身" />
                  </FormField>
                  <FormField label="③事実婚状態ではないですか。" labelAddons={<Tag>必須</Tag>}>
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormField>
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        ④従業員自身の年間所得が500万円以下ですか。
                        <Tag>必須</Tag>
                      </Text>
                    }
                  >
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormField>
                  <FormField
                    label={
                      <Text className="a-text-tag">
                        ⑤離婚歴はありますか。（女性のみ）
                        <Tag>必須</Tag>
                      </Text>
                    }
                  >
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="寡婦・ひとり親区分判定">
                  <TextField name="name" type="text" disabled value="対象外" />
                </FormField>
              </FormFieldRow>
              {/* 勤労学生区分について区域 */}
              <Heading tag="h4">勤労学生区分について</Heading>
              <FormField label="現在の勤労学生区分">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="対象外" />
                </FormFieldRow>
              </FormField>
              <InfoTableNone header="勤労学生確認事項">
                <FormField
                  label={
                    <Text className="a-text-tag">
                      ①従業員自身が所定の学校の学生・生徒に該当しますか。
                      <span id="school">
                        <Icon name="help" />
                      </span>
                      <Tag>必須</Tag>
                    </Text>
                  }
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      ②本人の年間所得金額が48万円以上75万円以下（給与収入で言えば103万円以上130万円以下）の見込みである。
                      <Tag>必須</Tag>
                    </Text>
                  }
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label={
                    <Text className="a-text-tag">
                      ③本人の給与所得（アルバイト代）以外の所得が、10万円以下である。
                      <Tag>必須</Tag>
                    </Text>
                  }
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="勤労学生区分判定">
                  <TextField name="name" type="text" disabled value="対象外" />
                </FormField>
              </FormFieldRow>
              {/* 本人障害区分について区域 */}
              <Heading tag="h4">本人障害区分について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の本人障害区分">
                  <TextField name="name" type="text" disabled value="対象外" />
                </FormField>
                <FormField label="障害区分を変更しますか">
                  <Pulldown id="contel-start-time" placeholder="変更する" name="contel-start-time">
                    <option value=""></option>
                    <option value="1">テスト１</option>
                    <option value="2">テスト２</option>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
              <InfoTableNone header="障害区分確認事項">
                <FormField
                  label={
                    <Text className="a-text-tag">
                      ①障害の認定対象に該当しますか。
                      <span id="handicap">
                        <Icon name="help" />
                      </span>
                      <Tag>必須</Tag>
                    </Text>
                  }
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="はい" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField label="②手帳情報を入力ください。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="手帳番号" labelAddons={<Tag>必須</Tag>}>
                      <TextField name="name" type="text" value="第◯◯◯◯◯号" />
                    </FormField>
                    <FormField label="手帳交付日" labelAddons={<Tag>必須</Tag>}>
                      <CalendarField
                        className="a-calendar-field__content"
                        defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                        onDateChange={() => {}}
                      />
                    </FormField>
                    <FormField label="障害内容区分" labelAddons={<Tag>必須</Tag>}>
                      <Pulldown id="contel-start-time" placeholder="身体障害" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField label="障害等級" labelAddons={<Tag>必須</Tag>}>
                      <Pulldown id="contel-start-time" placeholder="１級" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                    <FormField label="障害程度" labelAddons={<Tag>必須</Tag>}>
                      <Pulldown id="contel-start-time" placeholder="重度以外" name="contel-start-time">
                        <option value=""></option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="障害内容" labelAddons={<Tag>必須</Tag>}>
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                </FormField>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="（変更後）障害区分">
                  <TextField name="name" type="text" disabled value="一般障害者" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField
                  label="アップロードファイル"
                  labelAddons={<Tag>必須</Tag>}
                  className="a-upload-lable-display"
                >
                  <UploadField description="形式：jpg/png/pdf | サイズ：10MBまで">
                    アップロードファイルをドラッグ＆ドロップするかパソコンから貼り付けしてください。
                  </UploadField>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 口座変更区域 */}
              <Heading tag="h3">口座変更</Heading>
              <Text align="left" modifiers="purple">
                ＜注意＞
                <br />
                登録された氏名と給与口座名義人が一致しないと、給与を口座に振り込みできません。氏名変更をした時は、自動で給与口座名義人も変更します。今月度の口座変更は締められています。X月X日以降の日付を選択してください。
              </Text>
              <Text align="left" modifiers="blue">
                ＜出向者の方へ＞
                <br />
                今回の申請内容は、申請時期により次回の給与支払に反映されない可能性があります。その場合は翌々月の反映となります。詳しくは、給与明細をご確認ください。
              </Text>
              <FormField label="口座変更日">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="銀行コード" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="0040" />
                </FormField>
                <FormField label="支店コード" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="001" />
                </FormField>
              </FormFieldRow>
              <CustItemButton id="search">銀行名・銀行コード検索　</CustItemButton>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="金融機関名">
                  <TextField name="name" type="text" disabled value="イオン銀行" />
                </FormField>
                <FormField label="支店名">
                  <TextField name="name" type="text" disabled value="ガーネット支店" />
                </FormField>
                <FormField label="預金種別">
                  <TextField name="name" type="text" disabled value="普通" />
                </FormField>
                <FormField label="番号" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="1234567" />
                </FormField>
                <FormField label="口座名義" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="デンシタロウ" />
                </FormField>
              </FormFieldRow>
            </div>
          </>
        </Modal>
        {/* 本人情報変更申請_PC_確認画面 */}
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
                <Heading tag="h1">本人情報変更届</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* 本人情報変更区域 */}
              <Heading tag="h3">本人情報変更</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="修正理由区分" className="p-setting-input-form__form-field">
                  <Text align="left">誤登録修正</Text>
                </FormField>
                <FormField label="変更日" className="p-setting-input-form__form-field">
                  <Text align="left">2021/07/12</Text>
                </FormField>
                <FormField label="社員番号" className="p-setting-input-form__form-field">
                  <Text align="left">1234567</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="会社コード" className="p-setting-input-form__form-field">
                  <Text align="left">0005</Text>
                </FormField>
                <FormField label="会社名" className="p-setting-input-form__form-field">
                  <Text align="left">イオンリテール株式会社</Text>
                </FormField>
                <FormField label="所属コード" className="p-setting-input-form__form-field">
                  <Text align="left">12345</Text>
                </FormField>
                <FormField label="所属" className="p-setting-input-form__form-field">
                  <Text align="left">津田沼店</Text>
                </FormField>
                <FormField label="姓" className="p-setting-input-form__form-field">
                  <Text align="left">山田</Text>
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field">
                  <Text align="left">佳子</Text>
                </FormField>
                <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                  <Text align="left">ヤマダ</Text>
                </FormField>
                <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                  <Text align="left">ヨシコ</Text>
                </FormField>
                <FormField label="生年月日" className="p-setting-input-form__form-field">
                  <Text align="left">2000/02/12</Text>
                </FormField>
                <FormField label="性別" className="p-setting-input-form__form-field">
                  <Text align="left">男</Text>
                </FormField>
                <FormField label="婚姻区分" className="p-setting-input-form__form-field">
                  <Text align="left">独身</Text>
                </FormField>
                <FormField label="国籍" className="p-setting-input-form__form-field">
                  <Text align="left">日本</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 税扶養申告区域 */}
              <Heading tag="h3">税扶養申告</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の税表区分" className="p-setting-input-form__form-field">
                  <Text align="left">月額甲</Text>
                </FormField>
                <FormField label="税表区分を変更しますか" className="p-setting-input-form__form-field">
                  <Text align="left">変更する</Text>
                </FormField>
                <FormField label="税表区分変更理由" className="p-setting-input-form__form-field">
                  <Text align="left">給与収入のみ</Text>
                </FormField>
                <FormField label="（変更後）税表区分" className="p-setting-input-form__form-field">
                  <Text align="left">月額乙</Text>
                </FormField>
                <FormField label="申請日" className="p-setting-input-form__form-field">
                  <Text align="left">2021/09/12</Text>
                </FormField>
              </FormFieldRow>
              {/* 寡婦・ひとり親区分について区域 */}
              <Heading tag="h4">寡婦・ひとり親区分について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の寡婦・ひとり親区分">
                  <Text align="left">対象外</Text>
                </FormField>
              </FormFieldRow>
              <InfoTableNone header="寡婦・ひとり親確認事項">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="①申請者性別">
                    <Text align="left">男</Text>
                  </FormField>
                  <FormField label="②申請者婚姻区分">
                    <Text align="left">独身</Text>
                  </FormField>
                  <FormField label="③事実婚状態ではないですか。">
                    <Text align="left">はい</Text>
                  </FormField>
                  <FormField label="④従業員自身の年間所得が500万円以下ですか。">
                    <Text align="left">はい</Text>
                  </FormField>
                  <FormField label="⑤離婚歴はありますか。（女性のみ）">
                    <Text align="left">はい</Text>
                  </FormField>
                </FormFieldRow>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="寡婦・ひとり親区分判定">
                  <Text align="left">対象外</Text>
                </FormField>
              </FormFieldRow>
              {/* 勤労学生区分について区域 */}
              <Heading tag="h4">勤労学生区分について</Heading>
              <FormField label="現在の勤労学生区分">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text align="left">対象外</Text>
                </FormFieldRow>
              </FormField>
              <InfoTableNone header="勤労学生確認事項">
                <FormField label="①従業員自身が所定の学校の学生・生徒に該当しますか。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text align="left">はい</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="②本人の年間所得金額が48万円以上75万円以下（給与収入で言えば103万円以上130万円以下）の見込みである。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text align="left">はい</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="③本人の給与所得（アルバイト代）以外の所得が、10万円以下である。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text align="left">はい</Text>
                  </FormFieldRow>
                </FormField>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="勤労学生区分判定">
                  <Text align="left">対象外</Text>
                </FormField>
              </FormFieldRow>
              {/* 本人障害区分について区域 */}
              <Heading tag="h4">本人障害区分について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="現在の本人障害区分">
                  <Text align="left">対象外</Text>
                </FormField>
                <FormField label="障害区分を変更しますか">
                  <Text align="left">変更する</Text>
                </FormField>
              </FormFieldRow>
              <InfoTableNone header="障害区分確認事項">
                <FormField label="①障害の認定対象に該当しますか。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text align="left">はい</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="②手帳情報を入力ください。">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="手帳番号">
                      <Text align="left">第◯◯◯◯◯号</Text>
                    </FormField>
                    <FormField label="手帳交付日">
                      <Text align="left">2021/09/12</Text>
                    </FormField>
                    <FormField label="障害内容区分">
                      <Text align="left">身体障害</Text>
                    </FormField>
                    <FormField label="障害等級">
                      <Text align="left">１級</Text>
                    </FormField>
                    <FormField label="障害程度">
                      <Text align="left">重度以外</Text>
                    </FormField>
                    <FormField label="障害内容">
                      <Text align="left">視覚障害、全盲</Text>
                    </FormField>
                  </FormFieldRow>
                </FormField>
              </InfoTableNone>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="（変更後）障害区分">
                  <Text align="left">一般障害</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="アップロードファイル">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\exp20\Pictures\領収書.jpg" />
                    </li>
                  </ul>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 口座変更区域 */}
              <Heading tag="h3">口座変更</Heading>
              <FormField label="口座変更日">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text align="left">2021/02/12</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="銀行コード">
                  <Text align="left">0040</Text>
                </FormField>
                <FormField label="支店コード">
                  <Text align="left">001</Text>
                </FormField>
                <FormField label="金融機関名">
                  <Text align="left">イオン銀行</Text>
                </FormField>
                <FormField label="支店名">
                  <Text align="left">ガーネット支店</Text>
                </FormField>
                <FormField label="預金種別">
                  <Text align="left">普通</Text>
                </FormField>
                <FormField label="番号">
                  <Text align="left">1234567</Text>
                </FormField>
                <FormField label="口座名義">
                  <Text align="left">デンシタロウ</Text>
                </FormField>
              </FormFieldRow>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 所定の学校の学生・生徒とは説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="所定の学校の学生・生徒とは">
        <Text>
          ・学校教育法第一条に規定する学校の学生または生徒
          <br />
          ・国や地方公共団体または学校法人などの設置した専修学校または各種学校の生徒
          <br />
          ・職業訓練法人の行う認定職業訓練を受ける人で一定の条件を満たしている人
        </Text>
      </Modal>
      {/* 障害の認定対象とは説明文言 */}
      <Modal id="modal_help_handicap_info" headerIcon="help" title="障害の認定対象とは">
        <Text>
          ・身体障碍者手帳の交付を受けている。
          <br />
          ・精神障害者保健福祉手帳の交付を受けている。
          <br />
          ・精神保健指定医などにより知的な障害者と判定されている（療育手帳を持っている）
        </Text>
      </Modal>
      {/* 所定の学校の学生・生徒とは説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="所定の学校の学生・生徒とは">
        <Text>
          ・学校教育法第一条に規定する学校の学生または生徒
          <br />
          ・国や地方公共団体または学校法人などの設置した専修学校または各種学校の生徒
          <br />
          ・職業訓練法人の行う認定職業訓練を受ける人で一定の条件を満たしている人
        </Text>
      </Modal>
      {/* 金融機関選択_PC_入力 */}
      <Modal id="modal_financial_info" title="金融機関選択" modalSize="medium">
        <Section className="p-setting-input-form__body">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <FormField label="" className="o-form-nolable">
              <Heading tag="h3">金融機関名（みずほ銀行）支店名の１文字目を選択してください。</Heading>
              <Section noPadding={true} className="o-button-container">
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ア
                  </Button>
                  <Button modifiers="secondary" type="button">
                    イ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ウ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    エ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    オ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    カ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    キ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ク
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ケ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    コ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    サ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    シ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ス
                  </Button>
                  <Button modifiers="secondary" type="button">
                    セ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ソ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    タ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    チ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ツ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    テ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ト
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ナ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ニ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ヌ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ネ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ノ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ハ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ヒ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    フ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ヘ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ホ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    マ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ミ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ム
                  </Button>
                  <Button modifiers="secondary" type="button">
                    メ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    モ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ヤ
                  </Button>
                  <Button disabled modifiers="text" type="button">
                    　
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ユ
                  </Button>
                  <Button disabled modifiers="text" type="button">
                    　
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ヨ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ラ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    リ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ル
                  </Button>
                  <Button modifiers="secondary" type="button">
                    レ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ロ
                  </Button>
                </ButtonContainer>
                <ButtonContainer>
                  <Button modifiers="secondary" type="button">
                    ワ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ヲ
                  </Button>
                  <Button modifiers="secondary" type="button">
                    ン
                  </Button>
                  <Button modifiers="text" type="button" disabled>
                    　
                  </Button>
                  <Button modifiers="text" type="button" disabled>
                    　
                  </Button>
                </ButtonContainer>
              </Section>
            </FormField>
            <FormField label="" className="o-form-nolable">
              <Heading tag="h3">支店・店舗情報</Heading>
              <Text modifiers="small-purple">※支店コード・名称をクリックで確定します。</Text>
              <Section noPadding={true} className="o-table-container">
                <DataTable
                  id="setting-list-data-table"
                  double={false}
                  contents={[
                    [
                      {
                        value: '001',
                      },
                      {
                        value: '東京営業部',
                      },
                    ],
                    [
                      {
                        value: '002',
                      },
                      {
                        value: '東京法人営業部',
                      },
                    ],
                    [
                      {
                        value: '003',
                      },
                      {
                        value: '東京中央支店',
                      },
                    ],
                    [
                      {
                        value: '004',
                      },
                      {
                        value: '東京ファッションタウン出張所',
                      },
                    ],
                  ]}
                  headers={[
                    {
                      value: (
                        <button className="m-accordion__label">
                          支店コード
                          <Icon name="arrow-down" />
                        </button>
                      ),
                    },
                    {
                      value: (
                        <button className="m-accordion__label">
                          支店名称
                          <Icon name="arrow-down" />
                        </button>
                      ),
                    },
                  ]}
                />
                <Pagination length={3} currentIndex={1} />
              </Section>
            </FormField>
          </FormFieldRow>
        </Section>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
