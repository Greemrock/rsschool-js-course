import { CarImage } from './renderCarImage';
import store from '../store/store';
import './renderWinners.scss';

export class RenderWinners {
  private readonly nodeElement: Element;

  constructor() {
    this.nodeElement = document.createElement('div');
  }

  render(): string {
    return this.nodeElement.innerHTML = `
      <h1>Winners /${store.winnersCount} /</h1>
      <h2>Page #${store.winnersPage}</h2>
      <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th class="table-btn table-wins">Wins</th>
          <th class="table-btn table-time">Best time, sec</th>
        </thead>
        <tbody>
          ${store.winners.map((winner: any, index): string => `
            <tr>
              <td>${index + 1}</td>
              <td class="car-winner">${new CarImage().render(winner.car.color)}</td>
              <td>${winner.car.name}</td>
              <td>${winner.wins}</td>
              <td>${winner.time}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}
