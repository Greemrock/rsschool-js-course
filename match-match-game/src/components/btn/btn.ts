import { BaseComponent } from '../base-component';
import './btn.scss';

export class Btn extends BaseComponent {
  constructor() {
    super('button');
    this.element.setAttribute('type', 'button');
    this.element.classList.add('btn', 'btn-outline-primary');
  }

  render(nameBtn: string, id: string) {
    this.element.innerHTML = nameBtn;
    this.element.setAttribute('id', `${id}`);
    return this.element;
  }
}
