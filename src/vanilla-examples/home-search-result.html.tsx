import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';
import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { SearchButton } from 'design/components/atoms/search-button';

import { PageHeading } from 'design/components/molecules/page-heading';
import { RequestInfo } from 'design/components/molecules/request-info';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { Section } from 'design/components/molecules/section';
import { Tabs } from 'design/components/molecules/tabs';

import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Whole } from 'design/components/organisms/whole';
import { SearchCurrentFilters } from 'design/components/molecules/search-current-filters';
import { Tag } from 'design/components/atoms/tag';

const HomeSearchResult: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                <NavItem icon="news" label="お知らせ" href="#"></NavItem>
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#"></NavItem>
              </>
            }
            shortcuts={
              <>
                <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
                <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
              </>
            }
          >
            <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
            <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
            <NavItem icon="labor-menu" label="労務メニュー">
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <Section noPadding={true}>
          <PageHeading actions={<SearchButton modifiers="dark">絞り込み検索</SearchButton>} title="自分の申請を見る" />
          <Section className="p-search-filter-holder" noPadding={true}>
            <SearchCurrentFilters dateFilterStart="2021/02/10" dateFilterEnd="2021/02/11">
              <Tag key={1} modifiers="filled">
                北海道
              </Tag>
              <Tag key={2} modifiers="filled">
                吉田
              </Tag>
              <Tag key={3} modifiers="filled">
                吉
              </Tag>
              <Tag key={4} modifiers="filled">
                吉田の吉の吉の吉の
              </Tag>
            </SearchCurrentFilters>
          </Section>
        </Section>
        <Section noPadding={true}>
          <Tabs badges={[]} tabs={[<>未完了</>, <>承認待ち</>, <>完了</>, <>下書き</>]}>
            <div>
              <RequestInfoList>
                <RequestInfo status="waiting" title="外出・出張の報告">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="remand" title="外出・出張の報告">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="waiting" title="外出・出張の報告">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="in-progress" title="外出・出張の報告">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="approval" title="弔事の連絡">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
                  <RequestInfoItem label="承認者" value="自動承認" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="approval" title="弔事の連絡（代理）">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="田中 一郎" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="山田太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="承認者" value="自動承認" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="denial" title="外出・出張の報告">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                <RequestInfo status="draft" title="弔事の連絡（代理）">
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="未入力" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="上野 透" modifiers="long" />
                  <RequestInfoItem label="承認者" value="自動承認" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </div>
            <div>{/* TODO: Content [承認待ち] tab */}</div>
            <div>{/* TODO: Content [完了] tab */}</div>
            <div>{/* TODO: Content [下書き] tab */}</div>
          </Tabs>
        </Section>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<HomeSearchResult />);
