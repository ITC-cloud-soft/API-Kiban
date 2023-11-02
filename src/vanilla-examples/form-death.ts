/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {

  const modalBodyEl: any = document.getElementById('full-modal');
    if (modalBodyEl) {
      const modalBody = modalBodyEl.__component as Modal;
      console.log(modalBody);
      modalBody.opened = true;
      modalBody.onCloseRequested = () => (modalBody.opened = false);
    }

  const confirmButton: any = document.getElementById('input-form-check-button');
    if (confirmButton) {
      const modalBodyE2: any = document.getElementById('modal-comp');
      if (modalBodyE2) {
        const modal = modalBodyE2.__component as Modal;
        confirmButton.addEventListener('click', () => {
          modal.opened = true;
        });
        }
  }

  const backButton: any = document.querySelector('.a-modal-back-button');
    if (backButton) {
      // const modalBodyE1: any = document.getElementById('full-comp');
      const modalBodyE2: any = document.getElementById('modal-comp');
      if (modalBodyE2) {
        // const modal = modalBodyE1.__component as Modal;
        const modal2 = modalBodyE2.__component as Modal;
        backButton.addEventListener('click', () => {
          // modal.opened = true;
          modal2.opened = false;
        });
        }
  }
});

export {};
