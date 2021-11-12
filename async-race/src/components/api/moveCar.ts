import { IStartEngine } from '../shared/interfaces';
import { animation } from '../ui/animation';
import { getDistanceBetweenElement } from '../shared/getDistanceBetweenElem';
import { Api } from './api';
import store from '../store/store';
import { PLUS_DISTANCE } from '../shared/Constant';

export class MoveCar {
  private readonly api: Api = new Api();

  async startDriving(
    id: number
  ): Promise<{ success: boolean; id: number; time: number }> {
    const startBtn = document.getElementById(
      `start-engine-car-${id}`
    ) as HTMLButtonElement;
    const stopBtn = document.getElementById(
      `stop-engine-car-${id}`
    ) as HTMLButtonElement;

    startBtn.disabled = true;
    startBtn.classList.toggle('enabling', true);

    const { velocity, distance }: IStartEngine = await this.api.startEngine(id);

    const time = Math.round(distance / velocity);

    startBtn.classList.toggle('enabling', false);
    stopBtn.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    const finishLine = document.getElementById(
      `finish-line-${id}`
    ) as HTMLElement;
    const htmlDistance =
      Math.floor(getDistanceBetweenElement(car, finishLine)) + PLUS_DISTANCE;

    store.animation[id] = animation(car, htmlDistance, time);

    const { success } = await this.api.drive(id);

    if (!success) window.cancelAnimationFrame(store.animation[id].id);

    return { success, id, time };
  }

  async stopDriving(id: number): Promise<void> {
    const startBtn = document.getElementById(
      `start-engine-car-${id}`
    ) as HTMLButtonElement;
    const stopBtn = document.getElementById(
      `stop-engine-car-${id}`
    ) as HTMLButtonElement;

    stopBtn.disabled = true;
    stopBtn.classList.toggle('enabling', true);
    await this.api.stopEngine(id);
    stopBtn.classList.toggle('enabling', false);
    startBtn.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    car.style.transform = 'translateX(0)';
    if (store.animation[id])
      window.cancelAnimationFrame(store.animation[id].id);
  }

  async raceAll(
    promises: Promise<{ success: boolean; id: number; time: number }>[],
    ids: number[]
  ): Promise<{
    name?: string;
    color?: string;
    id?: number;
    isEngineStarted?: string;
    time: number;
  }> {
    const { success, id, time } = await Promise.race(promises);

    if (!success) {
      const failedIndex = ids.findIndex((i: number) => i === id) as number;
      const otherPromises = [
        ...promises.slice(0, failedIndex),
        ...promises.slice(failedIndex + 1, promises.length),
      ];
      const otherIds = [
        ...ids.slice(0, failedIndex),
        ...ids.slice(failedIndex + 1, ids.length),
      ];
      return this.raceAll(otherPromises, otherIds);
    }
    return {
      ...store.cars.find(
        (car: { name: string; color: string; id: number }) => car.id === id
      ),
      time: +(time / 1000).toFixed(2),
    };
  }

  async winner(): Promise<{
    name?: string;
    color?: string;
    id?: number;
    time: number;
  }> {
    const promises = store.cars.map(({ id }) => this.startDriving(id));
    const carsId = store.cars.map((car) => car.id);
    const winner = await this.raceAll(promises, carsId);
    return winner;
  }
}
