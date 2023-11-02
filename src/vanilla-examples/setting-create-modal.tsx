import { Button } from 'design/components/atoms/button';
import { EmailTemplateViewer } from 'design/components/atoms/email-template-viewer';
import { Heading } from 'design/components/atoms/heading';
import { TextField } from 'design/components/atoms/text-field';
import { TextPlaceholder } from 'design/components/atoms/text-placeholder';
import { FormField } from 'design/components/molecules/form-field';
import { RecipientInput } from 'design/components/molecules/recipient-input';
import { Section } from 'design/components/molecules/section';
import { Modal } from 'design/components/organisms/modal';
import { Text } from 'design/components/atoms/text';
import React from 'react';
import { renderVanillaExample } from 'vanilla-examples/render';

export const SettingCreateModal: React.FC = () => (
  <Modal id="create-modal" modalSize="maximum">
    <Section noPadding={true} className="p-card-main">
      <Section noPadding={true}>
        <FormField label="ID: 1">
          <Heading>弔事連絡が新規作成された時のメール</Heading>
        </FormField>
      </Section>
      <Section noPadding={true}>
        <Heading tag="h3">送信状況</Heading>
        <Heading tag="h5">送信状況</Heading>
        <Text>稼働中</Text>
      </Section>
      <Section noPadding={true}>
        <Heading tag="h3">送信先</Heading>
        <FormField label="TO:">
          <Text>申請者</Text>
        </FormField>
        <FormField label="CC:">
          <Text>なし</Text>
        </FormField>
        <FormField label="BCC:">
          <Text>なし</Text>
        </FormField>
      </Section>
      <Section noPadding={true}>
        <Heading tag="h3">送信タイミング</Heading>
        <Heading tag="h5">申請メニュー</Heading>
        <Text>弔事連絡（本人）の</Text>
        <Heading tag="h5">ステータス</Heading>
        <Text>新規作成 が完了した時</Text>
      </Section>
      <Section noPadding={true}>
        <Heading tag="h3">内容</Heading>
        <Heading tag="h5">件名</Heading>
        <Text>弔事連絡が送信されました。</Text>
        <Heading tag="h5">テキスト</Heading>
        <EmailTemplateViewer>
          <p>
            <TextPlaceholder code="%%7892%%" dataId={2}>
              申請者 氏名（姓）
            </TextPlaceholder>
            <TextPlaceholder code="%%7892%%" dataId={3}>
              申請者 氏名（名）
            </TextPlaceholder>
            様
          </p>
          <p>
            <br />
          </p>
          <p>この度はお悔やみを申し上げます。</p>
          <p>下記内容で弔事連絡を受け付けました。</p>
          <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
          <p>
            供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
          </p>
          <p>
            <br />
          </p>
          <p>この度はお悔やみを申し上げます。</p>
          <p>下記内容で弔事連絡を受け付けました。</p>
          <p>申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。</p>
          <p>
            供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。
          </p>
          <p>
            <br />
          </p>
          <p>【申請内容】</p>
          <p>亡くなられた方の情報</p>
          <p>
            <br />
          </p>
          <p>
            お名前：
            <TextPlaceholder code="%%7892%%" dataId={4}>
              亡くなられた方の氏名（姓）
            </TextPlaceholder>
            <TextPlaceholder code="%%7892%%" dataId={5}>
              亡くなられた方の氏名（名）
            </TextPlaceholder>
          </p>
          <p>
            <br />
          </p>
          <p>・</p>
          <p>・</p>
          <p>・</p>
          <p>・</p>
          <p>
            <br />
          </p>
          <p>お問い合わせはこちらまでご連絡ください。</p>
          <p>00-0000-0000</p>
          <p>
            <br />
          </p>
          <p>——</p>
          <p>
            <br />
          </p>
          <p>署名</p>
        </EmailTemplateViewer>
        <EmailTemplateViewer>
          <Heading tag="h3">テスト送信</Heading>
          <p>実際に稼働を開始する前に、件名やテキストに謝りがないか、テスト送信をして確認しましょう。</p>
          <p>問題なければ確認へ進んでください。</p>
          <br />
          <Heading tag="h5">その他の送信先</Heading>
          <RecipientInput templateInput={<TextField type="email" />}>
            <TextField type="email" defaultValue="dummy@aeon.co.jp" />
            <TextField type="email" defaultValue="dummy@aeon.co.jp" />
          </RecipientInput>
          <Section noPadding={true} className="p-card-main__section-actions">
            <Button modifiers="secondary" size="large" type="button">
              テスト送信
            </Button>
          </Section>
        </EmailTemplateViewer>
      </Section>
    </Section>
  </Modal>
);

export default renderVanillaExample(<SettingCreateModal />);
