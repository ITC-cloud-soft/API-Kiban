import React from 'react';
import { renderVanillaExample } from './render';
import { Button } from 'design/components/atoms/button';
import { Heading, HeadingForlabelAddons } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Radio } from 'design/components/atoms/radio';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Checkbox } from 'design/components/atoms/checkbox';
import { UnitTextField } from 'design/components/atoms/unit-text-field';

const FamilyMarriageInputForm: React.FC = () => (
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
                申請へ
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
                  YYYY
                </Text>
                <br />
              </Section>
              <br />

              <Text>
                まず、申請を実施する前に、事前アンケートに回答をお願いいたします。
              </Text>

              {/* 申請区分 */}
              <HeadingForlabelAddons tag="h3"  >申請区分</HeadingForlabelAddons>
              <FormField label="申請区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <Text> 今回は初めて申請ですか。あるいは、現在認定単身赴任をしている事由の解消がされていないか。または新しく <br />事由が発生したために継続を希望するための申請ですか。</Text>

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="relation" value="5" checked modifiers="grey">
                    新規申請
                  </Radio>
                  <Radio name="relation" value="6" modifiers="grey">
                    継続申請（事由解消なし）
                  </Radio>
                  <Radio name="relation" value="6" modifiers="grey">
                    継続申請（新事由発生）
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="人事異動" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="relation1" value="5" checked modifiers="grey">
                    有り
                  </Radio>
                  <Radio name="relation1" value="6" modifiers="grey">
                    無し
                  </Radio>

                </FormFieldRow>
              </FormField>







              <div className="m-info-table__header"></div>
              <br />


              {/* 転居異動情報 */}
              <HeadingForlabelAddons tag="h3" labelAddons={<Tag>必須</Tag>}>転居異動情報</HeadingForlabelAddons>

              <Text>
                今回、直近で転居を伴う異動があった、または近々に転居を伴う異動が発令される予定がありますか。
              </Text>

              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="relation1" value="5" checked modifiers="grey">
                  はい
                </Radio>
                <Radio name="relation1" value="6" modifiers="grey">
                  いいえ
                </Radio>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="発令日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CalendarField className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')} />
                </FormField>
              </FormFieldRow>
              <FormField label="異動住所手続き情報" className="" labelAddons={<Tag>必須</Tag>}>

                <CaptionList>
                  <React.Fragment key=".0">
                    異動後の住所は決定していますか。（未定の場合は、異動後の住所が決定してから申請を進めていただくことになります）
                  </React.Fragment>
                </CaptionList>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="relation2" value="5" checked modifiers="grey">
                    手続き済みで決定
                  </Radio>
                  <Radio name="relation2" value="6" modifiers="grey">
                    未手続きまたは手続き中で未定
                  </Radio>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />

              {/* 申請理由 */}
              <HeadingForlabelAddons tag="h3" labelAddons={<Tag>必須</Tag>}>申請理由</HeadingForlabelAddons>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio name="relation3" value="5" modifiers="grey">
                  ①：子女が中学、あるいは高校在学中であり、転校が困難である。
                </Radio>

              </FormFieldRow>

              <CaptionList>
                <React.Fragment key=".0">
                  ※子女が中学校へ入学する場合は異動発令日が2月21日以降であること
                </React.Fragment>
              </CaptionList>
              <br />
              <Text>
                ➁-１：子女が小・中・高在学中で学期途中である。
              </Text>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="relation4" value="5" checked modifiers="grey">
                  ａ．1学期（3/21~8/20）⇒9/20迄
                </Radio>
                <Radio name="relation4" value="6" modifiers="grey">
                  ｂ．2学期（8/21~12/20）⇒1/20迄
                </Radio>
                <Radio name="relation4" value="6" modifiers="grey">
                  ｃ．3学期（12/21~３/20）⇒4/20迄
                </Radio>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio name="relation3" value="5" modifiers="grey">
                  ➁-２：子女が小６で学年末まで転校が困難である。
                </Radio>
              </FormFieldRow>
              <CaptionList>
                <React.Fragment key=".0">
                  ※3/20まで
                </React.Fragment>
              </CaptionList>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio name="relation3" value="5" modifiers="grey">
                  ③：扶養家族又は（義）親に介護の必要な者がおり、介護する者が配偶者以外にいない。
                </Radio>
              </FormFieldRow>
              <CaptionList>
                <React.Fragment key=".0">
                  ※単身赴任優遇措置期間は１年間
                </React.Fragment>
              </CaptionList>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio name="relation3" value="5" modifiers="grey">
                  ④：扶養家族又は（義）親の病気・看病のため、特定の病院・医師の治療が必要である。
                </Radio>
              </FormFieldRow>
              <CaptionList>
                <React.Fragment key=".0">
                  ※単身赴任優遇措置期間は１年間
                </React.Fragment>
              </CaptionList>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio name="relation3" value="5" modifiers="grey">
                  ⑤：妻が産前８週、産後８週の期間（多胎の場合は１４週）にあたる。
                </Radio>
                <Radio name="relation3" value="5" modifiers="grey">
                  ⑥：期間の定められた異動である。（プロジェクト・その他）
                </Radio>
                <Radio name="relation3" value="5" modifiers="grey">
                  ⑦：その他、予め会社の認めた各種事由（事前に会社許可が必要）
                </Radio>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              <HeadingForlabelAddons tag="h3" labelAddons={<Tag>必須</Tag>}>在学証明書取得状況</HeadingForlabelAddons>
              <Text>
                理由①を選択した方にお伺いします。対象子女の在学証明書は取得済ですか。
              </Text>

              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="relation5" value="5" checked modifiers="grey">
                  取得済
                </Radio>
                <Radio name="relation5" value="5" modifiers="grey">
                  未取得（または、取得手続き中）
                </Radio>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <HeadingForlabelAddons tag="h3" labelAddons={<Tag>必須</Tag>}>診断書等取得状況</HeadingForlabelAddons>
              <Text>
                理由③④を選択した方にお伺いします。申請事由が「介護」「病気看病」の場合、専用の理由書や医師・専門
                <br />機関の診断書・意見書が申請時に必要となります。該当理由書、または診断書・意見書は取得済ですか。
              </Text>

              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="relation6" value="5" checked modifiers="grey">
                  専用理由書を作成し、医師コメント記入済み
                </Radio>
                <Radio name="relation6" value="5" modifiers="grey">
                  医師・専門機関の診断書か意見書を取得済み
                </Radio>
                <Radio name="relation6" value="5" modifiers="grey">
                  未取得（または、上記のいずれかを取得手続き中）
                </Radio>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3" >出産状況</Heading>
              <Text>
                理由⑤を選択した方にお伺いします。出産予定日をお知らせください。
              </Text>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="出産予定日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <CalendarField className="a-calendar-field__content"
                    defaultValue={new Date('2022-03-26T20:44:23.000Z')} />
                </FormField>
              </FormFieldRow>

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3" >最後に</Heading>

              <Text className="" >
                <p className="a-text--purple a-text--font-size">
                  理由②③④⑤を選択した方に、ご確認をお伺いします。
                </p>
                <p className="a-text--purple  a-text--font-size   ">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;この理由を選択した場合、認定期限は発令日から１年間が最長となります。期限を迎えた場合、他の新たな事由が発生していなければ、単身赴任を終了し、家族を呼び寄せしていただくことが申請条件となります。よろしいですか？
                </p>
              </Text>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <Checkbox name="taxclass" value="1" >
                  条件を理解の上、申請します。
                </Checkbox>
              </FormFieldRow>



            </div>
          </>
        </Modal>
        {/* 確認画面 */}
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
      </Whole>
      {/* 適用制度について説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="適用制度について">
        <Heading tag="h4">ペア転勤制度適用とは</Heading>
        <Text>
          ・申請者本人・配偶者ともに自動解除します。申請は不要です。
          <br />
          ・配偶者は、転居制限を希望する場合、別途、配偶者が「転居制限適用申請書」を提出してください。
        </Text>
        <Heading tag="h4">転居制限制度とは</Heading>
        <Text>・申請者本人自動解除します。申請不要です。</Text>
        <Heading tag="h4">制度適用なしとは</Heading>
        <Text>・手続き不要です。申請不要です。</Text>
      </Modal>
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          新住所が決定してからでなければ、本手続きは申請できません。このアンケートを一時保存またはキャンセルし、新住居が決定してから改めて申請を実施ください。
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
          ③事由の場合は、それぞれ申請時に該当理由書のＰＤＦ添付が必要になります。取得していない場合は、このアンケートを一時保存またはキャンセルいただき、下記理由書を作成・医師診断を記入いただいてから改めて申請を実施ください
          <br />   <br />・要介護認定通知書、会社指定の扶養家族の介護による経済的援助適用申請書理由書(介護）または同じ内容が判る医師の診断書・意見書等
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
          ①事由の場合は、申請時に対象子女の在学証明書のＰＤＦ添付が必要になります。取得していない場合は、このアンケートを一時保存またはキャンセルいただき、在学証明書が入手できてから改めて申請を実施ください。
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
          ④事由の場合は、それぞれ申請時に該当理由書のＰＤＦ添付が必要になります。取得していない場合は、このアンケートを一時保存またはキャンセルいただき、下記理由書を作成・医師診断を記入いただいてから改めて申請を実施ください
          <br />   <br />
          ・会社指定の扶養家族の病気看病による経済的援助適用申請書理由書(病気・看病）または同じ内容が判る医師の診断書・意見書等 </Text>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <div className="o-modal__footer">
            <Button modifiers="primary" size="huge" id="input-form-check-button">
              はい
            </Button>
          </div>
        </FormFieldRow>

      </Modal>
    </body>
  </html >
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
