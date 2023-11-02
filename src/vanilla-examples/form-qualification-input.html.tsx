import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Accordion } from 'design/components/molecules/accordion';
import { InfoTable } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Whole } from 'design/components/organisms/whole';
import { UploadField } from 'design/components/atoms/upload-field';
import { mapModifiers } from 'design/libs/component';
import { Modal } from 'design/components/organisms/modal';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>資格免許　登録申請(代理申請)</title>
    <body>
      <Whole navigation={''}>
        {/* 入力画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">資格免許　登録申請(代理申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                </Text>
                <br />
              </Section>
              {/* <Section className="p-setting-input-form__body"> */}
              {/* 申請社員情報区域 */}
              <Section modifiers="border">
                <Heading tag="h3">申請社員情報</Heading>
                <Accordion label="確認する">
                  <InfoTable modifiers="no-border-header">
                    <InfoTableCell modifiers="pair" label="会社コード">
                      <span>0092</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="会社名称">
                      <span>イオンアイビス株式会社</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属コード">
                      <span>123345</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="所属名称）">
                      <span>ヘルプ運用G</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="社員番号">
                      <span>1234567</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="氏名">
                      <span>代理　太郎</span>
                    </InfoTableCell>
                  </InfoTable>
                </Accordion>
              </Section>
              <Section modifiers="border">
                {/* 登録社員情報区域 */}
                <Heading tag="h3">登録社員情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third">
                      社員検索
                    </Button>
                  </div>
                </FormFieldRow>
                <br />
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="会社コード">
                    <span>0092</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属コード">
                    <span>123345</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称）">
                    <span>ヘルプ運用G</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>代理　太郎</span>
                  </InfoTableCell>
                </InfoTable>
              </Section>
              <Section className="m-section">
                {/* 登録資格情報区域 */}
                <Heading tag="h3">登録資格情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField
                    label="資格名称"
                    className="p-setting-input-form__form-field"
                    labelAddons={<Tag>必須</Tag>}
                  >
                    <div className={mapModifiers('a-address-search-field')}>
                      <TextField />
                      <Button type="button" modifiers="third">
                        資格検索
                      </Button>
                    </div>
                    <CaptionList>
                      <React.Fragment key=".0">
                        ※資格検索ボタンから、対象の資格を選択ください。
                        <br />
                        ※一覧に記載がない資格は、所轄人事へご相談ください。
                      </React.Fragment>
                    </CaptionList>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField
                    label="資格取得日"
                    labelAddons={<Tag>必須</Tag>}
                    className="p-setting-input-form__form-field"
                  >
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                  <FormField label="資格失効日" className="p-setting-input-form__form-field">
                    <CalendarField
                      className="a-calendar-field__content"
                      defaultValue={new Date('2022-03-26T20:44:23.000Z')}
                      onDateChange={() => {}}
                    />
                  </FormField>
                  <FormField label="点数・スコア" className="p-setting-input-form__form-field">
                    <TextField name="name" type="text" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="資格証明書等">
                    <UploadField description="形式:jpg/pngなど画像形式まだはPDF|サイズ:10MBまで">
                      資格証明となるデータの画像をドラッグ＆ドロップするかパソコンから画像を貼り付けしてください。
                    </UploadField>
                  </FormField>
                  <FormField label="備考">
                    <TextField name="content" rows={3} tag="textarea" />
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="保有車両区分">
                    <Pulldown name="something" placeholder="選択してください。">
                      <React.Fragment key=".0">
                        <option value="create_new">テスト1</option>
                        <option value="reapply">テスト2</option>
                        <option value="arrangement_completed">テスト3</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* </Section> */}
            </div>
          </>
        </Modal>
        {/* 確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="modal-comp"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="primary" size="huge" id="input-form-confirm-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">資格免許　登録申請(確認)</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              {/* <Section className="p-setting-input-form__body"> */}
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
                    <span>123345</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>ヘルプ運用G</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>代理　太郎</span>
                  </InfoTableCell>
                </InfoTable>
              </Section>
              <Section modifiers="border">
                {/* 登録社員情報区域 */}
                <Heading tag="h3">登録社員情報</Heading>
                <InfoTable modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="会社コード">
                    <span>0092</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンアイビス株式会社</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属コード">
                    <span>123345</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>ヘルプ運用G</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="社員番号">
                    <span>1234567</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="氏名">
                    <span>代理　太郎</span>
                  </InfoTableCell>
                </InfoTable>
              </Section>
              <Section modifiers="border">
                {/* 登録資格情報区域 */}
                <Heading tag="h3">登録資格情報</Heading>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="資格名称" className="p-setting-input-form__form-field">
                    <Text>00003 日商販売士1級</Text>
                  </FormField>
                  {/* </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6"> */}
                  <FormField label="資格取得日">
                    <Text>2022/03/26</Text>
                  </FormField>
                  <FormField label="資格失効日">
                    <Text>2022/03/26</Text>
                  </FormField>
                  <FormField label="点数・スコア">
                    <Text>450</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <FormField label="資格証明書等">
                    <img src="https://images.app.goo.gl/eGevkZ5BKedjmVQx8"></img>
                  </FormField>
                  <FormField label="備考">
                    <Text>ああああああああああああああああああああああああああああああああああああああああああ</Text>
                  </FormField>
                </FormFieldRow>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <FormField label="保有車両区分">
                    <Text>0000 なし</Text>
                  </FormField>
                </FormFieldRow>
              </Section>
              {/* </Section> */}
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
