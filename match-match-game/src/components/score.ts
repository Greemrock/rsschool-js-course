import { BaseComponent } from './base-component';
import './score.scss';

export class Score extends BaseComponent {
  constructor() {
    super('main', ['main']);

    this.element.innerHTML = `
      <div class="main__body">
        <h2 class="title">SCore</h2>
      </div>`;
  }
}
