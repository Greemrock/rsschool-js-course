import { Api } from '../api/api';
import store from '../store/store';
import { Garage } from './renderGarage';

export class UpdateGarage {
  private readonly renderGarage: Garage = new Garage();

  async render() {
    document.querySelectorAll('.item').forEach((item) => item.remove());
    const { items: cars, count: carsCount } = await new Api().getCars(1);
    store.cars = cars;
    store.carsCount = carsCount;
    const garage = document.getElementById('garage') as HTMLElement;
    garage.innerHTML = await this.renderGarage.render();
  }
}
