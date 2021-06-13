import {
  IGetCar,
  ICreateWinner,
  IUpdateWinner,
  IWinner,
  // IGetCar,
  // IStartAnimation,
  ICar,
} from '../shared/interfaces';

export class Api {
  cars = [];

  private readonly base = 'http://localhost:3000';

  private readonly path = {
    garage: `${this.base}/garage`,
    engine: `${this.base}/engine`,
    winnres: `${this.base}/winners`,
  };

  async getCars(page: number, limit = 7): Promise<{ items: IGetCar[], count: string }> {
    const response = await fetch(`${this.path.garage}?_page=${page}&_limit=${limit}`);
    const data: IGetCar[] = await response.json();
    const countCars: string | null = await response.headers.get('X-Total-Count');
    return {
      items: data,
      count: countCars as string,
    };
  }

  async createCar(body: ICar): Promise<void> {
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
    this.delWinner(id);
  }

  async getCar(id: number) {
    return (await fetch(`${this.path.garage}/${id}`)).json();
  }

  async updateCar(id: number, body: ICar): Promise<void> {
    (await fetch(`${this.path.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
  }

  async getWinners(page: number, limit = 10) {
    const response = await fetch(`${this.path.winnres}?_page=${page}&_limit=${limit}}`);
    const item = await response.json();
    const winners = await Promise.all(item.map(async (winner: IWinner) => ({ ...winner, car: await this.getCar(winner.id) })));
    const countWinners = response.headers.get('X-Total-Count');
    return {
      items: winners,
      count: countWinners,
    };
  }

  async createWinner(body: ICreateWinner): Promise<void> {
    (await fetch(this.path.winnres, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
  }

  async getWinner(id: number) {
    return (await fetch(`${this.path.winnres}/${id}`)).json();
  }

  async delWinner(id: number): Promise<void> {
    (await fetch(`${this.path.winnres}/${id}`, {
      method: 'DELETE',
    })).json();
  }

  async putWinner(id: number, body: IUpdateWinner): Promise<void> {
    (await fetch(`${this.path.winnres}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })).json();
  }

  async startEngine(id: number) {
    return (await fetch(`${this.path.engine}?id=${id}&status=started`)).json();
  }

  async stopEngine(id: number) {
    return (await fetch(`${this.path.engine}?id=${id}&status=stopped`)).json();
  }

  async drive(id: number) {
    const response = await fetch(`${this.path.engine}?id=${id}&status=drive`).catch();
    return response.status !== 200 ? { success: false } : { ...(await response.json()) };
  }

  // raceAll(promises: Promise<number>, ids: IStartAnimation) {
  //   cosnt { success, id, time } = await Promise.race(promises);

  // }
}
