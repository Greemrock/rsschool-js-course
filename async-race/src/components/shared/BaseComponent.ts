export class BaseComponent {
  readonly element:
    | HTMLAnchorElement
    | HTMLElement
    | HTMLButtonElement
    | HTMLInputElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
  }
}
