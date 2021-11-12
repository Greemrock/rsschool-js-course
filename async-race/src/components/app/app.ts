import { RenderHtml } from '../ui/renderHtml';

export class App {
  private html: RenderHtml;

  constructor(private readonly root: Element) {
    this.root = root;
    this.html = new RenderHtml(this.root);
  }

  render(): void {
    this.html.render();
  }
}
