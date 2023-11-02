import React from 'react';
import { renderVanillaExample } from './render';

import { AddItemButton } from 'design/components/atoms/add-item-button';
import { Alert } from 'design/components/atoms/alert';
import { CaptionList } from 'design/components/atoms/caption-list';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Heading } from 'design/components/atoms/heading';
import { ModalOpener } from 'design/components/atoms/modal-opener';
import { NavItem } from 'design/components/atoms/nav-item';
import { RequestInfo } from 'design/components/molecules/request-info';
import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { Section } from 'design/components/molecules/section';
import { Text } from 'design/components/atoms/text';
import { Toast } from 'design/components/atoms/toast';
import { UploadField } from 'design/components/atoms/upload-field';
import { SearchBar } from 'design/components/molecules/search-bar';
import { ExpenseRecordInput } from 'design/components/molecules/expense-record-input';
import { VisitRecordInput } from 'design/components/molecules/visit-record-input';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field';
import { Radio } from 'design/components/atoms/radio/index';
import { Tag } from 'design/components/atoms/tag/index';
import { NoticeInfoList } from 'design/components/molecules/notice-info-list';
import { NoticeInfo } from 'design/components/atoms/notice-info';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Modal } from 'design/components/organisms/modal';
import { Whole } from 'design/components/organisms/whole';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { AddressSearchField } from 'design/components/atoms/address-search-field';
import { InternalLink } from 'design/components/atoms/internal-link';
import { Accordion } from 'design/components/molecules/accordion';
import { VisitRecordList } from 'design/components/organisms/visit-record-list';
import { Button } from 'design/components/atoms/button';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { QuotaInfo, QuoteText } from 'design/components/atoms/quota-info';
import { Price } from 'design/components/atoms/price';
import { PriceTable, PriceTableItem, PriceTableItemDetail } from 'design/components/molecules/price-table';
import { UploadList, UploadListItem } from 'design/components/molecules/upload-list';
import { ExpenseRecordList } from 'design/components/organisms/expense-record-list';
import { RecipientInput } from 'design/components/molecules/recipient-input';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Pagination } from 'design/components/atoms/pagination';
import { TableActionButton } from 'design/components/atoms/table-action-button';
import { EmailTemplateEditor } from 'design/components/atoms/email-template-editor';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { ContentCellProps, DataTable, HeaderCellProps } from 'design/components/molecules/data-table';
import { SearchCurrentFilters } from 'design/components/molecules/search-current-filters';
import { ButtonContainer } from 'design/components/molecules/button-container';

const tableHeaders: Array<HeaderCellProps> = [
  {
    type: 'id',
    value: 'ID',
  },
  {
    value: '管理用タイトル',
  },
  {
    value: '送信状況',
  },
  {
    value: '送信タイミング',
  },
  {
    value: '送信先',
  },
  {
    value: '更新日時',
    minWidth: '200px',
  },
  {
    type: 'action',
    value: '',
  },
];
const tableContents: Array<Array<ContentCellProps>> = [
  [
    {
      value: '1',
    },
    {
      value: '弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: '弔事連絡の',
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '2',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: '弔事連絡の',
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '3',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: '弔事連絡の',
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '4',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: '弔事連絡の',
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '5',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: '弔事連絡の',
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
];

const SamplePage: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                <NavItem icon="news" label="お知らせ" href="#"></NavItem>
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
              </>
            }
            shortcuts={
              <>
                <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
                <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
              </>
            }
          >
            <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
            <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
            <NavItem icon="labor-menu" label="労務メニュー">
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <Alert id="alert-comp" requestCount={4} />
        <Section noPadding={true}>
          <Heading>弔事の連絡</Heading>
          <Section modifiers="fill-white">
            <Text>
              香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
            </Text>
            <CaptionList>
              <li>
                供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
              </li>
            </CaptionList>
          </Section>
        </Section>
        <Section>
          <RequestInfoList>
            <RequestInfo status={'approval'} title={'弔事の連絡（代理）'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'in-progress'} title={'外出・出張の報告'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'approval'} title={'弔事の連絡（代理）'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'in-progress'} title={'外出・出張の報告'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'}>
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
          </RequestInfoList>
        </Section>
        <Section>
          <RequestInfoList id="req-list-buttons">
            <RequestInfo
              status="approval"
              title={'弔事の連絡（代理）'}
              buttons={
                <>
                  <Button modifiers="third" className="denial-btn">
                    否認
                  </Button>
                  <Button modifiers="secondary" className="remand-btn">
                    差戻し
                  </Button>
                  <Button modifiers="primary" className="approval-btn">
                    承認
                  </Button>
                </>
              }
            >
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
            <RequestInfo
              modifiers="with-duplicate"
              status="approval"
              title={'弔事の連絡（代理）'}
              buttons={
                <>
                  <Button modifiers="text" className="copy-btn">
                    コピーして作成する
                  </Button>
                </>
              }
            >
              <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
              <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
              <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
            </RequestInfo>
          </RequestInfoList>
        </Section>
        <Section>
          <NoticeInfoList>
            <NoticeInfo key={1} date="2021/02/20" modifiers="unread">
              福島県沖で発生した地震による店舗の営業状況について
            </NoticeInfo>
            <NoticeInfo key={2} date="2021/02/11">
              エスカレーターでの危険行為におけるお詫びと対応について
            </NoticeInfo>
            <NoticeInfo key={3} date="2021/01/25">
              お問い合わせフォームへの社外の第三者によるアクセスについて
            </NoticeInfo>
            <NoticeInfo key={4} date="2020/12/28">
              トップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品のトップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品の
            </NoticeInfo>
            <NoticeInfo key={5} date="2020/12/22">
              山陽マルナカ　公正取引委員会に対する訴訟の件
            </NoticeInfo>
          </NoticeInfoList>
        </Section>
        <Section>
          <CalendarField defaultValue={new Date(2022, 3, 27)} />
        </Section>
        <Section>
          <Pulldown placeholder="選択してください。" name="something">
            <option value="create_new">新規作成</option>
            <option value="reapply">修正後再申請</option>
            <option value="arrangement_completed">手配完了</option>
            <option value="unable_to_arrange">手配不能</option>
            <option value="pull_back">引き戻し</option>
            <option value="remand">差し戻し</option>
            <option value="cancel">取り消し</option>
            <option value="approval">承認</option>
            <option value="denial">否認</option>
          </Pulldown>
        </Section>
        <Section>
          <a href="javascript:void(0);" id="show-toast-btn">
            Show Toast
          </a>
          <Toast id="toast-1">弔事連絡の申請が完了しました。</Toast>
        </Section>
        <Section>
          <UploadField description="形式：jpg / png | サイズ：30MBまで　">
            ここにファイルをドラッグ
            <br />
            または
          </UploadField>
        </Section>
        <Section>
          <AddItemButton>訪問先を追加する</AddItemButton>
        </Section>
        <Section>
          <ModalOpener id="modal-opener">慶弔に関する規定</ModalOpener>
        </Section>
        <Section>
          <VisitRecordInput id="visit-record-input-comp" title="訪問先 1">
            <FormField label="訪問先">
              <TextField type="text" name="companyName" placeholder="会社名、事務所名、店舗名など" />
            </FormField>
            <FormField label="用件">
              <TextField type="text" name="companyName" placeholder="業務、社外教育、社内教育など" />
            </FormField>
          </VisitRecordInput>
        </Section>
        <Section>
          <ExpenseRecordInput
            id="expense-record-input-comp"
            title="明細 1"
            link={
              <InternalLink href="#" icon="link">
                「駅すぱあと」で交通費を調べる
              </InternalLink>
            }
          >
            <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
              <Radio name="cost" defaultChecked={true} value="generalTransportation">
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
          </ExpenseRecordInput>
        </Section>
        <Section>
          <SearchBar id="search-bar-comp" defaultValue="結婚" />
        </Section>
        <Section>
          <AddressSearchField
            id="address-search-field"
            inputProps={{
              defaultValue: '107-0052',
            }}
            buttonProps={{
              type: 'button',
            }}
          />
        </Section>
        <Section>
          <Accordion label="確認する">
            疑やろぱゃ学施介アユクヌ属8続ヱ羅特っ高対サタノテ決長ラウロテ回今台びばのね北済てぼゅ髄発ハアメ止流ヌ万信橋大全よぽ。化ロマ希由レ丸遣ヱルトク中著冒ワタヒト提飾ッぎれ務権いぜ氏環訪かくで登4一足ほねちだ後表ごむざく報岡シルク場第ざい当仙ラあり観国こびずそ元給イワミ渡見化愛請ぱー。監児でも福際ヌウオ会旋断姫かフるろ村海セコナ版箱輸せラおし対監そろっ経8面コ提抜ヱル逆6縮けっね慎戒妻熊習らか。
          </Accordion>
        </Section>
        <Section>
          <VisitRecordList
            id="visit-record-list-comp"
            templateInput={
              <>
                <FormField label="訪問先">
                  <TextField type="text" name="companyName" placeholder="会社名、事務所名、店舗名など" />
                </FormField>
                <FormField label="用件">
                  <TextField type="text" name="requirement" placeholder="業務、社外教育、社内教育など" />
                </FormField>
              </>
            }
          >
            <>
              <FormField label="訪問先">
                <TextField type="text" name="companyName1" placeholder="会社名、事務所名、店舗名など" />
              </FormField>
              <FormField label="用件">
                <TextField type="text" name="requirement1" placeholder="業務、社外教育、社内教育など" />
              </FormField>
            </>
            <>
              <FormField label="訪問先">
                <TextField type="text" name="companyName2" placeholder="会社名、事務所名、店舗名など" />
              </FormField>
              <FormField label="用件">
                <TextField type="text" name="requirement2" placeholder="業務、社外教育、社内教育など" />
              </FormField>
            </>
          </VisitRecordList>
        </Section>
        <Section>
          <DateRangeField id="date-range" />
        </Section>
        <Section>
          <InfoTable header="差出人情報">
            <InfoTableCell>
              <p style={{ marginBottom: '13px' }}>
                イオンアイビス(株) <br />
                社長　佐藤一郎
              </p>
              <QuotaInfo>
                <QuoteText label="供花" value="1" unit="基" />
                <QuoteText label="弔電" value="1" unit="通" />
              </QuotaInfo>
            </InfoTableCell>
            <InfoTableCell>
              <p style={{ marginBottom: '13px' }}>
                イオンアイビス(株) <br />
                社長　佐藤一郎
              </p>
              <QuotaInfo>
                <QuoteText label="供花" value="1" unit="基" />
                <QuoteText label="弔電" value="1" unit="通" />
              </QuotaInfo>
            </InfoTableCell>
          </InfoTable>
        </Section>
        <Section>
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
        </Section>
        <Section>
          <InfoTable modifiers="no-border-header">
            <InfoTableCell modifiers="pair" label="イオンアイビス(株)">
              <span>01234567</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="氏名">
              <span>山田　太郎</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="氏名（カナ）">
              <span>ヤマダ　タロウ</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="会社名称">
              <span>イオンアイビス株式会社</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="正式組織名・上">
              <span>BS業務部</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="正式組織名・下">
              <span>BS業務課</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="社員区分">
              <span>区分A</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="職位">
              <span>課長</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="組合区分">
              <span>組合員</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="グッドライフ区分">
              <span>加入あり</span>
            </InfoTableCell>
          </InfoTable>
        </Section>
        <Section>
          <ExpenseRecordList
            radioName="ext-cost"
            link={
              <InternalLink href="#" icon="link">
                「駅すぱあと」で交通費を調べる
              </InternalLink>
            }
            templateInput={
              <FormField label="費用の種類" labelAddons={<Tag>必須</Tag>}>
                <Radio defaultChecked={true} value="generalTransportation">
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
              <Radio name="cost" defaultChecked={true} value="generalTransportation">
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
          <RecipientInput templateInput={<TextField type="email" />}>
            <TextField type="email" defaultValue="dummy@aeon.co.jp" />
            <TextField type="email" defaultValue="dummy@aeon.co.jp" />
          </RecipientInput>
        </Section>
        <Modal id="modal-comp" headerIcon="help" title="香料・供花・弔電とは？">
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
        <Section>
          <UploadList label="アップロード済みファイル">
            <UploadListItem fileSize="32.4KB">meibo.csv</UploadListItem>
          </UploadList>
        </Section>
        <Section>
          <Pagination length={20} currentIndex={7} />
        </Section>
        <Section>
          <TableActionButton>
            <NavItem href="#" label="編集する" subnav />
            <NavItem href="#" label="稼働を再開する" subnav />
            <NavItem href="#" label="コピーする" subnav />
            <NavItem href="#" label="削除する" subnav />
          </TableActionButton>
        </Section>
        <Section>
          <div
            style={{
              background: '#fff',
              padding: '20px',
            }}
          >
            <EmailTemplateEditor>
              <p>
                <TextPlaceholder dataId={2} code="%%7892%%">
                  申請者 氏名（姓）
                </TextPlaceholder>
                <TextPlaceholder dataId={3} code="%%7892%%">
                  申請者 氏名（名）
                </TextPlaceholder>
                &nbsp;様
              </p>
              <p>
                <br />
              </p>
              <p>この度はお悔やみを申し上げます。</p>
              <p>下記内容で弔事連絡を受け付けました。</p>
              <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
              <p>
                供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
              </p>
              <p>
                <br />
              </p>
              <p>この度はお悔やみを申し上げます。</p>
              <p>下記内容で弔事連絡を受け付けました。</p>
              <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
              <p>
                供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
              </p>
              <p>
                <br />
              </p>
              <p>【申請内容】</p>
              <p>亡くなられた方の情報</p>
              <p>
                <br />
              </p>
              <p>
                お名前：
                <TextPlaceholder dataId={4} code="%%7892%%">
                  亡くなられた方の氏名（姓）
                </TextPlaceholder>
                <TextPlaceholder dataId={5} code="%%7892%%">
                  亡くなられた方の氏名（名）
                </TextPlaceholder>
              </p>
              <p>
                <br />
              </p>
              <p>・</p>
              <p>・</p>
              <p>・</p>
              <p>・</p>
              <p>
                <br />
              </p>
              <p>お問い合わせはこちらまでご連絡ください。</p>
              <p>00-0000-0000</p>
              <p>
                <br />
              </p>
              <p>——</p>
              <p>
                <br />
              </p>
              <p>署名</p>
            </EmailTemplateEditor>
          </div>
        </Section>
        <Section>
          <DataTable headers={tableHeaders} contents={tableContents} />
        </Section>
        <Section>
          <SearchCurrentFilters id="search-current-filters" dateFilterStart="2021/02/10" dateFilterEnd="2021/02/11">
            <Tag key={1} modifiers="filled">
              北海道
            </Tag>
            <Tag key={2} modifiers="filled">
              吉田
            </Tag>
            <Tag key={3} modifiers="filled">
              吉
            </Tag>
            <Tag key={4} modifiers="filled">
              吉田の吉の吉の吉の
            </Tag>
            <Tag key={5} modifiers="filled">
              北海道
            </Tag>
            <Tag key={6} modifiers="filled">
              吉田
            </Tag>
            <Tag key={7} modifiers="filled">
              吉
            </Tag>
            <Tag key={8} modifiers="filled">
              吉田の吉の吉の吉の
            </Tag>
          </SearchCurrentFilters>
        </Section>
        <Section>
          <ButtonContainer modifiers="veritcal">
            <Button size="huge" modifiers="third">
              保存せずに終了
            </Button>
            <Button size="huge" modifiers="secondary">
              保存して終了
            </Button>
            <Button size="huge" modifiers="primary">
              確認
            </Button>
          </ButtonContainer>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SamplePage />);
