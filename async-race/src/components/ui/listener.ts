import { MoveCar } from '../api/moveCar';
import { RandomGenerateCar } from './randomGenerateCar';
import { RenderWinners } from './renderWinners';
import { UpdateStateWinners } from './updateStateWinners';
import { getId } from '../shared/getId';
import { UpdateStateGarage } from './updateStateGarage';
import { Api } from '../api/api';
import { Garage } from './renderGarage';
import store from '../store/store';

export class Listener {
  private form = document.forms;

  private root = document.getElementById('root') as HTMLElement;

  private message = document.getElementById('message') as HTMLElement;

  private readonly api: Api = new Api();

  private readonly updateStateGarage: UpdateStateGarage =
    new UpdateStateGarage();

  private readonly updateStateWinners: UpdateStateWinners =
    new UpdateStateWinners();

  private readonly renderWinners: RenderWinners = new RenderWinners();

  private readonly renderGarage: Garage = new Garage();

  private readonly randomGenerateCar: RandomGenerateCar =
    new RandomGenerateCar();

  private readonly moveCar: MoveCar = new MoveCar();

  private selectId = 0;

  start(): void {
    this.createCarBtn();
    this.removeCarBtn();
    this.selectCarBtn();
    this.updateCarBtn();
    this.winnersBtn();
    this.garageBtn();
    this.generatorCarsBtn();
    this.prewBtn();
    this.nextBtn();
    this.startEngineBtn();
    this.stopEngineBtn();
    this.resetBtn();
    this.raceBtn();
    this.sortTime();
    this.sortWins();
  }

  updateListenerGarage(): void {
    this.removeCarBtn();
    this.selectCarBtn();
    this.startEngineBtn();
    this.stopEngineBtn();
  }

  updateListenerWinner(): void {
    this.sortTime();
    this.sortWins();
  }

  createCarBtn(): void {
    const createForm = document.getElementById('create');
    createForm?.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const inputName = this.form[0].name as unknown as HTMLInputElement;
      const inputColor = this.form[0].color as unknown as HTMLInputElement;
      if (inputName.value === '') inputName.value = '';
      else {
        const car = {
          name: inputName.value,
          color: inputColor.value,
        };
        await this.api.createCar(car);
        this.updateRanderGarage();
        inputName.value = '';
        this.updateListenerGarage();
      }
    });
  }

  async updateRanderGarage(): Promise<void> {
    await this.updateStateGarage.render();
    const garage = document.getElementById('garage') as HTMLElement;
    garage.innerHTML = await this.renderGarage.render();
  }

  removeCarBtn(): void {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const id = getId('remove-car-', event);
        await this.api.deleteCar(id);
        this.updateRanderGarage();
        this.updateListenerGarage();
      });
    });
  }

  selectCarBtn(): void {
    const selectBtn = document.querySelectorAll('.select-btn');
    selectBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        this.selectId = getId('select-car-', event);
        const selectedCar = await this.api.getCar(this.selectId);
        const updateName = document.getElementById(
          'update-name'
        ) as HTMLInputElement;
        const updateColor = document.getElementById(
          'update-color'
        ) as HTMLInputElement;
        const updateSubmit = document.getElementById(
          'update-submit'
        ) as HTMLInputElement;
        updateName.value = selectedCar.name;
        updateColor.value = selectedCar.color;
        updateName.disabled = false;
        updateColor.disabled = false;
        updateSubmit.disabled = false;
      });
    });
  }

  updateCarBtn(): void {
    const updateForm = document.getElementById('update');
    updateForm?.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const inputName = this.form[1].name as unknown as HTMLInputElement;
      const inputColor = this.form[1].color as unknown as HTMLInputElement;
      if (inputName.value === '') inputName.value = '';
      else {
        const car = {
          name: inputName.value,
          color: inputColor.value,
        };
        await this.api.updateCar(this.selectId, car);
        this.updateRanderGarage();
        inputName.value = '';
        const item = event.target as HTMLInputElement;
        item.disabled = true;
        const updateName = document.getElementById(
          'update-name'
        ) as HTMLInputElement;
        const updateColor = document.getElementById(
          'update-color'
        ) as HTMLInputElement;
        const updateSubmit = document.getElementById(
          'update-submit'
        ) as HTMLInputElement;
        updateName.value = '';
        updateName.disabled = true;
        updateColor.value = '#ffffff';
        updateColor.disabled = true;
        updateSubmit.disabled = true;
        this.updateListenerGarage();
      }
    });
  }

  garageBtn(): void {
    const garageBtn = this.root.querySelector(
      '.garage-menu-btn'
    ) as HTMLElement;
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const winnersView = document.getElementById('winners-view') as HTMLElement;
    garageBtn.addEventListener('click', async () => {
      garageView.style.display = 'block';
      winnersView.style.display = 'none';
      await this.updateStateGarage.render();
      store.view = 'garage';
    });
  }

  winnersBtn(): void {
    const winnersBtn = this.root.querySelector(
      '.winners-menu-btn'
    ) as HTMLElement;
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const winnersView = document.getElementById('winners-view') as HTMLElement;
    winnersBtn?.addEventListener('click', async () => {
      winnersView.style.display = 'block';
      garageView.style.display = 'none';
      await this.updateStateWinners.render();
      winnersView.innerHTML = await this.renderWinners.render();
      store.view = 'winners';
      this.sortTime();
      this.sortWins();
    });
  }

  generatorCarsBtn(): void {
    const generate = document.getElementById('generate') as HTMLButtonElement;
    generate.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLButtonElement;
      target.disabled = true;
      const cars = this.randomGenerateCar.generateRandomCars();
      await Promise.all(
        cars.map(async (car) => {
          await this.api.createCar(car);
        })
      );
      this.updateRanderGarage();
      target.disabled = false;
      this.updateListenerGarage();
    });
  }

  nextBtn(): void {
    const nextBtn = document.getElementById('next') as HTMLButtonElement;
    nextBtn.addEventListener('click', async () => {
      switch (store.view) {
        case 'garage': {
          store.carsPage += 1;
          this.updateRanderGarage();
          this.updateListenerGarage();
          break;
        }
        case 'winners': {
          store.winnersPage += 1;
          await this.updateStateWinners.render();
          const winnerView = document.getElementById(
            'winners-view'
          ) as HTMLElement;
          winnerView.innerHTML = await this.renderWinners.render();
          this.updateListenerWinner();
          break;
        }
        default: {
          new Error(`store.view = ${store.view}`);
        }
      }
    });
  }

  prewBtn(): void {
    const prewBtn = document.getElementById('prew') as HTMLButtonElement;
    prewBtn.addEventListener('click', async () => {
      switch (store.view) {
        case 'garage': {
          const page = store.carsPage;
          if (page < 1) {
            store.carsPage = 1;
          } else {
            store.carsPage -= 1;
          }
          this.updateRanderGarage();
          this.updateListenerGarage();
          break;
        }
        case 'winners': {
          const page = store.winnersPage;
          if (page < 1) {
            store.winnersPage = 1;
          } else {
            store.winnersPage -= 1;
          }
          await this.updateStateWinners.render();
          const winnerView = document.getElementById(
            'winners-view'
          ) as HTMLElement;
          winnerView.innerHTML = await this.renderWinners.render();
          this.updateListenerWinner();
          break;
        }
        default: {
          new Error(`store.view = ${store.view}`);
        }
      }
    });
  }

  startEngineBtn(): void {
    const startEngineBtn = document.querySelectorAll('.start-engine-btn');
    startEngineBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const id = target.id.split('start-engine-car-')[1];
        this.moveCar.startDriving(+id);
      });
    });
  }

  stopEngineBtn(): void {
    const stopEngineBtn = document.querySelectorAll('.stop-engine-btn');
    stopEngineBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const id = target.id.split('stop-engine-car-')[1];
        this.moveCar.stopDriving(+id);
      });
    });
  }

  resetBtn(): void {
    const resetBtn = document.getElementById('reset') as HTMLButtonElement;
    resetBtn.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLButtonElement;
      target.disabled = true;
      store.cars.map(({ id }) => this.moveCar.stopDriving(id));
      this.message.classList.toggle('visible', false);
      const race = document.getElementById('race') as HTMLButtonElement;
      race.disabled = false;
    });
  }

  raceBtn(): void {
    const riceBtn = document.getElementById('race') as HTMLButtonElement;
    riceBtn.addEventListener('click', async (event: Event) => {
      const target = event.target as HTMLButtonElement;
      const resetBtn = document.getElementById('reset') as HTMLButtonElement;
      target.disabled = true;
      setTimeout(() => (resetBtn.disabled = false), 5000);
      const { name, id, time } = await this.moveCar.winner();
      if (!id) throw new Error(`${id} not found`);
      await this.api.saveWinner({ id, time });
      this.message.innerHTML = `${name} wentfirst ${time}s`;
      this.message.classList.toggle('visible', true);
      resetBtn.disabled = false;
    });
  }

  async setSortOrder(sortBy: string): Promise<void> {
    store.sortOrder = store.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    store.sortBy = sortBy;

    await this.updateStateWinners.render();
    const winnerView = document.getElementById('winners-view') as HTMLElement;
    winnerView.innerHTML = await this.renderWinners.render();
    this.sortTime();
    this.sortWins();
  }

  sortWins(): void {
    const wins = document.querySelector('.table-wins') as HTMLElement;
    wins.addEventListener('click', () => {
      this.setSortOrder('wins');
      wins.classList.toggle('click');
    });
  }

  sortTime(): void {
    const time = document.querySelector('.table-time') as HTMLElement;
    time.addEventListener('click', () => {
      this.setSortOrder('time');
      time.classList.toggle('click');
    });
  }
}
