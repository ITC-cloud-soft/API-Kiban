import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { Tag } from 'design/components/atoms/tag';

import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';

import { Whole } from 'design/components/organisms/whole';
import { Radio } from 'design/components/atoms/radio';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Modal } from 'design/components/organisms/modal';
import { HelpButton } from 'design/components/atoms/help-button';
import { Pulldown } from 'design/components/atoms/pulldown';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { mapModifiers } from 'design/libs/component';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { UploadField } from 'design/components/atoms/upload-field';

const FormTransferFamily: React.FC = () => (
  <html>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          footer={
            <>
              <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
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
                <Heading tag="h1">家族異動届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>
                <Heading tag="h2"></Heading>
              </Section>
              <Section className="p-setting-input-form__body">
                <HelpButton id="help_handicap_info" type="with-children">
                  を押すと項目の詳しい説明が表示されます。
                </HelpButton>
                <Heading tag="h3">申請対象者</Heading>
                <FormField
                  label={<Text>申請の対象となる家族を選択してください。{<Tag>必須</Tag>}</Text>}
                  className="p-setting-input-form__form-field"
                  normalLabel
                  require
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio modifiers="grey" name="nameclass" value="1" checked={true}>
                      四男　伊音　四郎
                    </Radio>
                  </FormFieldRow>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio modifiers="grey" name="nameclass" value="2">
                      五男　伊音　五十嵐
                    </Radio>
                  </FormFieldRow>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Radio modifiers="grey" name="nameclass" value="3">
                      三女　伊音　花子
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <Heading tag="h3">家族異動情報</Heading>
                <FormField
                  label="修正理由区分"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown name="something" placeholder="選択してください。">
                      <React.Fragment key=".0">
                        <option value="create_new">収入減により扶養するため</option>
                        <option value="reapply">修正後再申請</option>
                        <option value="arrangement_completed">手配完了</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="異動日"
                  className="p-setting-input-form__form-field"
                  require
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField />
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField type="text" name="text" value="山田" />
                  </FormField>
                  <FormField label="名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField type="text" name="text" value="佳子" />
                  </FormField>
                  <FormField
                    label="姓（カナ）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField type="text" name="text" value="ヤマダ" />
                  </FormField>
                  <FormField
                    label="名（カナ）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField type="text" name="text" value="ヨシコ" />
                  </FormField>
                </FormFieldRow>
                <FormField label="生年月日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                  </FormFieldRow>
                </FormField>
                <FormField label="性別" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="sexclass" value="2" checked={true}>
                      男
                    </Radio>
                    <Radio modifiers="grey" name="sexclass" value="2">
                      女
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="従業員と続柄"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown name="something" placeholder="選択してください。">
                      <React.Fragment key=".0">
                        <option value="create_new">四男</option>
                        <option value="reapply">五男</option>
                        <option value="arrangement_completed">三女</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField label="同居/別居" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="liveclass" value="2" checked={true}>
                      同居
                    </Radio>
                    <Radio modifiers="grey" name="liveclass" value="2">
                      別居
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <Heading tag="h3">税扶養情報</Heading>
                <FormField
                  label="対象者の扶養有無"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="dependentlass" value="2" checked={true}>
                      自分の扶養に入れる
                    </Radio>
                    <Radio modifiers="grey" name="dependentlass" value="2">
                      自分の扶養に入れない
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="対象者の所得見積額"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField disabled value="270000" />
                      <Button type="button" modifiers="third">
                        所得計算
                      </Button>
                    </div>
                  </FormFieldRow>
                  <CaptionList>
                    <React.Fragment key=".0">
                      年収から所得を計算する場合は、「所得計算」ボタンを押下してください。
                      <br />
                      家族を扶養から外す場合は、48万円超（例：480001）の金額を入力してください。
                    </React.Fragment>
                  </CaptionList>
                </FormField>
                <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled value="31" unit="unit-age" />
                  </FormFieldRow>
                </FormField>
                <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField type="text" name="text" value="税扶養対象" disabled></TextField>
                  </FormFieldRow>
                </FormField>
                <FormField
                  label="対象障害区分"
                  className="p-setting-input-form__form-field"
                  labelAddons={<HelpButton id="help_handicap_infor" />}
                  labelAddons2={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown name="something" placeholder="選択してください。">
                      <React.Fragment key=".0">
                        <option value="create_new">一般障碍者</option>
                        <option value="reapply">障碍者</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">障害者場合は、障害者手帳の画像をアップロードしてください。</React.Fragment>
                </CaptionList>
                <ModalOpener small={true}>障害者手帳ハードコピーの参考例.docx</ModalOpener>
                <br />
                <br />
                <FormField label="障害者手帳画像アップロード" labelAddons={<Tag>必須</Tag>}>
                  <UploadField description="形式：jpg / png | サイズ：10MBまで　">
                    障害者手帳画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                  </UploadField>
                </FormField>

                <Heading tag="h3">健康保険情報</Heading>
                <FormField
                  label="健康保険扶養申請"
                  className="p-setting-input-form__form-field"
                  labelAddons={<Tag>必須</Tag>}
                >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="requestclass" value="2" checked={true}>
                      申請する
                    </Radio>
                    <Radio modifiers="grey" name="requestclass" value="2">
                      申請しない
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    健康保険扶養申請する場合は、紙申請書を記入し、必ずBS業務部へ提出してください。
                  </React.Fragment>
                </CaptionList>
                <ModalOpener small={true}>税扶養変更手続き一式健康保険申請書.docx</ModalOpener>
              </Section>
            </div>
          </>
        </Modal>
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
                <Heading tag="h1">家族異動届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>
                <Heading tag="h2"></Heading>
              </Section>
              <Section className="p-setting-input-form__body">
                <Heading tag="h3">家族異動情報</Heading>
                <FormField label="修正理由区分" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text> 収入減により扶養するため</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="異動日" className="p-setting-input-form__form-field" require>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text> 2020/01/01</Text>
                  </FormFieldRow>
                </FormField>
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
                <FormField label="生年月日" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text> 2020/01/01</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="性別" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Text>男</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="従業員と続柄" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>四男</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="同居/別居" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Text>同居</Text>
                  </FormFieldRow>
                </FormField>
                <Heading tag="h3">税扶養情報</Heading>
                <FormField label="対象者の扶養有無" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Text>自分の扶養に入れる</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="対象者の所得見積額" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>270,000　円</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>31　歳</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>税扶養対象</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="対象障害区分" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>一般障碍者</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="障害者手帳画像アップロード">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <img src="C:\Users\exp20\Pictures\Camera Roll\WIN_20210704_13_22_51_Pro.jpg" />
                  </FormFieldRow>
                </FormField>
                <Heading tag="h3">健康保険情報</Heading>
                <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Text>申請する</Text>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    健康保険扶養申請する場合は、紙申請書を記入し、必ずBS業務部へ提出してください。
                  </React.Fragment>
                </CaptionList>
                <ModalOpener small={true}>税扶養変更手続き一式健康保険申請書.docx</ModalOpener>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
      {/* 説明文言 */}
      <Modal id="modal_help_handicap_infor" headerIcon="help" title="対象者の障害区分とは？">
        <Heading tag="h4">障碍者とは</Heading>
        <Text>
          ・身体障害者手帳の交付を受けている人
          <br />
          ・精神障害者保健福祉手帳の交付を受けている人
          <br />
          ・精神保健指定医などにより知的障害者と判定された人（療育手帳を持っている人）
        </Text>
        <Heading tag="h4">特別障害者とは</Heading>
        <Text>
          ・身体障害者手帳が1級または2級の人
          <br />
          ・精神障害者保健福祉手帳が1級の人
          <br />
          ・精神保健指定医などにより重度の知的障害者と判定された人（療育手帳にAと記載のある人）
        </Text>
      </Modal>
      {/* 説明文言 */}
      <Modal id="modal_help_handicap_info" headerIcon="help" title="対象者の障害区分とは？">
        <Heading tag="h4">一般障碍者とは</Heading>
        <Text>
          ・身体障害者手帳の交付を受けている人
          <br />
          ・精神障害者保健福祉手帳の交付を受けている人
          <br />
          ・精神保健指定医などにより知的障害者と判定された人（療育手帳を持っている人）
        </Text>
        <Heading tag="h4">特別障害者とは</Heading>
        <Text>
          ・身体障害者手帳が1級または2級の人
          <br />
          ・精神障害者保健福祉手帳が1級の人
          <br />
          ・精神保健指定医などにより重度の知的障害者と判定された人（療育手帳にAと記載のある人）
        </Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FormTransferFamily />);
