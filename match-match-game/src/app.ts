import { About } from './components/about';
import { Header } from './components/header';
import { Router } from './components/router';

export class App {
  private readonly header: Header;

  private readonly router: Router;

  private readonly about: About;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.router = new Router();
    this.about = new About();
    this.rootElement.appendChild(this.about.element);
  }

  render() {
    window.onpopstate = () => {
      document.querySelectorAll('.main').forEach((i) => i.remove());
      this.rootElement.appendChild(this.router.getContent());
    };
  }
}
