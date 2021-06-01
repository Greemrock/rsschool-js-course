import { BaseComponent } from '../base-component';
import './settings.scss';

export class Settings extends BaseComponent {
  private dif = '';

  constructor() {
    super('main', ['main']);

    this.element.innerHTML = `
      <form name="formOptions">
        <h3>Game cards</h3>
        <select
          id="categories"
          class="form-select
          form-select-lg mb-3"
          aria-label=".form-select-lg"
        >
          <option value="0">Pack 1</option>
          <option value="1">Pack 2</option>
        </select>
        <h3>Difficulty</h3>
        <select
          id="difficulty"
          class="form-select
          form-select-lg mb-3"
          aria-label=".form-select-lg"
        >
          <option value="8">4 cards</option>
          <option value="6">8 cards</option>
          <option value="4">12 cards</option>
          <option value="2">16 cards</option>
          <option value="0">20 cards</option>
        </select>
      </form>
    `;
    localStorage.setItem('difficulty', '8');
    localStorage.setItem('categories', '0');
    localStorage.setItem('cards', '4');
  }
}
