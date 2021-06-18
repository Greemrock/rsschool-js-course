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
    const secontCard = 1;
    this.element.classList.add('match');
    const num = Number(localStorage.getItem('mutchCards')) + secontCard;
    localStorage.setItem('mutchCards', String(num));
  }

  noMatch() {
    const addClass = () => {
      const secontCard = 1;
      const num = Number(localStorage.getItem('noMutchCards')) + secontCard;
      localStorage.setItem('noMutchCards', String(num));
      this.element.classList.remove('no-match');
    };
    this.element.classList.add('no-match');
    setTimeout(addClass, FLIP_DELAY);
  }
}
