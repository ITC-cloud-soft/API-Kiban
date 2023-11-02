import React from 'react';
import { renderVanillaExample } from './render';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Heading } from 'design/components/atoms/heading';
import { Section } from 'design/components/molecules/section';
import { Text } from 'design/components/atoms/text';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { InfoTable } from 'design/components/molecules/info-table';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Button } from 'design/components/atoms/button';
import { Accordion } from 'design/components/molecules/accordion';
import { TextField } from 'design/components/atoms/text-field';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { TextLink } from 'design/components/atoms/text-link';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';
import { Tag } from 'design/components/atoms/tag/index';
import { CaptionList } from 'design/components/atoms/caption-list';

const MatchingContributionsuSpensionApplication: React.FC = () => (
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
                <Heading tag="h1">マッチング拠出　中断申請</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>

              </Section>

              <Section className="p-setting-input-form__body">

                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する">{ }</Accordion>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田 太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>習志野支店</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格">
                    <span>G1</span>
                  </InfoTableCell>
                </InfoTable>


                <FormField label="">
                  <EmailTemplateViewer>

                    <Heading tag="h3">注意事項</Heading>

                    <p>
                      中断申請は、毎月
                      <TextLink href="#" modifiers="underline">
                        20日
                      </TextLink>
                      までの申請を翌月末の掛金より反映します。
                    </p>
                    <p>
                      中断申請すると、マッチング拠出の掛金は0円となります。
                    </p>
                  </EmailTemplateViewer>
                </FormField>

                <Heading tag="h3">申請情報</Heading>
                <Heading tag="h5">現在の掛金額</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField disabled />
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="中断希望月" className="p-setting-input-form__form-field" >
                    <TextField type="text" name="text" disabled value='2021年5月より'>

                    </TextField>
                  </FormField>

                </FormFieldRow>
                <CaptionList>
                  <React.Fragment key=".0">
                    本日の申請による中断希望月は上記となり、掛金は0円となります。
                  </React.Fragment>
                </CaptionList>
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
                <Heading tag="h1">マッチング拠出　中断申請</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>

              </Section>
              <br />
              <Section modifiers="fill-white" className="p-setting-input-form__wrapper">
                <Section className="p-setting-input-form__body">

                  <Heading tag="h3">社員情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>山田 太郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>ヤマダ タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>習志野支店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="資格">
                      <span>G1</span>
                    </InfoTableCell>
                  </InfoTable>

                  <Heading tag="h3">申請情報</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <FormField label="現在の掛金額" className="p-setting-input-form__form-field" >
                      <FormField label="3,000円" className="p-setting-input-form__form-field" >
                      </FormField>
                    </FormField>
                    <FormField label="中断希望月" className="p-setting-input-form__form-field" >
                      <FormField label="2021年5月より" className="p-setting-input-form__form-field" >
                      </FormField>
                    </FormField>
                  </FormFieldRow>

                </Section>
              </Section>
            </div>
          </>
        </Modal>


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<MatchingContributionsuSpensionApplication />);
