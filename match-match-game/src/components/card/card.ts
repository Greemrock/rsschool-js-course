import { Timer } from '../timer/timer';
import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
const FLIP_DELAY = 1500;

export class Card extends BaseComponent {
  private timer: Timer;

  isFlipped = false;

  constructor(readonly imageFront: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url(./images/${imageFront}")></div>
        <div class="card__back"></div>
      </div>
    `;
    this.timer = new Timer();
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    console.log('flip');
    this.isFlipped = false;
    // this.startTimer();

    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  match() {
    this.element.classList.add('match');
    console.log('mutch');
  }

  noMatch() {
    const addClass = () => {
      console.log('no-mutch');
      this.element.classList.remove('no-match');
    };
    this.element.classList.add('no-match');
    setTimeout(addClass, FLIP_DELAY);
  }

  // startTimer() {
  //   console.log('Зашло?');
  //   console.log(document.querySelectorAll('.card'));
  //   const cards = document.querySelectorAll('.card');
  //   cards.forEach((card) => {
  //     console.log('создало обработчик');
  //     card.addEventListener('click', () => {
  //       // this.timer.start();
  //       console.log('click card');
  //     });
  //   });
  // }
}
