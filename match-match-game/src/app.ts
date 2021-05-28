import { Timer } from './components/timer/timer';
import { RegNewPlayer } from './components/reg-new-player/reg-new-player';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/madels/image-category-model';
import { Header } from './components/header/header';
import { Router } from './components/router';

let timer = 'unactivate';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private readonly game: Game;

  private readonly timer: Timer = new Timer();

  private readonly regNewPlayer: RegNewPlayer;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.regNewPlayer = new RegNewPlayer();
    this.rootElement.appendChild(this.regNewPlayer.element);
    this.game = new Game();
    this.router = new Router();
    this.rootElement.appendChild(this.router.getContent());
    this.rootElement.appendChild(this.regNewPlayer.element);
  }

  async render() {
    window.onpopstate = () => {
      document.querySelectorAll('.main').forEach((i) => i.remove());
      if (window.location.hash === '#/game') {
        this.rootElement.appendChild(this.game.element);
        this.startGame();
        const btnStart = document.querySelector('#btnStart');
        btnStart?.remove();
        const btnPause = document.querySelector('.header') as HTMLButtonElement;
        btnPause.appendChild(new Header().btnPause());
        if (timer === 'unactivate') {
          timer = 'activate';
          this.timer.start();
          this.timer.pause('#pause');
          this.timer.reset('.header__list');
        }
      } else {
        this.rootElement.appendChild(this.router.getContent());
        const btnPause = document.querySelector('#pause');
        btnPause?.remove();
        if (localStorage.getItem('registerUser')) {
          this.header.btnStart();
        } else {
          this.header.btnRegistr();
        }
        timer = 'unactivate';
      }
    };
  }

  async startGame() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
