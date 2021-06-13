import { IStartEngine } from '../shared/interfaces';
import { animation } from './animation';
import { getDistanceBetweenElement } from '../shared/getDistanceBetweenElem';
import { Api } from '../api/api';
import store from '../store/store';

export class MoveCar {
  private readonly api: Api = new Api();

  async startDriving(id: number) {
    const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
    const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;

    startBtn.disabled = true;
    startBtn.classList.toggle('enabling', true);

    const { velocity, distance }: IStartEngine = await this.api.startEngine(id);

    const time = Math.round(distance / velocity);

    startBtn.classList.toggle('enabling', false);
    stopBtn.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    const finishLine = document.getElementById(`finish-line-${id}`) as HTMLElement;
    const htmlDistance = Math.floor(getDistanceBetweenElement(car, finishLine)) + 100;

    store.animation[id] = animation(car, htmlDistance, time);

    const { success } = await this.api.drive(id);

    if (!success) window.cancelAnimationFrame(store.animation[id].id);

    return { success, id, time };
  }

  async stopDriving(id: number) {
    const startBtn = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
    const stopBtn = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;

    stopBtn.disabled = true;
    stopBtn.classList.toggle('enabling', true);
    await this.api.stopEngine(id);
    stopBtn.classList.toggle('enabling', false);
    startBtn.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    car.style.transform = 'translateX(0)';
    if (store.animation[id]) window.cancelAnimationFrame(store.animation[id].id);
  }
}
