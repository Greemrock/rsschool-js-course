import { Header } from '../header/header';
import { IndexDB } from '../indexDB/indexDB';
import { BaseComponent } from '../base-component';
import './reg-new-player.scss';

export class RegNewPlayer extends BaseComponent {
  private readonly indexDB: IndexDB;

  constructor() {
    super();
    this.element.innerHTML = `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Register new player</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form name="form" id="reg_form">
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input type="text" name="firstName" class="form-control" id="firstName" pattern=".{3,}" title="min 3 words" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="text" name="lastName" class="form-control" id="lastName" pattern=".{3,}" title="min 3 words" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">GitHub adress</label>
                  <input type="text" name="gitHubAdress" class="form-control" id="gitHubAdress" pattern="https://github.com/.+" title="github adress" required>
                  <div id="gitHelp" class="form-text">https://github.com/***</div>
                </div>
                <input type="submit" class="btn btn-primary" value="Add user" data-dismiss="modal" id="submitBtn">
                <input type="button" class="btn btn-secondary" data-bs-dismiss="modal" value="Close">
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    this.indexDB = new IndexDB();
    this.indexDB.createDB('store', 1);
    setTimeout(() => this.sendValueFormUser(), 1000);
    if (localStorage.getItem('registerUser') === 'true') {
      new Header().addUrlGame();
    }
  }

  sendValueFormUser() {
    const form = document.querySelector('#reg_form');
    const firstNameInput = document.querySelector('#firstName') as HTMLInputElement;
    const lastNameInput = document.querySelector('#lastName') as HTMLInputElement;
    const gitHubAdressInput = document.querySelector('#gitHubAdress') as HTMLInputElement;
    const modal = document.querySelector('.modal') as HTMLElement;

    form!.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!firstNameInput) throw Error(`firstNameInput: ${firstNameInput} error!`);
      if (!lastNameInput) throw Error(`lastNameInput: ${lastNameInput} error!`);
      if (!gitHubAdressInput) throw Error(`gitHubAdressInput: ${gitHubAdressInput} error!`);

      const firstNameValue = firstNameInput.value;
      const lastNameValue = lastNameInput.value;
      const gitHubAdressValue = gitHubAdressInput.value;
      const formValue = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        gitHubAdress: gitHubAdressValue,
        score: 0,
      };

      firstNameInput.value = '';
      lastNameInput.value = '';
      gitHubAdressInput.value = '';
      this.indexDB.addRecord('users', formValue);
      localStorage.setItem('registerUser', 'true');

      const modalBg = document.querySelector('.modal-backdrop') as HTMLElement;
      const btn = document.querySelector('#btnHeader') as HTMLButtonElement;
      document.body.style.cssText = '';
      modalBg.remove();
      modalBg.classList.toggle('show');
      modal.classList.toggle('show');
      modal.style.cssText = 'style="display: none;"';

      btn.innerHTML = 'start game';
      btn.removeAttribute('data-bs-toggle');
      btn.removeAttribute('data-bs-target');

      new Header().addUrlGame();
    });
  }
}
