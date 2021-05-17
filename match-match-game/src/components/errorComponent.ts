import { BaseComponent } from './base-component';

export class ErrorComponent extends BaseComponent {
  constructor() {
    super('main', ['main']);

    this.element.innerHTML = `
      <section>
        <h1>Error</h1>
        <p>Page don't exist</p>
      </section>
    `;
  }
}
