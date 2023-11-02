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

const FamilyMarriageInputForm: React.FC = () => {
  return (
    <html>
      <title>移動依頼入荷訂正承認</title>
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
                  <Heading tag="h1">移動依頼入荷訂正承認</Heading>
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
                <Heading tag="h3">移動依頼と入荷で差異が生じた商品情報一覧</Heading>
                <InfoTable modifiers="full-border">
                  <InfoTableCell header="移動依頼">
                    <InfoTableCell modifiers="pair" label="依頼者">
                      <span>山田　太郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="配達伝票No">
                      <span>H01</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷元">
                      <span>入荷元1</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門コード">
                      <span>B01</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門名">
                      <span>部門名1</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="メーカー名">
                      <span>メーカー名1</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="品種名">
                      <span>品種名1</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="型番">
                      <span>K01</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷予定数">
                      <span>1</span>
                    </InfoTableCell>
                  </InfoTableCell>
                  <InfoTableCell header="入荷実績">
                    <InfoTableCell modifiers="pair" label="部門コード">
                      <span>B11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門名">
                      <span>部門名11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="メーカー名">
                      <span>メーカー名11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="品種名">
                      <span>品種名11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="型番">
                      <span>K011</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷数">
                      <span>11</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷日">
                      <span>2023/12/01</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="訂正理由">
                      <span>訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="備考">
                      <span>備考備考備考備考備考備考備考備考備考備考備考備考</span>
                    </InfoTableCell>
                  </InfoTableCell>
                </InfoTable>
                <br />
                <InfoTable modifiers="full-border">
                  <InfoTableCell header="移動依頼">
                    <InfoTableCell modifiers="pair" label="依頼者">
                      <span>山田　次郎</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="配達伝票No">
                      <span>H02</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷元">
                      <span>入荷元2</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門コード">
                      <span>B02</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門名">
                      <span>部門名2</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="メーカー名">
                      <span>メーカー名2</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="品種名">
                      <span>品種名2</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="型番">
                      <span>K02</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷予定数">
                      <span>2</span>
                    </InfoTableCell>
                  </InfoTableCell>
                  <InfoTableCell header="入荷実績">
                    <InfoTableCell modifiers="pair" label="部門コード">
                      <span>B22</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="部門名">
                      <span>部門名22</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="メーカー名">
                      <span>メーカー名22</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="品種名">
                      <span>品種名22</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="型番">
                      <span>K022</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷数">
                      <span>22</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="入荷日">
                      <span>2023/12/02</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="訂正理由">
                      <span>訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正訂正理由訂正2</span>
                    </InfoTableCell>
                    <InfoTableCell modifiers="pair" label="備考">
                      <span>備考備考備考備考備考備考備考備考備考備考備考備考2</span>
                    </InfoTableCell>
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
                    商品計画書.doc
                  </UploadListItemConfirm>
                  <UploadListItemConfirm key={1} fileSize="40KB">
                    補足説明.xls
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
};

export default renderVanillaExample(<FamilyMarriageInputForm />);
