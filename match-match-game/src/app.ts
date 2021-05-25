import { RegNewPlayer } from './components/reg-new-player/reg-new-player';
import { IndexDB } from './components/indexDB/indexDB';
import { Game } from './components/game/game';
import { ImageCategoryModel } from './components/madels/image-category-model';
import { Header } from './components/header/header';
import { Router } from './components/router';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private readonly game: Game;

  private readonly indexDB: IndexDB;

  private readonly regNewPlayer: RegNewPlayer;

  form: HTMLFormElement | null;

  firstNameInput: HTMLInputElement | null;

  lastNameInput: HTMLInputElement | null;

  gitHubAdressInput: HTMLInputElement | null;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.game = new Game();
    this.router = new Router();
    this.rootElement.appendChild(this.router.getContent());
    this.indexDB = new IndexDB();
    this.indexDB.createDB('store', 1);
    this.regNewPlayer = new RegNewPlayer();
    this.form = document.querySelector('#reg_form');
    this.firstNameInput = document.querySelector('#firstName');
    this.lastNameInput = document.querySelector('#lastName');
    this.gitHubAdressInput = document.querySelector('#gitHubAdress');
    if (window.location.hash === '#/register') {
      this.sendValueFormUser();
      console.log('window.location.pathname>>>>>>>>>>>>>>>>>', window.location.hash);
    }
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

  // TODO - перенести метод в reg-new-player >>>>
  async sendValueFormUser() {
    await this.form!.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!this.firstNameInput) throw Error(`firstNameInput: ${this.firstNameInput} error!`);
      if (!this.lastNameInput) throw Error(`lastNameInput: ${this.lastNameInput} error!`);
      if (!this.gitHubAdressInput) throw Error(`gitHubAdressInput: ${this.gitHubAdressInput} error!`);

      const firstNameValue = this.firstNameInput.value;
      const lastNameValue = this.lastNameInput.value;
      const gitHubAdressValue = this.gitHubAdressInput.value;
      const formValue = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        gitHubAdress: gitHubAdressValue,
      };

      this.firstNameInput.value = '';
      this.lastNameInput.value = '';
      this.gitHubAdressInput.value = '';
      this.indexDB.addRecord('users', formValue);
      this.regNewPlayer.changeRegBtn('start game', '#/game', 'register');
      window.location.hash = ('#/');
    });
  }
}
