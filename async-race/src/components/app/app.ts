import { RenderHtml } from '../ui/renderHtml';
import { Component } from './app.api';

export class App implements Component {
  private html: RenderHtml;

  constructor(private readonly root: Element) {
    this.root = root;
    this.html = new RenderHtml(this.root);
  }

  render(): void {
    this.html.render();
  }
}
