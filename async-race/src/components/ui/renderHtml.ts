import { Winners } from './renderWinners';
import { Garage } from './renderGarage';

export class RenderHtml {
  private readonly nodeElement: Element;

  private readonly garage: Garage;

  private readonly winners: Winners;

  constructor(nodeElement: Element) {
    this.nodeElement = nodeElement;
    this.garage = new Garage();
    this.winners = new Winners();
  }

  render(): void {
    this.nodeElement.innerHTML = `
      <div class="menu">
        <button class="button garage-menu-btn" id="garage-menu" type="button">To garage</button>
        <button class="button winners-menu-btn" id="winners-menu" type="button">To winners</button>
      </div>
      <div id="garage-view">
        <div>
          <form class="form" id="create">
            <input calss="input" id="create-name" name="name" type="text">
            <input class="color" id="create-color" name="color" type="color" value="#fff">
            <button class="button" type="submit">Create</button>
          </form>
          <form class="form" id="update">
            <input calss="input" id="update-name" name="name" type="text" disabled>
            <input class="color" id="update-color" name="color" type="color" value="#fff" disabled>
            <button class="button" type="submit" id="update-submit">Update</button>
          </form>
        </div>
        <div class="race-controls">
          <button class="button race-btn" id="race">Race</button>
          <button class="button reset-btn" id="reset">Reset</button>
          <button class="button generate-btn" id="generate">Generate car</button>
        </div>
        <div id="garage">
          ${this.garage.render()}
        </div>
        <div>
          <p class="message" id="message"></p>
        </div>
      </div>
      <div id="winners-view" style="display: none">
        ${this.winners.render()}
      </div>
      <div class="pagination">
        <button class="button primary prev-btn" disabled id="prew">prew</button>
        <button class="button primary next-btn" disabled id="next">next</button>
      </div>
    `;
  }
}
