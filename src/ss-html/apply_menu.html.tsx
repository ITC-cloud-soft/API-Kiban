import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';
import { Section } from 'design/components/molecules/section';
import { Tabs } from 'design/components/molecules/tabs';

import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Whole } from 'design/components/organisms/whole';
import { NavList } from 'design/components/molecules/nav-list';
import { Heading1 } from 'design/components/atoms/heading/index.stories';

const Request: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                <NavItem icon="news" label="お知らせ" href="information-list.html"></NavItem>
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="profile.html"></NavItem>
              </>
            }
            shortcuts={
              <>
                <NavItem icon="approval-list" label="承認依頼を見る" href="approval_request_card.html" />
              </>
            }
          >
            <NavItem icon="approval-list" label="承認依頼を見る" href="approval_request_card.html" />
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <Section noPadding={true}>
          <Heading1>申請する</Heading1>
        </Section>
        <Section noPadding={true} className="p-search-filter-holder">
          <Tabs tabs={[<>メニュー</>]}>
            <Section modifiers="fill-white">
              <NavList modifiers="menu" id="menu">
                <NavItem href="#" label="商品計画承認" modifiers="menu-item" />
                <NavItem href="#" label="発注承認" modifiers="menu-item" />
                <NavItem href="#" label="発注計画外承認" modifiers="menu-item" />
                <NavItem href="#" label="入荷計画外承認" modifiers="menu-item" />
                <NavItem href="#" label="入荷返品承認" modifiers="menu-item" />
                <NavItem href="#" label="移動依頼承認" modifiers="menu-item" />
                <NavItem href="#" label="在庫調整承認" modifiers="menu-item" />
                <NavItem href="#" label="原価・売価変更承認" modifiers="menu-item" />
                <NavItem href="#" label="移動依頼入荷訂正承認" modifiers="menu-item" />
              </NavList>
              <NavList modifiers="menu" id="menu-search-result"></NavList>
            </Section>
          </Tabs>
        </Section>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<Request />);
