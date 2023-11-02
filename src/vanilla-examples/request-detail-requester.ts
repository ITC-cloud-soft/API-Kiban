/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'design/components/organisms/modal/vanilla';

/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', () => {
  const openModalEls = document.querySelectorAll('a[href^="#modal"]');
  openModalEls.forEach(el => {
    const modalID = el.getAttribute('href')?.replace('#', '');
    const modalEl: any = document.getElementById(`${modalID}`);

    el.addEventListener('click', e => {
      e.preventDefault();
      if (modalEl) {
        const modalComp = modalEl.__component as Modal;
        modalComp.opened = true;
        modalComp.onCloseRequested = () => (modalComp.opened = false);
      }
    });
  });
});

export {};
