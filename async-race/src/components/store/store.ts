import { IStartAnimation } from '../shared/interfaces';
import { Api } from '../api/api';

const api = new Api();
const { items: cars, count: carsCount } = await api.getCars(1);
const { items: winners, count: winnersCount } = await api.getWinners(1, 10, 'id', 'desc');

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation: [] as IStartAnimation[],
  view: 'garage',
  sortBy: 'id',
  sortOrder: 'desc',
};
