import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Radio } from 'design/components/atoms/radio/index';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Whole } from 'design/components/organisms/whole';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { UploadField } from 'design/components/atoms/upload-field';
import { HelpButton } from 'design/components/atoms/help-button';
import { mapModifiers } from 'design/libs/component';
import { Modal } from 'design/components/organisms/modal';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { UploadList, UploadListItem } from 'design/components/molecules/upload-list';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>結婚届</title>
    <body>
      <Whole navigation={''}>
        {/* 入力画面 */}
        <Modal
            modifiers="fullscreen"
            id="full-modal"
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
            <Section className="p-setting-input-form__heading">
              <Heading tag="h1">結婚届</Heading>
              <Text>XXXXXXX（説明文言未定）<br/>YYYYYY</Text>
            </Section>
            <Section className="p-setting-input-form__body">
              <HelpButton type="with-children" >
                を押すと項目の詳しい説明が表示されます。
              </HelpButton>
              {/* 申請者情報区域 */}
              <Heading tag="h3">社員情報</Heading>
              <Text>
                本申請により、未婚から既婚へと変更申請を行います。<br />
                結婚後の苗字で更新ください。苗字変更がない場合は更新不要です。
              </Text>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" disabled />
                </FormField>
                <FormField label="姓（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
                <FormField label="名（カナ）" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" disabled />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="婚姻区分" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" value="既婚" disabled />
                </FormField>
              </FormFieldRow>
              {/* 配偶者情報区域 */}
              <Heading tag="h3">配偶者（対象者）情報</Heading>
              <Text>結婚後の配偶者氏名を入力してください。<br/>
                配偶者が、社内もしくはイオングループの方であれば、配偶者の社員番号も入力してください。</Text>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="家族追加区分" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" value="結婚" disabled />
                </FormField>
              </FormFieldRow>
              <FormField label="入籍日（予定日）" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField />
                </FormFieldRow>
                <CaptionList>
                  <React.Fragment key=".0">
                    3ヵ月以上先は、入力できません。3ヵ月以内になったら申請してください。
                  </React.Fragment>
                </CaptionList>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号" className="p-setting-input-form__form-field" >
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third" >
                      社員検索
                    </Button>
                  </div>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
                <FormField label="姓（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
                <FormField label="名（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField type="text" name="text" />
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField />
                </FormFieldRow>
              </FormField>
              <FormField label="性別" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="gender" value="male">
                    男性
                  </Radio>
                  <Radio name="gender" value="female">
                    女性
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="従業員との続柄" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" value="配偶者" disabled />
                </FormField>
              </FormFieldRow>
              <FormField label="同居/別居" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="living" value="together">
                    同居
                  </Radio>
                  <Radio name="living" value="seperate">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>
              <Heading tag="h3">税扶養情報</Heading>
              <FormField label="対象者の扶養有無" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="dependent" value="yes">
                    自分の扶養に入れる
                  </Radio>
                  <Radio name="dependent" value="no">
                    自分の扶養に入れない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="従業員本人の年間所得見積額" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="salary" value="over">
                    1000万円以下
                  </Radio>
                  <Radio name="salary" value="less">
                    1000万円超え
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="対象者の所得見積額" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <UnitTextField disabled/>
                    <Button type="button" modifiers="third" >
                      所得計算
                    </Button>
                  </div>
                  </FormFieldRow>
                  <CaptionList>
                    <React.Fragment key=".0">
                      年収から所得を計算する場合は、「所得計算」ボタンを押下してください。
                      <br/>
                      家族を扶養から外す場合は、48万円超え（例：480001）の金額を入力してください。
                    </React.Fragment>
                </CaptionList>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field" >
                  <UnitTextField unit="unit-age" disabled />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field" >
                  <TextField type="text" name="text" disabled />
                </FormField>
              </FormFieldRow>
              <FormField label="対象者の障害区分"  labelAddons={<HelpButton id="help_handicap_info" />} labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time" >
                    <option value=""></option>
                    <option value="0">なし</option>
                    <option value="1">一般障碍者</option>
                    <option value="2">特別障害者</option>
                  </Pulldown>
                </FormFieldRow>
                <CaptionList>
                  <React.Fragment key=".0">
                    障害者の場合は、障害者手帳の画像をアップロードしてください。
                  </React.Fragment>
                </CaptionList>
                <ModalOpener id="modal-opener" small={true} >障害者手帳ハードコピーの参考例</ModalOpener>
              </FormField>
              <FormField label="障害者手帳画像アップロード" labelAddons={<Tag>必須</Tag>}>
                <UploadField description="形式：jpg / png | サイズ：10MBまで　">
                  障害者手帳画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                </UploadField>
              </FormField>
              {/* 健康保険情報区域 */}
              <Heading tag="h3">健康保険情報</Heading>
              <FormField label="健康保険扶養申請" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio defaultChecked name="insurence" value="yes">
                    申請する
                  </Radio>
                  <Radio name="insurence" value="no">
                    申請しない
                  </Radio>
                </FormFieldRow>
                <CaptionList>
                  <React.Fragment key=".0">
                    健康保険扶養を申請する場合、紙申請書を記入し、必ずBS業務部へ提出してください。
                  </React.Fragment>
                </CaptionList>
                <ModalOpener id="modal-opener" >税扶養変更手続き一式_健康保険扶養申請書.docx</ModalOpener>
              </FormField>
              {/* 所属・GLC・組合情報区域 */}
              <Heading tag="h3">所属・GLC・組合情報</Heading>
              <Accordion label="確認する">
                <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0092</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2002/08/21</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="組織名称（略）">
                  <span>ヘルプ運用G</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="GLC会員区分">
                  <span>A会員2</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="組合区分">
                  <span>組合員</span>
                </InfoTableCell>
              </InfoTable>
              </Accordion>
              {/* 祝金申請情報区域 */}
              <Heading tag="h3">祝金申請</Heading>
              <Text>GLCからの祝金申請となります。</Text>
              <FormField label="祝金申請" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio defaultChecked name="conmoney" value="yes">
                    必要
                  </Radio>
                  <Radio name="conmoney" value="no">
                    辞退
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="祝金" className="p-setting-input-form__form-field" >
                  <UnitTextField value="30,000" disabled/>
                </FormField>
              </FormFieldRow>
              {/* 祝電申請情報区域 */}
              <Heading tag="h3">祝電申請</Heading>
              <Text>GLCからの祝電申請が可能です（海外への祝電手配はできません）<br/>
                不明な点は入力者に問合せしますので、電話番号・メールアドレスも入力してください。</Text>
              <FormField label="祝電申請" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio defaultChecked name="contel" value="yes">
                    必要
                  </Radio>
                  <Radio name="contel" value="no">
                    辞退
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="日付" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField />
                </FormFieldRow>
              </FormField>
              <FormField label="開始時刻" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                <Pulldown id="contel-start-time" placeholder="選択してください" name="contel-start-time" >
                    <option value=""></option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="会場名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <FormField label="会場名（カナ）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
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
              <FormField label="都道府県・市区町村" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <FormField label="番地・建物名・部屋番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <FormField label="式場電話番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <FormField label="不明点は入力者に問合せしますので、電話番号・メールアドレスを入力してください。" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
              </FormField>
              <FormField label="連絡先電話番号" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
              <FormField label="連絡先メールアドレス" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField type="text" name="text" />
                </FormFieldRow>
              </FormField>
            </Section>
          </div>
        </>
        </Modal>
        {/* 確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="primary" size="huge" id="input-form-confirm-button">
                申請
              </Button>
            </>
          }
          >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">結婚届</Heading>
                <Text>XXXXXXX（説明文言未定）<br/>YYYYYY</Text>
              </Section>
              <Section className="p-setting-input-form__body">
              <Heading tag="h3">社員情報</Heading>
              <Text>
                本申請により、未婚から既婚へと変更申請を行います。<br />
                結婚後の苗字で更新ください。苗字変更がない場合は更新不要です。
              </Text>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field">
                  <Text>山田 </Text>
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field" >
                  <Text>太郎</Text>
                </FormField>
                <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                  <Text>ヤマダ</Text>
                </FormField>
                <FormField label="名（カナ）" className="p-setting-input-form__form-field" >
                  <Text>タロウ</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="婚姻区分" className="p-setting-input-form__form-field" >
                  <Text>既婚</Text>
                </FormField>
              </FormFieldRow>
              {/* 配偶者情報 */}
              <Heading tag="h3">配偶者（対象者）情報</Heading>
              <Text>結婚後の配偶者氏名を入力してください。<br/>
                配偶者が、社内もしくはイオングループの方であれば、配偶者の社員番号も入力してください。</Text>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="家族追加区分" className="p-setting-input-form__form-field" >
                  <Text>結婚</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="入籍日（予定日）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>2021/07/01</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号" className="p-setting-input-form__form-field" >
                  <Text>1234567</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field">
                  <Text>山田</Text>
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field">
                  <Text>佳子</Text>
                </FormField>
                <FormField label="姓（カナ）" className="p-setting-input-form__form-field">
                  <Text>ヤマダ</Text>
                </FormField>
                <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                  <Text>ヨシコ</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="生年月日">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>1995/05/01</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="性別">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>女性</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="従業員との続柄" className="p-setting-input-form__form-field" >
                  <Text>配偶者</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="同居/別居">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>同居</Text>
                </FormFieldRow>
              </FormField>
              {/* 税扶養情報 */}
              <Heading tag="h3">税扶養情報</Heading>
              <FormField label="対象者の扶養有無">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>自分の扶養に入れる</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="従業員本人の年間所得見積額">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>1000万円以下</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="対象者の所得見積額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>450,000円</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field" >
                  <Text>26歳</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field" >
                  <Text>税扶養対象</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="対象者の障害区分">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>一般障害者</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="障害者手帳画像アップロード">
                <UploadList label="">
                  <UploadListItem fileSize="32.4KB">image01.jpg</UploadListItem>
                  <UploadListItem fileSize="35.4KB">image02.jpg</UploadListItem>
                </UploadList>
              </FormField>
              {/* 健康保険情報 */}
              <Heading tag="h3">健康保険情報</Heading>
              <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>申請する</Text>
                </FormFieldRow>
              </FormField>
              <CaptionList>
                <React.Fragment key=".0">
                  健康保険扶養申請されていた場合は、BS業務部へ書面にて削除届を提出してください。
                </React.Fragment>
              </CaptionList>
              <ModalOpener small={true}>税扶養変更手続き一式健康保険削除届.docx</ModalOpener>
              {/* 所属・GLC・組合情報区域 */}
              <Heading tag="h3">所属・GLC・組合情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0092</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2002/08/21</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="組織名称（略）">
                  <span>ヘルプ運用G</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="GLC会員区分">
                  <span>A会員2</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="組合区分">
                  <span>組合員</span>
                </InfoTableCell>
              </InfoTable>
              {/* 祝金申請情報区域 */}
              <Heading tag="h3">祝金申請</Heading>
              <Text>GLCからの祝金申請となります。</Text>
              <FormField label="祝金申請">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>必要</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="祝金" className="p-setting-input-form__form-field" >
                  <Text>30,000円</Text>
                </FormField>
              </FormFieldRow>
              {/* 祝電申請情報区域 */}
              <Heading tag="h3">祝電申請</Heading>
              <FormField label="祝電申請">
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Text>必要</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="日付">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>2021/08/12</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="開始時刻">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>18:00</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="会場名" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>浅草イオン式場</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="会場名（カナ）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>アサクサイオンシキバ</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>111-0032</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市区町村" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>東京都台東区浅草</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="番地・建物名・部屋番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>2-3-1 イオンビル2F</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="式場電話番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <Text>03-0000-0000</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="連絡先電話番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="4" columnSizePC="2">
                  <Text>090-1234-5678</Text>
                </FormFieldRow>
              </FormField>
              <FormField label="連絡先メールアドレス" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>dummy@aeon.co.jp</Text>
                </FormFieldRow>
              </FormField>
            </Section>
            </div>
          </>
      </Modal>
     </Whole>
    {/* 障害区分説明文言 */}
    <Modal id="modal_help_handicap_info" headerIcon="help" title="対象者の障害区分とは？">
      <Heading tag="h4">一般障碍者とは</Heading>
      <Text>
        ・身体障害者手帳の交付を受けている人
        <br/>
        ・精神障害者保健福祉手帳の交付を受けている人
        <br/>
        ・精神保健指定医などにより知的障害者と判定された人（療育手帳を持っている人）
      </Text>
      <Heading tag="h4">特別障害者とは</Heading>
      <Text>
        ・身体障害者手帳が1級または2級の人
        <br/>
        ・精神障害者保健福祉手帳が1級の人
        <br/>
        ・精神保健指定医などにより重度の知的障害者と判定された人（療育手帳にAと記載のある人）
      </Text>
    </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
