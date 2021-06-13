import { RenderWinners } from './renderWinners';
import { Garage } from './renderGarage';
import './renderHtml.scss';

export class RenderHtml {
  private readonly nodeElement: Element;

  private readonly garage: Garage;

  private readonly renderWinners: RenderWinners;

  constructor(nodeElement: Element) {
    this.nodeElement = nodeElement;
    this.garage = new Garage();
    this.renderWinners = new RenderWinners();
  }

  render(): void {
    this.nodeElement.innerHTML = `
      <div class="menu mb-4">
        <button class="btn garage-menu-btn btn-outline-light" id="garage-menu" type="button">To garage</button>
        <button class="btn winners-menu-btn btn-outline-light" id="winners-menu" type="button">To winners</button>
      </div>
      <div id="garage-view">
        <div class="mb-4">
          <form class="form" id="create" name="create">
            <input class="form-control input" id="create-name" type="text" name="name">
            <input class="color form-control form-control-color" id="create-color" type="color" name="color" value="#ffffff" title="Choose your color">
            <input class="btn btn-outline-light" type="submit" value="Create">
          </form>
          <form class="form" id="update" name="update">
            <input class="form-control input" id="update-name" type="text" name="name" disabled>
            <input class="color form-control form-control-color" id="update-color" name="color" type="color" value="#ffffff" disabled>
            <input class="btn btn-outline-light" type="submit" id="update-submit" value="Update" disabled>
          </form>
        </div>
        <div class="race-controls mb-4">
          <button class="btn race-btn btn-outline-danger" id="race">Race</button>
          <button class="btn reset-btn btn-outline-warning" id="reset" disabled>Reset</button>
          <button class="btn generate-btn btn-outline-success" id="generate">Generate car</button>
        </div>
        <div id="garage">
          ${this.garage.render()}
        </div>
        <div>
          <p class="message" id="message"></p>
        </div>
      </div>
      <div id="winners-view" style="display: none">
        ${this.renderWinners.render()}
      </div>
      <div class="pagination">
        <button class="btn prev-btn btn-outline-light" disabled id="prew">prew</button>
        <button class="btn next-btn btn-outline-light" disabled id="next">next</button>
      </div>
    `;
  }
}
