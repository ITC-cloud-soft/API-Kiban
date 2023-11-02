/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlaceholderListItem } from 'design/components/atoms/email-template-editor';
import { EmailTemplateEditor } from 'design/components/atoms/email-template-editor/vanilla';
import { Pulldown } from 'design/components/atoms/pulldown/vanilla';
import { SettingMenu } from 'design/components/molecules/setting-menu/vanilla';

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settingMenuEl: any = document.querySelector('.m-setting-menu');
  if (settingMenuEl) {
    const settingMenu = settingMenuEl.__component as SettingMenu;
    settingMenu.changeActiveIndex(3);
  }

  const modalBodyE1: any = document.getElementById('modal-input');
  if (modalBodyE1) {
    const modal = modalBodyE1.__component as Modal;
    modal.opened = true;
  }

  const confirmButton: any = document.getElementById('input-form-check-button');
    if (confirmButton) {
      const modalBodyE2: any = document.getElementById('modal-comp');
      if (modalBodyE2) {
        const modal = modalBodyE2.__component as Modal;
        confirmButton.addEventListener('click', () => {
          modal.opened = true;
        });
        }
  }

  const cancelButton: any = document.getElementById('confirm-form-cancel-button');
    if (cancelButton) {
      const modalBodyE2: any = document.getElementById('modal-comp');
      if (modalBodyE2) {
        // const modal = modalBodyE1.__component as Modal;
        const modal2 = modalBodyE2.__component as Modal;
        cancelButton.addEventListener('click', () => {
          // modal.opened = true;
          modal2.opened = false;
        });
        }
  }


});

export {};
