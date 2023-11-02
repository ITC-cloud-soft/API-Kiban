import React from 'react';
import { renderVanillaExample } from './render';

import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { NavItem } from 'design/components/atoms/nav-item';
import { Alert } from 'design/components/atoms/alert';
import { SearchButton } from 'design/components/atoms/search-button';
import { Toast } from 'design/components/atoms/toast';
import { Tabs } from 'design/components/molecules/tabs';
import { Section } from 'design/components/molecules/section';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { RequestInfo } from 'design/components/molecules/request-info';
import { PageHeading } from 'design/components/molecules/page-heading';
import { Whole } from 'design/components/organisms/whole';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { RequestSearchModal } from './request-search-modal';
import { InputFormModal } from './input-form-modal';
import { InputFormConfirmModal } from './input-form-confirm-modal';
import { InputFormCheckModal } from './input-form-check-modal';

const HomeRequestListPage: React.FC = () => (
  <html>
    <body>
      <Whole
        modifiers="with-bg"
        navigation={
          <GlobalNavigation
            actions={
              <>
                {/* TODO: Update href value when it's available */}
                <NavItem icon="news" label="お知らせ" href="/information-list.html" />
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#" />
              </>
            }
            shortcuts={
              <>
                <NavItem
                  icon="request-list"
                  label="自分の申請を見る"
                  href="/home-request-list.html"
                  selected={true}
                  badge={true}
                />
                <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" />
              </>
            }
          >
            <NavItem
              icon="request-list"
              label="自分の申請を見る"
              href="/home-request-list.html"
              selected={true}
              badge={true}
            />
            <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" />
            <NavItem icon="labor-menu" label="労務メニュー">
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <Section noPadding={true}>
          <PageHeading title="自分の申請を見る" actions={<SearchButton>絞り込み検索</SearchButton>} />
        </Section>
        <Section noPadding={true} className="p-list-content-holder">
          <Tabs tabs={[<>未完了</>, <>承認待ち</>, <>完了</>, <>下書き</>]} badges={[0]}>
            <>
              <Alert id="alert-comp" requestCount={4} />
              {/* TODO: Consider adding `handleCardClick` function  */}
              <RequestInfoList>
                <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'remand'} badge={true} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'in-progress'} badge={true} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'approval'} title={'弔事の連絡'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'approval'} title={'弔事の連絡（代理）'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="田中 一郎" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="山田太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="承認者" value="自動承認" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'denial'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'draft'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="未入力" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="上野 透" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </>
            <>
              <RequestInfoList>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'in-progress'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'in-progress'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="木下 佳祐" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'in-progress'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="木下 佳祐" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </>
            <>
              <RequestInfoList>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'approval'} title={'弔事の連絡'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'approval'} title={'弔事の連絡（代理）'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="田中 一郎" modifiers="long" />
                  <RequestInfoItem label="代理申請者" value="山田太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="承認者" value="自動承認" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'denial'} title={'外出・出張の報告'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " modifiers="long" />
                  <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                  <RequestInfoItem label="承認者" value="木下 佳祐" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </>
            <>
              <RequestInfoList>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'draft'} title={'弔事の連絡'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'draft'} title={'弔事の連絡（代理）'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="未入力" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
                {/* TODO: Consider adding `handleCardClick` function  */}
                <RequestInfo status={'draft'} title={'弔事の連絡'}>
                  <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                  <RequestInfoItem label="従業員名" value="-" modifiers="long" />
                  <RequestInfoItem label="訪問先" value="-" modifiers="long" />
                  <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                </RequestInfo>
              </RequestInfoList>
            </>
          </Tabs>
        </Section>
        <Toast id="input-form-confirm-toast">弔事連絡の申請が完了しました。</Toast>
        <RequestSearchModal />
        <InputFormModal />
        <InputFormConfirmModal />
        <InputFormCheckModal />
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<HomeRequestListPage />);
