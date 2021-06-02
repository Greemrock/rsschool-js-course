import { RegNewPlayer } from '../reg-new-player/reg-new-player';
import { Score } from '../score/score';
import { Modal } from '../modal/modal';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { BaseComponent } from '../base-component';
import './game.scss';
import { delay } from '../shared/delay';
import { Timer } from '../timer/timer';

export const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly regNewPlayer: RegNewPlayer = new RegNewPlayer();

  private activeCard?: Card;

  private isAnimation = false;

  private readonly timer: Timer = new Timer();

  private readonly score: Score = new Score();

  constructor() {
    super('main', ['main', 'game']);
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
    localStorage.setItem('mutchCards', '0');
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.imageFront !== card.imageFront) {
      this.activeCard.noMatch();
      card.noMatch();
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.activeCard.match();
      card.match();
      this.finishGame();
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }

  startTimer() {
    this.timer.start();
    this.timer.pause('#pause');
    this.timer.reset('.header__list');
    console.log('go timer!');
  }

  finishGame() {
    const amountCards = localStorage.getItem('cards');
    const mutchCards = localStorage.getItem('mutchCards');
    console.log(Number(mutchCards) === Number(amountCards));
    if (Number(mutchCards) === Number(amountCards)) {
      this.timer.funcPause();
      const timeUser = document.getElementById('timer')?.innerHTML as string;
      console.log(timeUser);

      document.body.appendChild(new Modal(timeUser).element);

      const closeBtn = document.getElementById('closeModal');
      const bg = document.querySelector('.modal-backdrop');
      const modal = document.getElementById('modalFinish');

      closeBtn?.addEventListener('click', () => {
        bg?.remove();
        modal?.remove();
        this.timer.funcReset();
        const score = this.score.scoreUser(this.timer.minFinish, this.timer.secFinish);
        const key = this.regNewPlayer.keyUser();
        console.log('score', score);
        console.log('key', key);
        // console.log('key', key);
        this.regNewPlayer.changeValueDB();
        window.location.hash = '#/';
      });
    }
  }
}
