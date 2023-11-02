import React from 'react';
import { renderVanillaExample } from './render';

import { ApprovalStatusItem } from 'design/components/atoms/approval-status-item';
import { ApprovalStep } from 'design/components/atoms/approval-step';
import { Button } from 'design/components/atoms/button';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Heading } from 'design/components/atoms/heading';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { InternalLink } from 'design/components/atoms/internal-link';
import { ModalBackButton } from 'design/components/atoms/modal-back-button';
import { NavItem } from 'design/components/atoms/nav-item';
import { TextLink } from 'design/components/atoms/text-link';
import { Text } from 'design/components/atoms/text';

import { ApprovalStatusList } from 'design/components/molecules/approval-status-list';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { ButtonContainer } from 'design/components/molecules/button-container';
import { FormField } from 'design/components/molecules/form-field';
import { InfoTable } from 'design/components/molecules/info-table';
import { Section } from 'design/components/molecules/section';
import { PageHeading } from 'design/components/molecules/page-heading';

import { GlobalNavigation } from 'design/components/organisms/global-navigation';
import { Modal } from 'design/components/organisms/modal';
import { Whole } from 'design/components/organisms/whole';
import { TextField } from 'design/components/atoms/text-field';

const RequestDetailApprover: React.FC = () => (
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
                <NavItem icon="request-list" label="自分の申請を見る" href="/home-request-list.html" />
                <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" />
              </>
            }
          >
            <NavItem icon="request-list" label="自分の申請を見る" href="/home-request-list.html" />
            <NavItem icon="approval-list" label="承認依頼を見る" href="/home-approval-list.html" />
            <NavItem icon="labor-menu" label="労務メニュー">
              <NavItem label="人事業務" href="#" subnav={true} />
              <NavItem label="BS業務" href="#" subnav={true} />
            </NavItem>
            <NavItem icon="settings" label="メンテナンス" href="#" />
          </GlobalNavigation>
        }
      >
        <ModalBackButton href="/home-request-list.html">一覧へ</ModalBackButton>
        <PageHeading title="弔事の連絡" />
        <Section modifiers="fill-white">
          <Text>
            香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
          </Text>
          <CaptionList>
            <li>
              供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
            </li>
          </CaptionList>
          <InternalLink href="#" icon="link">
            手配を申請する
          </InternalLink>
        </Section>
        <Section modifiers="fill-white">
          <Heading tag="h2">手配状況</Heading>
          <InfoTable modifiers="no-border-header-single">
            <InfoTableCell modifiers="pair" label="香料">
              <span>手配済</span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="供花">
              <span>
                辞退（
                <TextLink href="#" modifiers="underline">
                  手配できます
                </TextLink>
                ）
              </span>
            </InfoTableCell>
            <InfoTableCell modifiers="pair" label="弔電">
              <span>
                辞退（
                <TextLink href="#" modifiers="underline">
                  手配できます
                </TextLink>
                ）
              </span>
            </InfoTableCell>
          </InfoTable>
          <CaptionList>
            <li>手配依頼期限：2022年2月10日</li>
            <li>
              供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
            </li>
          </CaptionList>
          <Heading tag="h2">申請内容</Heading>
          <FormField label="自動承認">
            <ApprovalWorkflow>
              <ApprovalStep name="山田太郎" modifiers="auto" requester isDone />
              <ApprovalStep name="上野 透" modifiers="auto" />
            </ApprovalWorkflow>
          </FormField>
          <InternalLink href="#modal-approval-detail" icon="link">
            詳しく見る
          </InternalLink>
          <Heading tag="h2">申請内容</Heading>
          <Heading tag="h3">連絡の取れる電話番号/メールアドレス</Heading>
          <FormField label="電話番号">
            <Text>090-1234-5678</Text>
          </FormField>
          <FormField label="メールアドレス">
            <Text>dummy@aeon.co.jp</Text>
          </FormField>
          <FormField label="通夜は行いますか">
            <Text>はい / 一般参列を辞退する</Text>
          </FormField>
          <InfoTable header="差出人情報">
            <InfoTableCell>
              <p>
                イオンアイビス(株)
                <br />
                社長　佐藤一郎
              </p>
            </InfoTableCell>
            <InfoTableCell>
              <p>
                イオンアイビス(株)
                <br />
                組合委員長　加藤二郎
              </p>
            </InfoTableCell>
          </InfoTable>
        </Section>
        <Section className="p-footer-action">
          <ButtonContainer>
            <Button modifiers="third" href="#modal-denial-confirm">
              否認
            </Button>
            <Button modifiers="secondary">差戻し</Button>
            <Button modifiers="primary">承認</Button>
          </ButtonContainer>
        </Section>
        <Modal id="modal-approval-detail" title="ステータス詳細">
          <ApprovalStatusList>
            <ApprovalStatusItem title="申請完了" time="2021/01/25 13:00" requester done>
              山田太郎
            </ApprovalStatusItem>
            <ApprovalStatusItem title="未完了" time="2021/01/25 13:00">
              上野 透
            </ApprovalStatusItem>
          </ApprovalStatusList>
        </Modal>
        <Modal
          id="modal-denial-confirm"
          title="否認しますか？"
          footer={
            <>
              <Button size="large" modifiers="third" id="close-modal-button">
                キャンセル
              </Button>
              <Button size="large" modifiers="primary">
                否認
              </Button>
            </>
          }
        >
          <Text className="o-modal__description" align="center">
            記入されたコメントは申請者が確認します。
          </Text>
          <FormField label="コメント">
            <TextField tag="textarea" placeholder="否認理由などをご記入ください。"></TextField>
          </FormField>
        </Modal>
      </Whole>
    </body>
  </html>
);
export default renderVanillaExample(<RequestDetailApprover />);
