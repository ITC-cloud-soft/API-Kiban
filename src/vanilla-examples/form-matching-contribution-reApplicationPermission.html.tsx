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
import { mapModifiers } from 'design/libs/component';
import { TextField } from 'design/components/atoms/text-field';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { TextLink } from 'design/components/atoms/text-link';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Tag } from 'design/components/atoms/tag/index';
import { CaptionList } from 'design/components/atoms/caption-list';


const MatchingContributionsureApplicationPermission: React.FC = () => (
  <html>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          footer={
            <>

              {/* <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                確認
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">

              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">マッチング拠出　再開申請許可</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>

              </Section>

              <Section className="p-setting-input-form__body">

                <Heading tag="h3">対象者情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="会社名" >
                    <TextField type="text" name="text" value="イオンリテール株式会社" disabled></TextField>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="社員番号" >

                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField unit="" disabled />
                      <Button type="button" modifiers="third" >
                        社員検索
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>


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

                <Heading tag="h3">再開申請許可状態</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="状態" >
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField unit="" disabled />
                      <Button type="button" modifiers="primary" size="huge" id="input-form-check-button">
                        許可削除
                      </Button>
                    </div>
                  </FormField>
                </FormFieldRow>

                <FormField label="登録日">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <CalendarField disabled defaultValue={new Date('2021-06-01T20:44:23.000Z')} />
                  </FormFieldRow>
                </FormField>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="登録者" className="p-setting-input-form__form-field" >
                    <TextField type="text" name="text" disabled value='１１１１１１'>

                    </TextField>
                  </FormField>

                </FormFieldRow>
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

            </>
          }
        >
          <>
          </>
        </Modal>


      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<MatchingContributionsureApplicationPermission />);
