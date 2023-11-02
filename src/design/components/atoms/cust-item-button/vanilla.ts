import { VanillaComponent, VanillaComponentConstructor } from 'design/libs/vanilla-component';

export class CustItemButton extends VanillaComponent<HTMLButtonElement> {
  private _handleCustItemClick: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLButtonElement>) {
    super({ element });

    element.addEventListener('click', () => {
      this._handleCustItemClick();
    });
  }

  public set onCustItemClick(callback: () => void) {
    this._handleCustItemClick = callback;
  }
}

export function autoInitCustItemButton() {
  document.querySelectorAll<HTMLButtonElement>('.a-cust-item-button').forEach(element => new CustItemButton({ element }));
}
