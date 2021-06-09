import { Api } from '../api/api';
import store from '../store/store';

export class UpdateStateGarage {
  private readonly api: Api = new Api();

  async render(): Promise<void> {
    const { items, count } = await this.api.getCars(1);
    store.cars = items;
    store.carsCount = count;
  }
}
