import { BaseComponent } from '../base-component';
import './header.scss';

export class Header extends BaseComponent {
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
      <a class="btn btn-outline-primary" href="#/register" id="register">register new player</a>
    `;
  }
}
