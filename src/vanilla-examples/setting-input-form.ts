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
    settingMenu.changeActiveIndex(1);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const emailTemplateEditorEl: any = document.querySelector('.a-email-template-editor');
  if (emailTemplateEditorEl) {
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
    const emailTemplateEditor = emailTemplateEditorEl.__component as EmailTemplateEditor;
    emailTemplateEditor.onResolvePlaceholder = (searchTerm: string) => {
      return new Promise(resolve => {
        console.log('searchTerm', searchTerm);
        setTimeout(() => {
          resolve(codeList);
        }, 250);
      });
    };
  }

  const appMenuPulldownEl: HTMLElement = document.getElementById('application-menu-pulldown') as any;
  const statusPulldownEl: HTMLElement = document.getElementById('status-pulldown') as any;
  if (appMenuPulldownEl && statusPulldownEl) {
    const appMenuPulldownSelect: HTMLSelectElement = appMenuPulldownEl.querySelector('.a-pulldown__select') as any;
    const statusPulldown = (statusPulldownEl as any).__component as Pulldown;
    appMenuPulldownSelect.addEventListener('change', (e: any) => {
      const currentValue = e.target.value;
      statusPulldown.reset();
      if (currentValue !== '') {
        statusPulldown.enable();
      } else {
        statusPulldown.disable();
      }
    });
  }
});

export {};
