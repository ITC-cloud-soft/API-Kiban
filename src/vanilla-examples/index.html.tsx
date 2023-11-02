import React from 'react';
import { renderVanillaExample } from './render';

import { Whole } from 'design/components/organisms/whole';
import { Section } from 'design/components/molecules/section';
import { Heading } from 'design/components/atoms/heading';

const IndexPage: React.FC = () => (
  <html>
    <body>
      <Whole modifiers="with-bg">
        <div
          style={{
            padding: '20px',
          }}
        >
          <Section modifiers="fullpage">
            <Section modifiers="card-border">
              <Heading>Page List</Heading>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  <a href="sample.html">Sample Components</a>
                </li>
              </ul>
            </Section>
            <br />

            <Section modifiers="card-border">
              <Heading tag="h2">ライフスタイル</Heading>
              <ul>
                <li>
                  <a href="form-life-style-list.html">
                    イメージ＿ライフスタイルプラン_管理機能画面についての画面項目説明書_V1.00.xlsx------ライフスタイルプラン照会一覧
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input1.html">
                    ライフスタイルプラン新規申請_１-b．転居制限解除画面についての画面項目説明書_V1.00.xlsx------アンケート事由選択
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input2.html">
                    ライフスタイルプラン新規申請_２．勤務エリア変更画面についての画面項目説明書_V1.00.xlsx-----勤務エリア変更_入力画面_L区分
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input3.html">
                    ライフスタイルプラン新規申請_３-a．ペア転勤-適用画面についての画面項目説明書_V1.00.xlsx----ペア転勤適用_入力画面_住所変更なし
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input4.html">
                    ライフスタイルプラン新規申請_３-b．ペア転勤-解除画面についての画面項目説明書_V1.00.xlsx------ペア転勤解除_入力画面_その他
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input5.html">
                    ライフスタイルプラン新規申請_１-a．転居適用画面についての画面項目説明書_V1.00.xlsx------アンケート事由選択
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input6.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_所属長確認$転居制限適用申請_Co人事担当者チェック_提案可
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input7.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_Co人事担当者チェック_確認$転居制限適用申請_Co人事部長決裁_可（適用・解除）提案
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input8.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_Co人事部長決裁_可（待機）提案
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input9.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_本社人事担当者チェック
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input10.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_本社人事部長決裁_可（適用・解除）提案
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input11.html">
                    転居制限・勤務エリア変更承認画面------転居制限適用申請_本社人事部長決裁_可（待機）提案
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input12.html">
                    ペア転勤承認画面------ペア転勤適用_配偶者
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input13.html">
                    ペア転勤承認画面------ペア転勤適用_所属長確認_Co人事担当者チェック
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input14.html">
                    ペア転勤承認画面------ペア転勤適用_本社人事担当者チェック
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input15.html">
                    ペア転勤承認画面------ペア転勤適用_本社人事部長決裁_可（適用・解除）提案
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-life-style-restrictions-lift-input16.html">
                    ペア転勤承認画面------ペア転勤適用_本社人事部長決裁_可（待機）提案
                  </a>
                </li>
              </ul>
            </Section>


            <Section modifiers="card-border">
              <Heading tag="h2">赴任手当旅費精算</Heading>
              <ul>
                <li>
                  <a href="form-relocation-allowance-travelExpenses-list.html">
                    赴任手当旅費精算照会一覧
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-relocation-input.html">
                    赴任手当旅費精算
                  </a>
                </li>
              </ul>
            </Section>

            <Section modifiers="card-border">

              <Heading tag="h2">単身赴任</Heading>

              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-input.html">認定単身赴任ー新規申請ー0_事前アンケート</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-list.html">認定単身赴任ー所属選択</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input.html">認定単身赴任ー新規申請_1_申請_認定事由①_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input2.html">認定単身赴任ー新規申請_1_申請_認定事由②_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input3.html">認定単身赴任ー新規申請_1_申請_認定事由③_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input4.html">認定単身赴任ー新規申請_1_申請_認定事由④_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input5.html">認定単身赴任ー新規申請_1_申請_認定事由⑤_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input6.html">認定単身赴任ー新規申請_1_申請_認定事由⑥_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-input7.html">認定単身赴任ー新規申請_1_申請_認定事由⑦_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-terminationApplication-input.html">認定単身赴任ー終了申請_申請_A家族を呼び寄せる_入力</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-terminationApplication-inputB.html">B家族の元へ帰る</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-terminationApplication-inputC.html">C期間満了</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-terminationApplication-inputD.html">D認定事由の消滅</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm.html">認定単身赴任ー新規申請_1_申請_認定事由①_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm2.html">認定単身赴任ー新規申請_1_申請_認定事由②_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm3.html">認定単身赴任ー新規申請_1_申請_認定事由③_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm4.html">認定単身赴任ー新規申請_1_申請_認定事由④_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm5.html">認定単身赴任ー新規申請_1_申請_認定事由⑤_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm6.html">認定単身赴任ー新規申請_1_申請_認定事由⑥_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-confirm7.html">認定単身赴任ー新規申請_1_申請_認定事由⑦_確認</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-approval.html">認定単身赴任ー承認_部室店長_認定事由①</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-approval2.html">認定単身赴任ー承認_BS業務部_認定事由①</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-approval3.html">認定単身赴任ー承認_人事部長_認定事由①</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-reasonbook-input.html">認定単身赴任ー新規申請_介護理由書作成</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-reasonbook-input2.html">認定単身赴任ー新規申請_看病理由書作成</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-approval4.html">認定単身赴任ー終了申請_承認_BS業務部_A家族を呼び寄せる</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-movedAlone-questionnaire-application-approval5.html">認定単身赴任ー終了申請_承認_人事部長_A家族を呼び寄せる</a>
                </li>
              </ul>


            </Section>

            <Section modifiers="card-border">
              <Heading tag="h2">厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届</Heading>
              <ul>
                <li>
                  <a href="form-address-national-pension-no3-input.html">
                    厚生年金保険　被保険者住所変更届・国民年金第3号被保険者住所変更届
                  </a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">通勤許可申請</Heading>
              <ul>
                <li>
                  <a href="form-commuting-input.html">通勤許可申請</a>
                </li>
              </ul>
            </Section>
            <br />

            <Section modifiers="card-border">
              <Heading tag="h2">健康保険扶養</Heading>

              <ul>
                <li>
                  <a href="form-health-support-input.html">健康保険扶養 (追加申請)</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-addition-input-1.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保1</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-addition-input-2.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保2</a>
                </li>
              </ul>


              <ul>
                <li>
                  <a href="form-health-addition-input-3.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保3</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="form-health-addition-input-4.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保4</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="form-health-addition-input-5.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保5</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-addition-input-6.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保6</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-addition-input-7.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保7</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-addition-input-8.html">健康保険扶養 (追加申請)-被扶養者現況届_PC_イオン健保8</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" form-health-support-OK-input.html">健康保険扶養 (追加申請)―判定OK</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" form-health-support-NG-input.html">健康保険扶養 (追加申請)―判定NG</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" form-health-support-SETTING-input.html">健康保険扶養 (追加申請)―回答途中</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=" form-health-addition-input-change.html">被扶養者現況届_PC_イオン健保_変更申請</a>
                </li>
              </ul>

            </Section>
            <Section modifiers="card-border">
              <Heading tag="h2">健康保険扶養(王)</Heading>
              <ul>
                <li>
                  <a href="form-health-input.html">追加申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-pattern-input.html">健康保険被扶養者異動届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-pattern-change.html">健康保険被扶養者異動届(変更)</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-change.html">追加申請(変更)</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-health-del.html">追加申請(削除)</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">介護勤務</Heading>
              <ul>
                <li>
                  <a href="form-carework-input-proxy.html">介護勤務（新規・更新・変更代理申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-confirm.html">介護休職（新規・更新・変更承認）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-end.html">介護休職（撤回・終了申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-end-confirm.html">介護休職（撤回・終了承認）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-end-proxy.html">介護休職（撤回・終了代理申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-input.html">介護休職（新規・更新・変更申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-careleave-input-proxy.html">介護休職（新規・更新・変更代理申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-care-list.html">介護勤務・休職申請照会一覧</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-carework-confirm.html">介護勤務（新規・更新・変更承認）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-carework-end.html">介護勤務（撤回・終了申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-carework-end-confirm.html">介護勤務（撤回・終了承認）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-carework-end-proxy.html">介護勤務（撤回・終了代理申請）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-carework-input.html">介護勤務（新規・更新・変更申請）</a>
                </li>
              </ul>
            </Section>
            <Section modifiers="card-border">
              <Heading tag="h2">住所届</Heading>
              {/* <ul>
                <li>
                  <a href="form-address-inquiry-agent-input.html">住所届(代理申請)</a>
                </li>
              </ul> */}
              <ul>
                <li>
                  <a href="form-address-inquiry-input.html">住所届(本人申請)</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-address-inquiry-list.html">住所届照会一覧フォーム</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">本人情報変更</Heading>
              <ul>
                <li>
                  <a href="form-person-change-list.html">本人情報変更照会一覧</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-person-change-mount.html">本人情報変更届（貼り付け台紙）</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-personal-input.html">本人情報変更届</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">特別買物割引制度</Heading>
              <ul>
                <li>
                  <a href="form-specialShopping-rebate.html">特別買物割引制度(特別買物割引証申請)</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-refund-input.html">特別買物割引制度 (還付金申請)</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">資格登録</Heading>
              <ul>
                <li>
                  <a href="certification-list.html">資格登録一覧</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="certification-company-certification.html">会社認定資格申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="certification-choice-list.html">資格選択一覧</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-qualification-list.html">資格免許登録照会一覧</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-qualification-input.html">資格免許　登録申請(代理申請)</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">家族情報</Heading>
              <ul>
                <li>
                  <a href="family-marriage-list.html">結婚届一覧照会</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-marriage-list-detail.html">結婚届一覧照会明細</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="family-marriage-input.html">結婚届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-death.html">死亡届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-divorce_bereavement.html">離婚・死別届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-family_addition.html">家族追加届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-transfer-family.html">家族異動届</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-total_incomeCalculation.html">合計所得金額（見積額）計算</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">マッチング拠出年金</Heading>
              <ul>
                <li>
                  <a href="form-matching-contribution-startApplication.html">マッチング拠出　開始申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-matching-contribution-suspensionApplication.html">マッチング拠出　中断申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-matching-installment-changeApplication.html">マッチング拠出　掛金変更申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-matching-contribution-reopenApplication.html">マッチング拠出　再開申請</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="form-matching-contribution-reApplicationPermission.html">マッチング拠出　再開申請許可</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">メンテナンス</Heading>
              <ul>
                <li>
                  <a href="setting-notice-list.html">お知らせメンテナンス</a>
                </li>
                <li>
                  <a href="setting-notice-new.html">お知らせメンテナンス　新規作成</a>
                </li>
              </ul>
            </Section>
            <Section modifiers="card-border">
              <Heading tag="h2">アカウント切り替え機能</Heading>
              <ul>
                <li>
                  <a href="form_personal_info_corp_select.html">個人情報取り扱い同意画面</a>
                </li>
                <li>
                  <a href="form_personal_info_switch_corp.html">メニュー_社籍選択</a>
                </li>
                <li>
                  <a href="form_personal_info_radio_info.html">申請するメニュー-検索-入力後</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">HOME</Heading>
              <ul>
                <li>
                  <a href="home-request-list.html">Request List</a>
                </li>
                <li>
                  <a href="home-approval-list.html">Approval List</a>
                </li>
                <li>
                  <a href="home-search-result.html">Search Result</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">INFORMATION</Heading>
              <ul>
                <li>
                  <a href="information-list.html">List</a>
                </li>
                <li>
                  <a href="information-detail.html">Detail</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">REQUEST</Heading>
              <ul>
                <li>
                  <a href="request.html">Request Menu</a>
                </li>
                <li>
                  <a href="request-detail-requester.html">Request Detail (Requester)</a>
                </li>
                <li>
                  <a href="request-detail-approver.html">Request Detail (Approver)</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">SETTINGS</Heading>
              <ul>
                <li>
                  <a href="setting-list.html">List</a>
                </li>
                <li>
                  <a href="setting-input-form.html">Input Form</a>
                </li>
                <li>
                  <a href="setting-option.html">Option</a>
                </li>
                <li>
                  <a href="setting-check.html">Check</a>
                </li>
                <li>
                  <a href="setting-criteria.html">Criteria</a>
                </li>
                <li>
                  <a href="setting-mailing-list.html">Mailing List</a>
                </li>
                <li>
                  <a href="setting-mailing-list-form.html">Mailing List Form</a>
                </li>
              </ul>
              <br />
            </Section>
          </Section>
        </div>
      </Whole>
    </body>
  </html >
);
export default renderVanillaExample(<IndexPage />);
