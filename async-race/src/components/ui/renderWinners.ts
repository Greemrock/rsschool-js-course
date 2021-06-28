import { CarImage } from './renderCarImage';
import store from '../store/store';
import './renderWinners.scss';
import { IWinners } from '../shared/interfaces';
import { BaseComponent } from '../shared/BaseComponent';

export class RenderWinners extends BaseComponent {
  constructor() {
    super('div');
  }

  render(): string {
    return (this.element.innerHTML = `
      <h4>Winners /${store.winnersCount} /</h4>
      <h5>Page #${store.winnersPage}</h5>
      <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th class="table-btn table-wins">Wins</th>
          <th class="table-btn table-time">Best time, sec</th>
        </thead>
        <tbody>${store.winners.map(
          (winner: IWinners, index: number): string => `
            <tr>
              <td>${index + 1}</td>
              <td class="car-winner">${new CarImage().render(
                winner.car.color
              )}</td>
              <td>${winner.car.name}</td>
              <td>${winner.wins}</td>
              <td>${winner.time}</td>
            </tr>
          `
        )}
        </tbody>
      </table>
    `);
  }
}
