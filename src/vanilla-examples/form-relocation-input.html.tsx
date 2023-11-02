
import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow, FormFieldRowCkb, FormFieldRowNoCalc } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable, InfoTableNone, InfoTableNoneGrey } from 'design/components/molecules/info-table';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { VisitRecordListCust } from 'design/components/organisms/visit-record-list-cust';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { UploadField } from 'design/components/atoms/upload-field';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Radio } from 'design/components/atoms/radio';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { mapModifiers } from 'design/libs/component';
import { CustItemButton } from 'design/components/atoms/cust-item-button';
import { Icon } from 'design/components/atoms/icon';
import { VisitRecordInputCust } from 'design/components/molecules/visit-record-input-cust';
import { RequestInfoItemLong } from 'design/components/atoms/request-info-item';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>赴任手当旅費精算</title>
    <body>
      <Whole navigation={''}>
        {/* 事前確認 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-before"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-next-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">赴任手当旅費精算</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
              </Section>
              <br />
              {/* 社員情報区域 */}
              <Heading tag="h3">事前確認</Heading>
              <Heading tag="h4">この手続きは 「転居を伴う人事異動時に発生した旅費等」 について清算を行うための申請です。<Tag>必須</Tag></Heading>
              <CaptionList>
                <React.Fragment key=".0">
                  <li>
                    申請手続きを行うには、下記チェックボックスにチェックを入れてお進みください。
                  </li>
                </React.Fragment>
              </CaptionList>
              <Checkbox>
                申請内容について了解しました。
              </Checkbox>
              <br />
              <Heading tag="h4">この手続きを申請するにあたり、事前に人事部などに相談をして承認を得ていますか？<Tag>必須</Tag></Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio modifiers="grey" name="name1" checked>
                  はい
                </Radio>
                <Radio modifiers="grey" name="name1">
                  いいえ
                </Radio>
              </FormFieldRow>
              <br />
              <FormField label="承認日付" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    defaultValue={new Date("2022-03-26T20:44:23.000Z")}
                    onDateChange={() => { }}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="承認者の社員番号" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third">
                      検索
                    </Button>
                  </div>
                </FormFieldRow>
              </FormField>
              <FormField label="所属コード" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="97270" />
                </FormFieldRow>
              </FormField>
              <FormField label="所属名称" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="人事教育部" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="開発" />
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="太郎" />
                </FormField>
              </FormFieldRow>
              <Heading tag="h4">今回の転居を伴う人事異動において、既に住所変更届は実施しましたか？<Tag>必須</Tag></Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio modifiers="grey" name="name2" checked>
                  住所変更届はすでに実施した。（昨日までに実施済み）
                </Radio>
                <Radio modifiers="grey" name="name2">
                  住所変更届を本日、この申請の前に実施した。
                </Radio>
                <Radio modifiers="grey" name="name2" id="radio1">
                  未実施である
                </Radio>
              </FormFieldRow>
              <br />
            </div>
          </>
        </Modal>
        {/* 事前確認_PC_入力未完了 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-before-yet"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-next-button-yet">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">赴任手当旅費精算</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
              </Section>
              <br />
              {/* 社員情報区域 */}
              <Heading tag="h3">事前確認</Heading>
              <Heading tag="h4">この手続きは 「転居を伴う人事異動時に発生した旅費等」 について清算を行うための申請です。<Tag>必須</Tag></Heading>
              <CaptionList>
                <React.Fragment key=".0">
                  <li>
                    申請手続きを行うには、下記チェックボックスにチェックを入れてお進みください。
                  </li>
                </React.Fragment>
              </CaptionList>
              <Checkbox>
                申請内容について了解しました。
              </Checkbox>
              <br />
              <Heading tag="h4">この手続きを申請するにあたり、事前に人事部などに相談をして承認を得ていますか？<Tag>必須</Tag></Heading>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio modifiers="grey" name="name3" checked>
                  はい
                </Radio>
                <Radio modifiers="grey" name="name3">
                  いいえ
                </Radio>
              </FormFieldRow>
              <br />
              <Heading tag="h4">今回の転居を伴う人事異動において、既に住所変更届は実施しましたか？<Tag>必須</Tag></Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Radio modifiers="grey" name="name4" checked>
                  住所変更届はすでに実施した。（昨日までに実施済み）
                </Radio>
                <Radio modifiers="grey" name="name4">
                  住所変更届を本日、この申請の前に実施した。
                </Radio>
                <Radio modifiers="grey" name="name4">
                  未実施である
                </Radio>
              </FormFieldRow>
              <br />
            </div>
          </>
        </Modal>
        {/* 申請入力 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>
              <Button modifiers="third" size="huge" className="a-button-big">
                アンケートに戻る
              </Button>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-check-button">
                確認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">赴任手当旅費精算</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYY
                  <br />
                </Text>
              </Section>
              <br />
              {/* 本人情報確認 */}
              <Heading tag="h3">本人情報確認</Heading>
              <Heading tag="h4">以下のあなたの情報に間違いがないかをご確認ください。</Heading>
              <Text>【特に下記の内容にご注意ください】<br />・旧所属、旧住所は正しく表示されていますか？<br />・新所属。新住所は正しく表示されていますか？（誤っていた場合は正しく修正してください）</Text>
              <FormField label="所属" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="0092　イオンアイビス株式会社　店舗システム部" />
                </FormFieldRow>
              </FormField>
              <FormField label="社員番号" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="0543960" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="姓" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="山田" />
                </FormField>
                <FormField label="名" className="p-setting-input-form__form-field">
                  <TextField name="name" type="text" disabled value="佳子" />
                </FormField>
              </FormFieldRow>
              <FormField label="会社コード（原籍）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="0092" />
                </FormFieldRow>
              </FormField>
              <FormField label="会社名（原籍）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="イオンアイビス株式会社" />
                </FormFieldRow>
              </FormField>
              <FormField label="経費負担部署コード" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="9295610" />
                </FormFieldRow>
              </FormField>
              <FormField label="経費負担部署名" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="DXシステム開発グループ" />
                </FormFieldRow>
              </FormField>
              <FormField label="資格" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="G4" />
                </FormFieldRow>
              </FormField>
              <FormField label="異動発令日" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="2021/08/01" />
                </FormFieldRow>
              </FormField>
              <FormField label="旧所属コード" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="99999" />
                </FormFieldRow>
              </FormField>
              <FormField label="旧所属名" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="店舗システム部" />
                </FormFieldRow>
              </FormField>
              <FormField label="新所属コード" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third">
                      検索
                    </Button>
                  </div>
                </FormFieldRow>
              </FormField>
              <FormField label="新所属名" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="DX推進部" />
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号（旧住所）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="123-4567" />
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区（旧住所）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="東京都港区" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地（旧住所）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="赤坂8-5-32" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号（旧住所）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" disabled value="田中駒ビル2F" />
                </FormFieldRow>
              </FormField>
              <FormField label="郵便番号（新住所）" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <div className={mapModifiers('a-address-search-field')}>
                    <TextField />
                    <Button type="button" modifiers="third">
                      検索
                    </Button>
                  </div>
                </FormFieldRow>
              </FormField>
              <FormField label="都道府県・市郡区（新住所）" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" value="千葉県千葉市美浜区" />
                </FormFieldRow>
              </FormField>
              <FormField label="町村・番地（新住所）" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" value="美浜１－１－１" />
                </FormFieldRow>
              </FormField>
              <FormField label="建物名・部屋番号（新住所）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" value="美浜１１１１" />
                </FormFieldRow>
              </FormField>
              <br />
              <Heading tag="h4">今回の赴任に関して、以下の内容を記載ください。</Heading>
              <FormField label="出発日" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    defaultValue={new Date("2022-03-26T20:44:23.000Z")}
                    onDateChange={() => { }}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="出発日時" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown
                    name="something"
                    placeholder="選択してください。"
                  >
                    <React.Fragment key=".0">
                      <option value="1">
                        00:00
                      </option>
                      <option value="2">
                        00:01
                      </option>
                      <option value="3">
                        00:02
                      </option>
                    </React.Fragment>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="到着日" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField
                    defaultValue={new Date("2022-03-26T20:44:23.000Z")}
                    onDateChange={() => { }}
                  />
                </FormFieldRow>
              </FormField>
              <FormField label="到着日時" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown
                    name="something"
                    placeholder="選択してください。"
                  >
                    <React.Fragment key=".0">
                      <option value="1">
                        00:00
                      </option>
                      <option value="2">
                        00:01
                      </option>
                      <option value="3">
                        00:02
                      </option>
                    </React.Fragment>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="赴任種別" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Pulldown
                    name="something"
                    placeholder="選択してください。"
                  >
                    <React.Fragment key=".0">
                      <option value="1">
                        家族同伴赴任
                      </option>
                      <option value="2">
                        00:01
                      </option>
                      <option value="3">
                        00:02
                      </option>
                    </React.Fragment>
                  </Pulldown>
                </FormFieldRow>
              </FormField>
              <FormField label="同伴者情報">
                <VisitRecordListCust
                  onAddRequested={() => { }}
                  onRemoveRequested={function noRefCheck() { }}
                  templateInput={
                    <>
                      <Section className="p-setting-input-form__body">
                        <FormField label="年齢区分" className="p-setting-input-form__form-field">
                          <FormFieldRow columnSize="12" columnSizePC="6">
                            <Pulldown placeholder="選択してください" name="contel">
                              <option value=""></option>
                              <option value="1">テスト１</option>
                              <option value="2">テスト２</option>
                            </Pulldown>
                          </FormFieldRow>
                        </FormField>
                        <FormFieldRow columnSize="6" columnSizePC="6">
                          <FormField label="姓" className="p-setting-input-form__form-field">
                            <TextField type="text" name="text" value="1" />
                          </FormField>
                          <FormField label="名" className="p-setting-input-form__form-field">
                            <TextField type="text" name="text" />
                          </FormField>
                        </FormFieldRow>
                      </Section>
                    </>
                  }
                  titles={
                    <>
                      同伴者1　<Tag>必須</Tag>
                    </>
                  }
                  addText="同伴者を追加"
                >
                  <Section className="p-setting-input-form__body">
                    <FormField label="年齢区分" className="p-setting-input-form__form-field">
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value=""></option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                      </FormFieldRow>
                    </FormField>
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <FormField label="姓" className="p-setting-input-form__form-field">
                        <TextField type="text" name="text" value="1" />
                      </FormField>
                      <FormField label="名" className="p-setting-input-form__form-field">
                        <TextField type="text" name="text" />
                      </FormField>
                    </FormFieldRow>
                  </Section>
                </VisitRecordListCust>
              </FormField>
              <Heading tag="h4">DV案分</Heading>
              <InfoTable header="機能コード入力">
                <InfoTableCell>
                  <FormField label="" className="p-setting-input-form__form-field o-form-nolable"
                    instruction={<CaptionList>
                      <React.Fragment key=".0">※開店・改装時にかかわる費用</React.Fragment>
                    </CaptionList>}>
                    <Checkbox modifiers="button" checked>
                      創業費対象とする
                    </Checkbox>
                  </FormField>
                </InfoTableCell>
                <InfoTableCell>
                  <FormField label="No" className="p-setting-input-form__form-field o-form-nolable"
                    instruction={<CaptionList>
                      <React.Fragment key=".0">※環境活動にかかわる費用</React.Fragment>
                    </CaptionList>}>
                    <Checkbox modifiers="button">
                      環境費対象とする
                    </Checkbox>
                  </FormField>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">交通経路情報</Heading>
              <Heading tag="h4">赴任旅費の交通経路について、以下の情報を登録してください。</Heading>
              <CustItemButton
                handleCustItemClick={() => { }}
                icon={<Icon name="link" />}
                isfront={false}
              >
                「駅すぱあと」で交通費を調べる
              </CustItemButton>
              <br />
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title={<>
                  交通経路1　　　<Text modifiers="purple" className="m-form-field__label-addons">※駅すばあと取込</Text>
                </>}
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="交通機関" labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value="0">バス</option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                        <Checkbox className="m-form-field__label-addons">
                          回数券使用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="発駅・乗車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="泉岳寺" />
                    </FormField>
                    <FormField label="着駅・下車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="八丁堀（東京都）" />
                    </FormField>
                    <FormField label="走行距離" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-km"
                        disabled
                      />
                    </FormField>
                    <FormField label="特急・急行" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                    <FormField label="交通費" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="500"
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="高速代" className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <UnitTextField
                          defaultValue=""
                          name="text"
                          type="text"
                          unit="unit-yen"
                          disabled
                        />
                        <Checkbox className="m-form-field__label-addons">
                          ETC利用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="人数" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="2"
                        name="text"
                        type="text"
                        unit="mei"
                      />
                    </FormField>
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="1000"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="link-new-window" />}
                        isfront
                        id="keiroselect"
                      >
                        経路選択
                      </CustItemButton>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="download-thick" />}
                        isfront
                      >
                        経路登録
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="備考" className="p-setting-input-form__form-field">
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        交通経路を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title="交通経路2"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="交通機関" labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value="0">電車</option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                        <Checkbox className="m-form-field__label-addons">
                          回数券使用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                  </FormFieldRow>
                  <FormField label="回数券種" labelAddons={<Tag>必須</Tag>}>
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <Pulldown placeholder="選択してください" name="contel">
                        <option value="0">東京～大阪のぞみ（本社、稲毛事務所のみ）</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormFieldRow>
                  </FormField>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="走行距離" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-km"
                        disabled
                      />
                    </FormField>
                    <FormField label="特急・急行" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="0"
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="交通費" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="500"
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="高速代" className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <UnitTextField
                          defaultValue=""
                          name="text"
                          type="text"
                          unit="unit-yen"
                          disabled
                        />
                        <Checkbox className="m-form-field__label-addons">
                          ETC利用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="人数" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="2"
                        name="text"
                        type="text"
                        unit="mei"
                      />
                    </FormField>
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="1000"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="link-new-window" />}
                        isfront
                      >
                        経路選択
                      </CustItemButton>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="download-thick" />}
                        isfront
                      >
                        経路登録
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="備考" className="p-setting-input-form__form-field">
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        交通経路を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title="交通経路3"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="交通機関" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value="0">私有車</option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                        <Checkbox className="m-form-field__label-addons">
                          回数券使用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="maps" />}
                        isfront
                      >
                        ルート検索
                      </CustItemButton>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="発駅・乗車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="泉岳寺" />
                    </FormField>
                    <FormField label="着駅・下車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="八丁堀（東京都）" />
                    </FormField>
                    <FormField label="走行距離" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="10"
                        name="text"
                        type="text"
                        unit="unit-km"
                      />
                    </FormField>
                    <FormField label="特急・急行" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                    <FormField label="交通費" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="500"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                    <FormField label="高速代" className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <UnitTextField
                          defaultValue="2000"
                          name="text"
                          type="text"
                          unit="unit-yen"
                        />
                        <Checkbox className="m-form-field__label-addons">
                          ETC利用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="車両台数" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="2"
                        name="text"
                        type="text"
                        unit="unit-dai"
                        disabled
                      />
                    </FormField>
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="1000"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="link-new-window" />}
                        isfront
                      >
                        経路選択
                      </CustItemButton>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="download-thick" />}
                        isfront
                      >
                        経路登録
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="備考" className="p-setting-input-form__form-field">
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        交通経路を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title="交通経路4"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="交通機関" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value="0">タクシー</option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                        <Checkbox className="m-form-field__label-addons">
                          回数券使用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="maps" />}
                        isfront
                      >
                        ルート検索
                      </CustItemButton>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="発駅・乗車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="泉岳寺" />
                    </FormField>
                    <FormField label="着駅・下車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="八丁堀（東京都）" />
                    </FormField>
                    <FormField label="走行距離" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="10"
                        name="text"
                        type="text"
                        unit="unit-km"
                        disabled
                      />
                    </FormField>
                    <FormField label="特急・急行" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                    <FormField label="交通費" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="500"
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="高速代" className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <UnitTextField
                          defaultValue="2000"
                          name="text"
                          type="text"
                          unit="unit-yen"
                        />
                        <Checkbox className="m-form-field__label-addons">
                          ETC利用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="車両台数" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="2"
                        name="text"
                        type="text"
                        unit="unit-dai"
                        disabled
                      />
                    </FormField>
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="1000"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="link-new-window" />}
                        isfront
                      >
                        経路選択
                      </CustItemButton>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="download-thick" />}
                        isfront
                      >
                        経路登録
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="備考" className="p-setting-input-form__form-field">
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        交通経路を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title="交通経路5"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="交通機関" labelAddons={<Tag>必須</Tag>}>
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <Pulldown placeholder="選択してください" name="contel">
                          <option value="0">その他</option>
                          <option value="1">テスト１</option>
                          <option value="2">テスト２</option>
                        </Pulldown>
                        <Checkbox className="m-form-field__label-addons">
                          回数券使用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="発駅・乗車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="泉岳寺" />
                    </FormField>
                    <FormField label="着駅・下車駅" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <TextField type="text" name="text" value="八丁堀（東京都）" />
                    </FormField>
                    <FormField label="走行距離" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-km"
                      />
                    </FormField>
                    <FormField label="特急・急行" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue=""
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="交通費" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="500"
                        name="text"
                        type="text"
                        unit="unit-yen"
                      />
                    </FormField>
                    <FormField label="高速代" className="p-setting-input-form__form-field">
                      <FormFieldRowCkb columnSize="6" columnSizePC="6">
                        <UnitTextField
                          defaultValue=""
                          name="text"
                          type="text"
                          unit="unit-yen"
                        />
                        <Checkbox className="m-form-field__label-addons">
                          ETC利用
                        </Checkbox>
                      </FormFieldRowCkb>
                    </FormField>
                    <FormField label="人数" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="2"
                        name="text"
                        type="text"
                        unit="mei"
                      />
                    </FormField>
                    <FormField label="金額" className="p-setting-input-form__form-field">
                      <UnitTextField
                        defaultValue="1000"
                        name="text"
                        type="text"
                        unit="unit-yen"
                        disabled
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="link-new-window" />}
                        isfront
                      >
                        経路選択
                      </CustItemButton>
                    </FormField>
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="download-thick" />}
                        isfront
                      >
                        経路登録
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <FormField label="備考" className="p-setting-input-form__form-field">
                      <TextField
                        name="content"
                        defaultValue="あああああああああああああああああああああああああああああああああああああああああいいいいいい"
                        rows={2}
                        tag="textarea"
                      />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        交通経路を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="交通費の合計金額" className="p-setting-input-form__form-field">
                  <UnitTextField
                    defaultValue="1000"
                    name="text"
                    type="text"
                    unit="unit-yen"
                    disabled
                  />
                </FormField>
              </FormFieldRow>
              <Heading tag="h4">交通費に関する領収書がある場合は、画像アップロードを行ってください。</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <UploadField description="形式：jpg/png | サイズ：10MBまで">
                  ファイルをドラッグ＆ドロップする<br />
                  または
                </UploadField>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              {/* 赴任手当情報 */}
              <br />
              <Heading tag="h3">宿泊情報</Heading>
              <Heading tag="h4">赴任に伴う宿泊先について、以下に記載してください。</Heading>
              <br />
              <VisitRecordInputCust
                handleCloseClick={() => { }}
                haveclose
                title="宿泊先1"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="宿泊先" labelAddons={<Tag>必須</Tag>}>
                      <Pulldown placeholder="選択してください" name="contel">
                        <option value="0">東京都区内</option>
                        <option value="1">テスト１</option>
                        <option value="2">テスト２</option>
                      </Pulldown>
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="宿泊数" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="1" name="text" type="text" unit="unit-haku" />
                    </FormField>
                    <FormField label="宿泊費" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" />
                    </FormField>
                    <FormField label="人数" labelAddons={<Tag>必須</Tag>} className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="0" name="text" type="text" unit="mei" />
                    </FormField>
                    <FormField label="上限金額" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="0" disabled name="text" type="text" unit="unit-yen" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRowNoCalc columnSize="6" columnSizePC="6">
                    <FormField label="" className="p-setting-input-form__form-field o-form-nolable">
                      <CustItemButton
                        handleCustItemClick={() => { }}
                        icon={<Icon name="add-item" />}
                        isfront
                      >
                        宿泊先を追加
                      </CustItemButton>
                    </FormField>
                  </FormFieldRowNoCalc>
                </Section>
              </VisitRecordInputCust>
              <br />
              <FormField label="宿泊費の合計金額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" disabled name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormField label="荷造費" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <br />
              <Heading tag="h4">宿泊に関する領収書がある場合は、画像アップロードを行ってください。</Heading>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <UploadField description="形式：jpg/png | サイズ：10MBまで">
                  ファイルをドラッグ＆ドロップする<br />
                  または
                </UploadField>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              {/* 赴任手当情報 */}
              <Heading tag="h3">赴任手当情報</Heading>
              <FormField label="基準給与合計" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="1000" disabled name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormField label="上限金額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" disabled name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormField label="赴任手当額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" disabled name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormField label="赴任種類" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <InfoTableNoneGrey header="家族同伴赴任：基準給与の１カ月分（上限あり）">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与１か月分" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="同上" modifiers="long" />
                  </InfoTableNoneGrey>
                  <InfoTableNoneGrey header="単身・独身赴任">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与の１／５" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="基準給与の１／６" modifiers="long" />
                  </InfoTableNoneGrey>
                  <InfoTableNoneGrey header="認定単身赴任（赴任時）">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与の３／５" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="同上" modifiers="long" />
                  </InfoTableNoneGrey>
                  <InfoTableNoneGrey header="認定単身赴任（終了かつ異動により自宅へ戻った場合）">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与の１／５" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="基準給与の１／６" modifiers="long" />
                  </InfoTableNoneGrey>
                  <InfoTableNoneGrey header="認定単身赴任（終了かつ家族呼び寄せの場合）">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与の２／５" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="同上" modifiers="long" />
                  </InfoTableNoneGrey>
                  <InfoTableNoneGrey header="単身赴任終了かつ家族呼び寄せ（１年以内）">
                    <RequestInfoItemLong label="Ｇ５－２以上" value="基準給与の４／５" modifiers="long" />
                    <RequestInfoItemLong label="Ｇ５－１・Ｕ５・Ｄ５以下" value="基準給与の５／６" modifiers="long" />
                  </InfoTableNoneGrey>
                </FormFieldRow>
              </FormField>
              <br />
              <FormField label="寒冷地手当" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" disabled />
                </FormFieldRow>
              </FormField>
              <FormField label="赴任手当額合計" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" disabled />
                </FormFieldRow>
              </FormField>
              <FormField label="総支給額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" disabled />
                </FormFieldRow>
              </FormField>
              <FormField label="振込金額" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="0" name="text" type="text" unit="unit-yen" disabled />
                </FormFieldRow>
              </FormField>
            </div>
          </>
        </Modal>
        {/* 申請確認 */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                申請
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">赴任手当旅費精算</Heading>
                <Heading tag="h5">※内容に問題がなければ、ページ下部のボタンを押下してください。</Heading>
                <br />
                <Heading tag="h2">申請内容</Heading>
              </Section>
              <br />
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
                  <Text>97270</Text>
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
              <Heading tag="h5">今回の転居を伴う人事異動において、既に住所変更届は実施しましたか？</Heading>
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
      </Whole>

      {/* 事前確認_PC_住所届未実施メッセージModal */}
      <Modal
        id="msg-modal1"
        title="　"
        footer={
          <>
            <Button modifiers="primary" type="button">
              はい
            </Button>
          </>
        }
        modifiers="dialog"
      >
        <Text>住所届を実施完了後に手続きを続けてください。</Text>
      </Modal>
      {/* 絞り込み検索Modal */}
      <Modal
        id="setting-search-modal"
        modalSize="medium"
        title="経路選択"
        footer={
          <>
            <Button modifiers="third" size="huge" type="button">
              削除
            </Button>
            <Button modifiers="primary" size="huge" type="button" id="search">
              選択
            </Button>
          </>
        }
      >
        <Heading tag="h3">経路</Heading>
        <Text>使用する経路は□の中にチェックをつけて「選択」を押せば選択することができます。（複数不可）
          <br />
          不要な経路は□の中にチェックをつけて「削除」を押せば削除することができます。（複数可）
        </Text>
        <FormFieldRow columnSize="12" columnSizePC="6">
          <Checkbox modifiers="button" checked>
            羽田空港(東京)～新千歳空港(札幌)
          </Checkbox>
          <Checkbox modifiers="button">
            大阪～海浜幕張
          </Checkbox>
          <Checkbox modifiers="button">
            大阪～海浜幕張
          </Checkbox>
          <Checkbox modifiers="button">
            大阪～海浜幕張
          </Checkbox>
          <Checkbox modifiers="button">
            大阪～海浜幕張
          </Checkbox>
          <Checkbox modifiers="button">
            大阪～海浜幕張
          </Checkbox>
        </FormFieldRow>
        <br />
      </Modal>
    </body>
  </html >
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
