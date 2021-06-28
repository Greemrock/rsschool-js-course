import { IStartAnimation } from '../shared/interfaces';
import { Api } from '../api/api';
import { WINNERS_PER_PAGE } from '../shared/Constant';

const page = 1;

const api = new Api();
const { items: cars, count: carsCount } = await api.getCars(1);
const { items: winners, count: winnersCount } = await api.getWinners(
  page,
  WINNERS_PER_PAGE,
  'id',
  'desc'
);

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
