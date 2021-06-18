import { Card } from '../card/card';
import { BaseComponent } from '../base-component';
import './cards-field.scss';
import { Timer } from '../timer/timer';

const SHOW_TIME = 5000;

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  private readonly timer: Timer;

  constructor() {
    super('div', ['cards-field']);
    this.timer = new Timer();
    this.element.appendChild(this.timer.element);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
    this.element.appendChild(this.timer.element);
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME);
  }
}
