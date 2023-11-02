import React from 'react';
import { renderVanillaExample } from './render';

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
import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';
import { DownloadButton } from 'design/components/atoms/download-button';
import { TabsLong } from 'design/components/molecules/tabs-long';
import { CaptionList } from 'design/components/atoms/caption-list';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { ApprovalStatusItem } from 'design/components/atoms/approval-status-item';
import { ApprovalStatusList } from 'design/components/molecules/approval-status-list';
import { VisitRecordInputCust } from 'design/components/molecules/visit-record-input-cust';
import { Icon } from 'design/components/atoms/icon';
import { CustItemButton } from 'design/components/atoms/cust-item-button';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>健康保険扶養 (変更申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 健康保険扶養 (変更申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                入力完了
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <Text>
                登録内容を変更したい該当の被扶養者を、「被扶養者を変更する」ボタンで選択してください。
                <br />
                変更したい被扶養者が複数いる場合は、本画面より繰り返し情報入力を行ってください。
                <br />
                すべての情報を入力し終わったら、「入力完了」ボタンより書類ダウンロード画面にお進みください。
              </Text>
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>
              <FormField label="異動の種類">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="変更" />
                </FormFieldRow>
              </FormField>
              <FormField label="所属店舗・部署">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="デジタルソリューション本部" />
                </FormFieldRow>
              </FormField>
              <FormField label="社員番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="1234567" />
                </FormFieldRow>
              </FormField>
              <FormField label="提出日" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormField label="提出日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和3年10月1日" />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被保険者情報 */}
              <Heading tag="h3">被保険者情報</Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="被保険者証（記号）">
                  <TextField name="name" type="text" disabled value="8" />
                </FormField>
                <FormField label="被保険者証（番号）">
                  <TextField name="name" type="text" disabled value="1234567" />
                </FormField>
                <FormField label="姓">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
              </FormFieldRow>
              <FormField label="所属会社">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="イオンアイビス株式会社" />
                </FormFieldRow>
              </FormField>
              <FormField label="生年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="昭和50年5月5日" />
                </FormFieldRow>
              </FormField>
              <FormField label="取得年月日" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => {}} />
                </FormFieldRow>
              </FormField>
              <FormField label="取得年月日（和暦）">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="平成21年4月1日" />
                </FormFieldRow>
              </FormField>
              <FormField label="給与">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="日給月給" />
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="123-4567" />
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="東京都港区" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="赤坂8-5-32" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="田中駒ビル2F" />
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 被扶養者情報 */}
              <Heading tag="h3">被扶養者情報</Heading>
              <VisitRecordInputCust handleCloseClick={() => {}} haveclose={false} title="被扶養者（1人目）">
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　次郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　ジロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                    <span>平成22年12月10日</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="性別">
                    <span>男性</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="職業">
                    <span>小学校</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="続柄">
                    <span>次男</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="住所">
                    <span>同居</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="備考">
                    <span>特になし</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="被扶養者になった日">
                    <span>令和3年5月3日</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="追加の理由">
                    <span>所得減少のため</span>
                  </InfoTableCell>
                </InfoTable>
                <br />
                <CustItemButton handleCustItemClick={() => {}} icon={<Icon name="modify" />}>
                  被扶養者（1人目）を変更する
                </CustItemButton>
              </VisitRecordInputCust>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => {}}
                haveclose={false}
                title={
                  <>
                    被扶養者（2人目）　<span className="m-form-field__label a-text a-text--purple">※変更入力済</span>
                  </>
                }
              >
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>山田　次郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名（カナ）">
                    <span>ヤマダ　ジロウ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="生年月日（和暦）">
                    <span>平成22年12月10日</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="性別">
                    <span>男性</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="職業">
                    <span>小学校</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="続柄">
                    <span>次男</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="住所">
                    <span>同居</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="備考">
                    <span>特になし</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="被扶養者になった日">
                    <span>令和3年5月3日</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="追加の理由">
                    <span>所得減少のため</span>
                  </InfoTableCell>
                </InfoTable>
                <br />
                <CustItemButton handleCustItemClick={() => {}} icon={<Icon name="modify" />}>
                  被扶養者（2人目）を変更する
                </CustItemButton>
              </VisitRecordInputCust>
              <br />
            </div>
          </>
        </Modal>
        {/* 書類ダウンロード_PC_共通タブ*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          footer={
            <>
              <Button modifiers="primary" size="huge" id="confirm-button-next1">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <Text>
                入力いただいた情報より、書類が作成されました。
                <br />
                ダウンロードした書類を紙に印刷し、必要事項の記入、署名捺印をしてください。
                <br />
                併せて、必要書類も記載しているので、申請者本人での準備をお願いします。
                <br />
                ※プリントアウト後に、マイナンバーを自署してください。
              </Text>
              <div className="m-tabs-modify">
                <TabsLong
                  badges={[]}
                  onChange={() => {}}
                  tabs={[<>共通</>, <>被扶養者（1人目）</>, <>被扶養者（2人目）</>]}
                >
                  <div>
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="扶養追加手続き チェックリスト兼送付票">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              回答内容に合わせて、今回の申請に必要な書類がリストアップされます。
                              <br />
                              必要事項を記入し、チェックリストに必ずチェックをしてください。
                            </Text>
                            <DownloadButton href="#" target="_blank">
                              ダウンロード
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="健康保険被扶養者異動届（正）">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>被保険者欄に捺印をしてください。</Text>
                            <DownloadButton href="#" target="_blank">
                              ダウンロード
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="健康保険被扶養者異動届（副）">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>健康保険被扶養者異動届（副）には、個人番号（マイナンバー）は表示されません。</Text>
                            <DownloadButton href="#" target="_blank">
                              ダウンロード
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                  </div>
                  <div>
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="国民年金第3号被保険者関係届">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>B.第3号被保険者に捺印をしてください。</Text>
                            <DownloadButton href="#" target="_blank">
                              ダウンロード
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <FormField label="配偶者の年金手帳の基礎年金番号のページ【コピー】">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <Text>※申請者本人が準備</Text>
                        </FormFieldRow>
                      </FormField>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="ローマ字氏名届">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>必要事項の記入、署名捺印をしてください。</Text>
                            <Text></Text>
                          </FormFieldRow>
                          <FormFieldRow columnSize="6" columnSizePC="2">
                            <DownloadButton href="#" target="_blank">
                              記載例
                            </DownloadButton>
                            <DownloadButton href="#" target="_blank">
                              フォーマット
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="住民票【原本】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              住民票を取るときの注意を必ず読んでください。
                              <br />
                              あなたと申請する家族の住民票が分かれている場合は、
                              <br />
                              双方の住民票(それぞれ世帯全員分)と、続柄確認のため戸籍抄本【原本】も必要です。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                            <DownloadButton href="#" target="_blank">
                              住民票を取るときの注意
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="被扶養者現況届">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              必要事項の記入、署名捺印をしてください。
                              <br />
                              申請者ごとに提出してください。
                            </Text>
                            <DownloadButton href="#" target="_blank">
                              ダウンロード
                            </DownloadButton>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="給与明細【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              直近3ヵ月分。
                              <br />
                              求職中の場合は、休職前3ヵ月の給与明細【写し】または手当金の支給決定通知書【写し】
                              <br />
                              働き始めたばかりの場合は、雇用契約書（交通費を含んだ報酬がわかるもの）【写し】
                              <br />
                              もしくは、勤務先に発行してもらった給与見込証明書【原本】
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①変更後の雇用契約書【写し】</span>
                      <br />
                      <span className="m-form-field__label">②今後の収入見込み証明書【原本】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>①か②のどちらかを提出してください。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①確定申告書【写し】</span>
                      <br />
                      <span className="m-form-field__label">②収支内訳書等明細のわかる書類【写し】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①か②のどちらかを提出してください。
                              <br />
                              直近3ヵ月分の写し。休職中の場合は休職前の3ヵ月分写し。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="(非)課税証明書【原本】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <CaptionList>
                              <React.Fragment key=".0">※申請者本人が準備</React.Fragment>
                            </CaptionList>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="退職証明書【原本】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>公務員の場合は、辞令【写し】</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①離職票1と2【原本】</span>
                      <br />
                      <span className="m-form-field__label">②雇用保険被保険者資格喪失確認通知書【写し】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①か②のどちらかを提出してください。
                              <br />
                              後日こちらから送付の誓約書を提出いただきます。
                              <br />
                              離職票【原本】は確認後お返しします。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①離職票1と2【原本】</span>
                      <br />
                      <span className="m-form-field__label">②退職証明書【原本】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①か②のどちらかを提出してください。
                              <br />
                              後日こちらから送付の誓約書と雇用保険受給資格者証【写し】を提出いただきます。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①離職票1と2【原本】</span>
                      <br />
                      <span className="m-form-field__label">②退職証明書【原本】</span>
                      <br />
                      <span className="m-form-field__label">③延長手続後の受給期間延長通知書【写し】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①②③のうちのどれかを提出してください。
                              <br />
                              後日こちらから送付の誓約書と受給期間延長通知書【写し】を提出いただきます。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="雇用保険受給資格者証 1～4面【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>受給終了の場合は、雇用保険受給資格者証に受給終了の印字のあるもの。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="健康保険･厚生年金保険 資格喪失証明書【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>任意継続で加入していた場合は任意継続資格喪失証明書【原本】</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <FormField label="廃業届【写し】">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <Text>※申請者本人が準備</Text>
                        </FormFieldRow>
                      </FormField>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①直近のすべての年金振込通知書【写し】</span>
                      <br />
                      <span className="m-form-field__label">②(非)課税証明書【原本】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①と②の両方を提出してください。
                              <br />
                              氏名がわかるようにコピーしてください。
                              <br />
                              退職時や65歳到達時、年金額が変更になる可能性があります。
                              <br />
                              年金事務所に確認して変更後の金額が記載されたもの【写し】の提出が必要です。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="在学証明書【原本】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>発行から3ヵ月以内（学生証の写しは不可）</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①(非)課税証明書【原本】（収入がないことの証明）</span>
                      <br />
                      <span className="m-form-field__label">
                        ②働けないことを証明する医師の診断書【原本】または障害者手帳【写し】
                      </span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>①と②の両方を提出してください。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①(非)課税証明書【原本】（収入がないことの証明）</span>
                      <br />
                      <span className="m-form-field__label">②事実の証明書</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①と②の両方を提出してください。
                              <br />
                              ②は第三者(同居でない親戚(親･兄弟姉妹を除く)･知人の方など)による
                              <br />
                              　事実の証明書に働けない理由をできるだけ詳しく記入し提出してください
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="雇用保険受給資格者証 1～4面【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>納付期間･給付額がわかるもの。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="健康保険給付金支給額決定通知書【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>受給期間･受給金額がわかるもの。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="休業(補償)給付金支給額決定通知書【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>受給期間･受給金額がわかるもの。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <FormField label="施設に入所していることが確認できる証明書【原本】">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <Text>※申請者本人が準備</Text>
                        </FormFieldRow>
                      </FormField>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="送金証明【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              直近3ヵ月分の送金証明（銀行や郵便局の振込票等）
                              <br />
                              手渡し、振込人と受取人が確認できないものは認められません。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <div className="o-form-nobottom">
                        <FormField label="あなた以外の扶養義務者の給与明細【写し】">
                          <FormFieldRow columnSize="12" columnSizePC="12">
                            <Text>
                              直近3ヵ月分の給与明細【写し】
                              <br />
                              休職中の場合は休職前3ヵ月の給与明細【写し】
                              <br />
                              または手当金の支給決定通知書【写し】
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormFieldRow>
                        </FormField>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①あなた以外の扶養義務者の確定申告書【写し】</span>
                      <br />
                      <span className="m-form-field__label">②あなた以外の扶養義務者の収支内訳書【写し】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>①と②の両方を提出してください。</Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                    <InfoTableNone>
                      <span className="m-form-field__label">①あなた以外の扶養義務者の年金振込通知書【写し】</span>
                      <br />
                      <span className="m-form-field__label">②あなた以外の扶養義務者の(非)課税証明書【原本】</span>
                      <div className="o-form-nolable">
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <FormField label="">
                            <Text>
                              ①と②の両方を提出してください。
                              <br />
                              ①は今後の年金額がわかるもの。
                            </Text>
                            <Text>※申請者本人が準備</Text>
                          </FormField>
                        </FormFieldRow>
                      </div>
                    </InfoTableNone>
                    <br />
                  </div>
                  <div>c</div>
                </TabsLong>
              </div>
            </div>
          </>
        </Modal>
        {/* 今後の手続き_PC_イオン健保*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input3"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-button-over1">
                前へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <Text>
                本申請は、書類送付により申請受付となります。
                <br />
                今後の手続きについて、以下のとおり案内いたします。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　イオン健保　　</span>
              </TextPlaceholder>
              <br />
              <br />
              <ApprovalStatusList>
                <ApprovalStatusItem done time="" title="変更申請">
                  帳票作成のために、対象となる被扶養者の情報を入力します。
                </ApprovalStatusItem>
                <ApprovalStatusItem done time="" title="書類ダウンロード">
                  作成された書類やフォーマットをダウンロードし、必要に応じて記入、署名･押印をしてください。
                  <br />
                  申請者ご自身で準備が必要な書類のご準備をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類記入">
                  作成された書類に、必要に応じて署名･押印をしてください。
                  <br />
                  またダウンロードしたフォーマットは、別途内容の記載をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="必要書類準備">
                  申請者の状況に応じた必要添付書類を準備してください。
                  <br />
                  必要添付書類は｢書類ダウンロード画面｣、または｢チェックリスト兼送付票｣に記載されています。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類送付">
                  必要書類を揃え、｢チェックリスト兼送付票｣でチェックをします。
                  <br />
                  重要書類送達票にて、以下まで送付してください。
                  <br />
                  <span className="m-form-field__label"> 送付先</span>
                  <br />
                  本人 ⇒ イオンアイビスBS業務部 社会保険担当
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="健康保険組合の審査">
                  必要な書類が揃ってから、イオン健康保険組合にて扶養の審査が行われます。
                  <br />
                  不足書類や記入漏れがある場合、BS業務部やイオン健康保険組合より不備連絡が届きます。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="保険証交付">
                  社内メール（重要メール）で、BS業務部から各社人事部または所属添付･部署宛にお送りいたします。
                </ApprovalStatusItem>
              </ApprovalStatusList>
              <br />
              <div className="o-form-padding">
                <ul>
                  <li>書類が揃ってから保険証の交付まで、約2週間を目安にしてください。</li>
                  <li>
                    認定された場合の被扶養者としての資格取得日について。
                    <br />
                    事由発生日（希望日）から14日以内に健康保険組合に届出のあったときは事由発生日、
                    <br />
                    15日以降に届出のあったときは届出書の受付日となります。
                  </li>
                  <li>
                    本人の取得に伴う扶養追加･出生の場合は、
                    <br />
                    事由発生日から2ヵ月以内に健康保険組合に到着する必要があります。
                  </li>
                  <li>ご質問はヘルプデスク 0800-919-0451 にお問い合わせください。</li>
                </ul>
              </div>
              <br />
            </div>
          </>
        </Modal>
        {/* 今後の手続き_PC_ダイエー健保*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input4"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-button-over2">
                前へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (変更申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <Text>
                本申請は、書類送付により申請受付となります。
                <br />
                今後の手続きについて、以下のとおり案内いたします。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　ダイエー健保　　</span>
              </TextPlaceholder>
              <br />
              <br />
              <ApprovalStatusList>
                <ApprovalStatusItem done time="" title="変更申請">
                  帳票作成のために、対象となる被扶養者の情報を入力します。
                </ApprovalStatusItem>
                <ApprovalStatusItem done time="" title="書類ダウンロード">
                  作成された書類やフォーマットをダウンロードし、必要に応じて記入、署名･押印をしてください。
                  <br />
                  申請者ご自身で準備が必要な書類のご準備をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類記入">
                  作成された書類に、必要に応じて署名･押印をしてください。
                  <br />
                  またダウンロードしたフォーマットは、別途内容の記載をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="必要書類準備">
                  申請者の状況に応じた必要添付書類を準備してください。
                  <br />
                  必要添付書類は｢書類ダウンロード画面｣、または｢チェックリスト兼送付票｣に記載されています。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類送付">
                  必要書類を揃え、｢チェックリスト兼送付票｣でチェックをします。 以下まで送付してください。
                  <br />
                  <span className="m-form-field__label"> 送付先</span>
                  <br />
                  本人 ⇒ ダイエー人事事務センター 社会保険担当宛　KT2003-2444-002
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="健康保険組合の審査">
                  必要な書類が揃ってから、ダイエー健康保険組合にて扶養の審査が行われます。
                  <br />
                  不足書類や記入漏れがある場合、ダイエー健康保険組合より不備連絡が届きます。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="保険証交付">
                  ダイエー健康保険組合から各社人事部または所属添付･部署宛にお送りいたします。
                </ApprovalStatusItem>
              </ApprovalStatusList>
              <br />
              <div className="o-form-padding">
                <ul>
                  <li>
                    送付先を誤ると、書類の紛失、手続きの遅れが発生し、ご本人に多大なご迷惑をおかけするため
                    <br />
                    それぞれの送付先を確認し、店より責任をもって確実に送付お願いいたします。
                  </li>
                </ul>
              </div>
              <br />
            </div>
          </>
        </Modal>
        {/* 今後の手続き_PC_協会けんぽ*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input5"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" id="input-button-over3">
                前へ
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
              <Text>
                本申請は、書類送付により申請受付となります。
                <br />
                今後の手続きについて、以下のとおり案内いたします。
              </Text>
              <TextPlaceholder code="%%7892%%" dataId={1}>
                <span className="m-form-field__label">　　協会けんぽ　　</span>
              </TextPlaceholder>
              <br />
              <br />
              <ApprovalStatusList>
                <ApprovalStatusItem done time="" title="変更申請">
                  帳票作成のために、対象となる被扶養者の情報を入力します。
                </ApprovalStatusItem>
                <ApprovalStatusItem done time="" title="書類ダウンロード">
                  作成された書類やフォーマットをダウンロードし、必要に応じて記入、署名･押印をしてください。
                  <br />
                  申請者ご自身で準備が必要な書類のご準備をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類記入">
                  作成された書類に、必要に応じて署名･押印をしてください。
                  <br />
                  またダウンロードしたフォーマットは、別途内容の記載をお願いします。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="必要書類準備">
                  申請者の状況に応じた必要添付書類を準備してください。
                  <br />
                  必要添付書類は｢書類ダウンロード画面｣、または｢チェックリスト兼送付票｣に記載されています。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="申請書類送付">
                  必要書類を揃え、｢チェックリスト兼送付票｣でチェックをします。
                  <br />
                  以下まで送付してください。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="健康保険組合の審査">
                  必要な書類が揃ってから、イオン健康保険組合にて扶養の審査が行われます。
                  <br />
                  不足書類や記入漏れがある場合、BS業務部やイオン健康保険組合より不備連絡が届きます。
                </ApprovalStatusItem>
                <ApprovalStatusItem time="" title="保険証交付">
                  社内メール（重要メール）で、BS業務部から各社人事部または所属添付･部署宛にお送りいたします。
                </ApprovalStatusItem>
              </ApprovalStatusList>
              <br />
            </div>
          </>
        </Modal>
      </Whole>
      {/* メッセージModal */}
      <Modal
        id="msg-modal0"
        title="　"
        footer={
          <>
            <Button modifiers="primary" type="button">
              はい
            </Button>
          </>
        }
        modifiers="dialog"
      >
        <Text>変更できる被扶養者が登録されていません。</Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
