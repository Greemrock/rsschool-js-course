import { BaseComponent } from '../base-component';
import { delay } from '../shared/delay';
import './timer.scss';

export class Timer extends BaseComponent {
  private min: number;

  private sec: number;

  private timer: NodeJS.Timeout | null = null;

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
    if (this.sec < 10 && this.min < 10) {
      timer.innerHTML = `0${this.min}:0${this.sec}`;
    } else if (this.sec > 9 && this.min < 10) {
      timer.innerHTML = `0${this.min}:${this.sec}`;
    } else timer.innerHTML = `${this.min}:${this.sec}`;
    if (this.sec === 60) {
      this.sec = 0;
      this.min++;
    }
  }

  start() {
      this.timer = setInterval(() => this.callTimer(), 1000);
  }

  private funcPause() {
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

  // delPause(startSelector: string) {
  //   const start = document.querySelector(`${startSelector}`) as HTMLButtonElement;
  //   start.removeEventListener('click', () => this.funcPause());
  // }

  reset(resetBlock: string) {
    const reset = document.querySelectorAll(`${resetBlock}`);
    reset.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!this.timer) throw Error(`timer = ${this.timer}`);
        clearInterval(this.timer);
        this.min = 0;
        this.sec = 0;
        const timer = document.getElementById('timer') as HTMLElement;
        timer.innerHTML = '00:00';
      });
    });
  }

  backDrop() {
    const bg = document.createElement('div');
    bg.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(bg);
    bg.addEventListener('click', () => {
      bg.remove();
      this.timer = setInterval(() => this.callTimer(), 1000);
    });
  }
}
