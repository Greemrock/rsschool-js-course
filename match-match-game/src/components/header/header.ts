import { BaseComponent } from '../base-component';
import { Btn } from '../btn/btn';
import './header.scss';

export class Header extends BaseComponent {
  private btn: Btn;

  private btnHeader: HTMLButtonElement;

  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <a href="#/" class="header__logo">
        <img src="./logo.svg" alt="logo">
      </a>
      <nav class="header__menu">
        <div class="header__list">
          <a href="#/" class="link">
            <div class="about"></div>
            <span>About Game</span>
          </a>
          <a href="#/score" class="link">
            <div class="score"></div>
            <span>Best Score</span>
          </a>
          <a href="#/settings" class="link">
            <div class="settings"></div>
            <span>Game Settings</span>
          </a>
        </div>
      </nav>
    `;
    this.btn = new Btn();
    if (!localStorage.getItem('registerUser')) {
      this.btnRegistr();
    } else if (localStorage.getItem('registerUser') === 'true') {
      this.btnStart();
    }
    this.btnHeader = document.querySelector('#btnStart') as HTMLButtonElement;
  }

  btnStart() {
    this.element.appendChild(this.btn.render('start game', 'btnStart'));
  }

  btnRegistr() {
    this.btn.element.setAttribute('data-bs-toggle', 'modal');
    this.btn.element.setAttribute('data-bs-target', '#exampleModal');
    this.element.appendChild(this.btn.render('register new player', 'btnReg'));
  }

  btnPause() {
    return this.element.appendChild(this.btn.render('pause game', 'pause'));
  }

  addUrlGame() {
    const hash = () => {
      window.location.hash = '#/game';
    };
    this.btnHeader.addEventListener('click', () => {
      hash();
      this.btnHeader.removeEventListener('click', hash);
    });
  }
}
