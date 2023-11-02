import React from 'react';
import { renderVanillaExample } from './render';

import { Text } from 'design/components/atoms/text';
import { Button } from 'design/components/atoms/button';
import { Heading } from 'design/components/atoms/heading';
import { Section } from 'design/components/molecules/section';
import { InfoTable } from 'design/components/molecules/info-table';
import { Whole } from 'design/components/organisms/whole';
import { Modal } from 'design/components/organisms/modal';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { UploadListConfirm, UploadListItemConfirm } from 'design/components/molecules/upload-list';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { ApprovalStep } from 'design/components/atoms/approval-step';
import { InternalLink } from 'design/components/atoms/internal-link';
import { ApprovalStatusList } from 'design/components/molecules/approval-status-list';
import { ApprovalStatusItem } from 'design/components/atoms/approval-status-item';
import { FormField } from 'design/components/molecules/form-field';

const FamilyMarriageInputForm: React.FC = () => (
  <html>
    <title>入荷返品承認</title>
    <body>
      <Whole navigation={''}>
        <Modal
          modifiers="fullscreen"
          id="full-modal-input"
          hasBackButton={true}
          footer={
            <>
              <Button modifiers="third" size="huge">
                否認
              </Button>
              <Button modifiers="primary" size="huge" id="input-form-check-button">
                承認
              </Button>
            </>
          }
        >
          <>
            <div className="p-wrapper">
              <Section className="p-setting-input-form__heading" modifiers="border">
                <Heading tag="h1">入荷返品承認</Heading>
                <br />
                <Heading tag="h2">承認状況</Heading>
                <ApprovalWorkflow modifiers={'auto'}>
                  <ApprovalStep key={1} name="異音　次郎" modifiers="auto" requesterText="新規申請" isDone />
                  <ApprovalStep key={2} name="異音　太郎" modifiers="auto" requesterText="上司承認" isDone />
                  <ApprovalStep key={3} name="未承認" modifiers="auto" requesterText="部長承認" />
                </ApprovalWorkflow>
                <br />
                <InternalLink icon="link" id="approval-detail">
                  詳しく見る
                </InternalLink>
                <br />
                <br />
              </Section>
              <br />
              <Heading tag="h3">申請社員情報</Heading>
              <InfoTable modifiers="no-border-header">
                <InfoTableCell modifiers="pair" label="会社コード">
                  <span>0005</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="会社名称">
                  <span>イオンリテール株式会社</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属コード">
                  <span>12345</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="所属名称">
                  <span>津田沼店</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="社員番号">
                  <span>1234567</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名">
                  <span>申請　太郎</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="氏名（カナ）">
                  <span>シンセイ　タロウ</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="入社日">
                  <span>2001/05/03</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="勤続年数">
                  <span>20年</span>
                </InfoTableCell>
                <InfoTableCell modifiers="pair" label="">
                  <span></span>
                </InfoTableCell>
              </InfoTable>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">コメント</Heading>
              <Text align="left">コメントコメントコメントコメントコメント</Text>
              <div className="m-info-table__header"></div>
              <br />
              <Heading tag="h3">添付ファイル一覧</Heading>
              <UploadListConfirm label={''}>
                <UploadListItemConfirm key={0} fileSize="30KB">
                  商品受け入れ後（仕入計上後）問題があった商品情報.doc
                </UploadListItemConfirm>
              </UploadListConfirm>
            </div>
            <br />
          </>
        </Modal>
        <Modal id="modal-approval-detail" title="ステータス詳細">
          <ApprovalStatusList>
            <ApprovalStatusItem title="新規申請" time="2021/01/25 13:00" done>
              異音　次郎
            </ApprovalStatusItem>
            <ApprovalStatusItem title="上司承認" time="2021/01/26 13:00" done>
              異音　太郎
            </ApprovalStatusItem>
            <ApprovalStatusItem title="部長承認" time="2021/01/26 13:00">
              未承認
            </ApprovalStatusItem>
          </ApprovalStatusList>
        </Modal>
      </Whole>
    </body>
  </html>
);

export default renderVanillaExample(<FamilyMarriageInputForm />);
