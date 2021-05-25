import { RegNewPlayer } from './reg-new-player/reg-new-player';
import { Game } from './game/game';
import { Score } from './score/score';
import { Settings } from './settings/settings';
import { About } from './about/about';
import { ErrorComponent } from './errorComponent';

interface IItems {
  path: string;
  content: Element;
}

export class Router {
  private readonly about: About = new About();

  private readonly settings: Settings = new Settings();

  private readonly score: Score = new Score();

  private readonly game: Game = new Game();

  private readonly regNewPlayer: RegNewPlayer = new RegNewPlayer();

  private readonly error: ErrorComponent = new ErrorComponent();

  routes : Array<IItems> = [
    { path: '/', content: this.about.element },
    { path: '/score', content: this.score.element },
    { path: '/settings', content: this.settings.element },
    { path: '/game', content: this.game.element },
    { path: '/register', content: this.regNewPlayer.element },
  ];

  // add(path: string, content: Element) {
  //   this.routes.push({ path, content });
  //   return this;
  // };

  getContent() {
    let rootName = window.location.hash;
    if (rootName === '') rootName = '/';
    else rootName = rootName.slice(1);

    const root = this.routes.find((p) => p.path === rootName);
    if (root?.content === undefined) {
      return this.error.element;
    }
    return root.content;
  }
}
