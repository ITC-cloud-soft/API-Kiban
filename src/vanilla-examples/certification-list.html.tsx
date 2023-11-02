import React from 'react';
import { renderVanillaExample } from './render';

import { CreateButton } from 'design/components/atoms/create-button';
import { Pagination } from 'design/components/atoms/pagination';
import { SearchButton } from 'design/components/atoms/search-button';

import { DataTable } from 'design/components/molecules/data-table';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { SettingHeader } from 'design/components/molecules/setting-header';
import { Heading } from 'design/components/atoms/heading';
import { Whole } from 'design/components/organisms/whole';
import { SearchCurrentFilters2 } from 'design/components/molecules/search-current-filters'
import { Tag } from 'design/components/atoms/tag';
import { Button } from 'design/components/atoms/button';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { TextField } from 'design/components/atoms/text-field';

import { Modal } from 'design/components/organisms/modal';


const CertificationList: React.FC = () => (
  <html>
    {/* <title>資格免許登録一覧照会</title> */}
    <body>
      <Whole navigation={<SettingHeader></SettingHeader>}>
        <Heading tag="h1">資格免許登録一覧照会</Heading>
        <Section noPadding={true}>
          <PageHeading
            title=""
            actions={
              <>
                <CreateButton>CSV出力</CreateButton>
                <SearchButton inline>絞り込み</SearchButton>
              </>
            }
          />
        </Section>

        <Section className="p-search-filter-holder" noPadding={true}>
          <SearchCurrentFilters2 id="search-current-filters" dateFilterStart="" dateFilterEnd="">
            <Tag key={1} modifiers="filled">
              資格名称：販売士</Tag>
          </SearchCurrentFilters2>
        </Section>
        <br />
        <Section noPadding={true} className="p-data-table-holder">
          <DataTable
            id="setting-list-data-table"
            contents={[
              [
                {
                  value: '00001',
                },
                {
                  value: '日商販売士１級',
                },
              ],
              [
                {
                  value: '00001',
                },
                {
                  value: '日商販売士１級',
                },

              ],


            ]}
            headers={[
              {

                value: "公的資格コード",
                minWidth: '170px',
                width: '170px',
              },
              {

                value: "資格名称",

              },


            ]}
          />
          <Pagination length={10} currentIndex={1} />
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
              <FormField label="資格コード">
                <TextField name="name" type="text" />
              </FormField>
              <FormField label="資格名称">
                <TextField name="name" type="text" />
              </FormField>


            </FormFieldRow>
          </Section>
        </Modal>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<CertificationList />);
