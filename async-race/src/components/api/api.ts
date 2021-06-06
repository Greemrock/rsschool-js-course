import { ICar } from './../shared/interfaces';
type JSONResponse = {
  items: object[],
  count: string | null
}

export class Api {
  cars: object[] = [];

  private readonly base = 'http://localhost:3000';

  private readonly garage = `${this.base}/garage`;

  private readonly engine = `${this.base}/engine`;

  private readonly winnres = `${this.base}/winnres`;

  async getCars(page: number, limit = 7) {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
  const data: ICar[] = await response.json();
  const count: string | null = await response.headers.get('X-Total-Count');
  console.log({
    items: data,
    count: count
  });
  return {
      items: data,
      count: count
    };
  }
}
