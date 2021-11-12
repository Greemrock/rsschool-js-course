import { BaseComponent } from '../base-component';

export class Modal extends BaseComponent {
  time: string;

  constructor(time: string) {
    super('div', ['modal', 'fade', 'show']);
    this.time = time;
    this.element.innerHTML = `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            Congratulations! You successfully found all matches on ${this.time} minutes.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="closeModal"
            >ok</button>
          </div>
        </div>
      </div>
    `;
    this.element.setAttribute('id', 'modalFinish');
    this.element.setAttribute('data-bs-backdrop', 'static');
    this.element.setAttribute('data-bs-keyboard', 'false');
    this.element.setAttribute('tabindex', '-1');
    this.element.setAttribute('aria-labelledby', 'staticBackdropLabel');
    this.element.setAttribute('aria-modal', 'true');
    this.element.setAttribute('role', 'dialog');
    this.element.style.display = 'block';
  }
}
