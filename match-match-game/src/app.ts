import { selectValue } from './components/settings/selectValue';
import { RegNewPlayer } from './components/reg-new-player/reg-new-player';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/madels/image-category-model';
import { Header } from './components/header/header';
import { Router } from './components/router';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private readonly game: Game;

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
    this.regNewPlayer.sendValueFormUser();
  }

  render() {
    window.onpopstate = () => {
      document.querySelectorAll('.main').forEach((i) => i.remove());
      if (window.location.hash === '#/game') {
        this.rootElement.appendChild(this.game.element);
        this.startGame();
        const btnStart = document.querySelector('#btnStart');
        btnStart?.remove();
        const btnPause = document.querySelector('.header') as HTMLButtonElement;
        btnPause.appendChild(new Header().btnPause());
        this.game.startTimer();
      } else if (window.location.hash === '#/settings') {
        this.rootElement.appendChild(this.router.getContent());
        selectValue('difficulty');
        const btnPause = document.querySelector('#pause');
        btnPause?.remove();
        if (localStorage.getItem('registerUser')) {
          this.header.btnStart();
        } else {
          this.header.btnRegistr();
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
      }
    };
  }

  async startGame() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    const amountImages = localStorage.getItem('difficulty');
    images.splice(0, Number(amountImages));
    this.game.newGame(images);
    localStorage.setItem('mutchCards', '0');
  }
}
