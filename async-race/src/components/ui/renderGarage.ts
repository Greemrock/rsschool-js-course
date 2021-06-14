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
      <h2>Garage /${store.carsCount} cars /</h2>
      <h3>Page #${store.carsPage}</h3>
      <ul class="garage">
        ${store.cars.map((car) => `
          <li>${this.renderCar.render(car)}</li>
          `).join('')}
      </ul>
    `;
  }
}
