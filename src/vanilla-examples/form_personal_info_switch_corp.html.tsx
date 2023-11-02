import React from 'react';
import { renderVanillaExample } from './render';

import { PosHeading } from 'design/components/atoms/position-heading';
import { ModalBackButton } from 'design/components/atoms/modal-back-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { RadioInfo } from 'design/components/atoms/radio-info';
import { Section } from 'design/components/molecules/section';
import { FormFieldRow } from 'design/components/molecules/form-field';
import { FormFieldOneColumn } from 'design/components/molecules/form-field-one-column';
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
                <NavItem icon="news" label="お知らせ" href="/information-list.html"  />
                <NavItem icon="id-menu" label="会社を切り替える" selected/>
                <NavItem icon="avatar" userName="山田太郎" userPrefix="さん" href="#" />
              </>
            }
            shortcuts={
              <>
                <NavItem icon="request-list" label="自分の申請を見る" href="#" />
                <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
              </>
            }
          >
            <NavItem icon="request-list" label="自分の申請を見る" href="/home-request-list.html" />
            <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" />
            <NavItem icon="labor-menu" label="労務メニュー">
              {/* TODO: Update href value when it's available */}
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <ModalBackButton>一覧へ</ModalBackButton>
          <Section modifiers="fill-white" className='p-setting-input-form__wrapper'>
            <PosHeading tag="h1" pos="center">申請する会社を選択してください</PosHeading>
              <FormFieldOneColumn >
                <FormFieldRow columnSize="12" columnSizePC="12" >
                  <RadioInfo name="RR1" value="0" checked modifiers="grey" children2="0534561">
                          イオンアイビス株式会社
                  </RadioInfo>
                  <RadioInfo name="RR1" value="1"  modifiers="grey" children2="9235192">
                  イオンペット株式会社
                  </RadioInfo>
                  <RadioInfo name="RR1" value="2"  modifiers="grey" children2="0427001">
                  イオンリテール株式会社
                  </RadioInfo>
                  <RadioInfo name="RR1" value="3"  modifiers="grey" children2="9235192">
                  イオンスマートテクノロジー株式会社
                  </RadioInfo>
                  {/* <Radio name="mqt1" value="yes" checked modifiers="grey">
                    イオンアイビス株式会社（0534561）
                  </Radio> */}
                </FormFieldRow>
              </FormFieldOneColumn>
          </Section>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<InformationList />);
