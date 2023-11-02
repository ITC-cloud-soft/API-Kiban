import React from 'react';
import { renderVanillaExample } from './render';

import { NavItem } from 'design/components/atoms/nav-item';
import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Whole } from 'design/components/organisms/whole';
import { Section } from 'design/components/molecules/section';
import { Tabs } from 'design/components/molecules/tabs';
import { SearchBar } from 'design/components/molecules/search-bar';
import { Heading1 } from 'design/components/atoms/heading/index.stories';
import { InfoTableLoose } from 'design/components/molecules/info-table-loose';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { Heading } from 'design/components/atoms/heading';

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
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#" />
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
          <SearchBar id="search-bar-comp" defaultValue="" />
          <Heading1>プロフィール</Heading1>
        </Section>
        <Section noPadding={true} className="p-search-filter-holder">
          <Tabs tabs={[<>基本情報</>, <>口座情報</>, <>資格</>, <>住所</>]}>
            <div>
              <Section modifiers="fill-white">
                <InfoTableLoose modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="出向元会社コード">
                    <span>イオンリテール（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="出向元会社名称">
                    <span>イオンリテール（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社コード">
                    <span>0092</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="会社名称">
                    <span>イオンアイビス（株）</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属コード">
                    <span>92964</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="所属名称">
                    <span>ＢＳ業務部長</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="名前">
                    <span>山田　太郎</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="名前（カナ）">
                    <span>カイハツ　ヒロコ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="生年月日">
                    <span>1976/12/09</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="性別">
                    <span>男</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="婚姻区分">
                    <span>既婚</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="国籍">
                    <span>日本</span>
                  </InfoTableCell>
                </InfoTableLoose>
              </Section>
            </div>
            <div>
              <Section modifiers="fill-white">
                <InfoTableLoose modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="金融機関コード">
                    <span>0040</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="金融機関名">
                    <span>イオン銀行</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="支店コード">
                    <span>008</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="支店名">
                    <span>ペリドット支店</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="預金種別">
                    <span>普通</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="口座番号">
                    <span>*******</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="口座名義">
                    <span>カナ　カナ</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="">
                    <span></span>
                  </InfoTableCell>
                </InfoTableLoose>
              </Section>
            </div>
            <div>
              <Section modifiers="fill-white">
                <Heading tag="h3">自動車普通免許</Heading>
                <InfoTableLoose modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="資格コード">
                    <span>5011</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="点数・スコア">
                    <span>-</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格取得日">
                    <span>1995/03/01</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格失効日">
                    <span>-</span>
                  </InfoTableCell>
                </InfoTableLoose>
              </Section>
              <Section modifiers="fill-white">
                <Heading tag="h3">料飲接遇サービス技能２級</Heading>
                <InfoTableLoose modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="資格コード">
                    <span>5101</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="点数・スコア">
                    <span>-</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格取得日">
                    <span>2006/06/18</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="資格失効日">
                    <span>-</span>
                  </InfoTableCell>
                </InfoTableLoose>
              </Section>
            </div>
            <div>
              <Section modifiers="fill-white">
                <Heading tag="h3">現住所</Heading>
                <InfoTableLoose modifiers="no-border-header">
                  <InfoTableCell modifiers="pair" label="郵便番号">
                    <span>2710077</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="都道府県・市区群">
                    <span>千葉県松戸市</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="町村・番地">
                    <span>根本✕✕✕－✕－✕✕✕</span>
                  </InfoTableCell>
                  <InfoTableCell modifiers="pair" label="建物名・部屋番号">
                    <span>-</span>
                  </InfoTableCell>
                </InfoTableLoose>
              </Section>
            </div>
          </Tabs>
        </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<InformationList />);
