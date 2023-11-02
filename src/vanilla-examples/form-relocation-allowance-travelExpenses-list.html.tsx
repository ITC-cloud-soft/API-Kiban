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
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Icon } from 'design/components/atoms/icon';
import { ApprovalStepNo, ApprovalStepNo3 } from 'design/components/atoms/approval-step-no';

const SettingListPage: React.FC = () => (
  <html>
    <title>赴任手当旅費精算照会一覧</title>
    <body>
      <Whole navigation={<SettingHeader>赴任手当旅費精算照会一覧</SettingHeader>}>
        <Heading tag="h1">赴任手当旅費精算照会一覧</Heading>

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
            <Tag modifiers="filled">到達日：2021/02/03 ～ 2022/07/03</Tag>
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
                  value: '有り',
                },
                {
                  value: '',
                },
                {
                  value: '単身・独身赴任',
                },
                {
                  value: '26,000',
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
                  value: '有り',
                },
                {
                  value: '',
                },
                {
                  value: '単身・独身赴任',
                },
                {
                  value: '26,000',
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
                  value: '有り',
                },
                {
                  value: '',
                },
                {
                  value: '単身・独身赴任',
                },
                {
                  value: '26,000',
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
                    会社
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '230px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    所属
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '180px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    チーム名
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '190px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    添付資料
                    <Icon name="arrow-down" />
                  </button>
                ),

              },
              {
                value: (
                  <button className="m-accordion__label">
                    備考
                    <Icon name="arrow-down" />
                  </button>
                ),

              },
              {
                value: (
                  <button className="m-accordion__label">
                    赴任種別
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '220px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    金額
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '100px',
              },
              {
                value: (
                  <button type="button" className="m-accordion__label">
                    到着日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '220px',
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
                <FormField label="赴任種別">
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
                <FormField label="到着日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="添付資料">
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
                <FormField label="寒冷地">
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
                <FormField label="申請日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <FormField label="移動日">
                  <DateRangeField onDateRangeChange={() => { }} />
                </FormField>
              </FormFieldRow> */}
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
              {/* <FormFieldRow columnSize="12" columnSizePC="6">
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
              </FormFieldRow> */}

              {/* <FormFieldRow columnSize="12" columnSizePC="6">
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
              </FormFieldRow> */}

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

              {/* <FormFieldRow columnSize="12" columnSizePC="6">
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
              </FormFieldRow> */}

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


                <Heading tag="h1">赴任手当旅費精算照会詳細</Heading>

                <Heading tag="h2">承認状況</Heading>
                <FormField label="BS業務部承認">
                  <ApprovalWorkflow>
                    <ApprovalStep name="山田太郎" modifiers="auto" requesterNew isDone />

                    <ApprovalStepNo3
                      isDone
                      modifiers="auto"
                      step={1}
                      name={
                        <>
                          開発次郎
                          <br />
                          （BS業務部承認）
                        </>
                      }
                      name2="開発次郎（BS業務部承認）"
                    />
                  </ApprovalWorkflow>
                </FormField>
                <InternalButtonLink icon="link" className="m-form-field a-text--align-left m-accordion__label" id="detailed1" >
                  詳しく見る
                </InternalButtonLink>
                <Heading tag="h2">申請内容</Heading>
              </Section>

              {/* 社員情報区域 */}
              <Heading tag="h3">事前確認</Heading>
              <Heading tag="h5">この手続きは 「転居を伴う人事異動時に発生した旅費等」 について清算を行うための申請です。</Heading>
              <Text>申請内容について了解しました。</Text>
              <Heading tag="h5">この手続きを申請するにあたり、事前に人事部などに相談をして承認を得ていますか？</Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Text>はい</Text>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="承認日付" className="p-setting-input-form__form-field">
                  <Text>2021/04/01</Text>
                </FormField>
                <FormField label="承認者の社員番号" className="p-setting-input-form__form-field">
                  <Text>はい</Text>
                </FormField>
                <FormField label="所属コード" className="p-setting-input-form__form-field">
                  <Text>97270</Text>
                </FormField>
                <FormField label="所属名称" className="p-setting-input-form__form-field">
                  <Text>人事教育部</Text>
                </FormField>
                <FormField label="氏名" className="p-setting-input-form__form-field">
                  <Text>開発　太郎</Text>
                </FormField>
              </FormFieldRow>
              <Heading tag="h4">今回の転居を伴う人事異動において、既に住所変更届は実施しましたか？</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Text>住所変更届はすでに実施した。（昨日までに実施済み）</Text>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              {/* 本人情報確認 */}
              <Heading tag="h3">本人情報確認</Heading>
              <Heading tag="h4">以下のあなたの情報に間違いがないかをご確認ください。</Heading>
              <FormField label="所属" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <Text>0092　イオンアイビス株式会社　店舗システム部</Text>
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号" className="p-setting-input-form__form-field">
                  <Text>0543960</Text>
                </FormField>
                <FormField label="氏名" className="p-setting-input-form__form-field">
                  <Text>山田　佳子</Text>
                </FormField>
                <FormField label="会社コード（原籍）" className="p-setting-input-form__form-field">
                  <Text>0092</Text>
                </FormField>
                <FormField label="会社名（原籍）" className="p-setting-input-form__form-field">
                  <Text>イオンアイビス株式会社</Text>
                </FormField>
                <FormField label="経費負担部署コード" className="p-setting-input-form__form-field">
                  <Text>9295610</Text>
                </FormField>
                <FormField label="経費負担部署名" className="p-setting-input-form__form-field">
                  <Text>DXシステム開発グループ</Text>
                </FormField>
                <FormField label="資格" className="p-setting-input-form__form-field">
                  <Text>G4</Text>
                </FormField>
                <FormField label="異動発令日" className="p-setting-input-form__form-field">
                  <Text>2021/08/01</Text>
                </FormField>
                <FormField label="旧所属コード" className="p-setting-input-form__form-field">
                  <Text>99999</Text>
                </FormField>
                <FormField label="旧所属名" className="p-setting-input-form__form-field">
                  <Text>店舗システム部</Text>
                </FormField>
                <FormField label="新所属コード" className="p-setting-input-form__form-field">
                  <Text>12345</Text>
                </FormField>
                <FormField label="新所属名" className="p-setting-input-form__form-field">
                  <Text>DX推進部</Text>
                </FormField>
                <FormField label="郵便番号（旧住所）" className="p-setting-input-form__form-field">
                  <Text>123-4567</Text>
                </FormField>
                <FormField label="都道府県・市郡区（旧住所）" className="p-setting-input-form__form-field">
                  <Text>東京都港区</Text>
                </FormField>
                <FormField label="町村・番地（旧住所）" className="p-setting-input-form__form-field">
                  <Text>赤坂8-5-32</Text>
                </FormField>
                <FormField label="建物名・部屋番号（旧住所）" className="p-setting-input-form__form-field">
                  <Text>田中駒ビル2F</Text>
                </FormField>
                <FormField label="郵便番号（新住所）" className="p-setting-input-form__form-field">
                  <Text>123-4567</Text>
                </FormField>
                <FormField label="都道府県・市郡区（新住所）" className="p-setting-input-form__form-field">
                  <Text>千葉県千葉市美浜区</Text>
                </FormField>
                <FormField label="町村・番地（新住所）" className="p-setting-input-form__form-field">
                  <Text>美浜１－１－１</Text>
                </FormField>
                <FormField label="建物名・部屋番号（新住所）" className="p-setting-input-form__form-field">
                  <Text>美浜１１１１</Text>
                </FormField>
              </FormFieldRow>
              <br />
              <Heading tag="h4">今回の赴任に関して、以下の内容を記載ください。</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="出発日" className="p-setting-input-form__form-field">
                  <Text>2021/02/12</Text>
                </FormField>
                <FormField label="出発日時" className="p-setting-input-form__form-field">
                  <Text>08:00</Text>
                </FormField>
                <FormField label="到着日" className="p-setting-input-form__form-field">
                  <Text>2021/02/12</Text>
                </FormField>
                <FormField label="到着日時" className="p-setting-input-form__form-field">
                  <Text>08:00</Text>
                </FormField>
                <FormField label="赴任種別" className="p-setting-input-form__form-field">
                  <Text>家族同伴赴任</Text>
                </FormField>
              </FormFieldRow>
              <FormField label="同伴者1">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="年齢区分 チェックリスト兼送付票">
                        <Text>大人</Text>
                      </FormField>
                      <FormField label="氏名">
                        <Text>開発　花子</Text>
                      </FormField>
                    </FormFieldRow>
                  </div>
                </InfoTableNone>
              </FormField>
              <FormField label="同伴者2">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <FormField label="年齢区分 チェックリスト兼送付票">
                        <Text>小人（中学生以下）</Text>
                      </FormField>
                      <FormField label="氏名">
                        <Text>開発　一郎</Text>
                      </FormField>
                    </FormFieldRow>
                  </div>
                </InfoTableNone>
              </FormField>
              <Heading tag="h4">DV案分</Heading>
              <Text>創業費対象とする / 環境費対象とする</Text>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">交通経路情報</Heading>
              <FormField label="交通経路1">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <Section className="p-setting-input-form__body">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="交通機関" className="p-setting-input-form__form-field">
                          <Text>バス</Text>
                        </FormField>
                        <FormField label="回数券" className="p-setting-input-form__form-field">
                          <Text>未利用</Text>
                        </FormField>
                        <FormField label="発駅・乗車駅" className="p-setting-input-form__form-field">
                          <Text>泉岳寺</Text>
                        </FormField>
                        <FormField label="着駅・下車駅" className="p-setting-input-form__form-field">
                          <Text>八丁堀（東京都）</Text>
                        </FormField>
                        <FormField label="走行距離" className="p-setting-input-form__form-field">
                          <Text>-</Text>
                        </FormField>
                        <FormField label="特急・急行" className="p-setting-input-form__form-field">
                          <Text>-</Text>
                        </FormField>
                        <FormField label="交通費" className="p-setting-input-form__form-field">
                          <Text>500 円</Text>
                        </FormField>
                        <FormField label="高速代" className="p-setting-input-form__form-field">
                          <Text>-</Text>
                        </FormField>
                        <FormField label="ETC" className="p-setting-input-form__form-field">
                          <Text>未利用</Text>
                        </FormField>
                        <FormField label="人数" className="p-setting-input-form__form-field">
                          <Text>2 名</Text>
                        </FormField>
                        <FormField label="金額" className="p-setting-input-form__form-field">
                          <Text>1,000 円</Text>
                        </FormField>
                        <FormField label="備考" className="p-setting-input-form__form-field">
                          <Text>あああああああああああああああああああああああああああああああああああああああああいいいいいい</Text>
                        </FormField>
                      </FormFieldRow>
                    </Section>
                    <br />
                  </div>
                </InfoTableNone>
              </FormField>
              <FormField label="交通経路2">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <Section className="p-setting-input-form__body">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="交通機関" className="p-setting-input-form__form-field">
                          <Text>電車</Text>
                        </FormField>
                        <FormField label="回数券" className="p-setting-input-form__form-field">
                          <Text>利用済</Text>
                        </FormField>
                      </FormFieldRow>
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="回数券種" className="p-setting-input-form__form-field">
                          <Text>東京～大阪のぞみ（本社、稲毛事務所のみ）</Text>
                        </FormField>
                      </FormFieldRow>
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="走行距離" className="p-setting-input-form__form-field">
                          <Text>-</Text>
                        </FormField>
                        <FormField label="特急・急行" className="p-setting-input-form__form-field">
                          <Text>0 円</Text>
                        </FormField>
                        <FormField label="交通費" className="p-setting-input-form__form-field">
                          <Text>500 円</Text>
                        </FormField>
                        <FormField label="高速代" className="p-setting-input-form__form-field">
                          <Text>-</Text>
                        </FormField>
                        <FormField label="ETC" className="p-setting-input-form__form-field">
                          <Text>未利用</Text>
                        </FormField>
                        <FormField label="人数" className="p-setting-input-form__form-field">
                          <Text>2 名</Text>
                        </FormField>
                        <FormField label="金額" className="p-setting-input-form__form-field">
                          <Text>1,000 円</Text>
                        </FormField>
                        <FormField label="備考" className="p-setting-input-form__form-field">
                          <Text>あああああああああああああああああああああああああああああああああああああああああいいいいいい</Text>
                        </FormField>
                      </FormFieldRow>
                    </Section>
                    <br />
                  </div>
                </InfoTableNone>
              </FormField>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="交通費の合計金額" className="p-setting-input-form__form-field">
                  <Text>1,000 円</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="領収書1" className="p-setting-input-form__form-field">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\wxf\Pictures\1.jpg" />
                    </li>
                  </ul>
                </FormField>
                <FormField label="領収書2" className="p-setting-input-form__form-field">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\wxf\Pictures\2.png" />
                    </li>
                  </ul>
                </FormField>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              {/* 宿泊情報 */}
              <br />
              <Heading tag="h3">宿泊情報</Heading>
              <br />
              <FormField label="宿泊先1">
                <InfoTableNone>
                  <div className="o-form-nobottom">
                    <Section className="p-setting-input-form__body">
                      <FormField label="宿泊先">
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <Text>東京都区内</Text>
                        </FormFieldRow>
                      </FormField>
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="宿泊数" className="p-setting-input-form__form-field">
                          <Text>1 泊</Text>
                        </FormField>
                        <FormField label="宿泊費" className="p-setting-input-form__form-field">
                          <Text>15,600 円</Text>
                        </FormField>
                        <FormField label="人数" className="p-setting-input-form__form-field">
                          <Text>1 名</Text>
                        </FormField>
                        <FormField label="上限金額" className="p-setting-input-form__form-field">
                          <Text>0 円</Text>
                        </FormField>
                      </FormFieldRow>
                    </Section>
                    <br />
                  </div>
                </InfoTableNone>
              </FormField>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="宿泊費の合計金額" className="p-setting-input-form__form-field">
                  <Text>15,600 円</Text>
                </FormField>
                <FormField label="荷造費" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="領収書1" className="p-setting-input-form__form-field">
                  <ul className="a-upload-img__preview">
                    <li className="a-upload-img__image-left">
                      <img src="C:\Users\wxf\Pictures\2.png" />
                    </li>
                  </ul>
                </FormField>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              {/* 赴任手当情報 */}
              <Heading tag="h3">赴任手当情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="基準給与合計" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="上限金額" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="赴任手当額" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="寒冷地手当" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="赴任手当額合計" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="総支給額" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
                <FormField label="振込金額" className="p-setting-input-form__form-field">
                  <Text>0 円</Text>
                </FormField>
              </FormFieldRow>
              <br />
            </div>
          </>







        </Modal>
        <Modal id="modal-approval-detail" title="ステータス詳細">
          <ApprovalStatusList>
            <ApprovalStatusItem title="新規申請" time="2021/01/25 13:00" requester done>
              山田太郎
            </ApprovalStatusItem>
            <ApprovalStatusItem title="BS業務部承認" time="2021/01/25 13:00">
              開発次郎
            </ApprovalStatusItem>
          </ApprovalStatusList>
        </Modal>

      </Whole>
    </body>
  </html >
);
export default renderVanillaExample(<SettingListPage />);
