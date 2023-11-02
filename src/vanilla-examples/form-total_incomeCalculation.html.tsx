import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { UnitTextField } from 'design/components/atoms/unit-text-field';
import { FormField, FormFieldRow } from 'design/components/molecules/form-field';
import { Section } from 'design/components/molecules/section';
import { mapModifiers } from 'design/libs/component';
import { Whole } from 'design/components/organisms/whole';
import { Radio } from 'design/components/atoms/radio';
import { Pulldown } from 'design/components/atoms/pulldown';
import { Modal } from 'design/components/organisms/modal';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';
import { Checkbox } from 'design/components/atoms/checkbox';
import { Icon } from 'design/components/atoms/icon';

const TotalIncomeCalculation: React.FC = () => (
  <html>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal"
          footer={
            <>
              <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
                申請書へ反映
              </Button>
              {/* <Button modifiers="primary" size="huge" id="input-form-check-button">
                確認
              </Button> */}
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading">
                <Heading tag="h1">合計所得金額（見積額）計算</Heading>
                <Text>
                  所得⾒積額は、収⼊⾦額等から必要経費等を差し引いた⾦額となります。
                  <br></br>
                  所得の種類が給与である場合には、収⼊⾦額から給与所得控除額を差し引いた⾦額が給与の所得の⾦額となります。
                </Text>

              </Section>


              <Section className="p-setting-input-form__body">

                <Heading tag="h3">所得種類</Heading>

                <FormField label="給与以外の所得がありますか？" >
                  <FormFieldRow columnSize="6" columnSizePC="6">
                    <Radio modifiers="grey" name="regiclass1" value="1" defaultChecked>
                      はい
                    </Radio>
                    <Radio modifiers="grey" name="regiclass1" value="2" >
                      いいえ
                    </Radio>
                  </FormFieldRow>
                </FormField>

                <Heading tag="h3">給与所得</Heading>
                <Text>
                  給与所得とは、勤務先から受ける給料、賞与などの所得をいいます。
                  <br></br>
                  特定⽀出とは、通勤のために必要な交通機関の利⽤等のための⽀出、転任に伴う転居のための⽀出など、 ⼀定の要件に当てはまるものをいいます。
                </Text>

                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">特定支出（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>

                <Heading tag="h3">事業所得</Heading>
                <Text>
                  事業所得とは、農業、漁業、製造業、卸売業、⼩売業、サービス業その他の事業を営んでいる⼈のその事業から⽣ずる所得をいいます。
                  <br></br>
                  ただし、不動産の貸付けや⼭林の譲渡による所得は事業所得ではなく、原則として不動産所得や⼭林所得になります。
                  <Icon name="arrow-up" />
                </Text>
                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">必要経費（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>

                <Heading tag="h3">配当所得</Heading>
                <Text>
                  配当所得とは、株主や出資者が法⼈から受ける剰余⾦や、利益の配当、剰余⾦の分配、投資法⼈からの⾦銭の分配または投資信託（公社債投資信託及び公募公社債等運⽤投資信託以外のもの）及び特定受益証券発⾏信託の収益の分配などに係る所得をいいます。
                  <Icon name="arrow-up" />
                </Text>

                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">その元本を取得するために要した負債の利子（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>

                <Heading tag="h3">不動産取得</Heading>
                <Text>
                  不動産所得とは、次の（1）から（3）までの所得（事業所得または譲渡所得に該当するものを除きます）をいいます。   <br></br>
                  （1）⼟地や建物などの不動産の貸付け
                  <br></br>
                  （2）地上権など不動産の上に存する権利の設定および貸付け
                  <br></br>
                  （3）船舶や航空機の貸付け
                  <Icon name="arrow-up" />
                </Text>

                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">必要経費（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>

                <Heading tag="h3">退職所得</Heading>
                <Text>
                  退職所得とは、退職により勤務先から受ける退職⼿当などの所得をいい、社会保険制度などにより退職に基因して⽀給される⼀時⾦、適格退職年⾦契約に基づいて⽣命保険会社または信託会社から受ける退職⼀時⾦なども退職所得とみなされます。
                  <br></br>
                  また、労働基準法第20条の規定により⽀払われる解雇予告⼿当や賃⾦の⽀払の確保等に関する法律第7条の規定により退職した労働者が弁済を受ける未払賃⾦も退職所得に該当します。
                </Text>
                <Icon name="arrow-down" />
                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">継続年数</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <Pulldown name="something" placeholder="15年">
                      <React.Fragment key=".0">
                        <option value="create_new">20年</option>
                        <option value="reapply">10年</option>
                      </React.Fragment>
                    </Pulldown>
                  </FormFieldRow>

                  <FormFieldRow columnSize="12" columnSizePC="6">

                    <Checkbox name="taxclass" value="1" defaultChecked>
                      主な退職理由は障碍者になったためである
                    </Checkbox>
                  </FormFieldRow>
                  <Heading tag="h5">特定役員退職手当に係る退職所得（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">使用人としての退職金と役員退職金の双方の支給があった場合の退職所得</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>


                <Heading tag="h3">雑所得</Heading>
                <Text>
                  雑所得とは、他の9種類の所得のいずれにも当たらない所得をいい、公的年⾦等、⾮営業⽤貸⾦の利⼦、著述家や作家以外の⼈が受ける原稿料や印税、講演料や放送謝⾦などが該当します。
                </Text>
                <Icon name="arrow-down" />
                <EmailTemplateViewer>
                  <Heading tag="h5">公的年金等の収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">公的年金等控除額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">公的年金等以外の収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                  <Heading tag="h5">必要経費</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>


                <Heading tag="h3">上記以外の取得</Heading>
                <Text>
                  上記以外の所得には次のようなものがあります。
                  <br></br>
                  （1）譲渡所得（⼟地、建物、機械、ゴルフ会員権、⾦地⾦、書画、⾻とうなどの資産の譲渡による所得）
                  <br></br>
                  （2）⼭林所得（⼭林（所有期間5年超）の伐採または譲渡による所得）
                  <br></br>
                  （3）⼀時所得（賞⾦や懸賞当せん⾦、競⾺・競輪の払戻⾦（営利を⽬的とする継続的⾏為から⽣じたものを除きます）、
                  ⽣命保険契約等に基づく満期返戻⾦、遺失物拾得の報労⾦などによる所得）
                  <br></br>
                  （4）総合課税または申告分離課税の対象となる利⼦所得
                  <br></br>
                  （5）申告分離課税の適⽤を受けた⼀般株式等
                  <Icon name="arrow-up" />
                </Text>

                <EmailTemplateViewer>
                  <Heading tag="h5">収入金額（半角）</Heading>
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <UnitTextField disabled />
                  </FormFieldRow>
                </EmailTemplateViewer>

                <Heading tag="h3">所得金額</Heading>
                <FormField label="合計所得金額見積額" className="p-setting-input-form__form-field" >
                  <FormFieldRow columnSize="12" columnSizePC="6">
                    <div className={mapModifiers('a-address-search-field')}>
                      <UnitTextField disabled />
                      <Button type="button" modifiers="third" >
                        計算
                      </Button>
                    </div>
                  </FormFieldRow>
                </FormField>


              </Section>

            </div>
          </>
        </Modal>



      </Whole>
    </body>
  </html >
);

export default renderVanillaExample(<TotalIncomeCalculation />);
