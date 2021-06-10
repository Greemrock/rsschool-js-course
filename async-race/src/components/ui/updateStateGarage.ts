import { Api } from '../api/api';
import store from '../store/store';

export class UpdateStateGarage {
  private readonly api: Api = new Api();

  async render(): Promise<void> {
    const { items, count } = await this.api.getCars(store.carsPage);
    store.cars = items;
    store.carsCount = count;

    const next = document.getElementById('next') as HTMLButtonElement;
    const prew = document.getElementById('prew') as HTMLButtonElement;

    if (store.carsPage * 7 < +store.carsCount) {
      next.disabled = false;
    } else next.disabled = true;

    if (store.carsPage > 1) {
      prew.disabled = false;
    } else prew.disabled = true;
  }
}
