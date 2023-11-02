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
    <title>ペア転勤適用 (申請)</title>
    <body>
      <Whole navigation={''}>
        {/* ペア転勤適用 (申請) */}
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
                <Heading tag="h1">ペア転勤適用 (申請)</Heading>
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
                <Heading tag="h3">あなたの配偶者について伺います。</Heading>
                {/* <FormField label="配偶者（これから入籍予定の方を含む）は、あなたの原籍会社の従業員ですか。"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R1" value="no" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R1" value="no" modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField> */}
                <FormField label="配偶者の社員番号" labelAddons={<Tag>必須</Tag>}>

                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField value="0200287" />
                      <Button type="button" modifiers="third">
                        検索
                      </Button>
                    </div>
                  </FormFieldRow>
                </FormField>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の会社（原籍）" >
                    <TextField type="text" name="text" value="イオンリテール（株）" disabled />
                  </FormField>
                  <FormField label="配偶者の会社名称" >
                    <TextField type="text" name="text" value="イオンアイビス（株）" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の氏名" >
                    <TextField type="text" name="text" value="開発　良子" disabled />
                  </FormField>
                  <FormField label="配偶者の氏名（カナ）" >
                    <TextField type="text" name="text" value="カイハツ　ヨシコ" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の正式組織名・上" >
                    <TextField type="text" name="text" value="ビジネスサービス本部" disabled />
                  </FormField>
                  <FormField label="配偶者の正式組織名・下" >
                    <TextField type="text" name="text" value="社会保険Ｇ" disabled />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の資格/等級" >
                    <TextField type="text" name="text" value="G4" disabled />
                  </FormField>
                  <FormField label="配偶者の年齢（年度末時点）" >
                    <TextField type="text" name="text" value="40" disabled />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者の勤務エリア区分" >
                    <TextField type="text" name="text" value="R" disabled />
                  </FormField>
                  <FormField label="配偶者のISM区分" >
                    <TextField type="text" name="text" value="R区分（北日本）" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="配偶者のISMブロック" >
                    <TextField type="text" name="text" value="関東ブロック" disabled />
                  </FormField>
                  <FormField label="配偶者のISM職務系統" >
                    <TextField type="text" name="text" value="R" disabled />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <FormField label="配偶者のISM給与待遇" >
                    <TextField type="text" name="text" value="R" disabled />
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">お二人の状況について伺います。</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="入籍日" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                    </FormFieldRow>
                  </FormField>
                </FormFieldRow>
                <FormField label="同居区分"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R2" value="no" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R2" value="no" modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>

              </Section>

              ----------申請者の現住所は以下の通りですか。はいの場合ーーーーーーーーーー
              <Section modifiers="border">
                <Heading tag="h3">現在の申請者の住所情報を確認ください。</Heading>

                <FormField label="申請者の現住所は以下の通りですか。"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="RT3" value="no" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="RT3" value="no" modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>
                <br />

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" >
                    <TextField type="text" name="text" value="182-0022" disabled />
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="都道府県・市郡区" >
                    <TextField type="text" name="text" value="東京都調布市2" disabled />
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
                {/* <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅"   >

                    <UnitTextField defaultValue="調布" disabled name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow> */}
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分" >
                    <TextField type="text" name="text" value="その他" disabled />
                  </FormField>

                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="住居区分記入欄" >
                    <TextField tag="textarea" type="text" rows="3"
                      value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" disabled />
                  </FormField>
                </FormFieldRow>

              </Section>
              <Section modifiers="border">
                <Heading tag="h3">現在の配偶者の住所情報を確認ください。</Heading>

                <FormField label="配偶者の現住所は以下の通りですか。"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R3" value="no" checked modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R3" value="no" modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="郵便番号" >
                    <TextField type="text" name="text" value="182-0022" disabled />
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="都道府県・市郡区" >
                    <TextField type="text" name="text" value="東京都調布市2" disabled />
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
                {/* <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅"   >

                    <UnitTextField defaultValue="調布" disabled name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow> */}
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分" >
                    <TextField type="text" name="text" value="その他" disabled />
                  </FormField>

                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="住居区分記入欄" >
                    <TextField tag="textarea" type="text" rows="3"
                      value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" disabled />
                  </FormField>
                </FormFieldRow>

              </Section>
              <Section modifiers="border">

                <Heading tag="h3">ペア転勤発令後に希望する勤務エリア区分を選択してください。</Heading>
                <Text>
                  ペア転勤時のエリア区分は「N区分」または「R区分」のいずれか夫婦で統一します。

                  <br />
                  「R区分」の場合のブロックは、夫婦の現所属があるブロックからの選択となります。
                  <br />
                </Text>


                <FormField label="希望勤務エリア区分" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="R区分（関東）" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>
              </Section>
              <Section modifiers="border">

                <Heading tag="h3">以下注意事項を確認ください。</Heading>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone>
                    <div className="o-form-nobottom">

                      <Text>

                        ●入籍することが決定している場合、入籍予定日の2か月前から申請することが可能です。
                        <br />
                        ●制度利用による人事異動への反映は、原則定期異動時期とし、提出期限を次の通りとします。
                        <br />
                        <p className="  a-text--marginleft2">
                          春期定期異動対応・・2月20日〆切厳守
                          <br />
                          秋期定期異動対応・・8月20日〆切厳守

                        </p>

                        ●R区分は期日までにカンパニー人事総務部到着分、

                        <br />
                        <p className="  a-text--marginleft2">
                          N区分・出向者は期日までに本社人事部到着分とします。

                        </p>
                        ●内示発令後の「事後申告」に対しては一切認められません。
                      </Text>
                      <br />

                    </div>
                  </InfoTableNone>
                </FormFieldRow>

                <Checkbox name="questionnaire-confirm" value="y">
                  上記を読み、規定を理解いたしました。
                </Checkbox>
              </Section>
              ----------申請者の現住所は以下の通りですか。はいの場合ーーーーーーーーーー   <br />
              ----------申請者の現住所は以下の通りですか。いいえの場合ーーーーーーーーーー   <br />
              <Section modifiers="border">
                <Heading tag="h3">現在の申請者の住所情報を確認ください。</Heading>
                <FormField label="申請者の現住所は以下の通りですか。"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R4" value="no" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R4" value="no" checked modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>
                <br />
                <Heading tag="h5">新登録地</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone> <div className="o-form-nobottom">


                    <FormField label="注意事項"  >
                      <Text>
                        この申請では、住所は変更されません。
                        <br />
                        必要な場合は、規定通り、速やかに住所（社宅）変更届・通勤費変更等を提出してください。
                        <br />
                        ※ 現住所の変更が必要な方へのご案内
                        <br />
                        XXXXXXX（文言未定）
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
                        郵便番号を入力して住所検索ボタンを押下してください。
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
                  <FormField label="建物名・部屋番号" >
                    <TextField name="name" type="text" value="美浜１１１" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField defaultValue="調布" name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow>

                <FormField label="住居区分" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="住居区分記入欄" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        <li>
                          ※その他を選択の場合は、下記に住居区分を記入してください。
                        </li>
                      </React.Fragment>
                    </CaptionList>
                    <TextField tag="textarea" type="text" rows="3"
                      value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" />
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">現在の配偶者の住所情報を確認ください。</Heading>

                <FormField label="配偶者の現住所は以下の通りですか。"  >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio name="R5" value="no" modifiers="grey">
                      はい
                    </Radio>
                    <Radio name="R5" value="no" checked modifiers="grey">
                      いいえ
                    </Radio>

                  </FormFieldRow>
                </FormField>
                <br />
                <Heading tag="h5">新登録地</Heading>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone> <div className="o-form-nobottom">
                    <FormField label="注意事項"  >
                      <Text>
                        この申請では、住所は変更されません。 <br />
                        必要な場合は、規定通り、速やかに住所（社宅）変更届・通勤費変更等を提出してください。 <br />
                        ※ 現住所の変更が必要な方へのご案内<br />
                        XXXXXXX（文言未定）
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
                  <FormField label="建物名・部屋番号" >
                    <TextField name="name" type="text" value="美浜１１１" />
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" labelAddons={<Tag>必須</Tag>}>
                    <UnitTextField defaultValue="調布" name="text" type="text" unit="station" />
                  </FormField>
                </FormFieldRow>

                <FormField label="住居区分" labelAddons={<Tag>必須</Tag>} >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown id="contel-start-time" placeholder="その他" name="contel-start-time">
                      <option value=""></option>
                      <option value="1">テスト１</option>
                      <option value="2">テスト２</option>
                    </Pulldown>
                  </FormFieldRow>
                </FormField>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="住居区分記入欄" labelAddons={<Tag>必須</Tag>}>
                    <CaptionList>
                      <React.Fragment key=".0">
                        <li>
                          ※その他を選択の場合は、下記に住居区分を記入してください。
                        </li>
                      </React.Fragment>
                    </CaptionList>
                    <TextField tag="textarea" type="text" rows="3"
                      value="あああああああああああああああああああああああああああああああああああああああああいいいいいい" />
                  </FormField>
                </FormFieldRow>







              </Section>
              ----------申請者の現住所は以下の通りですか。いいえの場合ーーーーーーーーーー


            </div>
          </>
        </Modal>
        {/* ペア転勤適用 (申請) */}
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
                <Heading tag="h1">ペア転勤適用 (申請)</Heading>
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


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="社員番号" >
                    <Text>1234567</Text>
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="会社（原籍）" >
                    <Text>カイハツ　ヨシコ</Text>
                  </FormField>
                  <FormField label="会社名称" >
                    <Text>イオンアイビス株式会社</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="氏名" >
                    <Text>開発　良子</Text>
                  </FormField>
                  <FormField label="氏名（カナ）" >
                    <Text>カイハツ　ヨシコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="正式組織名・上" >
                    <Text>BS業務部</Text>
                  </FormField>
                  <FormField label="正式組織名・下" >
                    <Text>BS業務課</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <FormField label="資格/等級" >
                    <Text>G5 - 1</Text>
                  </FormField>
                  <FormField label="年齢（年度末時点）" >
                    <Text>32歳</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <FormField label="勤務エリア区分" >
                    <Text>B　関東ブロック</Text>
                  </FormField>
                  <FormField label="ISM区分" >
                    <Text>B</Text>
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="ISMブロック" >
                    <Text>関東ブロック</Text>
                  </FormField>
                  <FormField label="ISM職務系統" >
                    <Text>R</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="ISM給与待遇" >
                    <Text>R
                    </Text>
                  </FormField>

                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">入籍・同居状況</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="入籍日" >
                    <Text>2021/10/10
                    </Text>
                  </FormField>
                  <FormField label="同居区分" >
                    <Text>別居
                    </Text>
                  </FormField>
                </FormFieldRow>
              </Section>

              <Section modifiers="border">
                <Heading tag="h3">現住所について</Heading>
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
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" >
                    <Text>調布</Text>
                  </FormField>
                  <FormField label="住所区分" >
                    <Text>その他</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分記入欄" >
                    <Text>
                      あああああああああああああああああああああああああ <br />
                      あああああああああああああ
                    </Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              <Section modifiers="border">
                <Heading tag="h3">配偶者住所について</Heading>
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


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="最寄り駅" >
                    <Text>調布</Text>
                  </FormField>
                  <FormField label="住所区分" >
                    <Text>その他</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="住居区分記入欄" >
                    <Text>
                      あああああああああああああああああああああああああ <br />
                      あああああああああああああ
                    </Text>
                  </FormField>
                </FormFieldRow>

              </Section>

              <Section modifiers="border">

                <Heading tag="h3">希望勤務エリア</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="希望勤務エリア区分" >
                    <Text>R区分（関東）</Text>
                  </FormField>

                </FormFieldRow>
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
          あなたとあなたの配偶者の現所属ブロック以外を選択することはできません。

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
          あなたの配偶者が、すでに今月中にこの申請を実施しています。会社規定により、ペア転勤適用／解除申請は、本人と配偶者のどちらか1名しか実施できません。
          <br /> ご確認ください。

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
