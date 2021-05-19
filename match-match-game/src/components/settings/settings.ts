import { BaseComponent } from '../base-component';
import './settings.scss';

export class Settings extends BaseComponent {
  constructor() {
    super('main', ['main']);

    this.element.innerHTML = `
      <h3>Game cards</h3>
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg">
        <option selected>select game cards type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <h3>Difficulty</h3>
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg">
        <option selected>select game type</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    `;
  }
}
