/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { renderVanillaExample } from './render';
import { UploadList, UploadListItem } from 'design/components/molecules/upload-list';
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
    <title>本人情報変更照会一覧</title>
    <body>
      <Whole navigation={<SettingHeader></SettingHeader>}>
        <Heading tag="h1">本人情報変更照会一覧</Heading>

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
                  value: '誤登録修正',
                },
                {
                  value: '未',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '変更する',
                },
                {
                  value: '変更しない',
                },
                {
                  value: '2021/07/01',
                },
              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '誤登録修正',
                },
                {
                  value: '未',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '変更する',
                },
                {
                  value: '変更しない',
                },
                {
                  value: '2021/07/01',
                },
              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '誤登録修正',
                },
                {
                  value: '未',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '0200287',
                },
                {
                  value: '開発　花子',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '変更する',
                },
                {
                  value: '変更しない',
                },
                {
                  value: '2021/07/01',
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
                    申請理由区分
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    確認状態
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    会社
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '230px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    人事所属
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '180px',
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
                minWidth: '150px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    申請日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '140px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    異動日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '150px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    税表区分変更
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '100px',
              },
              {
                value: (
                  <button type="button" className="m-accordion__label">
                    障害区分変更
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    口座変更日
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
                <FormField label="修正理由区分">
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
                <FormField label="確認状態">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">未</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
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
                <FormField label="社員番号">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="氏名">
                  <TextField name="name" type="text" />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="申請日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="移動日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>
              {/* <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="税表区分変更">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow> */}
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="変更前税表区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
                <FormField label="変更後税表区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="変更前ひとり親">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
                <FormField label="変更後ひとり親">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="変更前勤労学生区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
                <FormField label="変更後勤労学生区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow>

              {/* <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="障害区分変更">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
              </FormFieldRow> */}

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="変更前障害区分">
                  <Pulldown name="something" placeholder="">
                    <React.Fragment key=".0">
                      <option value="create_new">テスト1</option>
                      <option value="reapply">テスト2</option>
                      <option value="arrangement_completed">テスト3</option>
                    </React.Fragment>
                  </Pulldown>
                </FormField>
                <FormField label="変更後障害区分">
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
                <FormField label="口座変更日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>

            </FormFieldRow>
            {/* <FormFieldRow columnSize="12" columnSizePC="12">
              <FormField label="備考">
                <TextField name="name" type="text" />
              </FormField>
            </FormFieldRow> */}
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
          hasBackButton={true}
        // footer={
        //   <>
        //     <Button modifiers="primary" size="huge" id="input-form-confirm-button">
        //       確認
        //     </Button>
        //   </>
        // }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">


                <Heading tag="h1">本人情報変更詳細画面</Heading>

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


                {/* 確認状態区域 */}
                <Heading tag="h3">確認状況</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="状態">
                    <Text>未確認</Text>
                  </FormField>
                  <FormField >
                    <InternalButtonLink icon="edit_link" id="linkcheck" >
                      確認コメント追記
                    </InternalButtonLink>
                    <br />
                    {/* <InternalButtonLink icon="edit_link" id="linkcheckzumi" >
                      確認済みにする
                    </InternalButtonLink>
                    <br />
                    PG作成タイミングで条件によって上記二つボタンを表示するイベントを実装してください */}
                  </FormField>

                  <InternalButtonLink icon="link" className="m-form-field a-text--align-left m-accordion__label" id="detailed2" >
                    詳しく見る
                  </InternalButtonLink>
                </FormFieldRow>

                {/* <Heading tag="h2">申請内容</Heading> */}
                <Heading tag="h3">本人情報変更</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">

                  <FormField label="申請番号">
                    <Text>CCFFF12345666</Text>
                  </FormField>
                  <FormField label="申請日">
                    <Text>2021/07/12</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="修正理由区分">
                    <Text>誤登録修正</Text>
                  </FormField>
                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="変更日">
                    <Text>2021/07/12</Text>
                  </FormField>
                  <FormField label="社員番号">
                    <Text>1234567</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="会社コード">
                    <Text>0005</Text>
                  </FormField>
                  <FormField label="会社名">
                    <Text>イオンリテール株式会社</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="所属コード">
                    <Text>12345</Text>
                  </FormField>
                  <FormField label="所属">
                    <Text>津田沼店</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="姓">
                    <Text>山田</Text>
                  </FormField>
                  <FormField label="名">
                    <Text>佳子</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="姓（カナ）">
                    <Text>ヤマダ</Text>
                  </FormField>
                  <FormField label="名（カナ）">
                    <Text className="a-text-link">*      ヨシコ</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="生年月日">
                    <Text>2000/02/12</Text>
                  </FormField>
                  <FormField label="性別">
                    <Text >男</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="婚姻区分">
                    <Text>独身</Text>
                  </FormField>
                  <FormField label="国籍">
                    <Text >日本</Text>
                  </FormField>
                </FormFieldRow>

                <Heading tag="h3">税扶養申告</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="現在の税表区分">
                    <Text>月額甲</Text>
                  </FormField>
                  <FormField label="税表区分を変更しますか">
                    <Text >変更する</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="税表区分変更理由">
                    <Text>給与収入のみ</Text>
                  </FormField>
                  <FormField label="（変更後）税表区分">
                    <Text className="a-text-link" >*      月額乙</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="申請日">
                    <Text>2021/09/12</Text>
                  </FormField>

                </FormFieldRow>

                <Heading tag="h4">寡婦・ひとり親区分について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="現在の寡婦・ひとり親区分">
                    <Text>対象外</Text>
                  </FormField>

                </FormFieldRow>


                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTable header="寡婦・ひとり親確認事項">
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ①申請者性別
                      </p>
                      <p>
                        女
                      </p>
                    </InfoTableCell>

                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ②申請者婚姻区分
                      </p>
                      <p>
                        独身
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ③事実婚状態ではないですか。
                      </p>
                      <p>
                        はい
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ④従業員自身の年間所得が500万円以下ですか。
                      </p>
                      <p>
                        はい
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ⑤離婚歴はありますか。（女性のみ）
                      </p>
                      <p>
                        いいえ
                      </p>
                    </InfoTableCell>

                  </InfoTable>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="寡婦・ひとり親区分判定">
                    <Text>対象外</Text>
                  </FormField>

                </FormFieldRow>

                <Heading tag="h4">勤労学生区分について</Heading>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="現在の勤労学生区分">
                    <Text>対象外</Text>
                  </FormField>

                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTable header="勤労学生区分について" modifiers="full-border" className="full-border">
                    <InfoTableCell >
                      <p className="a-info-table-cell__label">
                        <br />
                        ①従業員自身が所定の学校の学生・生徒に該当しますか。

                      </p>

                      <p >
                        はい
                        <br />
                      </p>
                      <p className="a-info-table-cell__label">
                        <br />
                        ②本人の年間所得金額が48万円以上75万円以下（給与収入で言えば103万円以上130万円以下）の見込みである。
                      </p>
                      <p >
                        はい
                        <br />
                      </p>
                      <p className="a-info-table-cell__label">
                        <br />
                        ③本人の給与所得（アルバイト代）以外の所得が、10万円以下である。
                      </p>
                      <p >
                        はい
                        <br />
                      </p>




                    </InfoTableCell>
                  </InfoTable>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="勤労学生区分判定">
                    <Text>対象外</Text>
                  </FormField>

                </FormFieldRow>
                <Heading tag="h4">本人障害区分について</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="現在の本人障害区分">
                    <Text>対象外</Text>
                  </FormField>
                  <FormField label="障害区分を変更しますか">
                    <Text>変更する</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTable header="障害区分確認事項">
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ①障害の認定対象に該当しますか。
                      </p>
                      <p >
                        はい
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        ②手帳情報を入力ください。
                        <br />
                        手帳番号
                      </p>
                      <p >
                        第◯◯◯◯◯号
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        <br />
                        手帳交付日
                      </p>
                      <p >
                        2021/09/12
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        障害内容区分
                      </p>
                      <p >
                        身体障害
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        障害等級
                      </p>
                      <p >
                        １級
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        障害程度
                      </p>
                      <p >
                        重度以外
                      </p>
                    </InfoTableCell>
                    <InfoTableCell>
                      <p className="a-info-table-cell__label">
                        障害内容
                      </p>
                      <p >
                        視覚障害、全盲
                      </p>
                    </InfoTableCell>
                  </InfoTable>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="（変更後）障害区分">
                    <Text className="a-text-link">*      一般障害</Text>
                  </FormField>

                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="アップロードファイル">
                    <img src="C:\WeCh0210903105830.jpg"></img>
                  </FormField>
                </FormFieldRow>
                <br />
                <Heading tag="h3">税扶養申告</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="口座変更日">
                    <Text className="a-text-link">  2021/02/12</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="銀行コード">
                    <Text >0040</Text>
                  </FormField>
                  <FormField label="支店コード">
                    <Text >001</Text>
                  </FormField>
                </FormFieldRow>

                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="金融機関名">
                    <Text >イオン銀行</Text>
                  </FormField>
                  <FormField label="支店名">
                    <Text >ガーネット支店</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="預金種別">
                    <Text >普通</Text>
                  </FormField>
                  <FormField label="番号">
                    <Text className="a-text-link">*      1234567</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="口座名義">
                    <Text >ﾃﾞﾝｼﾀﾛｳ</Text>
                  </FormField>

                </FormFieldRow>


              </Section>
            </div>
          </>
        </Modal>
        <Modal id="modal-approval-detail" title="ステータス詳細">
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
