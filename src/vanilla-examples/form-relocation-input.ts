/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //初期表示

  const modalBodyEl: any = document.getElementById('full-modal-before');
  if (modalBodyEl) {
    const modalBody = modalBodyEl.__component as Modal;
    console.log(modalBody);
    modalBody.opened = true;
    modalBody.onCloseRequested = () => (modalBody.opened = false);
  }

  const modalHelpOpenerEl: any = document.getElementById('input-next-button');
  const modalHelp: any = document.getElementById('full-modal-before-yet');
  if (modalHelpOpenerEl) {
    modalHelpOpenerEl.addEventListener('click', () => {
      if (modalHelp) {
        const modalBody = modalHelp.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const modalHelpOpenerE2: any = document.getElementById('input-next-button-yet');
  const modalHelp2: any = document.getElementById('full-modal-input');
  if (modalHelpOpenerE2) {
    modalHelpOpenerE2.addEventListener('click', () => {
      if (modalHelp2) {
        const modalBody = modalHelp2.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const modalHelpOpenerE3: any = document.getElementById('input-check-button');
  const modalHelp3: any = document.getElementById('full-modal-confirm');
  if (modalHelpOpenerE3) {
    modalHelpOpenerE3.addEventListener('click', () => {
      if (modalHelp3) {
        const modalBody = modalHelp3.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const radio1: any = document.getElementById('radio1');
  if (radio1) {
    const modalBodyE2: any = document.getElementById('msg-modal1');
    if (modalBodyE2) {
      const modal = modalBodyE2.__component as Modal;
      radio1.addEventListener('click', () => {
        modal.opened = true;
        modal.onCloseRequested = () => (modal.opened = false);
      });
      }
  }

const confirmButton1: any = document.getElementById('keiroselect');
  if (confirmButton1) {
    const modalBodyE2: any = document.getElementById('setting-search-modal');
    if (modalBodyE2) {
      const modal = modalBodyE2.__component as Modal;
      confirmButton1.addEventListener('click', () => {
        modal.opened = true;
        modal.onCloseRequested = () => (modal.opened = false);
      });
      }
}

const backButton: any = document.querySelector('.a-modal-back-button');
  if (backButton) {
    const modalBodyE2: any = document.getElementById('full-modal-input');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      backButton.addEventListener('click', () => {
        modal2.opened = true;
      });
      }
}

});

export { };
