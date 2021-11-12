import { Car } from './renderCar';
import store from '../store/store';
import './renderGarage.scss';
import { BaseComponent } from '../shared/BaseComponent';

export class Garage extends BaseComponent {
  private readonly renderCar: Car;

  constructor() {
    super('div');
    this.renderCar = new Car();
  }

  render(): string {
    return (this.element.innerHTML = `
      <h4>Garage /${store.carsCount} cars /</h4>
      <h5>Page #${store.carsPage}</h5>
      <ul class="garage">
        ${store.cars
          .map((car) => `<li>${this.renderCar.render(car)}</li>`)
          .join('')}
      </ul>
    `);
  }
}
