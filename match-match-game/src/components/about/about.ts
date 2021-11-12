import { BaseComponent } from '../base-component';
import './about.scss';

export class About extends BaseComponent {
  constructor() {
    super('main', ['main']);

    this.element.innerHTML = `
      <h2 class="title">How to play?</h2>
      <div class="how-to-play">
        <div class="how-to-play__wrapper">
          <div class="how-to-play__block">
            <div class="first"></div>
            <div class="wrapper">
              <span class="how-to-play__text">Register new player in game</span>
            </div>
          </div>
          <div class="how-to-play__block">
            <div class="second"></div>
            <div class="wrapper">
              <span class="how-to-play__text">Configure your game settings</span>
            </div>
          </div>
          <div class="how-to-play__block">
            <div class="third"></div>
            <span class="how-to-play__text">Start you new game!
              Remember card positions and match it before times up.</span>
          </div>
          <div class="how-to-play__block flex-direction">
            <span class="how-to-play__text">Example match</span>
            <div class="example-img"></div>
          </div>
        </div>
      </div>
    `;
  }
}
