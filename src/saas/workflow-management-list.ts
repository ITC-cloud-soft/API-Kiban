/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'design/components/molecules/data-table/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
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
    if (dataTable) {
      dataTable.onRowClick = () => {
        createModal.opened = true;
      };
    }
  }
});

export {};
