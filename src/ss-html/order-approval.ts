/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //初期表示
  const modalBodyEl: any = document.getElementById('full-modal-input');
  if (modalBodyEl) {
    const modalBody = modalBodyEl.__component as Modal;
    console.log(modalBody);
    modalBody.opened = true;
    modalBody.onCloseRequested = () => (modalBody.opened = false);
  }
  const backButton: any = document.querySelector('.a-modal-back-button');
  if (backButton) {
    const modalBodyE2: any = document.getElementById('full-modal-input');
    if (modalBodyE2) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  }
  const approvalDetail: any = document.querySelector('#approval-detail');
  if (approvalDetail) {
    const modalBodyE2: any = document.getElementById('modal-approval-detail');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      approvalDetail.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => void (modal2.opened = false);
      });
    }
  }
});
export {};
