import { VanillaComponent, VanillaComponentConstructor } from 'design/libs/vanilla-component';

export class VisitRecordInputCust extends VanillaComponent<HTMLDivElement> {
  private _handleCloseClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    element.querySelectorAll<HTMLButtonElement>('.m-visit-record-input-cust__button-close').forEach(el => {
      el.addEventListener('click', () => {
        this._handleCloseClick();
      });
    });
  }

  public set onCloseClick(callback: () => void) {
    this._handleCloseClick = callback;
  }
}

export function autoInitVisitRecordInputCust() {
  document
    .querySelectorAll<HTMLDivElement>('.m-visit-record-input-cust')
    .forEach(element => new VisitRecordInputCust({ element }));
}
