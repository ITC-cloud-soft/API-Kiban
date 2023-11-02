/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {

  const modalBodyEl: any = document.getElementById('full-modal');
  const modalBodyE2: any = document.getElementById('modal-comp');
    if (modalBodyEl) {
      const modalBody = modalBodyEl.__component as Modal;
      const modalDetail = modalBodyE2.__component as Modal;
      console.log(modalBody);
      modalBody.opened = false;
      modalDetail.opened=true;

    }



});
export {};
