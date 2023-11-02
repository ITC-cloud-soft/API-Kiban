import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { Tag } from 'design/components/atoms/tag';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { mapModifiers } from 'design/libs/component';
import { HelpButton } from 'design/components/atoms/help-button';
import { Whole } from 'design/components/organisms/whole';
import { Radio } from 'design/components/atoms/radio';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { Pulldown } from 'design/components/atoms/pulldown';
import { UploadField } from 'design/components/atoms/upload-field';
import { Modal } from 'design/components/organisms/modal';

const FormFamilyAddition: React.FC = () => (
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
                <Heading tag="h1">家族追加届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>

              </Section>


              <Section className="p-setting-input-form__body">
                <HelpButton type="with-children" id="help-opener">
                  を押すと項目の詳しい説明が表示されます。
                </HelpButton>

                <Heading tag="h3">家族追加情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="家族追加区分" labelAddons={<Tag>必須</Tag>}>
                    <Pulldown name="something" placeholder="子の出生">
                      <React.Fragment key=".0">
                        <option value="create_new">無し</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
                <FormField label="扶養追加する日" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2021-06-01T20:44:23.000Z')} />
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <FormField label="姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField type="text" name="text" value="山田" />
                  </FormField>
                  <FormField label="名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <TextField type="text" name="text" value="佳子" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <FormField
                    label="姓（カナ）"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <TextField type="text" name="text" value="ヤマダ" />
                  </FormField>
                  <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                    <TextField type="text" name="text" value="ヨシコ" />
                  </FormField>
                </FormFieldRow>

                <FormField label="生年月日" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField defaultValue={new Date('2021-06-01T20:44:23.000Z')} />
                  </FormFieldRow>
                </FormField>

                <FormField label="性別" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="regiclass" value="1" >
                      男
                    </Radio>
                    <Radio modifiers="grey" name="regiclass" value="2" defaultChecked>
                      女
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="従業員との続柄" labelAddons={<Tag>必須</Tag>}>
                    <Pulldown name="something" placeholder="長女">
                      <React.Fragment key=".0">
                        <option value="create_new">長男</option>
                        <option value="reapply">無し</option>

                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>

                <FormField label="同居/別居" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="doukyoclass" value="1" defaultChecked>
                      同居
                    </Radio>
                    <Radio modifiers="grey" name="doukyoclass" value="2" >
                      別居
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <Heading tag="h3">税扶養情報</Heading>
                <FormField label="対象者の扶養有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="taxclass" value="1" defaultChecked>
                      自分の扶養に入れる
                    </Radio>
                    <Radio modifiers="grey" name="taxclass" value="2" >
                      自分の扶養に入れない
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <FormField label="対象者の所得見積額" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField disabled />
                      <Button type="button" modifiers="third" >
                        所得計算
                      </Button>
                    </div>
                  </FormFieldRow>
                  <CaptionList>
                    <React.Fragment key=".0">
                      年収から所得を計算する場合は、「所得計算」ボタンを王かしてください。
                      <br />
                      家族を扶養から外す場合は、48万円超え（例：480001）の金額を入力してください。
                    </React.Fragment>
                  </CaptionList>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field" >
                    <UnitTextField unit="unit-age" disabled />
                  </FormField>
                </FormFieldRow>

                <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField type="text" name="text" value="税扶養対象" disabled></TextField>
                  </FormFieldRow>
                </FormField>

                <FormField label="対象者の障害区分" labelAddons={<HelpButton id="help-opener1" />} labelAddons2={<Tag>必須</Tag>} >
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
                      障碍者の場合は、障碍者手帳の画像をアップロードして下さい。
                    </React.Fragment>
                  </CaptionList>
                  <ModalOpener id="modal-opener" >障碍者手帳ハードコピーの参考例</ModalOpener>
                </FormField>
                <FormField label="※画像をアップロードして下さい。" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                </FormField>

                <FormField label="障害者手帳画像アップロード" className="p-setting-input-form__form-field" >
                </FormField>

                <UploadField description="形式：jpg / png | サイズ：10MBまで　" >
                  障害者手帳画像アップロード＆ドロップするかパソコンから画像を貼り付けしてください。
                </UploadField>

                {/* <FormField label="障害者手帳画像アップロード2" className="p-setting-input-form__form-field" >
                  </FormField> */}

                {/* <UploadField description="形式：jpg / png | サイズ：10MBまで　">
                    <React.Fragment key=".0">
                      障害者手帳画像アップロード＆ドロップするかパソコンから画像を貼り付けしてください。
                      <br />
                      または
                    </React.Fragment>
                  </UploadField> */}

                <Heading tag="h3">健康保険情報</Heading>
                <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field" labelAddons2={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="kenclass" value="1" defaultChecked>
                      申請する
                    </Radio>
                    <Radio modifiers="grey" name="kenclass" value="2" >
                      申請しない
                    </Radio>
                  </FormFieldRow>
                </FormField>
                <CaptionList>
                  <React.Fragment key=".0">
                    健康保険扶養を申請する場合、紙申請書を記入し、必ずBS業務部へ提出してください。
                  </React.Fragment>
                </CaptionList>
                <ModalOpener id="modal-opener" small={true}>税扶養変更手続き一式_健康保険扶養申請書.docx</ModalOpener>
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
                <Heading tag="h1">家族追加届</Heading>
                <Text>
                  XXXXXXX（説明文未定）
                  <br />
                  YYYYYYYY
                </Text>
              </Section>
              <br />
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">

                  <Heading tag="h3">家族追加情報</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="家族追加区分" >
                      <Text>子の出生</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="扶養追加する日" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>2021/06/01</Text>

                    </FormFieldRow>
                  </FormField>

                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field" >
                      <Text>山田</Text>
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field" >
                      <Text>佳子</Text>
                    </FormField>
                  </FormFieldRow>

                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="姓（カナ）"
                      className="p-setting-input-form__form-field"
                    >
                      <Text>ヤマダ</Text>
                    </FormField>
                    <FormField label="名（カナ）" className="p-setting-input-form__form-field">
                      <Text>ヨシコ</Text>
                    </FormField>
                  </FormFieldRow>

                  <FormField label="生年月日" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>2021/06/01</Text>
                    </FormFieldRow>
                  </FormField>

                  <FormField label="性別" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text>女</Text>
                    </FormFieldRow>
                  </FormField>

                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="従業員との続柄" >
                      <Text>長女</Text>
                    </FormField>
                  </FormFieldRow>

                  <FormField label="同居/別居" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text>同居</Text>
                    </FormFieldRow>
                  </FormField>

                  <Heading tag="h3">税扶養情報</Heading>
                  <FormField label="対象者の扶養有無" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text>自分の扶養に入れる</Text>
                    </FormFieldRow>
                  </FormField>

                  <FormField label="対象者の所得見積額" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>0  円</Text>
                    </FormFieldRow>
                  </FormField>

                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="対象者の年齢（当年12月31日時点）" className="p-setting-input-form__form-field" >
                      <Text>0  歳</Text>
                    </FormField>
                  </FormFieldRow>

                  <FormField label="税扶養区分（判定）" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>税扶養対象</Text>
                    </FormFieldRow>
                  </FormField>

                  <FormField label="対象者の障害区分"   >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <Text>一般障碍者</Text>
                    </FormFieldRow>

                  </FormField>

                  <FormField label="障害者手帳画像アップロード" className="p-setting-input-form__form-field" >
                  </FormField>
                  <img src="C:\winnersoft\キャプチャ.PNG"></img>

                  <Heading tag="h3">健康保険情報</Heading>
                  <FormField label="健康保険扶養申請" className="p-setting-input-form__form-field">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text>申請する</Text>

                    </FormFieldRow>
                  </FormField>
                  <CaptionList>
                    <React.Fragment key=".0">
                      健康保険扶養を申請する場合、紙申請書を記入し、必ずBS業務部へ提出してください。
                    </React.Fragment>
                  </CaptionList>
                  <ModalOpener id="modal-opener" small={true}>税扶養変更手続き一式_健康保険扶養申請書.docx</ModalOpener>
                </Section>
              </Section>
            </div>
          </>
        </Modal>

        <Modal id="modal-help" headerIcon="help" title="香料・供花・弔電とは？">
          <Heading tag="h4">香料(こうりょう)とは</Heading>
          <Text>「御香料」は葬儀などで故人に対してお供えする金品のことです。</Text>
          <Heading tag="h4">供花(きょうか、くげ)とは</Heading>
          <Text>
            「供花」とは故人に供える花のことを指します。供花には死者の霊を慰めると同時に祭壇や会場を飾る意味があり、葬儀の際は、親族や親戚一同と書かれ祭壇の両側に置かれていることが一般的です。
          </Text>
          <Heading tag="h4">弔電とは</Heading>
          <Text>
            弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります。
          </Text>
        </Modal>
        <Modal id="modal-help1" headerIcon="help" title="対象者の障害区分">
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


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<FormFamilyAddition />);
