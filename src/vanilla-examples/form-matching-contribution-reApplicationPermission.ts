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



});
export {};
