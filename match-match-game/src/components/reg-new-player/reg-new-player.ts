import { IRecord } from '../interfaces/IRecord';
import { Header } from '../header/header';
import { IndexDB } from '../indexDB/indexDB';
import { BaseComponent } from '../base-component';
import './reg-new-player.scss';

export class RegNewPlayer extends BaseComponent {
  private readonly indexDB: IndexDB = new IndexDB();

  dataUser = {} as IRecord;

  constructor() {
    super();
    this.element.innerHTML = `
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Register new player</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form name="form" id="reg_form">
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    class="form-control"
                    id="firstName"
                    pattern="[a-z,A-Z,а-я,А-Я]{1,15}"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    class="form-control"
                    id="lastName"
                    pattern="[a-z,A-Z,а-я,А-Я]{1,15}"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label class="form-label">Gmail adress</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    title="email
                    adress"
                    required
                  >
                </div>
                <input
                  type="submit"
                  class="btn
                  btn-primary"
                  value="Add user"
                  data-dismiss="modal"
                  id="submitBtn"
                >
                <input
                  type="button"
                  class="btn
                  btn-secondary"
                  data-bs-dismiss="modal"
                  value="Close"
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
    if (localStorage.getItem('registerUser') === 'true') {
      new Header().addUrlGame();
    }
  }

  sendValueFormUser() {
    const form = document.querySelector('#reg_form');
    const firstNameInput = document.querySelector('#firstName') as HTMLInputElement;
    const lastNameInput = document.querySelector('#lastName') as HTMLInputElement;
    const emailAdressInput = document.querySelector('#email') as HTMLInputElement;
    const modal = document.querySelector('.modal') as HTMLElement;

    this.indexDB.createDB('store', 1);

    form!.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!firstNameInput) throw Error(`firstNameInput: ${firstNameInput} error!`);
      if (!lastNameInput) throw Error(`lastNameInput: ${lastNameInput} error!`);
      if (!emailAdressInput) throw Error(`gitHubAdressInput: ${emailAdressInput} error!`);

      const firstNameValue = firstNameInput.value;
      const lastNameValue = lastNameInput.value;
      const emailValue = emailAdressInput.value;
      const formValue: IRecord = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        score: 0,
        created: new Date().getTime(),
      };
      this.dataUser = formValue;
      console.log(this.indexDB);

      firstNameInput.value = '';
      lastNameInput.value = '';
      emailAdressInput.value = '';
      this.indexDB.addRecord('users', formValue);
      localStorage.setItem('registerUser', 'true');

      const modalBg = document.querySelector('.modal-backdrop') as HTMLElement;
      const btn = document.querySelector('#btnReg') as HTMLButtonElement;
      document.body.style.cssText = '';
      modalBg.remove();
      modalBg.classList.toggle('show');
      modal.classList.toggle('show');
      modal.style.cssText = 'style="display: none;"';

      btn.innerHTML = 'start game';
      btn.removeAttribute('data-bs-toggle');
      btn.removeAttribute('data-bs-target');
      btn.setAttribute('id', 'btnStart');
      new Header().addUrlGame();
    });
  }

  setValueDB(dataUser: IRecord) {
    this.indexDB.addRecord('users', dataUser);
  }
}
