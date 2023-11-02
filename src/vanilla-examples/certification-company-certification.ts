/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from 'design/components/atoms/toast/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';
/* eslint-disable no-console */

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

});




export {};
