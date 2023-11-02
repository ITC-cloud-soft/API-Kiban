import React from 'react';
import { renderVanillaExample } from './render';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { TextField } from 'design/components/atoms/text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { Tag } from 'design/components/atoms/tag/index';
import { InfoTable, InfoTableNone } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { CalendarField } from 'design/components/atoms/calendar-field';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { HelpButton } from 'design/components/atoms/help-button';
import { VisitRecordListCust, VisitRecordListCustNoAddButton } from 'design/components/organisms/visit-record-list-cust';
import { Radio } from 'design/components/atoms/radio';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Pulldown } from 'design/components/atoms/pulldown';
import { ApprovalStepNo } from 'design/components/atoms/approval-step-no';
import { CaptionList } from 'design/components/atoms/caption-list';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';


const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>健康保険扶養 (変更申請) </title>
    <body>
      <Whole navigation={''}>
        {/* 健康保険扶養 (追加申請) */}
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={false}
          footer={
            <>


              <Button modifiers="third" size="huge">
                前へ
              </Button>
              <Button modifiers="secondary" size="huge">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (追加申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>

              <br />
              <HelpButton type="with-children" id="help-opener">を押すと項目の詳しい説明が表示されます。</HelpButton>
              <Heading tag="h2">申請状態</Heading>
              <ApprovalWorkflow modifiers="auto" >
                <ApprovalStepNo modifiers="auto" step={3}

                  name={
                    <>
                      健康保険
                      <br />
                      被扶養者異動届
                    </>
                  }

                  name2="健康保険被扶養者異動届" />
                <ApprovalStepNo modifiers="auto" step={4}
                  name={
                    <>
                      国民年金第3号
                      <br />
                      被保険者関係届
                    </>
                  }
                  name2="国民年金第3号被保険者関係届" />
                <ApprovalStepNo modifiers="auto" step={3} name="被扶養者現況届" />
              </ApprovalWorkflow>
              <br />
              <Text>
                被扶養者現況届について、以下の情報を入力してください。  <br />
                なお、既に登録されている項目については、入力済となっています。
              </Text>
              <FormFieldRow columnSize="6" columnSizePC="3">
                <TextPlaceholder code="%%7892%%" dataId={1}>

                  <span className="m-form-field__label">　　　イオン健保 　　　</span>

                </TextPlaceholder>
              </FormFieldRow>

              <br />
              {/* 基本情報 */}
              <Heading tag="h3">基本情報</Heading>

              <InfoTable modifiers="no-border-header">
                <InfoTableCell label="被保険者証（記号）" modifiers="pair">
                  <span>8</span>
                </InfoTableCell>
                <InfoTableCell label="被保険者証（番号）" modifiers="pair">
                  <span>123456</span>
                </InfoTableCell>
                <InfoTableCell label="氏名" modifiers="pair">
                  <span>伊音　明美</span>
                </InfoTableCell>
                <InfoTableCell label="所属会社" modifiers="pair">
                  <span>イオンアイビス株式会社</span>
                </InfoTableCell>
                <InfoTableCell label="部室店名" modifiers="pair">
                  <span>デジタルソリューション本部</span>
                </InfoTableCell>

                <InfoTableCell label="今回申請する家族の氏名" modifiers="pair">
                  <span>伊音　春子</span>
                </InfoTableCell>

                <InfoTableCell label="今回申請する" label2="家族の生年月日（和暦）" modifiers="pair">

                  <span>日給月給</span>
                </InfoTableCell>
                <InfoTableCell label="今回申請する" label2="家族の年齢" modifiers="pair">
                  <span>20歳</span>
                </InfoTableCell>
                <InfoTableCell label="被保険者との続柄" modifiers="pair">
                  <span>長女</span>
                </InfoTableCell>
                <InfoTableCell label="申請日（和暦）" modifiers="pair">
                  <span>令和1年9月1日</span>
                </InfoTableCell>


              </InfoTable>
              <br />
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">以前の保険</Heading>
              <FormField label="今回申請する家族が、今まで加入していた健康保険について概要する項目を選択してください。" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio2" value="5" checked modifiers="grey">
                    国民健康保険に被保険者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    健康保険組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="5" modifiers="grey">
                    協会けんぽに被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    共済組合に被扶養者として加入していた
                  </Radio>
                  <Radio name="radio2" value="6" modifiers="grey">
                    上記どれにも該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>




              <FormFieldRow columnSize="6" columnSizePC="6">
                <FormField label="世帯主の姓" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="伊音" />
                </FormField>
                <FormField label="世帯主の名" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <TextField name="name" type="text" value="伊音" />
                </FormField>
              </FormFieldRow>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">扶養の理由</Heading>
              <FormField label="今回、被扶養者として申請することになった理由について、概要する項目を選択してください。" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">

                  <Radio name="radio3" value="6" modifiers="grey">
                    社会保険加入にともなう申請
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    結婚
                  </Radio>
                  <Radio name="radio3" value="5" modifiers="grey">
                    退職
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    収入減少
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    廃棄
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    雇用保険受給終了
                  </Radio>
                  <Radio name="radio3" value="6" modifiers="grey">
                    任意継続の申請
                  </Radio>
                  <Radio name="radio3" value="6" checked modifiers="grey">
                    上記のどれにも該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="加入理由" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                {/* <Text>
                  あなた（被保険者）が、その家族を扶養しなければならない具体的な理由を記入してください。
                </Text> */}
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radio3" value="6" modifiers="grey">
                    入社
                  </Radio>
                  <Radio name="radio3" value="5" modifiers="grey">
                    雇用契約変更
                  </Radio>
                  <Radio name="radio3" value="6" checked modifiers="grey">
                    60歳超再雇用
                  </Radio>
                </FormFieldRow>
              </FormField>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">あなた以外の扶養義務者</Heading>

              <Text>
                今回申請する家族があなた（被保険者）の【子】の場合、あなた（被保険者）の配偶者について

                <br />
                該当する項目を選択し、質問の回答を選択してください。

              </Text>
              <FormField label="設問1" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="6" columnSizePC="6">

                  <Radio name="radio4" value="6" checked modifiers="grey">
                    配偶者あり
                  </Radio>
                  <Radio name="radio4" value="6" modifiers="grey">
                    配偶者なし
                  </Radio>

                </FormFieldRow>
              </FormField>
              <FormField label="設問2" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>

                <FormFieldRow columnSize="12" columnSizePC="6">

                  <Radio name="radio55" value="6" modifiers="grey">
                    今回、配偶者も同時に申請
                  </Radio>
                  <Radio name="radio55" value="6" modifiers="grey">
                    配偶者は、すでにあなた（被保険者）の被扶養者になっている
                  </Radio>
                  <Radio name="radio55" value="6" modifiers="grey">
                    配偶者は、イオン健康保険組合の被保険者
                  </Radio>
                  <Radio name="radio55" value="6" checked modifiers="grey">
                    上記に該当しない
                  </Radio>
                </FormFieldRow>
              </FormField>

              <Text>
                今回申請する家族が【子】【配偶者】以外の場合  <br />
                あなた（被保険者）の他に、今回申請する家族を扶養する義務のある方について記入してください。
              </Text>
              <br />
              <VisitRecordListCustNoAddButton
                onAddRequested={() => { }}
                onRemoveRequested={function noRefCheck() { }}
                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">

                    </Section>
                  </>
                }
                titles={
                  <>
                    扶養する義務のある方（1人目）<Tag>必須</Tag>
                  </>
                }
                addText=""
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="伊音" />
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="正雄" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="続柄"
                    >
                      <Pulldown name="something" placeholder="叔父">
                        <React.Fragment key=".0">
                          <option value="create_new">テスト1</option>
                          <option value="reapply">テスト2</option>
                          <option value="arrangement_completed">テスト3</option>
                        </React.Fragment>
                      </Pulldown>
                    </FormField>

                    <FormField label="年齢" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="20" name="text" type="text" unit="unit-age" />
                    </FormField>

                    <FormField label="職業" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="漁師" />
                    </FormField>

                    <FormField label="月収（毎月）" labelAddons2={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※年金等のすべての収入を含みます。
                        </React.Fragment>
                      </CaptionList>
                    } >

                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />

                    </FormField>
                  </FormFieldRow>
                  <FormField label="現在の状況" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Radio name="RG" value="6" modifiers="grey">
                        同居
                      </Radio>
                      <Radio name="RG" value="6" modifiers="grey">
                        別居
                      </Radio>
                      <Radio name="RG" value="6" modifiers="grey">
                        死別
                      </Radio>
                      <Radio name="RG" value="6" checked modifiers="grey">
                        離別
                      </Radio>
                    </FormFieldRow>
                  </FormField>

                  <FormField label="申請する家族への生活費等の援助" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Radio name="radio8" value="6" checked modifiers="grey">
                        有
                      </Radio>
                      <Radio name="radio8" value="6" modifiers="grey">
                        無
                      </Radio>
                    </FormFieldRow>

                  </FormField>
                  <FormField label="生活費の援助金額（毎月）"  >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                    </FormFieldRow>
                  </FormField>
                </Section>
              </VisitRecordListCustNoAddButton>
              <br />
              <VisitRecordListCust
                onAddRequested={() => { }}
                onRemoveRequested={function noRefCheck() { }}
                templateInput={
                  <>
                    <Section className="p-setting-input-form__body">
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <FormField label="姓" className="p-setting-input-form__form-field" >
                          <TextField name="name" type="text" value="伊音" />
                        </FormField>
                        <FormField label="名" className="p-setting-input-form__form-field" >
                          <TextField name="name" type="text" value="正雄" />
                        </FormField>
                      </FormFieldRow>
                      <FormFieldRow columnSize="12" columnSizePC="6">
                        <FormField label="続柄"
                        >
                          <Pulldown name="something" placeholder="叔父">
                            <React.Fragment key=".0">
                              <option value="create_new">テスト1</option>
                              <option value="reapply">テスト2</option>
                              <option value="arrangement_completed">テスト3</option>
                            </React.Fragment>
                          </Pulldown>
                        </FormField>

                        <FormField label="年齢" className="p-setting-input-form__form-field">
                          <UnitTextField defaultValue="20" name="text" type="text" unit="unit-age" />
                        </FormField>

                        <FormField label="職業" className="p-setting-input-form__form-field" >
                          <TextField name="name" type="text" value="漁師" />
                        </FormField>

                        <FormField label="月収（毎月）" labelAddons2={
                          <CaptionList>
                            <React.Fragment key=".0">
                              ※年金等のすべての収入を含みます。
                            </React.Fragment>
                          </CaptionList>
                        } >

                          <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />

                        </FormField>
                      </FormFieldRow>
                      <FormField label="現在の状況" className="p-setting-input-form__form-field" >
                        <FormFieldRow columnSize="6" columnSizePC="6">
                          <Radio name="RG" value="6" modifiers="grey">
                            同居
                          </Radio>
                          <Radio name="RG" value="6" modifiers="grey">
                            別居
                          </Radio>
                          <Radio name="RG" value="6" modifiers="grey">
                            死別
                          </Radio>
                          <Radio name="RG" value="6" checked modifiers="grey">
                            離別
                          </Radio>
                        </FormFieldRow>
                      </FormField>

                      <FormField label="申請する家族が同居の場合は、収入について当てはまるすべてを選択してください。" className="p-setting-input-form__form-field" >
                      </FormField>
                      <FormFieldRow columnSize="6" columnSizePC="6">
                        <Checkbox name="C3" value="2" checked modifiers="button">
                          給与収入
                        </Checkbox>
                        <Checkbox name="C3" value="2" modifiers="button">
                          自営業収入
                        </Checkbox>
                        <Checkbox name="C3" value="2" modifiers="button">
                          年金収入
                        </Checkbox>
                        <Checkbox name="C3" value="2" modifiers="button">
                          退職
                        </Checkbox>
                        <Checkbox name="C3" value="2" modifiers="button">
                          その他
                        </Checkbox>

                      </FormFieldRow><br />

                      <FormField label="現在の状況を具体的に記入してください" className="p-setting-input-form__form-field" >
                        <FormFieldRow columnSize="12" columnSizePC="12">
                          <TextField tag="textarea" type="text" rows="3"
                            value="" />
                        </FormFieldRow>
                      </FormField>
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        <InfoTableNone> <div className="o-form-nobottom">
                          <FormField label="添付書類（給与収入）" >
                            <Text>
                              直近3ヵ月の給与明細【写し】
                              <br />
                              休職中の場合は休職前3ヵ月の給与明細【写し】または手当金の支給決定通知書【写し】
                            </Text>
                          </FormField>

                        </div> </InfoTableNone>
                      </FormFieldRow>
                      <br />
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        <InfoTableNone> <div className="o-form-nobottom">
                          <FormField label="添付書類（自営業収入）"  >
                            <Text>
                              確定申告書【写し】と収支内訳書【写し】
                            </Text>
                          </FormField>

                        </div> </InfoTableNone>
                      </FormFieldRow>
                      <br />
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        <InfoTableNone> <div className="o-form-nobottom">
                          <FormField label="添付書類（年金収入）" >
                            <Text>
                              今後の年金額がわかる年金振込通知書【写し】と（非）課税証明書【原本】
                            </Text>
                          </FormField>

                        </div> </InfoTableNone>
                      </FormFieldRow>
                      <br />
                      <FormFieldRow columnSize="12" columnSizePC="12">
                        <InfoTableNone> <div className="o-form-nobottom">
                          <FormField label="添付書類（退職）" >
                            <Text>
                              退職後の雇用保険の受給について、
                              <br />
                              「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。
                            </Text>
                          </FormField>

                        </div> </InfoTableNone>
                      </FormFieldRow>

                      <FormField label="申請する家族への生活費等の援助">
                        <FormFieldRow columnSize="6" columnSizePC="6">
                          <Radio name="radio8" value="6" checked modifiers="grey">
                            有
                          </Radio>
                          <Radio name="radio8" value="6" modifiers="grey">
                            無
                          </Radio>
                        </FormFieldRow>

                      </FormField>
                      <FormField label="生活費の援助金額（毎月）"  >
                        <FormFieldRow columnSize="12" columnSizePC="6">
                          <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                        </FormFieldRow>
                      </FormField>
                    </Section>

                  </>
                }
                titles={
                  <>
                    扶養する義務のある方（2人目）<Tag>必須</Tag>
                  </>
                }
                addText="扶養する義務のある方を追加"
              >
                <Section className="p-setting-input-form__body">
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <FormField label="姓" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="伊音" />
                    </FormField>
                    <FormField label="名" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="正雄" />
                    </FormField>
                  </FormFieldRow>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <FormField label="続柄"
                    >
                      <Pulldown name="something" placeholder="叔父">
                        <React.Fragment key=".0">
                          <option value="create_new">テスト1</option>
                          <option value="reapply">テスト2</option>
                          <option value="arrangement_completed">テスト3</option>
                        </React.Fragment>
                      </Pulldown>
                    </FormField>

                    <FormField label="年齢" className="p-setting-input-form__form-field">
                      <UnitTextField defaultValue="20" name="text" type="text" unit="unit-age" />
                    </FormField>

                    <FormField label="職業" className="p-setting-input-form__form-field" >
                      <TextField name="name" type="text" value="漁師" />
                    </FormField>

                    <FormField label="月収（毎月）" labelAddons2={
                      <CaptionList>
                        <React.Fragment key=".0">
                          ※年金等のすべての収入を含みます。
                        </React.Fragment>
                      </CaptionList>
                    } >

                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />

                    </FormField>
                  </FormFieldRow>
                  <FormField label="現在の状況" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Radio name="RG" value="6" modifiers="grey">
                        同居
                      </Radio>
                      <Radio name="RG" value="6" modifiers="grey">
                        別居
                      </Radio>
                      <Radio name="RG" value="6" modifiers="grey">
                        死別
                      </Radio>
                      <Radio name="RG" value="6" checked modifiers="grey">
                        離別
                      </Radio>
                    </FormFieldRow>
                  </FormField>

                  <FormField label="申請する家族が同居の場合は、収入について当てはまるすべてを選択してください。" className="p-setting-input-form__form-field" >
                  </FormField>
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Checkbox name="C3" value="2" checked modifiers="button">
                      給与収入
                    </Checkbox>
                    <Checkbox name="C3" value="2" modifiers="button">
                      自営業収入
                    </Checkbox>
                    <Checkbox name="C3" value="2" modifiers="button">
                      年金収入
                    </Checkbox>
                    <Checkbox name="C3" value="2" modifiers="button">
                      退職
                    </Checkbox>
                    <Checkbox name="C3" value="2" modifiers="button">
                      その他
                    </Checkbox>

                  </FormFieldRow><br />

                  <FormField label="現在の状況を具体的に記入してください" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="12" columnSizePC="12">
                      <TextField tag="textarea" type="text" rows="3"
                        value="" />
                    </FormFieldRow>
                  </FormField>
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone> <div className="o-form-nobottom">
                      <FormField label="添付書類（給与収入）"  >
                        <Text>
                          直近3ヵ月の給与明細【写し】
                          <br />
                          休職中の場合は休職前3ヵ月の給与明細【写し】または手当金の支給決定通知書【写し】
                        </Text>
                      </FormField>
                    </div> </InfoTableNone>
                  </FormFieldRow>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone> <div className="o-form-nobottom">
                      <FormField label="添付書類（自営業収入）" >
                        <Text>
                          確定申告書【写し】と収支内訳書【写し】
                        </Text>
                      </FormField>
                    </div> </InfoTableNone>
                  </FormFieldRow>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone> <div className="o-form-nobottom">
                      <FormField label="添付書類（年金収入）">
                        <Text>
                          今後の年金額がわかる年金振込通知書【写し】と（非）課税証明書【原本】
                        </Text>
                      </FormField>
                    </div> </InfoTableNone>
                  </FormFieldRow>
                  <br />
                  <FormFieldRow columnSize="12" columnSizePC="12">
                    <InfoTableNone> <div className="o-form-nobottom">
                      <FormField label="添付書類（退職）" >
                        <Text>
                          退職後の雇用保険の受給について、
                          <br />
                          「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。
                        </Text>
                      </FormField>
                    </div> </InfoTableNone>
                  </FormFieldRow>

                  <FormField label="申請する家族への生活費等の援助" className="p-setting-input-form__form-field" >
                    <FormFieldRow columnSize="6" columnSizePC="6">
                      <Radio name="radio8" value="6" checked modifiers="grey">
                        有
                      </Radio>
                      <Radio name="radio8" value="6" modifiers="grey">
                        無
                      </Radio>
                    </FormFieldRow>

                  </FormField>
                  <FormField label="生活費の援助金額（毎月）"  >
                    <FormFieldRow columnSize="12" columnSizePC="6">
                      <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                    </FormFieldRow>
                  </FormField>
                </Section>
              </VisitRecordListCust>
              <br />
              <div className="m-info-table__header"></div>
              <br />



              <Heading tag="h3">居住区分</Heading>
              <Text>

                現在、あなた（被保険者）と申請する家族は同居していますか？別居されていますか？<br />
                該当する項目を選択し、質問の回答を選択してください。<br />
                あなた（被保険者）と申請するご家族の住民票が分かれている場合、双方の世帯全員分の準民票【原本】と続柄がわかる戸籍抄<br />
                本【原本】を提出してください。<br />
              </Text>
              <FormField label="現在の状況" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radio9" value="6" modifiers="grey">
                    同居
                  </Radio>
                  <Radio name="radio9" value="6" checked modifiers="grey">
                    別居
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="別居の理由は？" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radioA" value="6" modifiers="grey">
                    あなた（被保険者）が単身赴任のため（ただし独身者は除く）
                  </Radio>
                  <Radio name="radioA" value="6" checked modifiers="grey">
                    申請の子どもが就学のため
                  </Radio>
                  <Radio name="radioA" value="6" modifiers="grey">
                    申請の家族が特別な施設に入所･入院のため
                  </Radio>
                  <Radio name="radioA" value="6" modifiers="grey">
                    その他
                  </Radio>
                </FormFieldRow>

              </FormField>


              <FormFieldRow columnSize="12" columnSizePC="12">
                <TextField tag="textarea" type="text" rows="3"
                  value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
              </FormFieldRow>


              <FormField label="今回申請する家族は、他に同居人はいますか？" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radioB" value="6" modifiers="grey">
                    いない
                  </Radio>
                  <Radio name="radioB" value="6" checked modifiers="grey">
                    その他
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="その同居人は、あなた（被保険者）にとってどの続柄に当たりますか？" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Checkbox name="radioC" value="6" modifiers="button">
                    夫または妻
                  </Checkbox>
                  <Checkbox name="radioC" value="6" modifiers="button">
                    子
                  </Checkbox>
                  <Checkbox name="radioC" value="6" modifiers="button">
                    兄弟姉妹
                  </Checkbox>
                  <Checkbox name="radioC" value="6" checked modifiers="button">
                    その他
                  </Checkbox>
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <FormField label="合計" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-people" />
                </FormField>
              </FormFieldRow>
              <FormField label="別居の理由がその他の場合、以下にお答えください。" className="p-setting-input-form__form-field" >

              </FormField>
              <FormField label="あなた（被保険者）から申請する家族への送金について" className="p-setting-input-form__form-field"

                labelAddons2={
                  <text>
                    <Tag>必須</Tag>
                  </text>
                } >

                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radioD" value="6" modifiers="grey">
                    送金していない
                  </Radio>
                  <Radio name="radioD" value="6" checked modifiers="grey">
                    送金している
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="送金額（毎月）" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      直近3ヵ月分の送金証明（銀行や郵便局の振込票等）の【写し】
                      <br />
                      ※手渡し、振込人と受取人が確認できないものは認められません
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">現在の状況</Heading>

              <Text>
                今回申請する家族の、現在の状況について該当するすべての項目を選択してください。
              </Text>

              <FormFieldRow columnSize="6" columnSizePC="6">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  中学生まで
                </Checkbox>
                <Checkbox name="radio6" value="6" modifiers="button">
                  高校生以上で就学中
                </Checkbox>

              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類" >
                    <Text>
                      在学証明書【原本】<br />
                      ※発行から3ヵ月以内（学生証の写しは不可）
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />

              <FormFieldRow columnSize="12" columnSizePC="12">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  収入がある
                </Checkbox>
                <br />

              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="注意事項"  >
                    <Text>
                      「収入の状況」に回答し、添付書類を提出してください。
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  1年以内に退職（定年退職含む）して、現在無職
                </Checkbox>
                <br />

              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="注意事項"  >
                    <Text>
                      退職後の雇用保険の受給について、
                      <br />
                      「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  配偶者で、専業主婦（夫）
                </Checkbox>
                <br />

              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      （非）課税証明書【原本】<br />
                      ※ただし（非）課税証明書に給与収入が記載されている場合は、<br />
                      「退職後の雇用保険受給状況」に回答し、添付書類を提出してください。
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  病気療養中のため働けない 障害のため働けない

                </Checkbox>
                <br />

              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Text>
                  傷病手当金、労災の休業補償給付、障害年金を受給、または需給予定がある場合は、「収入の状況」を必ず記入してください。
                </Text>
              </FormFieldRow><br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類" >
                    <Text>

                      ①（非）課税証明書【原本】<br />

                      <p className="  a-text--marginleft2">
                        ※ただし（非）課税証明書に給与収入が記載されている場合は、<br />
                      </p>
                      <p className="  a-text--marginleft3">
                        退職後の雇用保険の受給について「退職後の雇用保険受給状況」に回答し、<br />
                        添付書類も提出してください。<br />
                      </p>

                      ②働けないことを証明する、医師の診断書【原本】または障害者手帳の【写し】<br />
                      <br />
                      ※①と②両方を提出してください。
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <Checkbox name="radio6" value="6" checked modifiers="button">
                  配偶者以外で理由があるため働けない、働いていない
                </Checkbox>
                <br />

              </FormFieldRow><br />
              <FormField label="理由" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField tag="textarea" type="text" rows="3"
                    value="ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      <p >
                        ①（非）課税証明書【原本】（収入がないことの証明） <br />
                      </p>
                      <p className="  a-text--marginleft2">
                        ※ただし（非）課税証明書に給与収入が記載されている場合は、 <br />
                      </p>
                      <p className="  a-text--marginleft3">
                        退職後の雇用保険の受給について「退職後の雇用保険受給状況」に回答し、 <br />
                        添付書類も提出してください。 <br />
                      </p>
                      <p className="  a-text--marginleft">
                        ②第三者（同居でない親戚（親･兄弟姉妹を除く）･知人の方など）による事実の証明書に <br />
                      </p>
                      <p className="  a-text--marginleft2-1">
                        働けない理由をできるだけ詳しく記入し提出してください。 <br />
                      </p>
                      <p className="  a-text--marginleft">
                        ※ただし、退職して雇用保険受給予定（受給制限期間）が受給中の場合、 <br />
                      </p>
                      <p className="  a-text--marginleft2-1">
                        ①②は不要ですが、「退職後の雇用保険受給状況」に回答し添付書類を提出してください。 <br />
                      </p>

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">収入の状況</Heading>
              <Text>
                今回申請する家族の現在の収入について、すべての項目について有か無を回答してください。  <br />
                有の項目については、税金等控除前の総支給額を回答してください。
              </Text>
              <Heading tag="h4">1）給与収入（交通費も含む）</Heading>
              <FormField label="パート･アルバイト（フリーター含む）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radioZ" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radioZ" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="6">
                <Checkbox name="taxclass" value="1" defaultChecked>
                  その他
                </Checkbox>
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="12" columnSizePC="12">
                <TextField name="name" type="text" value="その他" />
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="radiox" value="6" modifiers="grey">
                  収入無
                </Radio>
                <Radio name="radiox" value="6" checked modifiers="grey">
                  収入有
                </Radio>
              </FormFieldRow>
              <br />
              <FormField label="毎月" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormField label="賞与年額" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormField label="合計年間収入見込" className="p-setting-input-form__form-field" labelAddons={<Tag>必須</Tag>}>
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>

                      直近の給与明細（3ヵ月分）【写し】 <br />
                      ※働き始めたばかりの場合は、雇用契約書（交通費を含んだ報酬がわかるもの）【写し】もしくは、 <br />
                      勤務先に発行してもらった給与見込証明書【原本】


                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <Heading tag="h4">2）年金収入</Heading>
              <FormField label="老齢 基礎年金･構成年金" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiod" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiod" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類" >
                    <Text>
                      ①直近のすべての年金振込通知書【写し】  <br />
                      ②（非）課税証明書【原本】  <br />
                      <br />
                      ※①②の両方を提出  <br />
                      ※退職時や65歳到達時、年金額が変更になる可能性があります。  <br />
                      年金事務所に確認して変更後の金額が記載されたもの【写し】の提出が必要です。

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <FormField label="遺族年金" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiod" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiod" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      ①直近のすべての年金振込通知書【写し】  <br />
                      ②（非）課税証明書【原本】  <br />
                      <br />
                      ※①②の両方を提出  <br />
                      ※退職時や65歳到達時、年金額が変更になる可能性があります。  <br />
                      年金事務所に確認して変更後の金額が記載されたもの【写し】の提出が必要です。

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>


              <br />
              <FormField label="障害年金" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiod" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiod" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      ①直近のすべての年金振込通知書【写し】  <br />
                      ②（非）課税証明書【原本】  <br />
                      <br />
                      ※①②の両方を提出  <br />
                      ※退職時や65歳到達時、年金額が変更になる可能性があります。  <br />
                      年金事務所に確認して変更後の金額が記載されたもの【写し】の提出が必要です。

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>
              <br />
              <FormField label="退職年金（共済組合･企業年金･厚生年金基金などからの年金）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiod" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiod" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>
              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>
              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      ①直近のすべての年金振込通知書【写し】  <br />
                      ②（非）課税証明書【原本】  <br />
                      <br />
                      ※①②の両方を提出  <br />
                      ※退職時や65歳到達時、年金額が変更になる可能性があります。  <br />
                      年金事務所に確認して変更後の金額が記載されたもの【写し】の提出が必要です。

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <Heading tag="h4">3）事業収入</Heading>
              <FormField label="自営業収入、農業･行業･林業収入等" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiod" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiod" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      ①直近の確定申告書控え【写し】  <br />
                      ②収支内訳書等明細のわかる書類【写し】  <br />
                      <br />
                      ※①と②の両方を提出  <br />

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <Heading tag="h4">4）その他収入</Heading>
              <Text>
                例）家賃･利子･配当など
              </Text>
              <FormFieldRow columnSize="12" columnSizePC="6">
                <TextField name="name" type="text" value="その他" />
              </FormFieldRow>
              <br />
              <FormFieldRow columnSize="6" columnSizePC="6">
                <Radio name="radiod" value="6" modifiers="grey">
                  収入無
                </Radio>
                <Radio name="radiod" value="6" checked modifiers="grey">
                  収入有
                </Radio>
              </FormFieldRow>
              <br />

              <FormField label="年額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      ①直近の確定申告書控え【写し】  <br />
                      ②収支内訳書等明細のわかる書類【写し】  <br />
                      <br />
                      ※①と②の両方を提出  <br />

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <Heading tag="h4">5）雇用保険の各種給付金</Heading>
              <FormField label="失業保険（求職者給付金）、育児･介護休業給付金、教育訓練給付金等）" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiog" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiog" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="基本日額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>

                      雇用保険受給資格者証 1～4面【写し】 <br />
                      <br />
                      （給付期間･給付額がわかるもの）

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />

              <Heading tag="h4">6）健康保険の各種給付金</Heading>
              <FormField label="傷病手当金" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiog" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiog" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="支給日額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>

                      雇用保険受給資格者証 1～4面【写し】 <br />
                      <br />
                      （給付期間･給付額がわかるもの）

                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <FormField label="出産手当金" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiog" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiog" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="支給日額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類" >
                    <Text>

                      支給額決定通知書【写し】
                      <br />
                      （受給期間･需給金額がわかるもの）
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow>

              <br />
              <Heading tag="h4">7）労災保険の各種給付金</Heading>
              <FormField label="休業（補償）給付金等" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="radiog" value="6" modifiers="grey">
                    収入無
                  </Radio>
                  <Radio name="radiog" value="6" checked modifiers="grey">
                    収入有
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="支給日額" labelAddons2={<Tag>必須</Tag>} >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <UnitTextField defaultValue="20,000" name="text" type="text" unit="unit-yen" />
                </FormFieldRow>
              </FormField>

              <FormFieldRow columnSize="12" columnSizePC="12">
                <InfoTableNone> <div className="o-form-nobottom">
                  <FormField label="添付書類"  >
                    <Text>
                      支給額決定通知書【写し】
                      <br />
                      （受給期間･需給金額がわかるもの）
                    </Text>
                  </FormField>
                </div> </InfoTableNone>
              </FormFieldRow> <br />
              <div className="m-info-table__header"></div>
              <br />

              <Heading tag="h3">退職後の雇用保険受給状況</Heading>
              <Text>
                A、Bのどちらかに該当する場合は、以下の項目について回答してください。 <br />
                <br />
                A）最近（1年以内に）退職した。 <br />
                B）提出する（非）課税証明書の給与収入欄に金額の記載がある。
              </Text>

              <FormField label="退職日" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <CalendarField defaultValue={new Date('2022-03-26T20:44:23.000Z')} onDateChange={() => { }} />
                </FormFieldRow>
              </FormField>
              <FormField label="退職日（和暦）" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" disabled value="令和3年1月1日" />
                </FormFieldRow>
              </FormField>

              <FormField label="勤務先" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <TextField name="name" type="text" value="" />
                </FormFieldRow>
              </FormField>

              <FormField label="雇用保険の失業給付について" className="p-setting-input-form__form-field">
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Text>
                    どれか一つ概要する項目にチェックをしてください。
                  </Text>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="6">
                  <Radio name="radiogd" value="6" checked modifiers="grey">
                    受給資格がない
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給資格はあるが受給しない
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給予定がある
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給延長する･受給延長中
                  </Radio>
                  <Radio name="radiogd" value="6" modifiers="grey">
                    受給中または受給終了した
                  </Radio>
                </FormFieldRow>
              </FormField>

              <FormField label="理由" className="p-setting-input-form__form-field" >
                <FormFieldRow columnSize="6" columnSizePC="6">
                  <Radio name="RL" value="6" checked modifiers="grey">
                    加入していなかった
                  </Radio>
                  <Radio name="RL" value="6" modifiers="grey">
                    加入期間不足
                  </Radio>
                  <Radio name="RL" value="6" modifiers="grey">
                    その他
                  </Radio>
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <TextField name="name" type="text" value="その他" />
                </FormFieldRow>
                <br />
                <FormFieldRow columnSize="12" columnSizePC="12">
                  <InfoTableNone> <div className="o-form-nobottom">
                    <FormField label="添付書類">
                      <Text>
                        退職証明書【原本】  <br />
                        公務員の場合は、辞令【写し】

                      </Text>
                    </FormField>
                  </div> </InfoTableNone>
                </FormFieldRow>
                <br />
              </FormField>











            </div>
          </>
        </Modal>
        {/* 書類ダウンロード_PC_共通タブ*/}
        <Modal
          modifiers="fullscreen"
          id="full-modal-confirm"
          footer={
            <>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                前へ
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                下書き保存
              </Button>
              <Button modifiers="primary" size="huge" id="confirm-app-button">
                次へ
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">健康保険扶養 (追加申請)</Heading>
                <Text>
                  XXXXXXX（説明文言未定）
                  <br />
                  YYYYYYYY
                </Text>
                <br />
              </Section>
              <br />
              <Heading tag="h2">申請状態</Heading>

            </div>
          </>
        </Modal>
      </Whole>
      {/* 適用制度について説明文言 */}
      <Modal id="modal_help_school_info" headerIcon="help" title="適用制度について">
        <Heading tag="h4">転居制限制度とは</Heading>
        <Text>
          ・「転居制限適用申請書」をご提出ください。
          <br />
          ・配偶者も適用希望の場合、配偶者も「転居制限適用申請書」の提出が必要です。
        </Text>
        <Heading tag="h4">ペア転勤制度適用とは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・「ペア転勤適用申請書」をご提出ください。
        </Text>
        <Heading tag="h4">制度適用なしとは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・申請書提出が不要です。
        </Text>
        <Heading tag="h4">勤務エリア区分変更とは</Heading>
        <Text>
          ・勤務エリア区分に準じて、転居を伴う人事異動が発生します。
          <br />
          ・縮小のみ申請できます。所轄人事にご相談ください。
        </Text>
      </Modal>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
