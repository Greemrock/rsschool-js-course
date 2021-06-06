import { ICar } from '../shared/interfaces';
import { CarImage } from './renderCarImage';

export class Car {
  private readonly nodeElement: Element;

  private readonly renderCarImage: CarImage;

  constructor() {
    this.nodeElement = document.createElement('div');
    this.renderCarImage = new CarImage();
  }

  render({
    id,
    name,
    color,
    isEngineStarted,
  }: ICar): string {
    const engineStart = isEngineStarted ? 'disabled' : '';
    return this.nodeElement.innerHTML = `
      <div class="general-btn">
        <button class="button select-btn" id="select-car-${id}">Select</button>
        <button class="button remove-btn" id="remove-car-${id}">Remove</button>
        <span class="car-name">${name}</span>
      </div>
      <div class="road">
        <div class="launch-pad">
          <div class="control-panel">
            <button class="icon start-engine-btn" id="start-engine-car-${id}" ${engineStart}>A</button>
            <button class="icon stop-engine-btn" id="stop-engine-car-${id}" ${engineStart}>B</button>
          </div>
          <div class="car" id="car-${id}">
            ${this.renderCarImage.render(color)}
          </div>
        </div>
        <div class="flag" id="flag-${id}">🏁</div>
      </div>
    `;
  }
}
