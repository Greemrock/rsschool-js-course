import { IGetCar } from '../shared/interfaces';
import { CarImage } from './renderCarImage';
import './renderCar.scss';
import { BaseComponent } from '../shared/BaseComponent';

export class Car extends BaseComponent {
  private readonly renderCarImage: CarImage;

  constructor() {
    super('div');
    this.renderCarImage = new CarImage();
  }

  render({ id, name, color, isEngineStarted }: IGetCar): string {
    const engineStart = isEngineStarted ? 'disabled' : '';
    return (this.element.innerHTML = `
      <div class="control-btns">
        <div class="control-panel general">
          <button class="btn select-btn btn-outline-success btn-sm" id="select-car-${id}">Select</button>
          <button class="btn remove-btn btn-outline-secondary btn-sm" id="remove-car-${id}">Remove</button>
        </div>
        <div class="control-panel control-car">
          <button class="btn start-engine-btn btn-outline-danger btn-sm"
            id="start-engine-car-${id}" ${engineStart}>Go</button>
          <button class="btn stop-engine-btn btn-outline-warning btn-sm"
            disabled id="stop-engine-car-${id}" ${engineStart}>Stop</button>
        </div>
      </div>
      <div class="road">
        <span class="car-name">${name}</span>
          <div class="car" id="car-${id}">
          ${this.renderCarImage.render(color)}
          </div>
        <div class="finish-line" id="finish-line-${id}"></div>
      </div>
    `);
  }
}
