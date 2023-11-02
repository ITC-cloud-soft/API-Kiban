/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { renderVanillaExample } from './render';

import { CreateButton } from 'design/components/atoms/create-button';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';

import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { ButtonContainer } from 'design/components/molecules/button-container';

import { Whole } from 'design/components/organisms/whole';

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
    <title>資格免許登録照会一覧</title>
    <body>
      <Whole navigation={<SettingHeader></SettingHeader>}>
        <Heading tag="h1">資格免許登録照会一覧</Heading>
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
          <SearchCurrentFilters2 onClearClick={() => {}} dateFilterStart="" dateFilterEnd="">
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
                  value: '1234567',
                },
                {
                  value: 'イオン　慎太郎',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '00001',
                },
                {
                  value: '日商販売士1級',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '完了',
                },
                {
                  value: '未',
                },
              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '1234567',
                },
                {
                  value: 'イオン　慎太郎',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '00001',
                },
                {
                  value: '日商販売士1級',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '完了',
                },
                {
                  value: '未',
                },
              ],
              [
                {
                  value: 'CCFAAA20210702001',
                },
                {
                  value: '1234567',
                },
                {
                  value: 'イオン　慎太郎',
                },
                {
                  value: '0092 イオンアイビス(株)',
                },
                {
                  value: 'DXシステム開発G',
                },
                {
                  value: '00001',
                },
                {
                  value: '日商販売士1級',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '2021/07/01',
                },
                {
                  value: '完了',
                },
                {
                  value: '未',
                },
              ],
            ]}
            headers={[
              {
                type: 'id',
                value: (
                  <button className="m-accordion__label">
                    伝票番号
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
                minWidth: '170px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    会社
                    <Icon name="arrow-down" />
                  </button>
                ),
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
                    資格コード
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    資格名称
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '160px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    取得日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '140px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    失効日
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '140px',
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
                  <button type="button" className="m-accordion__label">
                    申請状態
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    確認
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
              <FormField label="会社コード">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="会社名称">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="所属コード">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="所属名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="社員番号">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="氏名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="資格コード">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="資格名称">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="申請日">
                <DateRangeField onDateRangeChange={() => {}} />
              </FormField>
              <FormField label="取得日">
                <DateRangeField onDateRangeChange={() => {}} />
              </FormField>
              <FormField label="失効日">
                <DateRangeField onDateRangeChange={() => {}} />
              </FormField>
              <FormField label="確認状態">
                <Pulldown name="something" placeholder="選択してください。">
                  <React.Fragment key=".0">
                    <option value="create_new">テスト1</option>
                    <option value="reapply">テスト2</option>
                    <option value="arrangement_completed">テスト3</option>
                  </React.Fragment>
                </Pulldown>
              </FormField>
            </FormFieldRow>
            <FormFieldRow columnSize="12" columnSizePC="12">
              <FormField label="備考">
                <TextField name="name" type="text" />
              </FormField>
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
              <Section className="p-setting-input-form__body">
                <Section modifiers="border">
                  {/* 確認状態区域 */}
                  <Heading tag="h3"> 確認状態</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="状態">
                      <Text>未確認</Text>
                    </FormField>
                    <FormField label="申請区分">
                      <Text>代理申請</Text>
                    </FormField>
                    <FormField label="確認">
                      <Text>2021/08/12</Text>
                    </FormField>
                    <FormField label="確認時刻">
                      <Text>18：00</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="2">
                    <Button modifiers="primary" size="large" id="input-form-confirm-button" type="button">
                      確認済みにする
                    </Button>
                  </FormFieldRow>
                </Section>
                <Section modifiers="border">
                  {/* 確認社員情報区域 */}
                  <Heading tag="h3">確認社員情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="会社コード">
                      <span>0092</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>2002</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>ヘルプ運用G</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>社員　社員</span>
                    </InfoTableCell>
                  </InfoTable>
                </Section>
                <Section modifiers="border">
                  {/* 申請社員情報区域 */}
                  <Heading tag="h3">申請社員情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="会社コード">
                      <span>0092</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>2002</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>ヘルプ運用G</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>社員　社員</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="申請日">
                      <span>2002/08/01</span>
                    </InfoTableCell>
                  </InfoTable>
                </Section>
                <Section modifiers="border">
                  {/* 資格登録社員情報区域 */}
                  <Heading tag="h3">資格登録社員情報</Heading>
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="会社コード">
                      <span>0092</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>2002</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称">
                      <span>ヘルプ運用G</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>社員　社員</span>
                    </InfoTableCell>
                  </InfoTable>
                </Section>
                <Section modifiers="border">
                  {/* 資格情報区域 */}
                  <Heading tag="h3">資格情報</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="資格コード">
                      <Text>00001</Text>
                    </FormField>
                    <FormField label="資格名称">
                      <Text>日商販売士1級</Text>
                    </FormField>
                    <FormField label="取得日">
                      <Text>2021/08/12</Text>
                    </FormField>
                    <FormField label="失効日">
                      <Text>2021/08/12</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="点数" className="p-setting-input-form__form-field">
                      <Text>447</Text>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="資格証明書">
                      <img src="https://images.app.goo.gl/eGevkZ5BKedjmVQx8"></img>
                    </FormField>
                    <FormField label="備考">
                      <Text>なし</Text>
                    </FormField>
                    <FormField label="保有車両区分コード">
                      <Text>0000</Text>
                    </FormField>
                    <FormField label="保有車両区分">
                      <Text>なし</Text>
                    </FormField>
                  </FormFieldRow>
                </Section>
              </Section>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingListPage />);
