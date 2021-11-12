import { BaseComponent } from '../base-component';
import './score.scss';

export class Score extends BaseComponent {
  private secUser = 0;

  constructor() {
    super('main', ['main']);
    this.element.innerHTML = `
      <h2 class="title">Score</h2>
    `;
  }

  scoreUser(min: number, sec: number) {
    const mutchCards = localStorage.getItem('mutchCards');
    const noMutchCards = localStorage.getItem('noMutchCards');
    const minInSec = 60;
    if (min > 0) {
      this.secUser = min * minInSec + sec;
    } else {
      this.secUser = sec;
    }
    const scor = (Number(mutchCards) - Number(noMutchCards)) * 100 - this.secUser * 10;
    return scor;
  }
}
