import { BaseComponent } from '../base-component';
import { delay } from '../shared/delay';
import './timer.scss';

export class Timer extends BaseComponent {
  private min: number;

  private sec: number;

  private timer: NodeJS.Timeout | null = null;

  minFinish = 0;

  secFinish = 0;

  constructor() {
    super('div', ['timer_wrapper']);
    this.element.innerHTML = `
      <h2 class="timer" id="timer">00:00</h2>
    `;
    this.min = 0;
    this.sec = 0;
  }

  callTimer() {
    const timer = document.getElementById('timer') as HTMLElement;
    this.sec += 1;
    if (this.sec === 60) {
      this.sec = 0;
      this.min++;
    }
    if (this.sec < 10 && this.min < 10) {
      timer.innerHTML = `0${this.min}:0${this.sec}`;
    } else if (this.sec > 9 && this.min < 10) {
      timer.innerHTML = `0${this.min}:${this.sec}`;
    } else timer.innerHTML = `${this.min}:${this.sec}`;
  }

  start() {
    this.timer = setInterval(() => this.callTimer(), 1000);
  }

  funcPause() {
    if (!this.timer) throw Error(`timer = ${this.timer}`);
    clearInterval(this.timer);
    this.backDrop();
  }

  pause(pauseSelector: string) {
    const pause = document.querySelector(`${pauseSelector}`) as HTMLButtonElement;
    pause.addEventListener('click', () => {
      this.funcPause();
    });
  }

  funcReset() {
    if (!this.timer) throw Error(`timer = ${this.timer}`);
    clearInterval(this.timer);
    this.minFinish = this.min;
    this.secFinish = this.sec;
    this.min = 0;
    this.sec = 0;
    const timer = document.getElementById('timer') as HTMLElement;
    timer.innerHTML = '00:00';
  }

  reset(resetBlock: string) {
    const reset = document.querySelectorAll(`${resetBlock}`);
    reset.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.funcReset();
      });
    });
  }

  backDrop() {
    const bg = document.createElement('div');
    bg.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(bg);
    bg.addEventListener('click', () => {
      bg.remove();
      this.start();
    });
  }
}
