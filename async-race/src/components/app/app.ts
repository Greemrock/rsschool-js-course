import { renderHtml } from '../ui/renderHtml';
import { Component } from './app.api';

export class App implements Component{
  private html: renderHtml;

  constructor(private readonly root: Element) {
    this.root = root;
    this.html = new renderHtml(this.root);
  }

  render() {
    this.html.render();
  }
}
