import React from 'react';
import { renderVanillaExample } from './render';

import { Modal } from 'design/components/organisms/modal';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { TextField } from 'design/components/atoms/text-field';
import { Pulldown } from 'design/components/atoms/pulldown';
import { mapModifiers } from 'design/libs/component';
import { CaptionList } from 'design/components/atoms/caption-list';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Tag } from 'design/components/atoms/tag';
// import { CertificationSearchField } from 'design/components/atoms/certification-search-field';
import { Accordion } from 'design/components/molecules/accordion';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Button } from 'design/components/atoms/button';
import { Whole } from 'design/components/organisms/whole';
import { DataTable, HeaderCellProps, ContentCellProps } from 'design/components/molecules/data-table';
import { ButtonContainer } from 'design/components/molecules/button-container';



export const CertificationCompanyCertification: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: '所属コード',
    },

    {
      value: '組織名称',
    },
    {
      value: '社員番号',
    },
    {
      value: '氏名',
    },
    {
      // value: '動作',
      value: '',
    },
    // {
    //   type: 'action',
    //   value: '',
    // },
  ];
  const contents: Array<Array<ContentCellProps>> = [
    [
      {
        value: '00001',
      },
      {
        value: 'テストG',
      },
      {
        value: '00000001',
      },
      {
        value: 'イオン　慎太郎',
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],
    [
      {
        value: '00001',
      },
      {
        value: 'テストG',
      },
      {
        value: '00000001',
      },
      {
        value: 'イオン　慎太郎',
      },
      {
        value: (
          <ButtonContainer modifiers="border">
            <Button modifiers="text">削除</Button>
          </ButtonContainer>
        ),
      },
    ],


  ];

  const contents2: Array<Array<ContentCellProps>> = [
    [
      {
        value: '00001',
      },
      {
        value: 'テストG',
      },
      {
        value: '00000001',
      },
      {
        value: 'イオン　慎太郎',
      },
      {
        value: '',
      },
    ],
    [
      {
        value: '00001',
      },
      {
        value: 'テストG',
      },
      {
        value: '00000001',
      },
      {
        value: 'イオン　慎太郎',
      },
      {
        value: '',
      },
    ],


  ];


  return (
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
                <Button modifiers="primary" size="huge" id="input-form-check-button"　>
                  確定
                </Button>
              </>
            }
          >
            <>
              <Section modifiers="border">
                <Heading tag="h1">資格免許　会社認定資格申請</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
              </Section>
              <Section modifiers="border">

                <Heading tag="h3">申請社員情報</Heading>

                <Accordion label="確認する">
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell label="会社コード" modifiers="pair">
                      <span>0005</span>
                    </InfoTableCell>
                    <InfoTableCell label="会社名称" modifiers="pair">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell label="所属コード" modifiers="pair">
                      <span>12345</span>
                    </InfoTableCell>
                    <InfoTableCell label="組織名称（略）" modifiers="pair">
                      <span>津田沼支店</span>
                    </InfoTableCell>
                    <InfoTableCell label="社員番号" modifiers="pair">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell label="氏名" modifiers="pair">
                      <span>申請　太郎</span>
                    </InfoTableCell>

                  </InfoTable>
                </Accordion>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">登録資格情報</Heading>

                <FormField label="資格名称" labelAddons={<Tag>必須</Tag>}>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField />
                      <Button type="button" modifiers="third" >
                        資格検索
                      </Button>
                    </div>
                  </FormFieldRow>

                  <FormFieldRow columnSize="12" columnSizePC="12">
                    {/* <CertificationSearchField
                      buttonProps={{
                        type: 'button',
                      }}
                      inputProps={{
                        defaultValue: '00003 日商販売士1級',
                      }}
                    /> */}
                  </FormFieldRow>
                  <CaptionList>
                    <React.Fragment key=".0">
                      ※資格検索ボタンから、対象の資格を選択ください。
                      <br />
                      ※一覧に記載がない資格は、所轄人事へご相談ください。

                    </React.Fragment>
                  </CaptionList>
                </FormField>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  {/* <FormField label="資格取得日付" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                    <CalendarField className="a-date-range-field__start-date" defaultValue={new Date('2022-03-26T20:44:23.000Z')} />

                  </FormField> */}

                  <FormField
                    label="資格取得日"
                    labelAddons={<Tag>必須</Tag>}
                    className="p-setting-input-form__form-field"
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => { }}
                    />
                  </FormField>

                  <FormField label="資格失効日" className="p-setting-input-form__form-field">
                    <CalendarField className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')} />
                  </FormField>
                </FormFieldRow>

                <FormField label="点数・スコア">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <TextField value="450" type="text" />
                  </FormFieldRow>
                </FormField>
                <FormField label="備考" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="6" />
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="保有車両区分">
                    <Pulldown name="something" placeholder="0000">
                      <React.Fragment key=".0">
                        <option value="create_new">11111</option>
                        <option selected value="reapply">2222</option>
                        <option value="arrangement_completed">3333</option>
                        <option value="unable_to_arrange">4444</option>

                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>


              </Section>
              <Section modifiers="border">
                <Heading tag="h3">登録社員情報</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="社員番号"
                      className="p-setting-input-form__form-field"
                    >
                      <TextField tag="textarea" rows="6" />
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field">
                      <Button modifiers="primary">   社員番号入力欄
                        <br />
                        従業員設定</Button>
                      <br />
                      <Button modifiers="primary"> 社員番号入力欄   <br />クリア</Button>
                    </FormField>
                  </FormFieldRow>
                </FormFieldRow>

                <FormField label="社員情報">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <Section noPadding={true}>
                      <DataTable modifiers="with-action-buttons" headers={headers} contents={contents} />
                    </Section>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormFieldRow columnSize="6" columnSizePC="6">

                    <FormField label="" className="p-setting-input-form__form-field　">
                      <Button modifiers="primary">   登録従業員
                        <br />
                        一覧クリア</Button>
                      <br />

                    </FormField>
                  </FormFieldRow>
                </FormFieldRow>

              </Section>

            </>
          </Modal>

          <Modal
            id="modal-comp"
            modifiers="fullscreen"
            hasBackButton={true}
            footer={
              <>
                <Button modifiers="primary" size="huge" id="input-form-submit-button">
                  申請
                </Button>
              </>
            }
          >
            <div className="p-wrapper">
              <Section >
                <Heading tag="h1" className="p-page-title">
                  資格免許　会社認定資格申請
                </Heading>
                <Text>※内容に問題がなければ、ページ下部のボタンを押下してください。</Text>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">申請社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell label="会社コード" modifiers="pair">
                    <span>0005</span>
                  </InfoTableCell>
                  <InfoTableCell label="会社名称" modifiers="pair">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell label="所属コード" modifiers="pair">
                    <span>12345</span>
                  </InfoTableCell>
                  <InfoTableCell label="組織名称（略）" modifiers="pair">
                    <span>津田沼支店</span>
                  </InfoTableCell>
                  <InfoTableCell label="社員番号" modifiers="pair">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell label="氏名" modifiers="pair">
                    <span>申請　太郎</span>
                  </InfoTableCell>

                </InfoTable>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">登録資格情報</Heading>
                <FormField label="資格名称" >
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <Text>00003 日商販売士1級</Text>
                  </FormFieldRow>
                </FormField>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="資格取得日付" >
                    <Text>2022/03/26</Text>
                  </FormField>
                  <FormField label="資格失効日" >
                    <Text>2022/03/26</Text>
                  </FormField>
                </FormFieldRow>

                <FormField label="点数・スコア">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Text>450</Text>
                  </FormFieldRow>
                </FormField>
                <FormField label="備考" className="p-setting-input-form__form-field">
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <Text>ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</Text>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="保有車両区分">
                    <Text>0000 無し</Text>
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">登録社員情報</Heading>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Section noPadding={true}>
                    <DataTable modifiers="with-action-buttons" headers={headers} contents={contents2} />
                  </Section>
                </FormFieldRow>

              </Section>

            </div>

          </Modal>



        </Whole>
      </body>
    </html >
  );
};

export default renderVanillaExample(<CertificationCompanyCertification />);
