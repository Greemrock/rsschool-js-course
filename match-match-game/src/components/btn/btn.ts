import { BaseComponent } from '../base-component';
import './btn.scss';

class Btn extends BaseComponent {
  constructor() {
    super('button');
    this.element.setAttribute('type', 'button');
    this.element.setAttribute('id', 'btnHeader');
    this.element.classList.add('btn', 'btn-outline-primary');
  }

  render(nameBtn: string) {
    this.element.innerHTML = nameBtn;
    return this.element;
  }
}

export default Btn;
