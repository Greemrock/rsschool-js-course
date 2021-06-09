import { Api } from '../api/api';
import store from '../store/store';
import { Garage } from './renderGarage';

export class UpdateWinners {
  private readonly renderGarage: Garage = new Garage();

  private readonly api: Api = new Api();

  async render(): Promise<void> {
    document.querySelectorAll('.item').forEach((item) => item.remove());
    const { items: cars, count: carsCount } = await this.api.getCars(1);
    store.cars = cars;
    store.carsCount = carsCount;
    const garage = document.getElementById('garage') as HTMLElement;
    garage.innerHTML = await this.renderGarage.render();
  }
}
