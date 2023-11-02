import { VanillaComponent, VanillaComponentConstructor } from 'design/libs/vanilla-component';
import { ScrollFreezer } from 'design/libs/scroll-freezer';
import { Pulldown } from 'design/components/atoms/pulldown/vanilla';

export class Modal extends VanillaComponent<HTMLDivElement> {
  private _onCloseRequested: () => void = () => undefined;
  private _onBackRequested: () => void = () => undefined;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    const closeButtonEl = element.querySelector<HTMLButtonElement>('.o-modal__close-button');
    closeButtonEl?.addEventListener('click', () => {
      this._onCloseRequested();
    });

    const backButtonEl = element.querySelector<HTMLButtonElement>('.o-modal__back-button');
    backButtonEl?.addEventListener('click', () => {
      this._onBackRequested();
    });
  }

  public set opened(status: boolean) {
    // check how many modal we're opening right now
    const modalCount = document.querySelectorAll('.o-modal--opened').length;
    this.element.style.zIndex = `${9999 + modalCount}`;
    this.element?.classList?.toggle('o-modal--opened', status);
    status ? ScrollFreezer.freeze() : ScrollFreezer.unfreeze();
  }

  public set onCloseRequested(callback: () => void) {
    this._onCloseRequested = callback;
  }

  public set onBackRequested(callback: () => void) {
    this._onBackRequested = callback;
  }

  public customPulldown(tagetdiv: string) {
    document.querySelectorAll<HTMLDivElement>(tagetdiv).forEach(element => new Pulldown({ element }));
  }
}

export function autoInitModal() {
  document.querySelectorAll<HTMLDivElement>('.o-modal').forEach(element => new Modal({ element }));
}
