import { Car } from './renderCar';
import store from '../store/store';
import './renderGarage.scss';

export class Garage {
  private readonly nodeElement: Element;

  private readonly renderCar: Car;

  constructor() {
    this.nodeElement = document.createElement('div');
    this.renderCar = new Car();
  }

  render(): string {
    return this.nodeElement.innerHTML = `
      <h4>Garage /${store.carsCount} cars /</h4>
      <h5>Page #${store.carsPage}</h5>
      <ul class="garage">
        ${store.cars.map((car) => `
          <li>${this.renderCar.render(car)}</li>
          `).join('')}
      </ul>
    `;
  }
}
