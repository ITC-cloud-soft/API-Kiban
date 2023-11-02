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

  const modalHelpOpenerEl: any = document.getElementById('input-form-check-button');
  const modalHelp: any = document.getElementById('full-modal-confirm');
  if (modalHelpOpenerEl) {
    modalHelpOpenerEl.addEventListener('click', () => {
      if (modalHelp) {
        const modalBody = modalHelp.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const backButton: any = document.querySelector('.a-modal-back-button');
  if (backButton) {
    const modalBodyE2: any = document.getElementById('full-modal-input');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      backButton.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
  });
      }
}

const confirmbuttonnext1: any = document.getElementById('confirm-button-next1');
  if (confirmbuttonnext1) {
    const modalBodyE2: any = document.getElementById('full-modal-input3');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      confirmbuttonnext1.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}

const confirmbuttonnext2: any = document.getElementById('input-button-over1');
  if (confirmbuttonnext2) {
    const modalBodyE2: any = document.getElementById('full-modal-input6');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      confirmbuttonnext2.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}

const help1: any = document.getElementById('help1');
  if (help1) {
    const modalBodyE2: any = document.getElementById('modal_help_info1');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      help1.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}

const help2: any = document.getElementById('help2');
  if (help2) {
    const modalBodyE2: any = document.getElementById('modal_help_info2');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      help2.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}

const help3: any = document.getElementById('help3');
  if (help3) {
    const modalBodyE2: any = document.getElementById('modal_help_info3');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      help3.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}

const help4: any = document.getElementById('help4');
  if (help4) {
    const modalBodyE2: any = document.getElementById('modal_help_info4');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      help4.addEventListener('click', () => {
        modal2.opened = true;
        modal2.onCloseRequested = () => (modal2.opened = false);
      });
      }
}
});

export { };
