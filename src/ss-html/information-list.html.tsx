import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Whole } from 'design/components/organisms/whole';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Section } from 'design/components/molecules/section';
import { NoticeInfoList } from 'design/components/molecules/notice-info-list';
import { NoticeInfo } from 'design/components/atoms/notice-info';

const InformationList: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                <NavItem icon="news" label="お知らせ" href="/information-list.html" selected />
                {/* TODO: Update href value when it's available */}
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="profile.html" />
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
        <PageHeading title="お知らせ" />
        <Section noPadding={true} className="p-list-content-holder">
          <NoticeInfoList>
            <NoticeInfo href="information-detail.html" date="2021/02/20" modifiers="unread">
              福島県沖で発生した地震による店舗の営業状況について
            </NoticeInfo>
            <NoticeInfo date="2021/02/11">エスカレーターでの危険行為におけるお詫びと対応について</NoticeInfo>
            <NoticeInfo date="2021/01/25">お問い合わせフォームへの社外の第三者によるアクセスについて</NoticeInfo>
            <NoticeInfo date="2020/12/28">
              トップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品のトップバリュベストプライスおよびトップバリュホームコーディ珪藻土商品の
            </NoticeInfo>
            <NoticeInfo date="2020/12/22">山陽マルナカ　公正取引委員会に対する訴訟の件</NoticeInfo>
          </NoticeInfoList>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<InformationList />);
