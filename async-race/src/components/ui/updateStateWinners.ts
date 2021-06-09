import { Api } from '../api/api';
import store from '../store/store';

export class UpdateStateWinners {
  private readonly api: Api = new Api();

  async render(): Promise<void> {
    const { items, count } = await this.api.getWinners(1);
    store.winners = items;
    store.winnersCount = count;
  }
}
