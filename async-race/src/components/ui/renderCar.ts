import { ICar } from '../shared/interfaces';
import { CarImage } from './renderCarImage';
import './renderCar.scss';

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
      <div class="control-btns">
        <div class="control-panel general">
          <button class="btn select-btn btn-outline-success" id="select-car-${id}">Select</button>
          <button class="btn remove-btn btn-outline-secondary" id="remove-car-${id}">Remove</button>
        </div>
        <div class="control-panel control-car">
          <button class="btn start-engine-btn btn-outline-danger" id="start-engine-car-${id}" ${engineStart}>Go</button>
          <button class="btn stop-engine-btn btn-outline-warning" id="stop-engine-car-${id}" ${engineStart}>Stop</button>
        </div>
      </div>
      <div class="road">
        <span class="car-name">${name}</span>
        <div class="launch-pad">
          <div class="car" id="car-${id}">
            ${this.renderCarImage.render(color)}
          </div>
        </div>
        <div class="finish-line" id="finish-line-${id}"></div>
      </div>
    `;
  }
}
