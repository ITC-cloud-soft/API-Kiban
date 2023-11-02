import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { InfoTable } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>介護勤務（撤回・終了承認）</title>
    <body>
      <Whole navigation={''}>
        {/* 介護勤務（撤回・終了承認） */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge">
                否認
              </Button>
              <Button modifiers="secondary" size="huge">
                差戻し
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">介護勤務（撤回・終了承認）</Heading>
                <Text>XXXXXX（説明文未定）</Text>
                <br />
              </Section>
              <br />
              {/* 代理で申請をする方の社員情報 */}
              <Heading tag="h3">代理で申請をする方の社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>代理　智子</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>BS業務部</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">申請社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0005</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンリテール株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>申請　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名（カナ）">
                  <span>シンセイ　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2001/05/03</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="勤続年数">
                  <span>20年</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務申請区域 */}
              <Heading tag="h3">介護勤務申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>新規</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 対象家族情報区域 */}
              <Heading tag="h3">対象家族情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="対象者氏名">
                  <span>イオン　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者氏名（カナ）">
                  <span>イオン　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者生年月日">
                  <span>1941/12/20</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="性別">
                  <span>男性</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="続柄">
                  <span>父</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="同居/別居">
                  <span>同居</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病名">
                  <span>低酸素脳症、アルツハイマー型認知症</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病発生年月日">
                  <span>2020/10/25</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務情報区域 */}
              <Heading tag="h3">介護勤務情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="申請日">
                  <span>2020/11/02</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="申請区分">
                  <span>介護勤務</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="開始日">
                  <span>2020/11/21</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="終了日（予定）">
                  <span>2021/11/20</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="始業時刻">
                  <span>9:00</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="終業時刻">
                  <span>17:00</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="短縮時間">
                  <span>1時間</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務　撤回・終了について区域 */}
              <Heading tag="h3">介護勤務　撤回・終了について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="終了事由">
                  <Text>要介護者が既定の家族の範囲ではなくなったため</Text>
                </FormField>
                <FormField label="事由解消日">
                  <Text>2021/08/31</Text>
                </FormField>
                <FormField label="終了日">
                  <Text>2021/08/31</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 連絡の取れる電話番号区域 */}
              <Heading tag="h3">連絡の取れる電話番号</Heading>
              <FormField label="電話番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>090-1234-5678</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 配偶者情報区域 */}
              <Heading tag="h3">配偶者情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号">
                  <Text>AEON123456</Text>
                </FormField>
                <FormField label="所属">
                  <Text>イオンリテール株式会社　海浜幕張店</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <Text>申請</Text>
                </FormField>
                <FormField label="名">
                  <Text>花子</Text>
                </FormField>
              </FormFieldRow>
            </div>
          </>
        </Modal>
        {/* 介護勤務（撤回・終了申請）確認画面 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="secondary" size="huge" id="confirm-app-button">
                保留
              </Button>
              <Button modifiers="third" size="huge" id="confirm-app-button">
                否認
              </Button>
              <Button modifiers="secondary" size="huge" id="confirm-app-button">
                差戻し
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">介護勤務（撤回・終了承認）</Heading>
                <Text>XXXXXX（説明文未定）</Text>
                <br />
              </Section>
              <br />
              {/* 代理で申請をする方の社員情報 */}
              <Heading tag="h3">代理で申請をする方の社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>代理　智子</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>BS業務部</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">申請社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0005</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンリテール株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>申請　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名（カナ）">
                  <span>シンセイ　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2001/05/03</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="勤続年数">
                  <span>20年</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務申請区域 */}
              <Heading tag="h3">介護勤務申請</Heading>
              <FormField label="申請区分" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>新規</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 対象家族情報区域 */}
              <Heading tag="h3">対象家族情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="対象者氏名">
                  <span>イオン　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者氏名（カナ）">
                  <span>イオン　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="対象者生年月日">
                  <span>1941/12/20</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="性別">
                  <span>男性</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="続柄">
                  <span>父</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="同居/別居">
                  <span>同居</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病名">
                  <span>低酸素脳症、アルツハイマー型認知症</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="傷病発生年月日">
                  <span>2020/10/25</span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務情報区域 */}
              <Heading tag="h3">介護勤務情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="申請日">
                  <span>2020/11/02</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="申請区分">
                  <span>介護勤務</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="開始日">
                  <span>2020/11/21</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="終了日（予定）">
                  <span>2021/11/20</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="始業時刻">
                  <span>9:00</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="終業時刻">
                  <span>17:00</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="短縮時間">
                  <span>1時間</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              {/* 介護勤務　撤回・終了について区域 */}
              <Heading tag="h3">介護勤務　撤回・終了について</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="終了事由">
                  <Text>要介護者が既定の家族の範囲ではなくなったため</Text>
                </FormField>
                <FormField label="事由解消日">
                  <Text>2021/08/31</Text>
                </FormField>
                <FormField label="終了日">
                  <Text>2021/08/31</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 連絡の取れる電話番号区域 */}
              <Heading tag="h3">連絡の取れる電話番号</Heading>
              <FormField label="電話番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>090-1234-5678</Text>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              {/* 配偶者情報区域 */}
              <Heading tag="h3">配偶者情報</Heading>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="社員番号">
                  <Text>AEON123456</Text>
                </FormField>
                <FormField label="所属">
                  <Text>イオンリテール株式会社　海浜幕張店</Text>
                </FormField>
              </FormFieldRow>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓">
                  <Text>申請</Text>
                </FormField>
                <FormField label="名">
                  <Text>花子</Text>
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              {/* 承認情報区域 */}
              <Heading tag="h3">承認情報</Heading>
              <FormField label="承認メモ" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField
                    name="content"
                    rows={3}
                    tag="textarea"
                    defaultValue="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ"
                  />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
