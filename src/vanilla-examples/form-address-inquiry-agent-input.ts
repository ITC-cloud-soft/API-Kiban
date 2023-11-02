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

const modalHelpOpenerE2: any = document.getElementById('help-opener2');
const modalHelp2: any = document.getElementById('modal-help2');
if (modalHelpOpenerE2) {
  modalHelpOpenerE2.addEventListener('click', () => {
    if (modalHelp2) {
      const modalBody2 = modalHelp2.__component as Modal;
      modalBody2.opened = true;
      modalBody2.onCloseRequested = () => (modalBody2.opened = false);
    }
  });
}
const modalHelpOpenerE3: any = document.getElementById('help-opener3');
const modalHelp3: any = document.getElementById('modal-help3');
if (modalHelpOpenerE3) {
  modalHelpOpenerE3.addEventListener('click', () => {
    if (modalHelp3) {
      const modalBody3 = modalHelp3.__component as Modal;
      modalBody3.opened = true;
      modalBody3.onCloseRequested = () => (modalBody3.opened = false);
    }
  });
}

const modalHelpOpenerE4: any = document.getElementById('help-opener4');
const modalHelp4: any = document.getElementById('modal-help2');
if (modalHelpOpenerE4) {
  modalHelpOpenerE4.addEventListener('click', () => {
    if (modalHelp4) {
      const modalBody4 = modalHelp4.__component as Modal;
      modalBody4.opened = true;
      modalBody4.onCloseRequested = () => (modalBody4.opened = false);
    }
  });
}
const modalHelpOpenerE5: any = document.getElementById('help-opener5');
const modalHelp5: any = document.getElementById('modal-help3');
if (modalHelpOpenerE5) {
  modalHelpOpenerE5.addEventListener('click', () => {
    if (modalHelp5) {
      const modalBody5 = modalHelp5.__component as Modal;
      modalBody5.opened = true;
      modalBody5.onCloseRequested = () => (modalBody5.opened = false);
    }
  });
}

  const modalHelpOpenerEinput: any = document.getElementById('input-form-check-button');
  const modalHelpinput: any = document.getElementById('full-modal-confirm');
  if (modalHelpOpenerEinput) {
    modalHelpOpenerEinput.addEventListener('click', () => {
      if (modalHelpinput) {
        const modalBodyinput = modalHelpinput.__component as Modal;
        modalBodyinput.opened = true;
        modalBodyinput.onCloseRequested = () => (modalBodyinput.opened = false);
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

// const modalSearchOpenerEl: any = document.getElementById('search');
//   const modalFinancial: any = document.getElementById('modal_financial_info');
//   if (modalSearchOpenerEl) {
//     modalSearchOpenerEl.addEventListener('click', () => {
//       if (modalFinancial) {
//         const modalBody = modalFinancial.__component as Modal;
//         modalBody.opened = true;
//         modalBody.onCloseRequested = () => (modalBody.opened = false);
//       }
//     });
//   }

//   const modalSchoolOpenerEl: any = document.getElementById('school');
//     const modalSchool: any = document.getElementById('modal_help_school_info');
//     if (modalSchoolOpenerEl) {
//       modalSchoolOpenerEl.addEventListener('click', () => {
//         if (modalSchool) {
//           const modalBody = modalSchool.__component as Modal;
//           modalBody.opened = true;
//           modalBody.onCloseRequested = () => (modalBody.opened = false);
//         }
//       });
//     }


// const modalHandicapOpenerEl: any = document.getElementById('handicap');
// const modalHandicap: any = document.getElementById('modal_help_handicap_info');
// if (modalHandicapOpenerEl) {
//   modalHandicapOpenerEl.addEventListener('click', () => {
//     if (modalHandicap) {
//       const modalBody = modalHandicap.__component as Modal;
//       modalBody.opened = true;
//       modalBody.onCloseRequested = () => (modalBody.opened = false);
//     }
//   });
// }
export { };
