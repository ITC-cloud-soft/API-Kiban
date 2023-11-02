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

const confirmbuttonnext1: any = document.getElementById('confirm-button-next1');
  if (confirmbuttonnext1) {
    const modalBodyE2: any = document.getElementById('full-modal-input3');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      confirmbuttonnext1.addEventListener('click', () => {
        modal2.opened = true;
      });
      }
}

const confirmbuttonnext2: any = document.getElementById('input-button-over1');
  if (confirmbuttonnext2) {
    const modalBodyE2: any = document.getElementById('full-modal-input4');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      confirmbuttonnext2.addEventListener('click', () => {
        modal2.opened = true;
      });
      }
}

const confirmbuttonnext3: any = document.getElementById('input-button-over2');
  if (confirmbuttonnext3) {
    const modalBodyE2: any = document.getElementById('full-modal-input5');
    if (modalBodyE2) {
      const modal2 = modalBodyE2.__component as Modal;
      confirmbuttonnext3.addEventListener('click', () => {
        modal2.opened = true;
      });
      }
}

// const labelEl = document.getElementById('dd') as HTMLButtonElement;
//   const detailEl = document.querySelector('.ee') as HTMLDivElement;
//   detailEl.style.setProperty('display', 'none');
//   labelEl.addEventListener('click', () => {
//       // detailEl.style.setProperty('display', 'none');
//       detailEl.style.removeProperty('display');
//     });

});

    const modalOpenerE2: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.m-visit-record-input-cust__button-close');
    if (modalOpenerE2) {
    const modaldel: any = document.getElementById('msg-modal2');
    modalOpenerE2.forEach(removeButton => {
      if (modaldel) {
        if (removeButton) {
          removeButton.addEventListener('click', () => {
            if (removeButton) {
              const modalBody = modaldel.__component as Modal;
              modalBody.opened = true;
              modalBody.onCloseRequested = () => (modalBody.opened = false);
            }
          });
      }
    }
    });
  }

export { };
