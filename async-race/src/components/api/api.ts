import { ICar } from '../shared/interfaces';

export class Api {
  cars = [];

  private readonly base = 'http://localhost:3000';

  private readonly garage = `${this.base}/garage`;

  private readonly engine = `${this.base}/engine`;

  private readonly winnres = `${this.base}/winnres`;

  async getCars(page: number, limit = 7): Promise<{ items: ICar[], count: string | null }> {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
    const data: ICar[] = await response.json();
    const countCars: string | null = await response.headers.get('X-Total-Count');
    return {
      items: data,
      count: countCars,
    };
  }
}
