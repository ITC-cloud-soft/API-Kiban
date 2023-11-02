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
      });
      }
}

});

  const modalSchoolOpenerEl: any = document.getElementById('employee');
    const modalSchool: any = document.getElementById('modal_help_school_info');
    if (modalSchoolOpenerEl) {
      modalSchoolOpenerEl.addEventListener('click', () => {
        if (modalSchool) {
          const modalBody = modalSchool.__component as Modal;
          modalBody.opened = true;
          modalBody.onCloseRequested = () => (modalBody.opened = false);
        }
      });
    }

export { };
