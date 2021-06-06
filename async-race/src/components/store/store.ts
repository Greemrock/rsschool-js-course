import { Api } from './../api/api';

type JSONResponse = {
  items: object[],
  count: string | null
}

const api = new Api();
const { items: cars, count: carsCount } = await api.getCars(1);

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  // winners,
  // winnersCount,
  animation: {},
  view: 'garage',
  sortBy: null,
  sortOrder: null,
}
