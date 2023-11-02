/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddItemButton } from 'design/components/atoms/add-item-button/vanilla';
import { Alert } from 'design/components/atoms/alert/vanilla';
import { ModalOpener } from 'design/components/atoms/modal-opener/vanilla';
import { Toast } from 'design/components/atoms/toast/vanilla';
import { SearchBar } from 'design/components/molecules/search-bar/vanilla';
import { ExpenseRecordInput } from 'design/components/molecules/expense-record-input/vanilla';
import { VisitRecordInput } from 'design/components/molecules/visit-record-input/vanilla';
import { Modal } from 'design/components/organisms/modal/vanilla';
import { AddressSearchField } from 'design/components/atoms/address-search-field/vanilla';
import { RequestInfo } from 'design/components/molecules/request-info/vanilla';
import { UploadListItem } from 'design/components/molecules/upload-list/vanllia';
import { DateRangeField } from 'design/components/atoms/date-range-field/vanilla';
import { EmailTemplateEditor } from 'design/components/atoms/email-template-editor/vanilla';
import { PlaceholderListItem } from 'design/components/atoms/email-template-editor';
import { SearchCurrentFilters } from 'design/components/molecules/search-current-filters/vanilla';
import { DataTable } from 'design/components/molecules/data-table/vanilla';

/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', () => {
  console.log('sample.ts loaded');

  const addItemButtonEl: any = document.querySelector('.a-add-item-button');
  if (addItemButtonEl) {
    const alertComp = addItemButtonEl.__component as AddItemButton;
    alertComp.onAddItemClick = () => {
      console.log('Add item button clicked!');
    };
  }

  const alertEl: any = document.getElementById('alert-comp');
  if (alertEl) {
    const alertComp = alertEl.__component as Alert;
    alertComp.onClearClick = () => {
      console.log('alert comp click!');
    };
  }

  const modalOpenerEl: any = document.getElementById('modal-opener');
  const modalEl: any = document.getElementById('modal-comp');
  if (modalOpenerEl) {
    const modalOpener = modalOpenerEl.__component as ModalOpener;
    modalOpener.onOpenClick = () => {
      console.log('modal opener is clicked');
      if (modalEl) {
        const modalComp = modalEl.__component as Modal;
        modalComp.opened = true;
        modalComp.onCloseRequested = () => (modalComp.opened = false);
      }
    };
  }

  const toastOpenerEl: any = document.getElementById('show-toast-btn');
  if (toastOpenerEl) {
    toastOpenerEl.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      console.log('open toast');
      const toastEl: any = document.getElementById('toast-1');
      if (toastEl) {
        const toast = toastEl.__component as Toast;
        console.log('toast', toast);
        toast.opened = true;
      }
    });
  }
  const searchBarEl: any = document.getElementById('search-bar-comp');
  if (searchBarEl) {
    const searchBarComp = searchBarEl.__component as SearchBar;
    searchBarComp.onCloseClick = () => {
      console.log("search bar's button close click!");
    };
  }

  const visitRecordInputEl: any = document.getElementById('visit-record-input-comp');
  if (visitRecordInputEl) {
    const visitRecordInputComp = visitRecordInputEl.__component as VisitRecordInput;
    visitRecordInputComp.onCloseClick = () => {
      console.log("visit record input's button close click!");
    };
  }

  const expenseRecordInputEl: any = document.getElementById('expense-record-input-comp');
  if (expenseRecordInputEl) {
    const expenseRecordInputComp = expenseRecordInputEl.__component as ExpenseRecordInput;
    expenseRecordInputComp.onCloseClick = () => {
      console.log("expense record input's button close click!");
    };
  }

  const addressSearchEl: any = document.getElementById('address-search-field');
  if (addressSearchEl) {
    const addrSearchComp = addressSearchEl.__component as AddressSearchField;
    addrSearchComp.onSearchClick = () => {
      console.log('search!');
    };
  }

  const dateRangeEl: any = document.getElementById('date-range');
  if (dateRangeEl) {
    const dateRangeComp = dateRangeEl.__component as DateRangeField;
    dateRangeComp.onDateRangeChange = (dates: (Date | undefined)[]) => {
      console.log('onDateRangeChange', dates);
    };
  }

  const reqListButtonsEl: HTMLElement | null = document.getElementById('req-list-buttons');
  if (reqListButtonsEl) {
    // get all request-info
    const requestInfoEls = reqListButtonsEl.querySelectorAll('.m-request-info');
    requestInfoEls.forEach((reqInfoEl: any) => {
      const reqInfoComp = reqInfoEl.__component as RequestInfo;
      reqInfoComp.handleCardClick = () => {
        console.log('card click');
      };
      const denialBtn = reqInfoEl.querySelector('.denial-btn');
      if (denialBtn) {
        denialBtn.addEventListener('click', () => console.log('denail'));
      }
      const remandBtn = reqInfoEl.querySelector('.remand-btn');
      if (remandBtn) {
        remandBtn.addEventListener('click', () => console.log('remand'));
      }
      const approvalBtn = reqInfoEl.querySelector('.approval-btn');
      if (approvalBtn) {
        approvalBtn.addEventListener('click', () => console.log('approval'));
      }
      const copyBtn = reqInfoEl.querySelector('.copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => console.log('copy'));
      }
    });
  }

  const uploadListItemEl: any = document.querySelector('.m-upload-list__item');
  if (uploadListItemEl) {
    const uploadListItem = uploadListItemEl.__component as UploadListItem;
    uploadListItem.onCloseClick = () => {
      console.log('This file has been removed');
    };
  }

  const editorEl: any = document.querySelector('.a-email-template-editor');
  if (editorEl) {
    const codeList: PlaceholderListItem[] = [
      {
        id: 1,
        value: '申請者名',
        code: '%%7890%%',
      },
      {
        id: 2,
        value: '申請者 氏名（姓）',
        code: '%%7891%%',
      },
      {
        id: 3,
        value: '申請者 氏名（名）',
        code: '%%7892%%',
      },
      {
        id: 4,
        value: '亡くなられた方の氏名（姓）',
        code: '%%7893%%',
      },
      {
        id: 5,
        value: '亡くなられた方の氏名（名）',
        code: '%%7893%%',
      },
    ];
    const editor = editorEl.__component as EmailTemplateEditor;
    editor.onResolvePlaceholder = (searchTerm: string) => {
      return new Promise(resolve => {
        console.log('searchTerm', searchTerm);
        setTimeout(() => {
          resolve(codeList);
        }, 250);
      });
    };
  }
  const searchFiltersEl: any = document.getElementById('search-current-filters');
  if (searchFiltersEl) {
    const searchFilters = searchFiltersEl.__component as SearchCurrentFilters;
    searchFilters.onClearClick = () => {
      console.log('clear search filters');
    };
  }
  const dataTableEl: any = document.querySelector('.m-data-table');
  if (dataTableEl) {
    const dataTable = dataTableEl.__component as DataTable;
    dataTable.onRowClick = (index: number) => {
      console.log('row clicked', index);
    };
  }
});

export {};
