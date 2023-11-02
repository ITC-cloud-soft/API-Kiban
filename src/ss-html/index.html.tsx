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
              <Heading tag="h2">メニュー相関</Heading>
              <ul>
                <li>
                  <a href="approval_request_card.html">承認依頼を見る</a>
                </li>
                <li>
                  <a href="apply_menu.html">申請する</a>
                </li>
                <li>
                  <a href="information-list.html">お知らせ一覧</a>
                </li>
                <li>
                  <a href="information-detail.html">お知らせ明細</a>
                </li>
                <li>
                  <a href="profile.html">プロフィール</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">SSフロー</Heading>
              <ul>
                <li>
                  <a href="merchandise-plan-approval.html">商品計画承認</a>
                </li>
                <li>
                  <a href="order-approval.html">発注承認</a>
                </li>
                <li>
                  <a href="order-unplanned-approval.html">発注計画外承認</a>
                </li>
                <li>
                  <a href="arrival-unplanned-approval.html">入荷計画外承認</a>
                </li>
                <li>
                  <a href="arrival-returns-approval.html">入荷返品承認</a>
                </li>
                <li>
                  <a href="move-request-approval.html">移動依頼承認</a>
                </li>
                <li>
                  <a href="stock-adjustment-approval.html">在庫調整承認</a>
                </li>
                <li>
                  <a href="price-change-approval.html">原価・売価変更承認</a>
                </li>
                <li>
                  <a href="mreq-arrcorrection-approval.html">移動依頼入荷訂正承認</a>
                </li>
              </ul>
            </Section>
          </Section>
        </div>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<IndexPage />);
