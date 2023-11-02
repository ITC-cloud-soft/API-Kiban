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
              <Heading tag="h2">アカウント相関</Heading>
              <ul>
                <li>
                  <a href="login.html">ログイン</a>
                </li>
                <li>
                  <a href="register.html">アカウント作成</a>
                </li>
              </ul>
            </Section>
            <br />
            <Section modifiers="card-border">
              <Heading tag="h2">イオン専用Saasシステム画面</Heading>
              <ul>
                <li>
                  <a href="system-general.html">システム全般</a>
                </li>
                <li>
                  <a href="whitelist-add-user.html">ユーザー追加</a>
                </li>
                <li>
                  <a href="master-management-add.html">マスタ追加</a>
                </li>
                <li>
                  <a href="master-management-list.html">マスタ一覧</a>
                </li>
                <li>
                  <a href="workflow-management-new.html">新規ワークフロー</a>
                </li>
                <li>
                  <a href="workflow-management-list.html">ワークフロー一覧</a>
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
