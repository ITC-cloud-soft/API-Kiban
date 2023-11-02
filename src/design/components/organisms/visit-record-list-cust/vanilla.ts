import { VanillaComponent, VanillaComponentConstructor } from 'design/libs/vanilla-component';
import { autoInitPulldown } from 'design/components/atoms/pulldown/vanilla';
import { UploadField } from 'design/components/atoms/upload-field/vanilla';
import { UploadFieldSingle } from 'design/components/atoms/upload-field-single/vanilla';

export class VisitRecordListCust extends VanillaComponent<HTMLDivElement> {
  private addButton1: HTMLButtonElement | null = null;
  private removeButtons1: NodeListOf<HTMLButtonElement> | null = null;
  private listEl1: HTMLDivElement | null = null;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    this.removeButtons1 = element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input-cust__button-close');
    this.addButton1 = element.querySelector<HTMLButtonElement>('.o-visit-record-list-cust__add-button .a-add-item-button');
    this.listEl1 = element.querySelector<HTMLDivElement>('.o-visit-record-list-cust__items');

    this.addButton1?.addEventListener('click', () => {
      const recordItemLength1 = element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input-cust')?.length || 0;
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const tmpl1: HTMLTemplateElement = this.element.querySelector('.o-visit-record-list-cust__template') as any;
      const itemEl1 : HTMLDivElement = tmpl1?.content.cloneNode(true) as any;
      if (itemEl1) {
        this.listEl1?.appendChild(itemEl1);
        autoInitPulldown('.a-pulldown');
        const newItemEl1 = this.listEl1?.querySelector('.m-visit-record-input-cust:last-child');
        if (newItemEl1) {
          newItemEl1.querySelectorAll<HTMLDivElement>('.a-upload-field').forEach(element => new UploadField({ element }));
          // const itemTitleEl1 = newItemEl1.querySelector<HTMLInputElement>('.a-text-field__input:first-child');
          // if (itemTitleEl1) {
          //   itemTitleEl1.value = `${recordItemLength1 + 1}`;
          // }
          const removeBtn1 = newItemEl1.querySelector<HTMLButtonElement>('.m-visit-record-input-cust__button-close');
          if (removeBtn1) this.addEventListenerRemove(element, removeBtn1);
        }

      }
      /* eslint-enable @typescript-eslint/no-explicit-any */
    });

    this.removeButtons1?.forEach(removeButton => {
      this.addEventListenerRemove(element, removeButton);
    });
  }

  addEventListenerRemove(_el: HTMLDivElement, removeBtn: HTMLElement) {
    removeBtn.addEventListener('click', e => {
      const target = <HTMLButtonElement>e.currentTarget;

      const removeLength = this.listEl1?.querySelectorAll<HTMLButtonElement>('.m-visit-record-input-cust')?.length || 0;
      if(removeLength>1){
        if (target.classList.contains('m-visit-record-input-cust__button-close')) {
          target.closest('.m-visit-record-input-cust')?.remove();
        }
      }else{
        const nothing="";
      }

      // this.listEl1?.querySelectorAll('.m-visit-record-input-cust').forEach((itemInputNo,index) => {
      //   const itemEl=itemInputNo.querySelector<HTMLInputElement>('.a-text-field__input:first-child');
      //   if(itemEl){
      //     itemEl.value = `${index + 1}`;
      //   }
      // });
    });
  }
}

export function autoInitVisitRecordListCust() {
  document
    .querySelectorAll<HTMLDivElement>('.o-visit-record-list-cust')
    .forEach(element => new VisitRecordListCust({ element }));
}
