import { IndexDB } from '../indexDB/indexDB';
import { BaseComponent } from '../base-component';
import './reg-new-player.scss';

export class RegNewPlayer extends BaseComponent {
  btn: HTMLAnchorElement | null;

  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
      <form name="form" id="reg_form">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">First Name</label>
          <input type="text" name="firstName" class="form-control" id="firstName" pattern=".{3,}" title="min 3 words" required>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Last Name</label>
          <input type="text" name="lastName" class="form-control" id="lastName" pattern=".{3,}" title="min 3 words" required>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">GitHub adress</label>
          <input type="text" name="gitHubAdress" class="form-control" id="gitHubAdress" pattern="https://github.com/.+" title="github adress" required>
          <div id="gitHelp" class="form-text">https://github.com/***</div>
        </div>
        <button type="submit" class="btn btn-primary">Add user</button>
      </form>
    `;
    this.btn = null;
  }

  async changeRegBtn(nameBtn: string, href: string, idTag: string) {
    this.btn = document.querySelector(`#${idTag}`);
    if (!this.btn) throw Error(`RegNewPlayer.changeRegBtn(): error - btn = ${this.btn}`);
    this.btn.href = href;
    this.btn.innerHTML = nameBtn;
  }
}
