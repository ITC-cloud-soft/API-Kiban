import { ApprovalStep } from 'design/components/atoms/approval-step';
import { Button } from 'design/components/atoms/button';
import { CaptionList } from 'design/components/atoms/caption-list';
import { Heading } from 'design/components/atoms/heading';
import { Text } from 'design/components/atoms/text';
import { InfoTableCell } from 'design/components/atoms/info-table-cell';
import { InternalLink } from 'design/components/atoms/internal-link';
import { TextLink } from 'design/components/atoms/text-link';
import { ApprovalWorkflow } from 'design/components/molecules/approval-workflow';
import { FormField } from 'design/components/molecules/form-field';
import { InfoTable } from 'design/components/molecules/info-table';
import { Section } from 'design/components/molecules/section';
import { Modal } from 'design/components/organisms/modal';

import React from 'react';
import { renderVanillaExample } from './render';

export const InputFormCheckModal: React.FC = () => (
  <Modal
    id="modal-comp"
    modifiers="fullscreen"
    hasBackButton={true}
    footer={
      <>
        <Button modifiers="secondary" size="huge" className="cancel-confirm-button">
          下書き保存
        </Button>
        <Button modifiers="primary" size="huge" id="input-form-submit-button">
          検索
        </Button>
      </>
    }
  >
    <Heading tag="h1">弔事の連絡</Heading>
    <Section modifiers="fill">
      <Text>
        香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
      </Text>
      <CaptionList>
        <React.Fragment key=".0">
          <li>手配依頼期限：2022年2月10日</li>
          <li>
            供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
          </li>
        </React.Fragment>
      </CaptionList>
      <InternalLink href="#" icon="link">
        手配を申請する
      </InternalLink>
    </Section>
    <br />
    <Heading tag="h2">手配状況</Heading>
    <InfoTable modifiers="no-border-header-single">
      <InfoTableCell label="香料" modifiers="pair">
        <span>手配済</span>
      </InfoTableCell>
      <InfoTableCell label="供花" modifiers="pair">
        <span>
          辞退（
          <TextLink href="#" modifiers="underline">
            手配できます
          </TextLink>
          ）
        </span>
      </InfoTableCell>
      <InfoTableCell label="弔電" modifiers="pair">
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
      <React.Fragment key=".0">
        <li>手配依頼期限：2022年2月10日</li>
        <li>
          供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
        </li>
      </React.Fragment>
    </CaptionList>
    <Heading tag="h2">申請内容</Heading>
    <ApprovalWorkflow modifiers="auto">
      <ApprovalStep isDone modifiers="auto" name="山田太郎" requester />
      <ApprovalStep isDone modifiers="auto" name="山田太郎" requester />
    </ApprovalWorkflow>
    <br />
    <InternalLink href="#" icon="link">
      詳しく見る
    </InternalLink>
    <Heading tag="h2">弔電とは</Heading>
    <Heading tag="h3">弔電とは</Heading>
    <FormField label="電話番号">
      <Text>090-1234-5678</Text>
    </FormField>
    <FormField label="メールアドレス">
      <Text>090-1234-5678</Text>
    </FormField>
    <FormField label="通夜は行いますか">
      <Text>はい / 一般参列を辞退する</Text>
    </FormField>
    <InfoTable header="差出人情報">
      <InfoTableCell>
        <p
          style={{
            marginBottom: '13px',
          }}
        >
          イオンアイビス(株) <br />
          社長　佐藤一郎
        </p>
      </InfoTableCell>
      <InfoTableCell>
        <p
          style={{
            marginBottom: '13px',
          }}
        >
          イオンアイビス(株) <br />
          社長　佐藤一郎
        </p>
      </InfoTableCell>
    </InfoTable>
    <br />
  </Modal>
);

export default renderVanillaExample(<InputFormCheckModal />);
