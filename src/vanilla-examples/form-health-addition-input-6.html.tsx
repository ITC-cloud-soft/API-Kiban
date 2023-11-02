import React from 'react';
import { renderVanillaExample } from './render';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { HelpButton } from 'design/components/atoms/help-button';
import { Radio } from 'design/components/atoms/radio';
import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';


const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>健康保険扶養 (追加申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 健康保険扶養 (追加申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>


              <Button modifiers="third" size="huge">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (追加申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>

              <br />
              <HelpButton type="with-children" id="help-opener">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto" >
                <ApprovalStepNo isDone modifiers="auto" step={1} name="申請家族選択" />
                <ApprovalStepNo isDone modifiers="auto" step={2} name="扶養要件判定" />
                <ApprovalStepNo isDone modifiers="auto" step={3}

                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }

                  name2="健康保険被扶養者異動届" />
                <ApprovalStepNo isDone modifiers="auto" step={4}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届" />
                <ApprovalStepNo isDone modifiers="auto" step={5} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                被扶養者現況届について、以下の情報を入力してください。  <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <FormFieldRow columnSize="6" columnSizePC="3">
                <TextPlaceholder code="%%7892%%" dataId={1}>

                  <span className="m-form-field__label">　　　イオン健保 　　　</span>

                </TextPlaceholder>
              </FormFieldRow>

              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>

              <InfoTable modifiers="no-border-header">
                <InfoTableCell label="被保険者証（記号）" modifiers="pair">
                  <span>8</span>
                </InfoTableCell>
                <InfoTableCell label="被保険者証（番号）" modifiers="pair">
                  <span>123456</span>
                </InfoTableCell>
                <InfoTableCell label="氏名" modifiers="pair">
                  <span>伊音　明美</span>
                </InfoTableCell>
                <InfoTableCell label="所属会社" modifiers="pair">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell label="部室店名" modifiers="pair">
                  <span>デジタルソリューション本部</span>
                </InfoTableCell>

                <InfoTableCell label="今回申請する家族の氏名" modifiers="pair">
                  <span>伊音　春子</span>
                </InfoTableCell>

                <InfoTableCell label="今回申請する" label2="家族の生年月日（和暦）" modifiers="pair">

                  <span>日給月給</span>
                </InfoTableCell>
                <InfoTableCell label="今回申請する" label2="家族の年齢" modifiers="pair">
                  <span>20歳</span>
                </InfoTableCell>
                <InfoTableCell label="被保険者との続柄" modifiers="pair">
                  <span>長女</span>
                </InfoTableCell>
                <InfoTableCell label="申請日（和暦）" modifiers="pair">
                  <span>令和1年9月1日</span>
                </InfoTableCell>


              </InfoTable>
              <br />
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">以前の保険</Heading>
              <FormField label="今回申請する家族が、今まで加入していた健康保険について概要する項目を選択してください。" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio2" value="5" modifiers="grey">
                    国民健康保険に被保険者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    健康保険組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="5" modifiers="grey">
                    協会けんぽに被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    共済組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" checked modifiers="grey">
                    上記どれにも該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label=" 上記どれにも該当しない場合は、以下を選択してください" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio2" value="5" modifiers="grey">
                    任意継続被保険者
                  </Radio>
                  <Radio name="radio2" value="6" checked modifiers="grey">
                    その他
                  </Radio>

                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="理由を記入してください" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="ああああああああああああああ" />
                </FormField>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">扶養の理由</Heading>
              <FormField label="今回、被扶養者として申請することになった理由について、概要する項目を選択してください。" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">

                  <Radio name="RS" value="6" modifiers="grey">
                    社会保険加入にともなう申請
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
                    結婚
                  </Radio>
                  <Radio name="RS" value="5" modifiers="grey">
                    退職
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
                    収入減少
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
                    廃棄
                  </Radio>
                  <Radio name="RS" value="6" checked modifiers="grey">
                    雇用保険受給終了
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
                    任意継続の申請
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
                    上記のどれにも該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="受給終了日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="受給終了日（和暦）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和3年1月1日" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <Text>
                    退職後の雇用保険の受給について、 <br />
                    「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。 </Text>

                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">あなた以外の扶養義務者</Heading>

              <Text>
                今回申請する家族があなた（被保険者）の【子】の場合、あなた（被保険者）の配偶者について

                <br />
                該当する項目を選択し、質問の回答を選択してください。

              </Text>
              <FormField label="設問1" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="6" columnSizePC="6">

                  <Radio name="radio4" value="6" modifiers="grey">
                    配偶者あり
                  </Radio>
                  <Radio name="radio4" value="6" checked modifiers="grey">
                    配偶者なし
                  </Radio>

                </FormFieldRow>
              </FormField>
              <FormField label="設問2" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <Radio name="RR4" value="6" checked modifiers="grey">
                    離婚
                  </Radio>
                  <Radio name="RR4" value="6" modifiers="grey">
                    未婚
                  </Radio>
                  <Radio name="RR4" value="6" modifiers="grey">
                    死別
                  </Radio>

                </FormFieldRow>
              </FormField>

              <FormField label="あなた（被保険者）に親権の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="RR5" value="6" modifiers="grey">
                    有
                  </Radio>
                  <Radio name="RR5" value="6" checked modifiers="grey">
                    無
                  </Radio>

                </FormFieldRow>
              </FormField>

              <FormField label="申請する子へ養育費の受領の有無" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="RR6" value="6" checked modifiers="grey">
                    有
                  </Radio>
                  <Radio name="RR6" value="6" modifiers="grey">
                    無
                  </Radio>

                </FormFieldRow>
              </FormField>
              <FormField label="養育費（毎月）" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-manyen" />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 書類ダウンロード_PC_共通タブ*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          footer={
            <>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                前へ
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (追加申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />

            </div>
          </>
        </Modal>
      </Whole>

    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
