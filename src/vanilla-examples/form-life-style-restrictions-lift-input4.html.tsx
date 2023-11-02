import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading, HeadingForlabelAddons } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { Radio } from 'design/components/atoms/radio';
import { Checkbox } from 'design/components/atoms/checkbox';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { mapModifiers } from 'design/libs/component';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { Pulldown } from 'design/components/atoms/pulldown';


const CommutingInputForm: React.FC = () => (
  <html>
    <title>ペア転勤解除 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* ペア転勤解除 (申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-questionnaire"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="questionnaire-form-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">ペア転勤解除 (申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）  <br />
                  YYYYYYYY
                </Text>
                <br />
                {/* <Heading tag="h2">申請内容</Heading> */}
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">社員情報</Heading>
                <Accordion label="確認する" isopen={true}>

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>01234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社（原籍）">
                      <span>イオンアイビス（株）</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>ヤマダ　タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンリテール（株）</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>山田　太郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="正式組織名・上">
                      <span>BS業務部</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="資格/等級">
                      <span>G5 - 1</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="正式組織名・下">
                      <span>BS業務課</span>
                    </InfoTableCell>



                    <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                      <span>45歳</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="勤務エリア区分">
                      <span>B　関東ブロック</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISM区分">
                      <span>B</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISMブロック">
                      <span>関東ブロック</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="ISM職務系統">
                      <span>R</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISM給与待遇">
                      <span>R</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">ライフスタイル申請情報</Heading>
                <Heading tag="h5">転居制限</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">その事由</Text>
                      <span>事由③-1　育児（子女）</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">利用可能残月数</Text>
                      <span>26ヶ月</span>
                    </FormFieldRow>


                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得累積月数</Text>
                      <span>12ヶ月</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得可能残月数</Text>
                      <span>60ヶ月</span>
                    </FormFieldRow>

                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>

                </InfoTable>
                <br />
                <Heading tag="h5">ペア転勤</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の社員番号</Text>
                      <span>0123456</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の者氏名</Text>
                      <span>開発　花子</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">B　関東ブロック</span>
                    </FormFieldRow>
                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>なし</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">&nbsp;</Text>
                      <span></span>
                    </FormFieldRow>

                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>


                </InfoTable>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">配偶者情報</Heading>

                <Accordion label="確認する" isopen={true}>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>01234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社（原籍）">
                      <span>イオンアイビス（株）</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="氏名（カナ）">
                      <span>ヤマダ　タロウ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンリテール（株）</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>山田　太郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="正式組織名・上">
                      <span>BS業務部</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="資格/等級">
                      <span>G5 - 1</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="正式組織名・下">
                      <span>BS業務課</span>
                    </InfoTableCell>



                    <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                      <span>45歳</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="勤務エリア区分">
                      <span>B　関東ブロック</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISM区分">
                      <span>B</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISMブロック">
                      <span>関東ブロック</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="ISM職務系統">
                      <span>R</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ISM給与待遇">
                      <span>R</span>
                    </InfoTableCell>
                  </InfoTable>

                </Accordion>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">適用解除を希望する理由を記載してください。</Heading>

                <FormField label="理由記入欄" labelAddons={<Tag>必須</Tag>}>

                  <TextField tag="textarea" type="text" rows="3"
                    value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" />

                </FormField>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">適用解除後の対応について、選択してください。</Heading>

                <FormField label="変更理由" labelAddons={<Tag>必須</Tag>} >

                  <CaptionList>
                    <React.Fragment key=".0">
                      下記で①～③を選択し、転居制限制度の適用事由（病気・育児・介護等）に該当して転居を伴う
                      <br />
                      人事異動ができない場合は、別途「転居制限申請」による制度適用が必要となります。
                    </React.Fragment>
                  </CaptionList>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <Pulldown id="contel-start-time" placeholder="⑥その他　→コメント記入欄作成" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="コメント記入欄" labelAddons={<Tag>必須</Tag>} >
                    <TextField tag="textarea" type="text" rows="3"
                      value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" />
                  </FormField>
                </FormFieldRow>

              </Section>

              <Section modifiers="border">

                <Heading tag="h3">転居制限適用申請を実施する方はチェックしてください。</Heading>

                <Checkbox name="questionnaire-confirm" value="y">
                  はい、ペア転勤申請後、続けて転居制限申請を実施します
                </Checkbox>

              </Section>



            </div>
          </>
        </Modal>
        {/* ペア転勤解除 (申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={true}
          footer={
            <>
              {/* <Button modifiers="third" size="huge" id="input-form-to-front-button">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button> */}
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">ペア転勤解除 (申請)</Heading>
                <Text>
                  ※内容に問題がなければ、ページ下部のボタンを押下してください。
                </Text>
                <Heading tag="h2">申請内容</Heading>
                {/* </Section>

              <Section modifiers="border"> */}
                <Heading tag="h3">社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>01234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社（原籍）">
                    <span>イオンアイビス（株）</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="正式組織名・上">
                    <span>BS業務部</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格/等級">
                    <span>G5 - 1</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="正式組織名・下">
                    <span>BS業務課</span>
                  </InfoTableCell>



                  <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                    <span>45歳</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="勤務エリア区分">
                    <span>B　関東ブロック</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISM区分">
                    <span>B</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISMブロック">
                    <span>関東ブロック</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="ISM職務系統">
                    <span>R</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISM給与待遇">
                    <span>R</span>
                  </InfoTableCell>
                </InfoTable>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">ライフスタイル申請情報</Heading>
                <Heading tag="h5">転居制限</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">その事由</Text>
                      <span>事由③-1　育児（子女）</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">利用可能残月数</Text>
                      <span>26ヶ月</span>
                    </FormFieldRow>


                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得累積月数</Text>
                      <span>12ヶ月</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">転居制限取得可能残月数</Text>
                      <span>60ヶ月</span>
                    </FormFieldRow>

                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>

                </InfoTable>
                <br />
                <Heading tag="h5">ペア転勤</Heading>

                <InfoTable modifiers="full-border">
                  <InfoTableCell header="現在">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>適用中</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の社員番号</Text>
                      <span>0123456</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の者氏名</Text>
                      <span>開発　花子</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">B　関東ブロック</span>
                    </FormFieldRow>
                  </InfoTableCell>


                  <InfoTableCell header="過去歴">
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者のペア転勤利用状況</Text>
                      <span>なし</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">&nbsp;</Text>
                      <span></span>
                    </FormFieldRow>

                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow> */}
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label"> &nbsp;</Text>
                      <span> &nbsp;</span>
                    </FormFieldRow>
                  </InfoTableCell>


                </InfoTable>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">配偶者情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>01234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社（原籍）">
                    <span>イオンアイビス（株）</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　タロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンリテール（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="正式組織名・上">
                    <span>BS業務部</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格/等級">
                    <span>G5 - 1</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="正式組織名・下">
                    <span>BS業務課</span>
                  </InfoTableCell>



                  <InfoTableCell modifiers="pair" label="年齢（年度末時点）">
                    <span>45歳</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="勤務エリア区分">
                    <span>B　関東ブロック</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISM区分">
                    <span>B</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISMブロック">
                    <span>関東ブロック</span>
                  </InfoTableCell>

                  <InfoTableCell modifiers="pair" label="ISM職務系統">
                    <span>R</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="ISM給与待遇">
                    <span>R</span>
                  </InfoTableCell>
                </InfoTable>

              </Section>



              <Section modifiers="border">
                <Heading tag="h3">適用解除を希望する理由</Heading>
                <Text>
                  あああああああああああああああああああああああああああああああああああああ <br />
                  あああああああああああああ
                </Text>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">適用解除後対応</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更理由" >
                    <Text>⑥その他　→コメント記入欄作成</Text>
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="コメント" >
                    <Text>ああああああああああああああああああああああああああああ</Text>
                  </FormField>

                </FormFieldRow>


              </Section>

              <Section modifiers="border">
                <Heading tag="h3">転居制限適用申請</Heading>
                <Text>申請を実施する</Text>

              </Section>



            </div>
          </>
        </Modal>

        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              {/* <Button modifiers="third" size="huge" id="confirm-app-button">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                承認
              </Button> */}
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
      <Modal id="modal-help2" headerIcon="help" title="">
        <br />
        <Text>
          現在あなたはペア転勤適用中のため、申請できません。
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
          同一配偶者と本制度の適用解除から3年間は、適用申請できません。
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
          社外配偶者の場合は、この制度は利用できません。 </Text>
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
          入籍予定日が2か月先を超えているため、申請できません。2か月前から申請可能になります。 </Text>
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
          産前産後・介護等の休職中はご利用いただけません。休職終了月度の翌月度以降を指定してください。 </Text>
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
          あなたとあなたの配偶者の大きいほうの勤務エリア区分が最大です。そちらを超える区分は選択できません。 </Text>
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
          あなたの配偶者が、すでに今月中にこの申請を実施しています。会社規定により、ペア転勤適用／解除申請は、本人と配偶者のどちらか1名しか実施できません。
          <br />ご確認ください。
        </Text>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <div className="o-modal__footer">
            <Button modifiers="primary" size="huge" id="input-form-check-button">
              はい
            </Button>
          </div>
        </FormFieldRow>

      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<CommutingInputForm />);
