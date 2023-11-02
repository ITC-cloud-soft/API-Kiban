import React from 'react';
import { renderVanillaExample } from './render';

import { Modal } from 'design/components/organisms/modal';
import { Button } from 'design/components/atoms/button';
import { Text } from 'design/components/atoms/text';

export const InputFormConfirmModal: React.FC = () => (
  <Modal
    id="modal-confirm"
    title="下書きに保存しますか？"
    modifiers="dialog"
    footer={
      <>
        <Button size="large" modifiers="third">
          破棄する
        </Button>
        <Button size="large" modifiers="primary">
          下書き保存
        </Button>
      </>
    }
  >
    <>
      <Text modifiers="small" align="center">
        終了する前に編集中の内容を保存できます。
      </Text>
    </>
  </Modal>
);

export default renderVanillaExample(<InputFormConfirmModal />);
