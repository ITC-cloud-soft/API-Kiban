/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { renderVanillaExample } from './render';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';
import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { Whole } from 'design/components/organisms/whole';
import { SearchCurrentFilters2 } from 'design/components/molecules/search-current-filters';
import { Tag } from 'design/components/atoms/tag';
import { Button } from 'design/components/atoms/button';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Modal } from 'design/components/organisms/modal';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Heading } from 'design/components/atoms/heading';
import { Icon } from 'design/components/atoms/icon';

const SettingListPage: React.FC = () => (
  <html>
    <title>介護勤務・休職申請照会一覧</title>
    <body>
      <Whole navigation={<SettingHeader>介護勤務・休職申請照会一覧</SettingHeader>}>
        <Heading tag="h1">介護勤務・休職申請照会一覧</Heading>
        <Section noPadding={true}>
          <PageHeading
            title=""
            actions={
              <>
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
                  value: 'イオンアイビス(株)',
                },
                {
                  value: '勤務',
                },
                {
                  value: '新規',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '',
                },
                {
                  value: '書類未着3カ月以上',
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
                  value: 'イオンアイビス(株)',
                },
                {
                  value: '休職',
                },
                {
                  value: '新規',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '',
                },
                {
                  value: '承認待ち',
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
                  value: 'イオンアイビス(株)',
                },
                {
                  value: '休職',
                },
                {
                  value: '変更',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/08/16',
                },
                {
                  value: '承認済',
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
                    介護区分
                    <Icon name="arrow-down" />
                  </button>
                ),
                minWidth: '180px',
              },
              {
                value: (
                  <button className="m-accordion__label">
                    申請区分
                    <Icon name="arrow-down" />
                  </button>
                ),
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
                    承認日
                    <Icon name="arrow-down" />
                  </button>
                ),
              },
              {
                value: (
                  <button className="m-accordion__label">
                    ステータス
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
              <FormField label="介護区分">
                <Pulldown placeholder="新規" name="contel-start-time">
                  <option value=""></option>
                  <option value="1">テスト１</option>
                  <option value="2">テスト２</option>
                </Pulldown>
              </FormField>
              <FormField label="申請区分">
                <Pulldown placeholder="新規" name="contel-start-time">
                  <option value=""></option>
                  <option value="1">テスト１</option>
                  <option value="2">テスト２</option>
                </Pulldown>
              </FormField>
              <FormField label="ステータス">
                <Pulldown placeholder="新規" name="contel-start-time">
                  <option value=""></option>
                  <option value="1">テスト１</option>
                  <option value="2">テスト２</option>
                </Pulldown>
              </FormField>
              <FormField label="申請日">
                <DateRangeField onDateRangeChange={() => {}} />
              </FormField>
              <FormField label="申請番号">
                <TextField name="name" type="text" />
              </FormField>
            </FormFieldRow>
            <FormField label="社員番号">
              <FormFieldRow columnSize="12" columnSizePC="6">
                <TextField
                  name="content"
                  rows={3}
                  tag="textarea"
                  defaultValue="2222222
3333333
4444444"
                />
              </FormFieldRow>
            </FormField>
          </Section>
        </Modal>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingListPage />);
