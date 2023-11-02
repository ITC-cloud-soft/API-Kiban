/* eslint-disable no-console */
import { DataTable } from 'design/components/molecules/data-table/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  const createNewButtonEl = document.querySelector<HTMLButtonElement>('.a-create-button');
  const searchButtonButtonEl = document.querySelector<HTMLButtonElement>('.a-search-button--dark');


  if (createNewButtonEl && searchButtonButtonEl) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const createModalEl: any = document.getElementById('create-modal');
    // const createModal = createModalEl.__component as Modal;
    // if (createModal) {
    //   createModal.onCloseRequested = () => {
    //     createModal.opened = false;
    //   };
    // }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const searchModalEl: any = document.getElementById('setting-search-modal');

    createNewButtonEl.addEventListener('click', () => {
      // window.location.href = 'setting-input-form.html';
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataTableEl = document.getElementById('setting-list-data-table') as any;
    if (dataTableEl) {
      const dataTable = dataTableEl.__component as DataTable;
      console.log('dataTableEl.__component', dataTableEl.__component);
      if (dataTable) {
        dataTable.onRowClick = rowIndex => {
          console.log('rowIndex click', rowIndex);
          // createModal.opened = true;
        };
      }
    }

    if (searchModalEl) {
      const searchModal = searchModalEl.__component as Modal;

      searchButtonButtonEl.addEventListener('click', () => {
        searchModal.opened = true;
      });

      if (searchModal) {
        searchModal.onCloseRequested = () => {
          searchModal.opened = false;
        };
      }
    }
  }
});
export {};
