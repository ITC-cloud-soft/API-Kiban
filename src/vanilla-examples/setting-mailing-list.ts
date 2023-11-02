import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  const createNewButtonEl = document.querySelector<HTMLButtonElement>('.a-create-button');
  const searchButtonButtonEl = document.querySelector<HTMLButtonElement>('.a-search-button--dark');

  if (createNewButtonEl && searchButtonButtonEl) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const searchModalEl: any = document.getElementById('setting-search-modal');

    if (searchModalEl) {
      const searchModal = searchModalEl.__component as Modal;

      searchButtonButtonEl.addEventListener('click', () => {
        searchModal.opened = true;
      });

      searchModal.onCloseRequested = () => {
        searchModal.opened = false;
      };
    }
  }
});
export {};
