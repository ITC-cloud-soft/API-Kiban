import React from 'react';
import { renderVanillaExample } from './render';

import { Modal } from 'design/components/organisms/modal';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { HelpButton } from 'design/components/atoms/help-button';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { TextField } from 'design/components/atoms/text-field';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Radio } from 'design/components/atoms/radio';
import { Checkbox } from 'design/components/atoms/checkbox';
import { CaptionList } from 'design/components/atoms/caption-list';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { QuotaInfo, QuoteText } from 'design/components/atoms/quota-info';
import { Tag } from 'design/components/atoms/tag';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { InternalLink } from 'design/components/atoms/internal-link';
import { Price } from 'design/components/atoms/price';
import { UploadField } from 'design/components/atoms/upload-field';
import { ApprovalStep } from 'design/components/atoms/approval-step';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { Accordion } from 'design/components/molecules/accordion';
import { PriceTable, PriceTableItem, PriceTableItemDetail } from 'design/components/molecules/price-table';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { VisitRecordList } from 'design/components/organisms/visit-record-list';
import { ExpenseRecordList } from 'design/components/organisms/expense-record-list';
import { Section } from 'design/components/molecules/section';
import { Button } from 'design/components/atoms/button';

export const InputFormModal: React.FC = () => (
  <Modal
    modifiers="fullscreen"
    id="full-modal"
    footer={
      <>
        <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
          下書き保存
        </Button>
        <Button modifiers="primary" size="huge" id="input-form-check-button">
          検索
        </Button>
      </>
    }
  >
    <>
      <Section modifiers="border">
        <Heading tag="h1" className="p-page-title">
          弔事の連絡
        </Heading>
        <Text>
          このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
        </Text>
        <ModalOpener>慶弔に関する規定</ModalOpener>
        <Modal id="modal-help" headerIcon="help" title="香料・供花・弔電とは？">
          <Heading tag="h4">香料(こうりょう)とは</Heading>
          <Text>「御香料」は葬儀などで故人に対してお供えする金品のことです。</Text>
          <Heading tag="h4">供花(きょうか、くげ)とは</Heading>
          <Text>
            「供花」とは故人に供える花のことを指します。供花には死者の霊を慰めると同時に祭壇や会場を飾る意味があり、葬儀の際は、親族や親戚一同と書かれ祭壇の両側に置かれていることが一般的です。
          </Text>
          <Heading tag="h4">弔電とは</Heading>
          <Text>
            弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります弔電についての一般的な説明がここには入ります。
          </Text>
        </Modal>
      </Section>
      <Section modifiers="border">
        <HelpButton type="with-children" id="help-opener">
          を押すと項目の詳しい説明が表示されます。
        </HelpButton>
        <Heading tag="h3">社員情報</Heading>
        <Text>社員区分によって見舞金や慶弔休暇日数などの支給範囲が異なりますのでご確認ください。</Text>
        <Accordion label="確認する">
          <InfoTable modifiers="no-border-header">
            <InfoTableCell label="イオンアイビス(株)" modifiers="pair">
              <span>01234567</span>
            </InfoTableCell>
            <InfoTableCell label="氏名" modifiers="pair">
              <span>山田　太郎</span>
            </InfoTableCell>
            <InfoTableCell label="氏名（カナ）" modifiers="pair">
              <span>ヤマダ　タロウ</span>
            </InfoTableCell>
            <InfoTableCell label="会社名称" modifiers="pair">
              <span>イオンアイビス株式会社</span>
            </InfoTableCell>
            <InfoTableCell label="正式組織名・上" modifiers="pair">
              <span>BS業務部</span>
            </InfoTableCell>
            <InfoTableCell label="正式組織名・下" modifiers="pair">
              <span>BS業務課</span>
            </InfoTableCell>
            <InfoTableCell label="社員区分" modifiers="pair">
              <span>区分A</span>
            </InfoTableCell>
            <InfoTableCell label="職位" modifiers="pair">
              <span>課長</span>
            </InfoTableCell>
            <InfoTableCell label="組合区分" modifiers="pair">
              <span>組合員</span>
            </InfoTableCell>
            <InfoTableCell label="グッドライフ区分" modifiers="pair">
              <span>加入あり</span>
            </InfoTableCell>
          </InfoTable>
        </Accordion>
      </Section>
      <Section modifiers="border">
        <Heading tag="h3">連絡の取れる電話番号/メールアドレス</Heading>
        <Text>本連絡に関して弔事手配業者からの連絡先となります。</Text>
        <FormField label="電話番号">
          <TextField defaultValue="090-1234-5678" name="tel" type="tel" />
        </FormField>
        <FormField label="メールアドレス">
          <TextField defaultValue="dummy@aeon.co.jp" name="email" type="email" />
        </FormField>
      </Section>
      <Section modifiers="border">
        <Heading tag="h3">連絡の取れる電話番号/メールアドレス</Heading>
        <Text>本連絡に関して弔事手配業者からの連絡先となります。</Text>
        <FormFieldRow columnSize="6" columnSizePC="6">
          <FormField label="姓">
            <TextField defaultValue="山田" name="姓" type="text" />
          </FormField>
          <FormField label="名">
            <TextField defaultValue="佳子" name="名" type="text" />
          </FormField>
          <FormField label="姓（カナ）">
            <TextField defaultValue="ヤマダ" name="姓" type="text" />
          </FormField>
          <FormField label="名（カナ）">
            <TextField defaultValue="ヨシコ" name="名" type="text" />
          </FormField>
        </FormFieldRow>
        <FormFieldRow columnSize="12" columnSizePC="6">
          <FormField label="あなたから見た続柄">
            <Pulldown name="something" placeholder="選択してください。">
              <React.Fragment key=".0">
                <option value="create_new">新規作成</option>
                <option value="reapply">修正後再申請</option>
                <option value="arrangement_completed">手配完了</option>
                <option value="unable_to_arrange">手配不能</option>
                <option value="pull_back">引き戻し</option>
                <option value="remand">差し戻し</option>
                <option value="cancel">取り消し</option>
                <option value="approval">承認</option>
                <option value="denial">否認</option>
              </React.Fragment>
            </Pulldown>
          </FormField>
        </FormFieldRow>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <FormField label="同居/別居">
            <FormFieldRow columnSize="6" columnSizePC="6">
              <Radio defaultChecked modifiers="grey" name="living" value="together">
                通夜と告別式
              </Radio>
              <Radio modifiers="grey" name="living" value="separated">
                別居
              </Radio>
            </FormFieldRow>
          </FormField>
        </FormFieldRow>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <FormField label={<>扶養の状況</>} labelAddons={<HelpButton />}>
            <FormFieldRow columnSize="6" columnSizePC="6">
              <Radio defaultChecked modifiers="grey" name="living" value="together">
                通夜と告別式
              </Radio>
              <Radio modifiers="grey" name="living" value="separated">
                別居
              </Radio>
            </FormFieldRow>
          </FormField>
        </FormFieldRow>
        <FormFieldRow columnSize="12" columnSizePC="12">
          <FormField instruction="終了している場合は、なしを選択してください。" label="通夜/告別式の有無について">
            <FormFieldRow columnSize="6" columnSizePC="6">
              <Radio defaultChecked modifiers="grey" name="ceremony" value="1">
                通夜と告別式
              </Radio>
              <Radio modifiers="grey" name="ceremony" value="2">
                告別式のみ
              </Radio>
              <Radio modifiers="grey" name="ceremony" value="3">
                なし
              </Radio>
            </FormFieldRow>
          </FormField>
        </FormFieldRow>
        <Checkbox>一般参列を辞退する</Checkbox>
        <CaptionList>
          <React.Fragment key=".0">
            <li>
              供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
            </li>
          </React.Fragment>
        </CaptionList>
      </Section>
      <Section>
        <Heading tag="h3">通夜について</Heading>
        <FormField label="日付">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} />
          </FormFieldRow>
        </FormField>
        <FormField label="開始時刻">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <Pulldown name="something" placeholder="18:00">
              <React.Fragment key=".0">
                <option value="18">19:00</option>
                <option value="19">20:00</option>
              </React.Fragment>
            </Pulldown>
          </FormFieldRow>
        </FormField>
        <FormField label="郵便番号">
          <FormFieldRow columnSize="12" columnSizePC="6">
            <AddressSearchField
              buttonProps={{
                type: 'button',
              }}
              inputProps={{
                defaultValue: '107-0052',
              }}
            />
          </FormFieldRow>
        </FormField>

        <FormField label="都道府県・市区町村">
          <TextField defaultValue="東京都港区赤坂" name="名" type="text" />
        </FormField>
        <FormField label={<>扶養の状況</>} labelAddons={<HelpButton />}>
          <FormFieldRow columnSize="6" columnSizePC="6">
            <Radio defaultChecked modifiers="grey" name="living" value="together">
              通夜と告別式
            </Radio>
            <Radio modifiers="grey" name="living" value="separated">
              別居
            </Radio>
          </FormFieldRow>
        </FormField>
        <FormField label={<>扶養の</>} labelAddons={<HelpButton />}>
          <FormFieldRow columnSize="6" columnSizePC="6">
            <Radio defaultChecked modifiers="grey" name="living1" value="together1">
              通夜と告別式
            </Radio>
            <Radio modifiers="grey" name="living1" value="separated1">
              別居
            </Radio>
          </FormFieldRow>
        </FormField>
        <FormField label={<>扶</>} labelAddons={<HelpButton />}>
          <FormFieldRow columnSize="6" columnSizePC="6">
            <Radio defaultChecked modifiers="grey" name="living2" value="together2">
              通夜と告別式
            </Radio>
            <Radio modifiers="grey" name="living2" value="separated2">
              別居
            </Radio>
          </FormFieldRow>
        </FormField>
        <Text>供花・弔電の詳細は下記となります。</Text>
        <InfoTable header="差出人情報">
          <InfoTableCell>
            <p
              style={{
                marginBottom: '13px',
              }}
            >
              イオンアイビス(株) <br />
              社長　佐藤一郎
            </p>
            <QuotaInfo>
              <QuoteText label="供花" unit="基" value="1" />
              <QuoteText label="弔電" unit="通" value="1" />
            </QuotaInfo>
          </InfoTableCell>
          <InfoTableCell>
            <p
              style={{
                marginBottom: '13px',
              }}
            >
              イオンアイビス(株) <br />
              社長　佐藤一郎
            </p>
            <QuotaInfo>
              <QuoteText label="供花" unit="基" value="1" />
              <QuoteText label="弔電" unit="通" value="1" />
            </QuotaInfo>
          </InfoTableCell>
        </InfoTable>
        <br />
        <Heading tag="h4">後飾りのお届け先情報</Heading>
        <FormField label="訪問先" labelAddons={<Tag>必須</Tag>}>
          <Text>訪問先が複数ある場合は、「＋訪問先を追加する」を押して入力ください。</Text>
        </FormField>
        <VisitRecordList
          templateInput={
            <>
              <FormField label="訪問先">
                <TextField placeholder="会社名、事務所名、店舗名など" type="text" />
              </FormField>
              <FormField label="用件">
                <TextField placeholder="業務、社外教育、社内教育など" type="text" />
              </FormField>
            </>
          }
        >
          <React.Fragment key=".0">
            <FormField label="訪問先">
              <TextField placeholder="会社名、事務所名、店舗名など" type="text" />
            </FormField>
            <FormField label="用件">
              <TextField placeholder="業務、社外教育、社内教育など" type="text" />
            </FormField>
          </React.Fragment>
          <React.Fragment key=".1">
            <FormField label="訪問先">
              <TextField placeholder="会社名、事務所名、店舗名など" type="text" />
            </FormField>
            <FormField label="用件">
              <TextField placeholder="業務、社外教育、社内教育など" type="text" />
            </FormField>
          </React.Fragment>
        </VisitRecordList>
        <br />
        <FormField label="出張期間">
          <FormFieldRow columnSize="12" columnSizePC="12">
            <DateRangeField />
          </FormFieldRow>
        </FormField>
        <ExpenseRecordList
          link={
            <InternalLink href="#" icon="link">
              「駅すぱあと」で交通費を調べる
            </InternalLink>
          }
          templateInput={
            <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
              <Radio defaultChecked value="generalTransportation">
                一般交通機関 <small>(電車・バス・飛行機・船)</small>
              </Radio>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio value="taxi">タクシー</Radio>
                <Radio value="privateCar">私有車</Radio>
                <Radio value="companyCar">社有車</Radio>
                <Radio value="lodging">宿泊</Radio>
              </FormFieldRow>
            </FormField>
          }
        >
          <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
            <Radio defaultChecked name="cost" value="generalTransportation">
              一般交通機関 <small>(電車・バス・飛行機・船)</small>
            </Radio>
            <FormFieldRow columnSize="6" columnSizePC="6">
              <Radio name="cost" value="taxi">
                タクシー
              </Radio>
              <Radio name="cost" value="privateCar">
                私有車
              </Radio>
              <Radio name="cost" value="companyCar">
                社有車
              </Radio>
              <Radio name="cost" value="lodging">
                宿泊
              </Radio>
            </FormFieldRow>
          </FormField>
        </ExpenseRecordList>
        <br />
        <UploadField description="形式：jpg / png | サイズ：30MBまで">
          <React.Fragment key=".0">
            ここにファイルをドラッグ
            <br />
            または
          </React.Fragment>
        </UploadField>
        <br />
        <InfoTable modifiers="full-border">
          <InfoTableCell header="人出情">
            <PriceTable>
              <PriceTableItem label="合計" modifiers="total">
                <Price modifiers="total" unit="円">
                  79,310
                </Price>
              </PriceTableItem>
              <PriceTableItem label="内訳">
                <PriceTableItemDetail label="交通費">
                  <Price unit="円">65,310</Price>
                </PriceTableItemDetail>
                <PriceTableItemDetail label="宿泊費">
                  <Price unit="円">10,000</Price>
                </PriceTableItemDetail>
                <PriceTableItemDetail label="日　当">
                  <Price unit="円">4,000</Price>
                </PriceTableItemDetail>
              </PriceTableItem>
            </PriceTable>
          </InfoTableCell>
          <InfoTableCell header="人出情">
            <PriceTable>
              <PriceTableItem label="合計" modifiers="total">
                <Price modifiers="total" unit="円">
                  79,310
                </Price>
              </PriceTableItem>
              <PriceTableItem label="内訳">
                <PriceTableItemDetail label="交通費">
                  <Price unit="円">65,310</Price>
                </PriceTableItemDetail>
                <PriceTableItemDetail label="宿泊費">
                  <Price unit="円">10,000</Price>
                </PriceTableItemDetail>
                <PriceTableItemDetail label="日　当">
                  <Price unit="円">4,000</Price>
                </PriceTableItemDetail>
              </PriceTableItem>
            </PriceTable>
          </InfoTableCell>
        </InfoTable>
        <br />
        <InfoTable header="差出人情報">
          <ApprovalWorkflow>
            <ApprovalStep name="山田太郎" step={1} />
            <ApprovalStep name="佐藤二郎" step={2} />
          </ApprovalWorkflow>
        </InfoTable>
      </Section>
    </>
  </Modal>
);

export default renderVanillaExample(<InputFormModal />);
