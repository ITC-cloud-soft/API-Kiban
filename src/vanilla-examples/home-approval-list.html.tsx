import React from 'react';
import { renderVanillaExample } from './render';

import { Button } from 'design/components/atoms/button';
import { DateRangeField } from 'design/components/atoms/date-range-field';
import { NavItem } from 'design/components/atoms/nav-item';
import { RequestInfoItem } from 'design/components/atoms/request-info-item';
import { SearchButton } from 'design/components/atoms/search-button';
import { TextField } from 'design/components/atoms/text-field';

import { FormField } from 'design/components/molecules/form-field';
import { PageHeading } from 'design/components/molecules/page-heading';
import { RequestInfo } from 'design/components/molecules/request-info';
import { RequestInfoList } from 'design/components/molecules/request-info-list';
import { Section } from 'design/components/molecules/section';
import { Tabs } from 'design/components/molecules/tabs';

import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Modal } from 'design/components/organisms/modal';
import { Whole } from 'design/components/organisms/whole';

const HomeApprovalList: React.FC = () => {
  return (
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
              <NavItem icon="request-list" label="自分の申請を見る" href="/home-request-list.html" />
              <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" selected={true} />
              <NavItem icon="labor-menu" label="労務メニュー">
                <NavItem label="人事業務" href="#" subnav={true} />
                <NavItem label="BS業務" href="#" subnav={true} />
              </NavItem>
              <NavItem icon="settings" label="メンテナンス" href="#" />
            </GlobalNavigation>
          }
        >
          <Section noPadding={true}>
            <PageHeading actions={<SearchButton modifiers="dark">絞り込み検索</SearchButton>} title="承認依頼を見る" />
          </Section>
          <Section noPadding={true}>
            <Tabs tabs={[<>未完了</>, <>完了</>]}>
              <div>
                <RequestInfoList>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="外出・出張の報告"
                    buttons={
                      <>
                        <Button modifiers="third">否認</Button>
                        <Button modifiers="secondary">差し戻し</Button>
                        <Button modifiers="primary">承認</Button>
                      </>
                    }
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="承認者" value="上野 透" modifiers="long" />
                  </RequestInfo>
                </RequestInfoList>
              </div>
              <div>
                <RequestInfoList>
                  <RequestInfo status="approval" title="弔事の連絡（代理）">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="代理申請者" value="山田 太郎（あなた）" modifiers="long" />
                    <RequestInfoItem label="従業員名" value="-" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="approval" title="弔事の連絡（代理）">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
                    <RequestInfoItem label="従業員名" value="山田 太郎" modifiers="long" />
                    <RequestInfoItem label="葬儀" value="通夜/告別式" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="remand" title="出張申請">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/01/27 - 2021/02/28" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="申請者" value="山田 太郎" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="approval" title="弔事の連絡（代理）">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="代理申請者" value="山田 太郎（あなた）" modifiers="long" />
                    <RequestInfoItem label="従業員名" value="-" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="approval" title="弔事の連絡（代理）">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
                    <RequestInfoItem label="従業員名" value="山田 太郎" modifiers="long" />
                    <RequestInfoItem label="葬儀" value="通夜/告別式" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="remand" title="出張申請">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="期間" value="2021/01/27 - 2021/02/28" modifiers="long" />
                    <RequestInfoItem label="訪問先" value="福岡" modifiers="long" />
                    <RequestInfoItem label="申請者" value="山田 太郎" modifiers="long" />
                  </RequestInfo>
                </RequestInfoList>
              </div>
            </Tabs>
            <Modal title="絞り込み検索" footer={<Button modifiers="primary">検索</Button>}>
              <FormField label="キーワード">
                <TextField type="search" />
              </FormField>
              <FormField label="申請日">
                <DateRangeField />
              </FormField>
            </Modal>
          </Section>
        </Whole>
      </body>
    </html>
  );
};

export default renderVanillaExample(<HomeApprovalList />);
