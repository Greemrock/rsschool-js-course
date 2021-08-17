import { CARS_PER_PAGE, WINNERS_PER_PAGE } from '../shared/Constant';
import { getSortOrder } from '../shared/getSortOrder';
import {
  IGetCar,
  ICreateWinner,
  IUpdateWinner,
  IWinner,
  ICar,
  IWinners,
} from '../shared/interfaces';

export class Api {
  cars = [];

  private readonly base = 'https://async-race-greemrock.herokuapp.com';

  private readonly path = {
    garage: `${this.base}/garage`,
    engine: `${this.base}/engine`,
    winnres: `${this.base}/winners`,
  };

  async getCars(
    page: number,
    limit = CARS_PER_PAGE
  ): Promise<{ items: IGetCar[]; count: string }> {
    const response = await fetch(
      `${this.path.garage}?_page=${page}&_limit=${limit}`
    );
    const data: IGetCar[] = await response.json();
    const countCars: string | null = await response.headers.get(
      'X-Total-Count'
    );
    return {
      items: data,
      count: countCars as string,
    };
  }

  async createCar(body: ICar): Promise<void> {
    (
      await fetch(this.path.garage, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number): Promise<void> {
    (
      await fetch(`${this.path.garage}/${id}`, {
        mode: 'cors',
        method: 'DELETE',
      })
    ).json();
    this.delWinner(id);
  }

  async getCar(id: number): Promise<ICar> {
    return (await fetch(`${this.path.garage}/${id}`)).json();
  }

  async updateCar(id: number, body: ICar): Promise<void> {
    (
      await fetch(`${this.path.garage}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async getWinners(
    page: number,
    limit = WINNERS_PER_PAGE,
    sort: string,
    order: string
  ): Promise<{
    items: IWinners[];
    count: string | null;
  }> {
    const response = await fetch(
      `${this.path.winnres}?_page=${page}&_limit=${limit}${getSortOrder(
        sort,
        order
      )}`
    );
    const item = await response.json();
    const winners = await Promise.all<IWinners>(
      item.map(async (winner: IWinner) => ({
        ...winner,
        car: await this.getCar(winner.id),
      }))
    );
    const countWinners = response.headers.get('X-Total-Count');
    return {
      items: winners,
      count: countWinners,
    };
  }

  async createWinner(body: ICreateWinner): Promise<void> {
    (
      await fetch(this.path.winnres, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async getWinner(id: number): Promise<IWinner> {
    return (await fetch(`${this.path.winnres}/${id}`)).json();
  }

  async delWinner(id: number): Promise<void> {
    (
      await fetch(`${this.path.winnres}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
      })
    ).json();
  }

  async putWinner(id: number, body: IUpdateWinner): Promise<void> {
    (
      await fetch(`${this.path.winnres}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async getWinnerStatus(id: number): Promise<number> {
    return (await fetch(`${this.path.winnres}/${id}`)).status;
  }

  async saveWinner({ id, time }: { id: number; time: number }): Promise<void> {
    const winnerStatus = await this.getWinnerStatus(id);
    if (winnerStatus === 404) {
      await this.createWinner({ id, wins: 1, time });
    } else {
      const winner = await this.getWinner(id);
      await this.putWinner(id, {
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      });
    }
  }

  async startEngine(
    id: number
  ): Promise<{ velocity: number; distance: number }> {
    return (await fetch(`${this.path.engine}?id=${id}&status=started`)).json();
  }

  async stopEngine(
    id: number
  ): Promise<{ velocity: number; distance: number }> {
    return (await fetch(`${this.path.engine}?id=${id}&status=stopped`)).json();
  }

  async drive(id: number): Promise<{ success: boolean }> {
    const response = await fetch(
      `${this.path.engine}?id=${id}&status=drive`
    ).catch();
    return response.status !== 200
      ? { success: false }
      : { ...(await response.json()) };
  }
}
