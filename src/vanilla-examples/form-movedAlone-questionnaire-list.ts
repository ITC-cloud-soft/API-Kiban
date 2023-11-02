/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'design/components/molecules/data-table/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {

  const confirmButton: any = document.getElementById('input-form-search-button');
    if (confirmButton) {
      const modalBodyE2: any = document.getElementById('setting-search-modal');
      if (modalBodyE2) {
        const modal = modalBodyE2.__component as Modal;
        confirmButton.addEventListener('click', () => {
          modal.opened = true;
        });
        modal.onCloseRequested = () => (modal.opened = false);
        }
  }
  const searchButton: any = document.getElementById('csv');
    if (searchButton) {
      const modalBodyE2: any = document.getElementById('msg-modal');
      if (modalBodyE2) {
        const modal2 = modalBodyE2.__component as Modal;
        searchButton.addEventListener('click', () => {
          modal2.opened = true;
        });
        modal2.onCloseRequested = () => (modal2.opened = false);
        }
  }

  const detailedButton1: any = document.getElementById('detailed1');
    if (detailedButton1) {
      const modalBodyE2: any = document.getElementById('modal-approval-detail');
      if (modalBodyE2) {
        const modal2 = modalBodyE2.__component as Modal;
        detailedButton1.addEventListener('click', () => {
          modal2.opened = true;
        });
        modal2.onCloseRequested = () => (modal2.opened = false);
        }
  }
  const detailedButton2: any = document.getElementById('detailed2');
    if (detailedButton2) {
      const modalBodyE2: any = document.getElementById('msg-modal-detailed');
      if (modalBodyE2) {
        const modal2 = modalBodyE2.__component as Modal;
        detailedButton2.addEventListener('click', () => {
          modal2.opened = true;
        });
        modal2.onCloseRequested = () => (modal2.opened = false);
        }
  }
  const linkcheckButton: any = document.getElementById('linkcheck');
    if (linkcheckButton) {
      const modalBodyE2: any = document.getElementById('msg-modal-linkcheck');
      if (modalBodyE2) {
        const modal2 = modalBodyE2.__component as Modal;
        linkcheckButton.addEventListener('click', () => {
          modal2.opened = true;
        });
        modal2.onCloseRequested = () => (modal2.opened = false);
        }
  }
  const linkcheckzumiButton: any = document.getElementById('linkcheckzumi');
    if (linkcheckzumiButton) {
      const modalBodyE2: any = document.getElementById('msg-modal-linkcheckzumi');
      if (modalBodyE2) {
        const modal2 = modalBodyE2.__component as Modal;
        linkcheckzumiButton.addEventListener('click', () => {
          modal2.opened = true;
        });
        modal2.onCloseRequested = () => (modal2.opened = false);
        }
  }



  const createModalEl: any = document.getElementById('modal-comp');
    const createModal = createModalEl.__component as Modal;
    if (createModal) {
      createModal.onCloseRequested = () => {
        createModal.opened = false;
      };
      }

  const dataTableEl = document.getElementById('setting-list-data-table') as any;
    if (dataTableEl) {
      const dataTable = dataTableEl.__component as DataTable;
      // console.log('dataTableEl.__component', dataTableEl.__component);
      if (dataTable) {
        dataTable.onRowClick = rowIndex => {
          console.log('rowIndex click', rowIndex);
          createModal.opened = true;
        };
      }
    }
});

export {};
