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
  }

  render() {
    window.onpopstate = () => {
      document.querySelectorAll('.main').forEach((i) => i.remove());
      if (window.location.hash === '#/game') {
        this.startGame();
        this.rootElement.appendChild(this.game.element);
      } else {
        this.rootElement.appendChild(this.router.getContent());
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
