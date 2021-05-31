import { IRecord } from '../interfaces/IRecord';
import { Timer } from '../timer/timer';
import { BaseComponent } from '../base-component';
import { RegNewPlayer } from '../reg-new-player/reg-new-player';
import './score.scss';

export class Score extends BaseComponent {
  private timer: Timer = new Timer();

  private regNewPlayer: RegNewPlayer = new RegNewPlayer();

  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
      <h2 class="title">SCore</h2>
    `;
  }

  scoreUser() {
    const mutchCards = localStorage.getItem('mutchCards');
    const noMutchCards = localStorage.getItem('noMutchCards');
    const secUser = this.timer.minFinish * 60 + this.timer.secFinish;
    const score = (Number(mutchCards) - Number(noMutchCards)) * 100 - secUser * 10;
    const dataUser = this.regNewPlayer.dataUser as IRecord;
    dataUser.score = score;
    console.log(dataUser);
    // this.regNewPlayer.setValueDB(dataUser);
  }
}
