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
    <title>勤務エリア変更 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 勤務エリア変更 (申請) */}
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
                <Heading tag="h1">勤務エリア変更 (申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
                <br />
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
                      <span>R</span>
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
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">勤務エリア区分</Text>
                      <span className="">B　関東ブロック</span>
                    </FormFieldRow> */}
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
                <Heading tag="h3">この申請は、直近の人事ニュースを見て実施していますか。</Heading>

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="R2" value="no" checked modifiers="grey">
                    はい
                  </Radio>
                  <Radio name="R2" value="no" modifiers="grey">
                    いいえ
                  </Radio>

                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="人事ニュース発行日" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">あなたの勤務区分は「Ｌ区分」です。今回の申請に伴い、登録地を変更する希望がありますか。</Heading>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="R1" value="no" checked modifiers="grey">
                    はい
                  </Radio>
                  <Radio name="R1" value="no" modifiers="grey">
                    いいえ
                  </Radio>

                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">勤務エリア変更を行う理由を記載してください。</Heading>
                <FormField label="変更理由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="３.人事ニュースを見ての申請" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                <FormField label="具体的理由" labelAddons={<Tag>必須</Tag>} >

                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <TextField tag="textarea" type="text" rows="3"
                      value="" />
                  </FormFieldRow>
                </FormField>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">申請する内容を選択してください。</Heading>

                <FormField label="変更NRL区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="L区分" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                ------------------------ R区分の場合----------
                <FormField label="変更NRL区分" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="R区分" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormField label="ブロック選択" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="R区分（関東）" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
                ------------------------ R区分の場合----------
                <br />
                {/* <Heading tag="h5">現住所</Heading> */}
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" >
                    <TextField type="text" name="text" value="182-0022" disabled />
                  </FormField>


                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="都道府県・市郡区" >
                    <TextField type="text" name="text" value="東京都調布市" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="町村・番地" >
                    <TextField type="text" name="text" value="小島町３－３－３" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="建物名・部屋番号" >
                    <TextField type="text" name="text" value="住宅１０１号" disabled />
                  </FormField>
                </FormFieldRow>

                <FormField label="エリア変更後に住む予定の住所は、現住所ですか。" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RR1" value="no" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="RR1" value="no" checked modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>

                <FormField label="新登録地" >

                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone> <div className="o-form-nobottom">
                    <FormField label="注意事項"  >
                      <Text>
                        この申請では、住所は変更されません。   <br />
                        必要な場合は、規定通り、速やかに住所（社宅）変更届・通勤費変更等を提出してください。
                        <br />※ 現住所の変更が必要な方へのご案内
                        <br />   XXXXXXX（文言未定）
                      </Text>
                    </FormField>
                  </div>
                  </InfoTableNone>
                </FormFieldRow>
                <br />
                <FormField label="郵便番号" labelAddons={<Tag>必須</Tag>}>
                  <CaptionList>
                    <React.Fragment key=".0">
                      <li>
                        住所検索ボタンを押下して、市区町村コードを入力してください
                      </li>
                    </React.Fragment>
                  </CaptionList>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField value="123-4567" />
                      <Button type="button" modifiers="third">
                        住所検索
                      </Button>
                    </div>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="都道府県・市郡区" labelAddons={<Tag>必須</Tag>}>
                    <TextField name="name" type="text" value="東京都港区" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="町村・番地" labelAddons={<Tag>必須</Tag>}>
                    <TextField name="name" type="text" value="美浜１－１－１" />
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="建物名・部屋番号">
                    <TextField name="name" type="text" value="美浜１１１" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField defaultValue="調布" name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow>



              </Section>



            </div>
          </>
        </Modal>
        {/* 勤務エリア変更 (申請) */}
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
                <Heading tag="h1">勤務エリア変更 (申請)</Heading>
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
                    <span>R</span>
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
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Text align="left" className="a-info-table-cell__label">配偶者の適用開始日</Text>
                      <span className="">2020/08/21</span>
                    </FormFieldRow>
                    {/* <FormFieldRow columnSize="6" columnSizePC="6">
      <Text align="left" className="a-info-table-cell__label">勤務エリア区分</Text>
      <span className="">B　関東ブロック</span>
    </FormFieldRow> */}
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
                <Heading tag="h3">この申請は、直近の人事ニュースを見て実施していますか。</Heading>
                <Text align="left">はい</Text>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="人事ニュース発行日" >
                    <Text>2021/02/12</Text>
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">あなたの勤務区分は「Ｌ区分」です。今回の申請に伴い、登録地を変更する希望がありますか。</Heading>
                <Text align="left">はい</Text>

              </Section>

              <Section modifiers="border">
                <Heading tag="h3">勤務エリア変更 (申請)を行う理由</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更理由" >
                    <Text>３.人事ニュースを見ての申請</Text>
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <FormField label="具体的理由" >
                    <Text>
                      あああああああああああああああああああああああああ ああああああああああああ
                    </Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">申請内容</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更NRL区分" >
                    <Text>L区分</Text>
                  </FormField>

                </FormFieldRow>
                ------------------------R区分の場合
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更NRL区分" >
                    <Text>R区分</Text>
                  </FormField>
                  <FormField label="ブロック選択" >
                    <Text>R区分（関東）</Text>
                  </FormField>
                </FormFieldRow>


                -------------------------R区分の場合


                <FormField label="現住所" >


                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone>
                      <div className="o-form-nobottom">

                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="郵便番号" >
                            <Text>182-0022</Text>
                          </FormField>
                          <FormField label="都道府県・市郡区" >
                            <Text>東京都調布市</Text>
                          </FormField>
                        </FormFieldRow>

                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="町村・番地" >
                            <Text>小島町３－３－３</Text>
                          </FormField>
                          <FormField label="建物名・部屋番号" >
                            <Text>住宅１０１号</Text>
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="エリア変更後に住む予定の住所は、現住所ですか。" >
                            <Text>いいえ</Text>
                          </FormField>

                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                  </FormFieldRow>

                </FormField>

                <FormField label="新登録地" >


                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone>
                      <div className="o-form-nobottom">

                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="郵便番号" >
                            <Text>182-0022</Text>
                          </FormField>
                          <FormField label="都道府県・市郡区" >
                            <Text>東京都調布市</Text>
                          </FormField>
                        </FormFieldRow>

                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <FormField label="町村・番地" >
                            <Text>小島町３－３－３</Text>
                          </FormField>
                          <FormField label="建物名・部屋番号" >
                            <Text>住宅１０１号</Text>
                          </FormField>
                        </FormFieldRow>
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="最寄り駅" >
                            <Text>美浜</Text>
                          </FormField>

                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                  </FormFieldRow>

                </FormField>



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
          ここまでの申請を保存しました。続いて、勤務エリア変更 (申請)申請を開始します。  </Text>
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
          ここまでの申請を保存しました。続いて、新たな転居制限申請を開始します。  </Text>

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
          ここまでの申請を保存しました。続いて、勤務エリア変更 (申請)申請を開始します。 </Text>
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
