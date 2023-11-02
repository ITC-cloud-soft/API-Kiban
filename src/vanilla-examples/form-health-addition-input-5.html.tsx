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
import { Checkbox } from 'design/components/atoms/checkbox';
import { Pulldown } from 'design/components/atoms/pulldown';
import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';
import { CaptionList } from 'design/components/atoms/caption-list';
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
              <Heading tag="h2">申請内容</Heading>
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
                  <Radio name="RR1" value="5" modifiers="grey">
                    国民健康保険に被保険者として加入していた
                  </Radio>
                  <Radio name="RR1" value="6" modifiers="grey">
                    健康保険組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="RR1" value="5" modifiers="grey">
                    協会けんぽに被扶養者として加入していた
                  </Radio>
                  <Radio name="RR1" value="6" modifiers="grey">
                    共済組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="RR1" value="6" checked modifiers="grey">
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
                  <Radio name="RS" value="6" checked modifiers="grey">
                    廃棄
                  </Radio>
                  <Radio name="RS" value="6" modifiers="grey">
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

              <FormField label="廃業日" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="廃業日（和暦）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和3年1月1日" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類" >
                    <Text>
                      廃業届【写し】  </Text>
                  </FormField>
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

                  <Radio name="radio4" value="6" checked modifiers="grey">
                    配偶者あり
                  </Radio>
                  <Radio name="radio4" value="6" modifiers="grey">
                    配偶者なし
                  </Radio>

                </FormFieldRow>
              </FormField>
              <FormField label="設問2" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <Radio name="radio55" value="6" modifiers="grey">
                    今回、配偶者も同時に申請
                  </Radio>
                  <Radio name="radio55" value="6" modifiers="grey">
                    配偶者は、すでにあなた（被保険者）の被扶養者になっている
                  </Radio>
                  <Radio name="radio55" value="6" modifiers="grey">
                    配偶者は、イオン健康保険組合の被保険者
                  </Radio>
                  <Radio name="radio55" value="6" checked modifiers="grey">
                    上記に該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="以下より、該当するすべての項目を選択してください" className="p-setting-input-form__form-field" >

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Checkbox name="CC" value="6" modifiers="button">
                    給与収入
                  </Checkbox>
                  <Checkbox name="CC" value="6" checked modifiers="button">
                    自営業収入
                  </Checkbox>
                  <Checkbox name="CC" value="6" checked modifiers="button">
                    年金収入
                  </Checkbox>
                  <Checkbox name="CC" value="6" checked modifiers="button">
                    退職
                  </Checkbox>
                  <Checkbox name="CC" value="6" modifiers="button">
                    無職または無収入
                  </Checkbox>
                  <Checkbox name="CC" value="6" modifiers="button">
                    離婚調停中で別居
                  </Checkbox>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類（自営業収入）" >
                    <Text>
                      確定申告書【写し】と収支内訳書【写し】 </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類（年金収入）" >
                    <Text>
                      今後の年金額がわかる年金振込通知書【写し】と（非）課税証明書【原本】 </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="確認事項（退職）" >
                    <Text>
                      退職後の雇用保険の受給について、  <br />
                      「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />



              <Heading tag="h3">居住区分</Heading>
              <Text>

                あなた（被保険者）と申請するご家族の住民票が分かれている場合、双方の世帯全員分の準民票【原本】と続柄がわかる戸籍抄  <br />
                本【原本】を提出してください。  <br />
                現在、あなた（被保険者）と申請する家族は同居していますか？別居されていますか？  <br />
                該当する項目を選択し、質問の回答を選択してください。
              </Text>
              <FormField label="現在の状況" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radio9" value="6" checked modifiers="grey">
                    同居
                  </Radio>
                  <Radio name="radio9" value="6" modifiers="grey">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>



              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">退職後の雇用保険受給状況</Heading>
              <Text>
                A、Bのどちらかに該当する場合は、以下の項目について回答してください。 <br />
                <br />
                A）最近（1年以内に）退職した。 <br />
                B）提出する（非）課税証明書の給与収入欄に金額の記載がある。
              </Text>

              <FormField label="退職日" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="退職日（和暦）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和3年1月1日" />
                </FormFieldRow>
              </FormField>

              <FormField label="勤務先" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="" />
                </FormFieldRow>
              </FormField>

              <FormField label="雇用保険の失業給付について" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>
                    どれか一つ概要する項目にチェックをしてください。
                  </Text>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給資格がない
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給資格はあるが受給しない
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給予定がある
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給延長する･受給延長中
                  </Radio>
                  <Radio name="radiogd" value="6" checked modifiers="grey">
                    受給中または受給終了した
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      雇用保険受給資格者証 1～4面【写し】
                      <br />

                      ※受給終了の場合は、雇用保険受給資格者証に「受給終了」の印字があるもの
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>  <br />


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
