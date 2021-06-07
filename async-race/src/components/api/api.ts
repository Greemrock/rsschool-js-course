import { ICar } from '../shared/interfaces';

export class Api {
  cars = [];

  private readonly base = 'http://localhost:3000';

  private readonly path = {
    garage: `${this.base}/garage`,
    engine: `${this.base}/engine`,
    winnres: `${this.base}/winnres`,
  };

  async getCars(page: number, limit = 7): Promise<{ items: ICar[], count: string | null }> {
    const response = await fetch(`${this.path.garage}?_page=${page}&_limit=${limit}`);
    const data: ICar[] = await response.json();
    const countCars: string | null = await response.headers.get('X-Total-Count');
    return {
      items: data,
      count: countCars,
    };
  }

  async createCar(body: any): Promise<void> {
    (await fetch(this.path.garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
  }

  async deleteCar(id: number): Promise<void> {
    (await fetch(`${this.path.garage}/${id}`, {
      method: 'DELETE',
    })).json();
  }

  async getCar(id: number) {
    return (await fetch(`${this.path.garage}/${id}`)).json();
  }
}
