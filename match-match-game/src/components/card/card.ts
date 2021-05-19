import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
const FLIP_DELAY = 1500;

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly imageFront: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url(./images/${imageFront}")></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
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
  }

  noMatch() {
    const addClass = () => {
      console.log('no-mutch');
      this.element.classList.remove('no-match');
    };
    this.element.classList.add('no-match');
    setTimeout(addClass, FLIP_DELAY);
  }
}
