import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';
import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { RequestInfo } from 'design/components/molecules/request-info';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { Section } from 'design/components/molecules/section';
import { Tabs } from 'design/components/molecules/tabs';

import { GlobalNavigationRadioInfo } from 'design/components/organisms/global-navigation-radioinfo';
import { Whole } from 'design/components/organisms/whole';
import { NavList } from 'design/components/molecules/nav-list';
import { Button } from 'design/components/atoms/button';
import { SearchBar } from 'design/components/molecules/search-bar';
import { Heading1 } from 'design/components/atoms/heading/index.stories';

const Request: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigationRadioInfo
            actions={
              <>
                <NavItem icon="news" label="お知らせ" href="#"></NavItem>
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
              </>
            }
            shortcuts={
              <>
                <NavItem icon="request-list" label="自分の申請を見る" href="#" />
                <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
              </>
            }
          >
            <NavItem icon="request-list" label="自分の申請を見る" href="#" />
            <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
            <NavItem icon="labor-menu" label="労務メニュー">
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigationRadioInfo>
        }
      >
        <Section noPadding={true}>
          <SearchBar id="search-bar-comp" defaultValue="結婚" />
          <Heading1>自分の申請を見る</Heading1>
        </Section>
        <Section noPadding={true} className="p-search-filter-holder">
          <Tabs tabs={[<>メニュー</>, <>下書き</>, <>履歴から作成</>]}>
            <Section modifiers="fill-white">
              <NavList modifiers="menu" id="menu">
                <NavItem href="#" label="外出・出張の申請" modifiers="menu-item" />
                <NavItem href="#" label="家族情報の変更" modifiers="menu-item" />
                <NavItem label="家族情報の変更" modifiers="menu-item">
                  <NavItem href="#" label="弔事の連絡" modifiers="menu-item" subnav />
                  <NavItem href="#" label="弔事の連絡（代理）" modifiers="menu-item" subnav disabled />
                  <NavItem href="#" label="慶事の連絡" modifiers="menu-item" subnav />
                </NavItem>
                <NavItem href="#" label="税金・年金情報の変更" modifiers="menu-item" />
              </NavList>
              <NavList modifiers="menu" id="menu-search-result"></NavList>
            </Section>
            <Section noPadding={true}>
              <RequestInfoList>
                <RequestInfo status="draft" title="弔事の連絡">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="未入力" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="remand" title="弔事の連絡（代理）">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="未入力" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="waiting" title="弔事の連絡（代理）">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="-" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="-" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </Section>
            <Section noPadding={true}>
              <RequestInfoList>
                <RequestInfo
                  buttons={
                    <>
                      <Button modifiers="text">コピーして作成する</Button>
                    </>
                  }
                  modifiers="with-duplicate"
                  status="approval"
                  title="弔事の連絡（代理）"
                >
                  <RequestInfoItem label="申請日" value="2021/01/29" />
                  <RequestInfoItem label="代理申請者" value="田中 一郎" />
                  <RequestInfoItem label="従業員名" value="福岡" />
                </RequestInfo>
                <RequestInfo
                  buttons={
                    <>
                      <Button modifiers="text">コピーして作成する</Button>
                    </>
                  }
                  modifiers="with-duplicate"
                  status="approval"
                  title="弔事の連絡（代理）"
                >
                  <RequestInfoItem label="申請日" value="2021/01/29" />
                  <RequestInfoItem label="代理申請者" value="-" />
                  <RequestInfoItem label="従業員名" value="福岡" />
                </RequestInfo>
                <RequestInfo
                  buttons={
                    <>
                      <Button modifiers="text">コピーして作成する</Button>
                    </>
                  }
                  modifiers="with-duplicate"
                  status="remand"
                  title="出張申請"
                >
                  <RequestInfoItem label="申請日" value="2021/01/29" />
                  <RequestInfoItem label="期間" value="2021/01/27 - 2021/02/28" />
                  <RequestInfoItem label="訪問先" value="福岡" />
                  <RequestInfoItem label="申請者" value="山田 太郎" />
                </RequestInfo>
              </RequestInfoList>
            </Section>
          </Tabs>
        </Section>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<Request />);
