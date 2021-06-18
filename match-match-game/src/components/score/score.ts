import { BaseComponent } from '../base-component';
import { RegNewPlayer } from '../reg-new-player/reg-new-player';
import './score.scss';

export class Score extends BaseComponent {
  private regNewPlayer: RegNewPlayer = new RegNewPlayer();

  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
      <h2 class="title">Score</h2>
    `;
  }

  scoreUser(min: number, sec: number) {
    const mutchCards = localStorage.getItem('mutchCards');
    const noMutchCards = localStorage.getItem('noMutchCards');
    let secUser: number;
    if (min > 0) {
      secUser = min * 60 + sec;
    } else {
      secUser = sec;
    }
    const scor = (Number(mutchCards) - Number(noMutchCards)) * 100 - secUser * 10;
    console.log(this.regNewPlayer.dataUser);
    return scor;
  }
}
