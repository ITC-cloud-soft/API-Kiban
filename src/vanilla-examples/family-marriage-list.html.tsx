import React from 'react';
import { renderVanillaExample } from './render';

import { CreateButton } from 'design/components/atoms/create-button';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';

import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';

import { Whole } from 'design/components/organisms/whole';

import { SearchCurrentFilters } from 'design/components/molecules/search-current-filters';
import { Tag } from 'design/components/atoms/tag';
import { Accordion } from 'design/components/molecules/accordion';
import { Button } from 'design/components/atoms/button';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { Modal } from 'design/components/organisms/modal';
import { Pulldown } from 'design/components/atoms/pulldown';
import { CaptionList } from 'design/components/atoms/caption-list';

const SettingListPage: React.FC = () => (
  <html>
    <title>結婚届一覧照会</title>
    <body>
      <Whole navigation={<SettingHeader></SettingHeader>}>
        <Section noPadding={true}>
          <PageHeading
            title="結婚届一覧照会"
            actions={
              <>
                <CreateButton>CSV出力</CreateButton>
                <SearchButton inline>絞り込み</SearchButton>
              </>
            }
          />
        </Section>
        <Section noPadding={true} className="p-data-table-holder">
          <SearchCurrentFilters dateFilterEnd="2021/03/01" dateFilterStart="2021/03/01" onClearClick={() => {}}>
            <Tag modifiers="filled">申請日：2021/03/01-2021/03/03</Tag>
          </SearchCurrentFilters>
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
                  value: 'ADP運用G',
                },
                {
                  value: '特別加入員（役付役員）',
                },
                {
                  value: '無し（組合なし）',
                },
                {
                  value: '2021/05/01',
                },
                {
                  value: '2021/06/01',
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
                  value: '1234567',
                },
                {
                  value: 'イオン　慎太郎',
                },
                {
                  value: 'ADP運用G',
                },
                {
                  value: '特別加入員（役付役員）',
                },
                {
                  value: '無し（組合なし）',
                },
                {
                  value: '2021/05/01',
                },
                {
                  value: '2021/06/01',
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
                  value: '1234567',
                },
                {
                  value: 'イオン　慎太郎',
                },
                {
                  value: 'ADP運用G',
                },
                {
                  value: '特別加入員（役付役員）',
                },
                {
                  value: '無し（組合なし）',
                },
                {
                  value: '2021/05/01',
                },
                {
                  value: '2021/06/01',
                },
                {
                  value: '2021/07/01',
                },
              ],
              [
                {
                  value: '',
                },
                {
                  value: '',
                },
                {
                  value: '',
                },
                {
                  value: '',
                },
                {
                  value: <small>該当するレコードが見つかりません</small>,
                },
                {
                  value: '',
                },
                {
                  value: '',
                },
                {
                  value: '',
                },
                {
                  value: '',
                },
              ],
            ]}
            headers={[
              {
                type: 'id',
                value: <Accordion label="伝票番号">{}</Accordion>,
                minWidth: '170px',
              },
              {
                value: <Accordion label="社員番号">{}</Accordion>,
              },
              {
                value: <Accordion label="氏名">{}</Accordion>,
              },
              {
                value: <Accordion label="所属">{}</Accordion>,
              },
              {
                value: <Accordion label="グッドライフ区分">{}</Accordion>,
              },
              {
                value: <Accordion label="組合区分">{}</Accordion>,
              },
              {
                value: <Accordion label="申請日">{}</Accordion>,
              },
              {
                value: <Accordion label="入籍日">{}</Accordion>,
              },
              {
                value: <Accordion label="挙式日">{}</Accordion>,
              },
            ]}
          />
          <Pagination length={10} currentIndex={5} />
        </Section>
        <Modal
          id="setting-search-modal"
          modalSize="medium"
          title="絞り込み検索"
          footer={
            <>
              <Button modifiers="third" size="huge" type="button">
                クリア
              </Button>
              <Button modifiers="primary" size="huge" type="button">
                検索
              </Button>
            </>
          }
        >
          <Section className="p-setting-input-form__body">
            <FormFieldRow columnSize="12" columnSizePC="6">
              <FormField label="会社名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="会社名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="所属名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="所属名">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="従業員コード">
                <Pulldown name="something" placeholder="選択してください。">
                  <React.Fragment key=".0">
                    <option value="create_new">新規作成</option>
                    <option value="reapply">修正後再申請</option>
                    <option value="arrangement_completed">手配完了</option>
                  </React.Fragment>
                </Pulldown>
              </FormField>
              <FormField label="出向者">
                <Pulldown name="something" placeholder="選択してください。">
                  <React.Fragment key=".0">
                    <option value="create_new">新規作成</option>
                    <option value="reapply">修正後再申請</option>
                    <option value="arrangement_completed">手配完了</option>
                  </React.Fragment>
                </Pulldown>
              </FormField>
              <FormField label="グッドライフ区分">
                <Pulldown name="something" placeholder="選択してください。">
                  <React.Fragment key=".0">
                    <option value="create_new">新規作成</option>
                    <option value="reapply">修正後再申請</option>
                    <option value="arrangement_completed">手配完了</option>
                  </React.Fragment>
                </Pulldown>
              </FormField>
              <FormField label="組合区分">
                <Pulldown name="something" placeholder="選択してください。">
                  <React.Fragment key=".0">
                    <option value="create_new">新規作成</option>
                    <option value="reapply">修正後再申請</option>
                    <option value="arrangement_completed">手配完了</option>
                  </React.Fragment>
                </Pulldown>
              </FormField>
              <FormField label="申請日">
                <DateRangeField onDateRangeChange={() => {}} />
              </FormField>
              <FormField label="社員番号">
                <TextField name="name" type="text" />
                <CaptionList>
                  <React.Fragment key=".0">
                    <li>社員番号入力時は、上記の条件が無視されます。</li>
                  </React.Fragment>
                </CaptionList>
              </FormField>
            </FormFieldRow>
          </Section>
        </Modal>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<SettingListPage />);
