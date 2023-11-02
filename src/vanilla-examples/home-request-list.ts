/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from 'design/components/atoms/toast/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';
/* eslint-disable no-console */

document.addEventListener('DOMContentLoaded', () => {
  const inputFormCheckButtonEl: any = document.getElementById('input-form-check-button');
  const modalEl: any = document.getElementById('modal-comp');
  if (inputFormCheckButtonEl) {
    inputFormCheckButtonEl.addEventListener('click', () => {
      if (modalEl) {
        const modalComp = modalEl.__component as Modal;
        modalComp.opened = true;
        modalComp.onCloseRequested = () => (modalComp.opened = false);
      }
    });
  }

  const modalHelpOpenerEl: any = document.getElementById('help-opener');
  const modalHelp: any = document.getElementById('modal-help');
  if (modalHelpOpenerEl) {
    modalHelpOpenerEl.addEventListener('click', () => {
      if (modalHelp) {
        const modalBody = modalHelp.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const applyButtonEl = document.querySelector('.a-apply-button');
  if (!applyButtonEl) return;
  applyButtonEl.addEventListener('click', () => {
    const modalBodyEl: any = document.getElementById('full-modal');
    if (modalBodyEl) {
      const modalBody = modalBodyEl.__component as Modal;
      console.log(modalBody);
      modalBody.opened = true;
      modalBody.onCloseRequested = () => (modalBody.opened = false);
    }
  });

  const confirmButtonEls = document.querySelectorAll('.cancel-confirm-button');
  confirmButtonEls.forEach(el => {
    el.addEventListener('click', () => {
      const modalBodyEl: any = document.getElementById('modal-confirm');
      if (modalBodyEl) {
        const modalBody = modalBodyEl.__component as Modal;
        console.log(modalBody);
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  });

  const searchButtonEl = document.querySelector('.a-search-button--dark');

  if (searchButtonEl) {
    const modalEl: any = document.getElementById('request-search-modal');
    if (modalEl) {
      const modal = modalEl.__component as Modal;
      searchButtonEl.addEventListener('click', () => {
        modal.opened = true;
      });

      modal.onCloseRequested = () => {
        modal.opened = false;
      };
    }
  }

  const inputFormSubmitButtonEl = document.getElementById('input-form-submit-button');

  if (inputFormSubmitButtonEl) {
    inputFormSubmitButtonEl.addEventListener('click', () => {
      const toastEl: any = document.getElementById('input-form-confirm-toast');
      if (toastEl) {
        const toast = toastEl.__component as Toast;
        toast.opened = true;
      }
      const modal1El: any = document.getElementById('full-modal');
      if (modal1El) {
        const modalBody = modal1El.__component as Modal;
        modalBody.opened = false;
      }
      const modal2El: any = document.getElementById('modal-comp');
      if (modal2El) {
        const modalBody = modal2El.__component as Modal;
        modalBody.opened = false;
      }
    });
  }
});

export {};
