import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';

import { Text } from 'design/components/atoms/text';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { HelpButton, HelpButton1, HelpButton2 } from 'design/components/atoms/help-button';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';

import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';

import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';

import { Radio } from 'design/components/atoms/radio';
import { InfoTableNone } from 'design/components/molecules/info-table';


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
              <HelpButton type="with-children" id="help-opener">を押すと項目の詳しい説明が表示されます。</HelpButton>


              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto">
                <ApprovalStepNo isDone modifiers="auto" step={1} name="申請家族選択" />
                <ApprovalStepNo isDone modifiers="auto" step={2} name="扶養要件判定" />
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
                こちらでは、選択された家族が被扶養者資格を有するかを判断します。  <br />
                以下に順に設問が表示されますので、上から順番にお答えください。  <br />
                また、回答を誤った場合は、その回答を訂正してください。  <br />
                回答内容によっては以降の設問がクリアされますので、あらためて設問にお答えください。
              </Text>
              <Heading tag="h3">設問について</Heading>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <Text>
                    その家族は、75歳未満（障害者は65歳未満）ですか？    <br />
                    後期高齢者医療制度の被保険者は扶養にできません。
                  </Text>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR1" value="6" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="RR1" value="6" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>  <br />
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <Text>
                    その家族は、あなたの父母・祖父母（直系尊属）・配偶者（内縁関係を含む）・子・孫・兄弟姉妹のいずれかにあたりますか？
                  </Text>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R2" value="6" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R2" value="6" checked modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>  <br />
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <Text>
                    あなたはその家族と同居していますか？
                  </Text>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R3" value="6" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R3" value="6" checked modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>  <br />
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">

                  <HelpButton2 type="with-children" id="help-opener2">
                    その家族の年収はあなたの年収の半分未満ですか？
                  </HelpButton2>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR5" value="6" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="RR5" value="6" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>  <br />
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <Text>
                    その家族の年収総額は、130万円未満ですか？

                  </Text>
                  <HelpButton2 type="with-children" id="help-opener1">
                    60歳以上または年金受給者の場合は、年収総額が180万円未満ですか？
                  </HelpButton2>

                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R4" value="6" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R5" value="6" modifiers="grey">
                      いいえ
                    </Radio>
                  </FormFieldRow>  <br />
                </div> </InfoTableNone>
              </FormFieldRow>



              <br />

              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">判定結果について</Heading>

              <Text>
                お答えいただいた情報から判断して、 <br />
                その家族は被扶養者に認められる可能性があります。 <br />
                <br />
                引き続き、必要な情報の入力にお進みください。
              </Text>

              <br />  <br />
            </div>
          </>
        </Modal>
        {/* 本人情報変更申請_PC_確認画面 */}
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

            </div>



          </>
        </Modal>
      </Whole>

      <Modal id="modal_financial_info2" title="年収とは？" headerIcon="help">
        <Section className="p-setting-input-form__body">
          <Text>  ・年収は、今現在の収入がこれから1年続くとして審査します。  <br />
            ・給与・年金・家賃収入・養育費・各種給付金などが含まれます。
          </Text>
        </Section>
      </Modal>
      <Modal id="modal_financial_info1" title="年収とは？" headerIcon="help">
        <Section className="p-setting-input-form__body">
          <Text>  ・年収は、今現在の収入がこれから1年続くとして審査します。  <br />
            ・給与・年金・家賃収入・養育費・各種給付金などが含まれます。
          </Text>
        </Section>
      </Modal>
    </body>
  </html >
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
