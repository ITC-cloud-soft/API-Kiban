import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { Tag } from 'design/components/atoms/tag';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { FormField, FormFieldRow, FormFieldBorder, NewFormFieldRow } from 'design/components/molecules/form-field';
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
    <title>本人情報変更届（貼り付け台紙）</title>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          footer={
            <>
              {/* <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
                下書き保存
              </Button> */}
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                PDF保存
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">本人情報変更届（貼り付け台紙）</Heading>
                <Text>
                  本画面を印刷し、必要書類を添付し、送付してください。
                </Text>
                <br />
              </Section>


              <Section className="p-setting-input-form__body">

                <Heading tag="h4">本人情報変更</Heading>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="申請番号"> </FormFieldBorder>
                  <FormFieldBorder label="CCFAAI202108260001"> </FormFieldBorder>
                </NewFormFieldRow>
                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="修正理由区分"></FormFieldBorder>
                  <FormFieldBorder label="誤登録修正"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="異動日"></FormFieldBorder>
                  <FormFieldBorder label="2021/07/12"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="会社コード"></FormFieldBorder>
                  <FormFieldBorder label="0005"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="会社名"></FormFieldBorder>
                  <FormFieldBorder label="イオンリテール株式会社"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="人事所属コード"></FormFieldBorder>
                  <FormFieldBorder label="12345"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="所属名"></FormFieldBorder>
                  <FormFieldBorder label="津田沼店"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="社員番号"> </FormFieldBorder>
                  <FormFieldBorder label="1234567"> </FormFieldBorder>
                </NewFormFieldRow>
                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="姓"></FormFieldBorder>
                  <FormFieldBorder label="山田"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="名"></FormFieldBorder>
                  <FormFieldBorder label="佳子"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="姓（カナ）"></FormFieldBorder>
                  <FormFieldBorder label="ヤマダ"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="名（カナ） &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; *"></FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__fontweight" label="ヨシコ"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="生年月日"></FormFieldBorder>
                  <FormFieldBorder label="2000/02/12"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="性別"></FormFieldBorder>
                  <FormFieldBorder label="女"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="婚姻区分"></FormFieldBorder>
                  <FormFieldBorder label="独身"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="国籍"></FormFieldBorder>
                  <FormFieldBorder label="日本"> </FormFieldBorder>
                </NewFormFieldRow>
                <br></br>
              </Section>

              <Section className="p-setting-input-form__body">

                <Heading tag="h4">税扶養申告</Heading>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="申請日"></FormFieldBorder>
                  <FormFieldBorder label="2021/07/12"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="税表区分の変更"></FormFieldBorder>
                  <FormFieldBorder label="変更する"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="税表区分（現在）"></FormFieldBorder>
                  <FormFieldBorder label="月額甲"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="税表区分（変更後） &nbsp;  &nbsp;  *"></FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__fontweight" label="月額乙"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="税表区分"> </FormFieldBorder>
                  <FormFieldBorder label="変更あり"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="税表区分変更理由"> </FormFieldBorder>
                  <FormFieldBorder label="他会社からの給与収入がある（兼業）"> </FormFieldBorder>
                </NewFormFieldRow>
                <br />   <br />
              </Section>
              <Section className="p-setting-input-form__body">

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="寡婦区分（現在）"></FormFieldBorder>
                  <FormFieldBorder label="対象外"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="寡婦区分（変更後）"></FormFieldBorder>
                  <FormFieldBorder label="対象外"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="寡婦区分"> </FormFieldBorder>
                  <FormFieldBorder label="変更なし"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="①申請者性別"></FormFieldBorder>
                  <FormFieldBorder label="女"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="②申請者婚姻区分"></FormFieldBorder>
                  <FormFieldBorder label="独身"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="③事実婚状態ではないですか。"> </FormFieldBorder>
                  <FormFieldBorder label="はい"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="④従業員自身の年間所得が500万円以下ですか。"> </FormFieldBorder>
                  <FormFieldBorder label="はい"> </FormFieldBorder>

                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="⑤離婚歴はありますか。（女性のみ）"> </FormFieldBorder>
                  <FormFieldBorder label="はい"> </FormFieldBorder>
                </NewFormFieldRow>

                <br />   <br />
              </Section>

              <Section className="p-setting-input-form__body">

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="勤労学生区分（現在）"></FormFieldBorder>
                  <FormFieldBorder label="対象外"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="勤労学生区分（変更後）"></FormFieldBorder>
                  <FormFieldBorder label="対象外"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="勤労学生区分"> </FormFieldBorder>
                  <FormFieldBorder label="変更なし"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="①従業員自身が所定の学校の学生・生徒に該当しますか。"> </FormFieldBorder>
                  <FormFieldBorder label="いいえ"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="②本人の年間所得金額が48万円以上75万円以下（給与収入で言えば103万円以上130万円以下）の見込である。"> </FormFieldBorder>
                  <FormFieldBorder label="いいえ"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="③本人の給与所得（アルバイト代）以外の所得が、10万円以下である。"> </FormFieldBorder>
                  <FormFieldBorder label="はい"> </FormFieldBorder>
                </NewFormFieldRow>
                <br />   <br />
              </Section>

              <Section className="p-setting-input-form__body">
                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="障害区分の変更"> </FormFieldBorder>
                  <FormFieldBorder label="変更する"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="障害区分（現在）"></FormFieldBorder>
                  <FormFieldBorder label="対象外"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="障害区分（変更後） &nbsp;  &nbsp;  *"></FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__fontweight" label="一般障害者"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="障害区分"> </FormFieldBorder>
                  <FormFieldBorder label="変更あり"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="障害の認定対象に該当しますか。"> </FormFieldBorder>
                  <FormFieldBorder label="はい"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="手帳番号"></FormFieldBorder>
                  <FormFieldBorder label="第◯◯◯◯◯号"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="手帳交付日"></FormFieldBorder>
                  <FormFieldBorder label="2021/09/12"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="障害内容区分"></FormFieldBorder>
                  <FormFieldBorder label="身体障害"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="障害等級"></FormFieldBorder>
                  <FormFieldBorder label="１級"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="3">
                  <FormFieldBorder className="m-form-field-new__background" label="障害程度"></FormFieldBorder>
                  <FormFieldBorder label="重度以外"> </FormFieldBorder>
                  <FormFieldBorder className="m-form-field-new__background" label="障害内容"></FormFieldBorder>
                  <FormFieldBorder label="視覚障害、全盲"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="アップロードファイル1"> </FormFieldBorder>
                  <FormFieldBorder label="XXXX.jpg"> </FormFieldBorder>
                </NewFormFieldRow>

                <NewFormFieldRow columnSize="6" columnSizePC="6">
                  <FormFieldBorder className="m-form-field-new__background" label="アップロードファイル2"> </FormFieldBorder>
                  <FormFieldBorder label="XXXX.jpg"> </FormFieldBorder>
                </NewFormFieldRow>
                <br />


                <Text className="" >
                  <p className="a-text--purple a-text--font-size">
                    【イオン健康保険組合の保険証をお持ちの方は、以下の手順に従って必ず手続きを行って下さい】
                  </p>
                  <p className="a-text--blue  a-text--font-size   a-text--marginleft">
                    ※給与口座変更のみの方は提出不要
                  </p>
                  <p className="a-text--blue  a-text--font-size  ">
                    ＜手続き手順＞
                  </p>
                  <p className="a-text--blue  a-text--font-size   a-text--marginleft">

                    ①この画面を印刷 <br />
                    ②保険証を画面印刷にテープで貼り、年金手帳といっしょに「イオンアイビス（株）ＢＳ業務部社会保険」宛送付<br />
                    ③家族（被扶養者）の保険証をお持ちの場合は、全員分を送付<br />
                  </p>
                  <p className="a-text--blue  a-text--font-size   a-text--marginleft2">
                    ※保険証には、住民票に登録の漢字を記載します。住民票の字が入力できない時は、常用漢字で入力し、印刷した氏名欄を修正して下さい。<br />
                    ※氏名変更日から2ヶ月以内に提出して下さい。（2ヶ月経過の場合は理由書添付）<br />
                  </p>


                  <p className="a-text--blue a-text--inline  a-text--font-size  a-text--marginleft"> ④  </p>
                  <p className="a-text--purple a-text--inline  a-text--font-size"> 家族（被扶養者）も氏名変更をする場合
                  </p>
                  <p className="a-text--blue  a-text--font-size  a-text--marginleft2">
                    Densin「健康保険扶養 追加申請 」から申請を行い、<br />
                    「健康保険被扶養者異動届（正・副）」を印刷の上、世帯全員の住民票を添付して提出下さい。
                  </p>

                </Text>

              </Section>



            </div>
          </>
        </Modal>




      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<FormFamilyAddition />);
