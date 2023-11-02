import React from 'react';
import { renderVanillaExample } from './render';

import { ArticleDate } from 'design/components/atoms/article-date';
import { Heading } from 'design/components/atoms/heading';
import { ModalBackButton } from 'design/components/atoms/modal-back-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { Text } from 'design/components/atoms/text';

import { Section } from 'design/components/molecules/section';

import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Whole } from 'design/components/organisms/whole';

const InformationList: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                {/* TODO: Update href value when it's available */}
                <NavItem icon="news" label="お知らせ" href="information-list.html" selected />
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
        <ModalBackButton href="information-list.html">一覧へ</ModalBackButton>
        <Section modifiers="fullpage">
          <ArticleDate>2021/02/20</ArticleDate>
          <Heading>福島県沖で発生した地震による店舗の営業状況について</Heading>
          <Text>
            ２月１３日（土）に福島県沖で発生した地震で被害にあわれた方々に、心よりお見舞い申し上げます。
            福島県、宮城県で営業する総合スーパー２店舗と、イオンモール・イオンタウンの２つのショッピング
            センターにおいて、スプクリンクラー破損や天井落下等の影響により、本日の営業休止を予定しています。
            なお、下記以外の店舗については通常通り営業をしております。
            イオンは、お客さまおよび従業員の安全を最優先で確保した上で、地域の生活を守るための
            インフラ機能として営業を継続してまいります。
          </Text>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<InformationList />);
