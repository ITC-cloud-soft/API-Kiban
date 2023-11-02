import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';

import { Section } from 'design/components/molecules/section';

import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigationWithoutApply } from 'design/components/organisms/global-navigation';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { Heading } from 'design/components/atoms/heading';
import { ContentCellProps, DataTable, HeaderCellProps } from 'design/components/molecules/data-table';
import { Button } from 'design/components/atoms/button';
import { Modal } from 'design/components/organisms/modal';
import { Tabs } from 'design/components/molecules/tabs';
import { Tag } from 'design/components/atoms/tag';
import { TextField } from 'design/components/atoms/text-field';
import { FormFieldRow, FormField } from 'design/components/molecules/form-field';
import { Radio } from 'design/components/atoms/radio';
import { Text } from 'design/components/atoms/text';
import { Checkbox } from 'design/components/atoms/checkbox';
import { AddItemButton } from 'design/components/atoms/add-item-button';

const HomeRequestListPage: React.FC = () => {
  const headers: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: 'No.',
    },
    {
      value: 'ワークフロー名',
    },
    {
      value: 'フロータイプ',
    },
    {
      value: '連携有無',
    },
    {
      value: '利用状態',
    },
    {
      type: 'action',
      value: '操作',
    },
  ];
  const contents: Array<Array<ContentCellProps>> = [
    [
      {
        value: '1',
      },
      {
        value: '発注計画申請',
      },
      {
        value: 'ウォーターフォール式',
      },
      {
        value: 'なし',
      },
      {
        value: '停止',
      },
      {
        value: (
          <>
            <Button modifiers="text">フロー編集</Button>
            <Button modifiers="text">起動</Button>
          </>
        ),
      },
    ],
  ];
  const headers2: Array<HeaderCellProps> = [
    {
      value: '選択',
    },
    {
      value: '項目名',
    },
    {
      value: '項目英語名',
    },
    {
      value: 'データタイプ',
    },
    {
      value: 'データ長さ',
    },
    {
      value: '必須フラグ',
    },
  ];
  const contents2: Array<Array<ContentCellProps>> = [
    [
      {
        value: <Checkbox></Checkbox>,
      },
      {
        value: '部署マスタ',
      },
      {
        value: 'Dept_Master',
      },
      {
        value: '数字',
      },
      {
        value: '10',
      },
      {
        value: 'true',
      },
    ],
    [
      {
        value: <Checkbox></Checkbox>,
      },
      {
        value: '社員番号',
      },
      {
        value: 'shainbango',
      },
      {
        value: '数字',
      },
      {
        value: '8',
      },
      {
        value: 'true',
      },
    ],
  ];
  const headers3: Array<HeaderCellProps> = [
    {
      value: '項目名',
    },
    {
      value: '項目英語名',
    },
    {
      value: 'データタイプ',
    },
    {
      value: 'データ長さ',
    },
    {
      value: '必須フラグ',
    },
    {
      value: '',
    },
  ];
  const contents3: Array<Array<ContentCellProps>> = [
    [
      {
        value: '部署コード',
      },
      {
        value: 'Dept_Code',
      },
      {
        value: '数字',
      },
      {
        value: '10',
      },
      {
        value: 'true',
      },
      {
        value: (
          <>
            <Button modifiers="text">✖</Button>
          </>
        ),
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
        value: '',
      },
      {
        value: (
          <>
            <Button modifiers="text">✔</Button>
          </>
        ),
      },
    ],
  ];
  const headers4: Array<HeaderCellProps> = [
    {
      type: 'id',
      value: '順番',
    },
    {
      value: '項目名',
    },
  ];
  const contents4: Array<Array<ContentCellProps>> = [
    [
      {
        value: '1',
      },
      {
        value: '申請日',
      },
    ],
  ];
  return (
    <html>
      <body>
        <Whole
          modifiers="with-bg"
          navigation={
            <GlobalNavigationWithoutApply>
              <Section noPadding={true}>
                {' '}
                <TextPlaceholder dataId={2} code="%%7892%%">
                  フローシステム設定
                </TextPlaceholder>
              </Section>
              <NavItem icon="request-list" label="システム全般" href="system-general.html" />
              <NavItem icon="approval-list" label="ホワイトリスト" href="whitelist-add-user.html" />
              <NavItem icon="labor-menu" label="マスター管理">
                <NavItem label="マスター追加" href="master-management-add.html" subnav={true} />
                <NavItem label="マスター一覧" href="master-management-list.html" subnav={true} />
              </NavItem>
              <NavItem icon="settings" label="ワークフロー管理" isOpen={true}>
                <NavItem label="新規ワークフロー" href="workflow-management-new.html" subnav={true} />
                <NavItem label="ワークフロー管理" href="workflow-management-list.html" subnav={true} selected={true} />
              </NavItem>
              <NavItem icon="labor-menu" label="バッチ管理" href="#" />
              <NavItem icon="labor-menu" label="ワークフロー監視" href="#" />
            </GlobalNavigationWithoutApply>
          }
        >
          <Section noPadding={true}>
            <PageHeading title="ワークフロー管理" />
          </Section>
          <Section noPadding={true} className="p-list-content-holder">
            <Section modifiers="fill-white">
              <Heading tag="h3">テーブル項目</Heading>
              <Section noPadding={true}>
                <DataTable
                  id="setting-list-data-table"
                  modifiers="with-action-buttons"
                  headers={headers}
                  contents={contents}
                />
              </Section>
              <br />
              <AddItemButton>新規ワークフロー</AddItemButton>
            </Section>
          </Section>
          <Modal modifiers="fullscreen" id="modal-comp">
            <Section noPadding={true}>
              <PageHeading title="フロー編集" />
            </Section>
            <Section noPadding={true} className="p-list-content-holder">
              <Tabs tabs={[<>フロー全般</>, <>GUI設定</>, <>申請画面設定</>, <>カード設定</>, <>連携設定</>]}>
                <>
                  {' '}
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="ワークフロー名"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField name="name" type="text" value="" />
                    </FormField>
                    <FormField
                      label="フローテーブル名"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField name="name" type="text" value="" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="フロータイプ"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys" value="5" modifiers="grey">
                          ウォーターフォール式
                        </Radio>
                        <Radio name="sys" value="6" checked modifiers="grey">
                          途中合弁式
                        </Radio>
                        <Radio name="sys" value="7" checked modifiers="grey">
                          途中分散式
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="連携有無"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys1" value="5" modifiers="grey">
                          あり
                        </Radio>
                        <Radio name="sys1" value="6" checked modifiers="grey">
                          なし
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="申請画面カスタマイズ有無"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys2" value="5" modifiers="grey">
                          あり
                        </Radio>
                        <Radio name="sys2" value="6" checked modifiers="grey">
                          なし
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <footer className="o-modal__footer">
                    {' '}
                    <Button modifiers="primary" size="huge" id="input-form-check-button">
                      保存
                    </Button>
                  </footer>
                </>
                <></>
                <>
                  {' '}
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="画面表示名"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField name="name" type="text" value="" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="画面説明" className="p-setting-input-form__form-field">
                      <TextField tag="textarea" type="text" rows={3} />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="画面エリア選択"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Checkbox name="sys7" value="5" modifiers="button">
                          申請内容
                        </Checkbox>
                        <Checkbox name="sys7" value="6" checked modifiers="button">
                          コメント
                        </Checkbox>
                        <Checkbox name="sys7" value="7" modifiers="button">
                          添付ファイル
                        </Checkbox>
                        <Checkbox name="sys7" value="8" checked modifiers="button">
                          情報一覧
                        </Checkbox>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="画面情報一表示名称"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField name="name" type="text" value="" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="画面情報一表示タイプ"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys8" value="5" modifiers="grey">
                          基本型
                        </Radio>
                        <Radio name="sys8" value="6" checked modifiers="grey">
                          比較対照型
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="申請社員情報エリア"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Checkbox name="sys9" value="5" modifiers="button">
                          氏名（カナ）
                        </Checkbox>
                        <Checkbox name="sys9" value="6" checked modifiers="button">
                          会社名称
                        </Checkbox>
                        <Checkbox name="sys9" value="7" modifiers="button">
                          所属名称・上
                        </Checkbox>
                        <Checkbox name="sys9" value="8" checked modifiers="button">
                          所属名称・下
                        </Checkbox>
                        <Checkbox name="sys9" value="5" modifiers="button">
                          社員区分
                        </Checkbox>
                        <Checkbox name="sys9" value="6" modifiers="button">
                          職位
                        </Checkbox>
                        <Checkbox name="sys9" value="7" modifiers="button">
                          組合区分
                        </Checkbox>
                        <Checkbox name="sys9" value="8" checked modifiers="button">
                          グッドライフ区分
                        </Checkbox>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="申請内容エリア" className="p-setting-input-form__form-field">
                    {' '}
                  </FormField>
                  <DataTable modifiers="with-action-buttons" headers={headers3} contents={contents3} />
                  <AddItemButton>項目を追加する</AddItemButton>
                  <br />
                  <br />
                  <FormField label="情報一覧エリア" className="p-setting-input-form__form-field">
                    {' '}
                  </FormField>
                  <DataTable modifiers="with-action-buttons" headers={headers3} contents={contents3} />
                  <AddItemButton>項目を追加する</AddItemButton>
                  <br />
                  <br />
                  <footer className="o-modal__footer">
                    {' '}
                    <Button modifiers="primary" size="huge" id="input-form-check-button">
                      保存
                    </Button>
                  </footer>
                </>
                <>
                  {' '}
                  <FormField label="カード項目設定" className="p-setting-input-form__form-field">
                    {' '}
                  </FormField>
                  <DataTable modifiers="with-action-buttons" headers={headers4} contents={contents4} />
                  <br />
                  <AddItemButton>項目を追加する</AddItemButton>
                  <footer className="o-modal__footer">
                    {' '}
                    <Button modifiers="primary" size="huge" id="input-form-check-button">
                      保存
                    </Button>
                  </footer>
                </>
                <>
                  {' '}
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="連携方式"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys3" value="5" modifiers="grey">
                          API連携
                        </Radio>
                        <Radio name="sys3" value="6" checked modifiers="grey">
                          ファイル連携
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <Text>
                    ※API連携のURL
                    <br />
                    https://YYYYYYYY.................
                  </Text>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="ファイルタイプ（拡張子）"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys4" value="5" modifiers="grey">
                          CSVファイル
                        </Radio>
                        <Radio name="sys4" value="6" checked modifiers="grey">
                          TSVファイル
                        </Radio>
                        <Radio name="sys4" value="7" checked modifiers="grey">
                          DATファイル
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="データ区切り"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys5" value="5" modifiers="grey">
                          カンマ
                        </Radio>
                        <Radio name="sys5" value="6" checked modifiers="grey">
                          TAB
                        </Radio>
                        <Radio name="sys5" value="7" checked modifiers="grey">
                          その他
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField
                      label="※区切りを指定する"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <TextField name="name" type="text" value="" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField
                      label="文字列コードセット"
                      className="p-setting-input-form__form-field"
                      labelAddons={<Tag>必須</Tag>}
                    >
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Radio name="sys6" value="5" modifiers="grey">
                          UTF-8
                        </Radio>
                        <Radio name="sys6" value="6" checked modifiers="grey">
                          Shift-JS
                        </Radio>
                      </FormFieldRow>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="連携項目選択（申請内容）" className="p-setting-input-form__form-field">
                    {' '}
                  </FormField>
                  <DataTable modifiers="with-action-buttons" headers={headers2} contents={contents2} />
                  <footer className="o-modal__footer">
                    {' '}
                    <Button modifiers="primary" size="huge" id="input-form-check-button">
                      保存
                    </Button>
                  </footer>
                </>
              </Tabs>
            </Section>
          </Modal>
        </Whole>
      </body>
    </html>
  );
};
export default renderVanillaExample(<HomeRequestListPage />);
