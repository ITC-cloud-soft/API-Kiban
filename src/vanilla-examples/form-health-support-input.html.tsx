import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';

import { Text } from 'design/components/atoms/text';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { HelpButton } from 'design/components/atoms/help-button';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';

import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';

import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';

import { Radio } from 'design/components/atoms/radio';


const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>健康保険扶養 (追加申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 本人情報変更申請_PC_入力画面 */}
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
                  YYYYYY
                  <br />
                </Text>
              </Section>
              <br />
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto" >
                <ApprovalStepNo isDone modifiers="auto" step={1} name="申請家族選択" />
                <ApprovalStepNo modifiers="auto" step={2} name="扶養要件判定" />
                <ApprovalStepNo modifiers="auto" step={3}

                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }

                  name2="健康保険被扶養者異動届" />
                <ApprovalStepNo modifiers="auto" step={4}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届" />
                <ApprovalStepNo modifiers="auto" step={5} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                こちらは、健康保険の扶養に家族を追加する申請画面です。
                <br />
                健康保険の扶養に家族を追加する場合、その家族の状況によって提出する書類が異なります。

              </Text>
              <Heading tag="h3">条件選択</Heading>
              <FormField label="あなたの状況を選択してください。" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Radio name="radio1" value="5" checked modifiers="grey">
                    既にイオン健康保険組合の被保険者の方が、被扶養者に家族を申請
                  </Radio>
                  <Radio name="radio1" value="6" modifiers="grey">
                    60歳を超えて再雇用契約のため、扶養家族の再申請を行う
                  </Radio>
                  <Radio name="radio1" value="5" modifiers="grey">
                    入社時あるいは社会保険加入と同時に家族を扶養申請
                  </Radio>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">申請対象者</Heading>
              <FormField label="申請の対象となる家族を選択してください。" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio0" value="5" checked modifiers="grey">
                    配偶者　伊音　伊音　花子
                  </Radio>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio0" value="6" modifiers="grey">
                    次男　伊音　五十嵐
                  </Radio>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio0" value="6" modifiers="grey">
                    次女　伊音　翔子
                  </Radio>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">追加質問</Heading>
              <FormField label="申請いただく配偶者は、外国籍ですか？" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radio2" value="5" checked modifiers="grey">
                    はい
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    いいえ
                  </Radio>

                </FormFieldRow>
              </FormField>


              <FormField label="" className="p-setting-input-form__form-field"
                labelAddons={
                  <text>
                    お子さまの申請理由は、子の出生のためですか？
                    <Tag>必須</Tag>
                  </text>
                }>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radio3" value="5" checked modifiers="grey">
                    はい
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    いいえ
                  </Radio>

                </FormFieldRow>
              </FormField>
              <br />

            </div>
          </>
        </Modal>

        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
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
                  YYYYYY
                  <br />
                </Text>
              </Section>
              <br />
              <HelpButton id="help_handicap_info" type="with-children">
                を押すと項目の詳しい説明が表示されます。
              </HelpButton>



            </div>
          </>
        </Modal>
      </Whole>

      {/* 年収とはとは説明文言 */}
      <Modal id="modal_help_handicap_info" headerIcon="help" title="年収とは">
        <Text>
          ・年収は、今現在の収入がこれから1年続くとして審査します。    <br />
          ・給与・年金・家賃収入・養育費・各種給付金などが含まれます。


        </Text>
      </Modal>


    </body>
  </html >
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
