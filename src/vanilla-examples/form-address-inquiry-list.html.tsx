/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { renderVanillaExample } from './render';
import { InternalButtonLink2 } from 'design/components/atoms/internal-buttonlink';
import { CreateButton } from 'design/components/atoms/create-button';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { InternalButtonLink } from 'design/components/atoms/internal-buttonlink';
import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { ApprovalStep } from 'design/components/atoms/approval-step';
import { Whole } from 'design/components/organisms/whole';
import { ApprovalStatusList } from 'design/components/molecules/approval-status-list';
import { ApprovalStatusItem } from 'design/components/atoms/approval-status-item';
import { SearchCurrentFilters2 } from 'design/components/molecules/search-current-filters';
import { Tag } from 'design/components/atoms/tag';
import { Button } from 'design/components/atoms/button';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Modal } from 'design/components/organisms/modal';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { Heading } from 'design/components/atoms/heading';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Icon } from 'design/components/atoms/icon';

const SettingListPage: React.FC = () => (
  <html>
    <title>住所届照会一覧</title>
    <body>
      <Whole navigation={<SettingHeader></SettingHeader>}>
        <Heading tag="h1">住所届照会一覧</Heading>

        <Section noPadding={true}>
          <PageHeading
            title=""
            actions={
              <>
                <CreateButton id="csv">CSV出力</CreateButton>
                <SearchButton inline id="input-form-search-button">
                  絞り込み
                </SearchButton>
              </>
            }
          />
        </Section>
        <Section noPadding={true} className="p-data-table-holder">
          <SearchCurrentFilters2 onClearClick={() => { }} dateFilterStart="" dateFilterEnd="">
            <Tag modifiers="filled">申請日：2021/03/01-2021/03/03</Tag>
          </SearchCurrentFilters2>
          <br />
          <DataTable
            id="setting-list-data-table"
            contents={[
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '未処理',
                },

              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '未処理',
                },
              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '未処理',
                },
              ],
            ]}
            headers={[
              {
                type: 'id',
                value: (
                  <button className="m-accordion__label">
                    申請番号
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '170px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    社員番号
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    氏名
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '110px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    会社
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '150px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    所属
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '150px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    チーム名
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '150px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    入居年月日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '120px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    申請日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '120px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    処理区分
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '110px',
              },


            ]}
          />
          <Pagination length={10} currentIndex={1} />
        </Section>
        {/* 絞り込み検索Modal */}
        <Modal
          id="setting-search-modal"
          modalSize="medium"
          title="絞り込み検索"
          footer={
            <>
              <Button modifiers="third" size="huge" type="button">
                クリア
              </Button>
              <Button modifiers="primary" size="huge" type="button" id="search">
                検索
              </Button>
            </>
          }
        >
          <Section className="p-setting-input-form__body">
            <FormFieldRow columnSize="12" columnSizePC="6">

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="会社コード">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="会社名称">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="所属コード">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="所属名">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="処理区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="入居年月日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="社員番号">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="従業員区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="実額区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="住居区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="広さ">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="転勤区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>






            </FormFieldRow>

          </Section>
        </Modal>

        {/* 確認済みメッセージModal */}
        <Modal
          id="msg-modal"
          title="　"
          footer={
            <>
              <Button modifiers="third" type="button">
                キャンセル
              </Button>
              <Button modifiers="primary" type="button">
                OK
              </Button>
            </>
          }
          modifiers="dialog"
        >
          <Text align="center">確認済みにしてよろしいでしょうか。</Text>
        </Modal>

        {/* 詳しい確認状況Modal */}
        <Modal
          id="msg-modal-detailed"
          title="確認状況"
          footer={
            <>
              {/* <Button modifiers="third" type="button">
                キャンセル
              </Button>
              <Button modifiers="primary" type="button">
                OK
              </Button> */}
            </>
          }
          modifiers="dialog"
          modalSize="medium"

        >
          {/* <Section className="p-setting-input-form__body"> */}
          <Section modifiers="border">
            <FormFieldRow columnSize="12" columnSizePC="6">
              <FormField label="状態">
                <Text>未確認</Text>
              </FormField>
              <FormField label="確認日時">
                <Text>2021/09/01 15:31</Text>
              </FormField>
            </FormFieldRow>

            {/* 確認者情報 */}
            <FormField label="確認者情報">
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>代理　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0092</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="人事所属コード">
                  <span>123345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名">
                  <span>ヘルプ運用G</span>
                </InfoTableCell>
              </InfoTable>
            </FormField>

            <FormField label="確認コメント">
              <Text>添付資料確認完了しました。</Text>
            </FormField>
          </Section>

        </Modal>


        {/* 確認コメント追記Modal */}
        <Modal
          id="msg-modal-linkcheck"
          title="　"
          footer={
            <>
              <Button modifiers="third" type="button">
                いいえ
              </Button>
              <Button modifiers="primary" type="button">
                はい
              </Button>
            </>
          }
          modifiers="dialog"
        >
          <Text align="left">確認コメントを記載してください</Text>
          <FormField label="確認コメント" className="p-setting-input-form__form-field">
            <FormFieldRow columnSize="12" columnSizePC="12">
              <TextField tag="textarea" type="text" rows="6"
                value="" />
            </FormFieldRow>
          </FormField>
        </Modal>


        {/* 確認済みModal */}
        <Modal
          id="msg-modal-linkcheckzumi"
          title="　"
          footer={
            <>
              <Button modifiers="third" type="button">
                いいえ
              </Button>
              <Button modifiers="primary" type="button">
                はい
              </Button>
            </>
          }
          modifiers="dialog"
        >
          <Text align="left">確認済みにしてよろしいでしょうか。</Text>
          <FormField label="確認コメント" className="p-setting-input-form__form-field">
            <FormFieldRow columnSize="12" columnSizePC="12">
              <TextField tag="textarea" type="text" rows="6"
                value="" />
            </FormFieldRow>
          </FormField>
        </Modal>

        {/* 詳細画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" type="button">
                戻る
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">


                <Heading tag="h1">住所届照会詳細</Heading>

                <Heading tag="h2">承認状況</Heading>
                <FormField label="自動承認">
                  <ApprovalWorkflow>
                    <ApprovalStep name="山田太郎" modifiers="auto" requesterNew isDone />
                    <ApprovalStep name="自動承認済み" modifiers="auto" isDone />

                  </ApprovalWorkflow>
                </FormField>
                <InternalButtonLink icon="link" className="m-form-field a-text--align-left m-accordion__label" id="detailed1" >
                  詳しく見る
                </InternalButtonLink>


                <Heading tag="h3">社員情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="社員番号">
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
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>92962</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>習志野支店</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員区分">
                      <span>社員</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="">
                      <span></span>
                    </InfoTableCell>
                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">共通情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="婚姻区分">
                      <span>既婚</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入居年月日">
                      <span>2021/09/01</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="変更の理由">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="理由記入欄">
                      <span>会社都合のため。</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="変更後の状況">
                      <span>経済的援助なし単身赴任</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社宅費・住宅助成金を申請す
る住居ついて">
                      <span>家族住居</span>
                    </InfoTableCell>


                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">現住所情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="変更有無区分">
                      <span>変更あり</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="郵便番号">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="市区町村コード">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区(カナ)">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地(カナ)">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号(カナ)">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="電話番号">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="携帯電話">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分記入欄">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="">
                      <span></span>
                    </InfoTableCell>
                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">家族住所情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="変更有無区分">
                      <span>変更あり</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="現住所選択">
                      <span>本人住所と別</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="郵便番号">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="市区町村コード">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区(カナ)">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地(カナ)">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号(カナ)">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="電話番号">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="携帯電話">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分記入欄">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">社宅・住宅助成金（現住居）確認情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>自己賃貸</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="勤務地">
                      <span>人事G</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="広さ">
                      <span>2DK</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="世帯主">
                      <span>世帯主</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="同居している所得税扶養者人数">
                      <span>0 人</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="婚姻区分（扶養家族関連）">
                      <span>独身</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="原籍会社以外から住宅助成金を受けていますか">
                      <span>受けていない</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住宅助成金">
                      <span>37,500 円</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社宅費">
                      <span>0 円</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="ファイルアップロード">
                      <InternalButtonLink icon="unit-download" id="linkcheck" >
                        ファイル名称２.pdf
                      </InternalButtonLink>
                    </InfoTableCell>


                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">社宅・住宅助成金（家族住居）確認情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>自己賃貸</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="広さ">
                      <span>2DK</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="世帯主">
                      <span>世帯主</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="同居している所得税扶養者人数">
                      <span>0 人</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="原籍会社以外から住宅助成金を受けていますか">
                      <span>受けていない</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住宅助成金">
                      <span>37,500 円</span>
                    </InfoTableCell>

                    <InfoTableCell modifiers="pair" label="社宅費">
                      <span>0 円</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="">
                      <span></span>
                    </InfoTableCell>

                  </InfoTable>
                </FormFieldRow>
                <br />


                <Heading tag="h3">帰省先(緊急連絡先)住所情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="変更有無区分">
                      <span>変更あり</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="現住所選択">
                      <span>本人住所と別</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="郵便番号">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="市区町村コード">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区(カナ)">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地(カナ)">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号(カナ)">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="電話番号">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="携帯電話">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分記入欄">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </FormFieldRow>
                <br />

                <Heading tag="h3">住民票住所情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">

                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="変更有無区分">
                      <span>変更あり</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="現住所選択">
                      <span>本人住所と別</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="郵便番号">
                      <span>261-0022</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="市区町村コード">
                      <span>123456</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区">
                      <span>千葉県千葉市美浜区</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="都道府県・市郡区(カナ)">
                      <span>チバケンチバシミハマク</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地">
                      <span>美浜１－１－１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="町村・番地(カナ)">
                      <span>ミハマイチノイチノイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                      <span>美浜１１１１</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="建物名・部屋番号(カナ)">
                      <span>ミハマイチイチイチイチ</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="電話番号">
                      <span>03-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="携帯電話">
                      <span>090-1234-5678</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分">
                      <span>その他</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="住居区分記入欄">
                      <span>あああああああああああああああああああああああああああああああああああああああああ
                        いいいいいい</span>
                    </InfoTableCell>

                  </InfoTable>
                </FormFieldRow>
                <br />
              </Section>
            </div>
          </>
        </Modal>
        <Modal id="modal-approval-detail" title="承認の状況">
          <ApprovalStatusList>
            <ApprovalStatusItem title="申請完了" time="2021/01/25 13:00" requester done>
              山田太郎
            </ApprovalStatusItem>
            <ApprovalStatusItem title="未完了" time="2021/01/25 13:00">
              上野 透
            </ApprovalStatusItem>
          </ApprovalStatusList>
        </Modal>

      </Whole>
    </body>
  </html >
);
export default renderVanillaExample(<SettingListPage />);
