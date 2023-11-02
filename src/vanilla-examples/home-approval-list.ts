import { Modal } from 'design/components/organisms/modal/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  const searchButtonEl = document.querySelector('.a-search-button--dark');

  if (searchButtonEl) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modalEl: any = document.querySelector('.o-modal');
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
});
export {};
