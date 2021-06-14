import { Api } from '../api/api';
import store from '../store/store';

export class UpdateStateWinners {
  private readonly api: Api = new Api();

  async render(): Promise<void> {
    const { items, count } = await this.api.getWinners(store.winnersPage);
    store.winners = items;
    store.winnersCount = count;
    const winCount = store.winnersCount as string;
    const next = document.getElementById('next') as HTMLButtonElement;
    const prew = document.getElementById('prew') as HTMLButtonElement;

    if (store.winnersPage * 10 < +winCount) {
      next.disabled = false;
    } else next.disabled = true;

    if (store.winnersPage > 1) {
      prew.disabled = false;
    } else prew.disabled = true;
  }
}
