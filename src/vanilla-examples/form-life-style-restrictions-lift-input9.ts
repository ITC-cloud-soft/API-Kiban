/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {

  const confirmButtonsasimodosi: any = document.getElementById('input-form-sasimodosi-button');
    if (confirmButtonsasimodosi) {
      const modalBodyEsasimodosi: any = document.getElementById('setting-sasimodosi-modal');
      if (modalBodyEsasimodosi) {
        const modal = modalBodyEsasimodosi.__component as Modal;
        confirmButtonsasimodosi.addEventListener('click', () => {
          modal.opened = true;
        });
        modal.onCloseRequested = () => (modal.opened = false);
        }
  }
  const confirmButtonteiannka: any = document.getElementById('input-form-teiannka-button');
    if (confirmButtonteiannka) {
      const cmodalBodyEteiannka: any = document.getElementById('setting-teiannka-modal');
      if (cmodalBodyEteiannka) {
        const modal = cmodalBodyEteiannka.__component as Modal;
        confirmButtonteiannka.addEventListener('click', () => {
          modal.opened = true;
        });
        modal.onCloseRequested = () => (modal.opened = false);
        }
  }



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //初期表示
  const modalquestionnaireBodyEl: any = document.getElementById('full-modal-questionnaire');
  if (modalquestionnaireBodyEl) {
    const modalmodalquestionnaireBodyElBody = modalquestionnaireBodyEl.__component as Modal;
    console.log(modalmodalquestionnaireBodyElBody);
    modalmodalquestionnaireBodyElBody.opened = true;
    modalmodalquestionnaireBodyElBody.onCloseRequested = () => (modalmodalquestionnaireBodyElBody.opened = false);
  }

  const modalquestionnaireHelpOpenerEl: any = document.getElementById('questionnaire-form-check-button');
  const modalquestionnaireHelp: any = document.getElementById('full-modal-input');
  if (modalquestionnaireHelpOpenerEl) {
    modalquestionnaireHelpOpenerEl.addEventListener('click', () => {
      if (modalquestionnaireHelp) {
        const modalBody = modalquestionnaireHelp.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
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

  const modaltofrontHelpOpenerEl: any = document.getElementById('input-form-to-front-button');
  const modaltofrontHelp: any = document.getElementById('full-modal-questionnaire');
  if (modaltofrontHelpOpenerEl) {
    modaltofrontHelpOpenerEl.addEventListener('click', () => {
      if (modaltofrontHelp) {
        const modalBody = modaltofrontHelp.__component as Modal;
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

const modalSearchOpenerEl: any = document.getElementById('search');
  const modalFinancial: any = document.getElementById('modal_financial_info');
  if (modalSearchOpenerEl) {
    modalSearchOpenerEl.addEventListener('click', () => {
      if (modalFinancial) {
        const modalBody = modalFinancial.__component as Modal;
        modalBody.opened = true;
        modalBody.onCloseRequested = () => (modalBody.opened = false);
      }
    });
  }

  const modalSchoolOpenerEl: any = document.getElementById('address-help');
    const modalSchool: any = document.getElementById('modal_help_address_info');
    if (modalSchoolOpenerEl) {
      modalSchoolOpenerEl.addEventListener('click', () => {
        if (modalSchool) {
          const modalBody = modalSchool.__component as Modal;
          modalBody.opened = true;
          modalBody.onCloseRequested = () => (modalBody.opened = false);
        }
      });
    }


const modalHandicapOpenerEl: any = document.getElementById('handicap');
const modalHandicap: any = document.getElementById('modal_help_handicap_info');
if (modalHandicapOpenerEl) {
  modalHandicapOpenerEl.addEventListener('click', () => {
    if (modalHandicap) {
      const modalBody = modalHandicap.__component as Modal;
      modalBody.opened = true;
      modalBody.onCloseRequested = () => (modalBody.opened = false);
    }
  });
}
export { };
