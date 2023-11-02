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
                  <NavItem icon="news" label="お知らせ" href="information-list.html"></NavItem>
                  <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="profile.html"></NavItem>
                </>
              }
              shortcuts={
                <>
                  <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
                </>
              }
            >
              <NavItem icon="approval-list" label="承認依頼を見る" href="#" selected={true} />
              <NavItem icon="settings" label="メンテナンス" href="#" />
            </GlobalNavigation>
          }
        >
          <Section noPadding={true}>
            <PageHeading actions={<SearchButton modifiers="dark">絞り込み検索</SearchButton>} title="承認依頼を見る" />
          </Section>
          <Section noPadding={true}>
            <Tabs tabs={[<>承認待ち</>,<>未完了</>, <>完了</>]}>
            <div>
                <RequestInfoList>
                  <RequestInfo
                    title="商品計画承認"
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="発注承認"
                    status="waiting"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                  </RequestInfo>
                </RequestInfoList>
              </div>
              <div>
                <RequestInfoList>
                  <RequestInfo
                    title="発注計画外承認"
                    status="in-progress"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="承認者氏名" value="甲斐派都　裕子" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="入荷計画外承認"
                    status="in-progress"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="承認者氏名" value="甲斐派都　裕子" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="入荷返品承認"
                    status="in-progress"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="承認者氏名" value="甲斐派都　裕子" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo
                    title="商品計画承認"
                    status="in-progress"
                  >
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="承認者氏名" value="甲斐派都　裕子" modifiers="long" />
                  </RequestInfo>
                </RequestInfoList>
              </div>
              <div>
                <RequestInfoList>
                  <RequestInfo status="approval" title="入荷返品承認">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                  </RequestInfo>
                  <RequestInfo status="approval" title="入荷計画外承認">
                    <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
                    <RequestInfoItem label="従業員氏名" value="上野 透" modifiers="long" />
                    <RequestInfoItem label="所属" value="業務部" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
                    <RequestInfoItem label="" value="" modifiers="long" />
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
