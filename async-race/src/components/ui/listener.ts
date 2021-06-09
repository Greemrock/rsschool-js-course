import { RenderWinners } from './renderWinners';
import { UpdateStateWinners } from './updateStateWinners';
import { getId } from '../shared/getId';
import { UpdateStateGarage } from './updateStateGarage';
import { Api } from '../api/api';
import { Garage } from './renderGarage';

export class Listener {
  private form = document.forms;

  private root = document.getElementById('root') as HTMLElement;

  private readonly api: Api = new Api();

  private readonly updateStateGarage: UpdateStateGarage = new UpdateStateGarage();

  private readonly updateStateWinners: UpdateStateWinners = new UpdateStateWinners();

  private readonly renderWinners: RenderWinners = new RenderWinners();

  private readonly renderGarage: Garage = new Garage();

  private selectId = 0;

  start(): void {
    this.createCar();
    this.removeCar();
    this.selectCar();
    this.updateCar();
    this.winnersBtn();
    this.garageBtn();
  }

  createCar(): void {
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
        await this.updateStateGarage.render();
        const garage = document.getElementById('garage') as HTMLElement;
        garage.innerHTML = await this.renderGarage.render();
        inputName.value = '';
        this.removeCar();
        this.selectCar();
        this.updateCar();
      }
    });
  }

  removeCar(): void {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const id = getId('remove-car-', event);
        await this.api.deleteCar(id);
        await this.updateStateGarage.render();
        const garage = document.getElementById('garage') as HTMLElement;
        garage.innerHTML = await this.renderGarage.render();
        this.removeCar();
        this.selectCar();
        this.updateCar();
      });
    });
  }

  selectCar(): void {
    const selectBtn = document.querySelectorAll('.select-btn');
    selectBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        this.selectId = getId('select-car-', event);
        const selectedCar = await this.api.getCar(this.selectId);
        const updateName = document.getElementById('update-name') as HTMLInputElement;
        const updateColor = document.getElementById('update-color') as HTMLInputElement;
        const updateSubmit = document.getElementById('update-submit') as HTMLInputElement;
        updateName.value = selectedCar.name;
        updateColor.value = selectedCar.color;
        updateName.disabled = false;
        updateColor.disabled = false;
        updateSubmit.disabled = false;
      });
    });
  }

  updateCar(): void {
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
        await this.updateStateGarage.render();
        const garage = document.getElementById('garage') as HTMLElement;
        garage.innerHTML = await this.renderGarage.render();
        inputName.value = '';
        const item = event.target as HTMLInputElement;
        item.disabled = true;
        const updateName = document.getElementById('update-name') as HTMLInputElement;
        const updateColor = document.getElementById('update-color') as HTMLInputElement;
        const updateSubmit = document.getElementById('update-submit') as HTMLInputElement;
        updateName.value = '';
        updateName.disabled = true;
        updateColor.value = '#ffffff';
        updateColor.disabled = true;
        updateSubmit.disabled = true;
        this.removeCar();
        this.selectCar();
        this.updateCar();
      }
    });
  }

  garageBtn() {
    const garageBtn = this.root.querySelector('.garage-menu-btn') as HTMLElement;
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const winnersView = document.getElementById('winners-view') as HTMLElement;
    garageBtn?.addEventListener('click', () => {
      garageView.style.display = 'block';
      winnersView.style.display = 'none';
    });
  }

  winnersBtn() {
    const winnersBtn = this.root.querySelector('.winners-menu-btn') as HTMLElement;
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const winnersView = document.getElementById('winners-view') as HTMLElement;
    winnersBtn?.addEventListener('click', async () => {
      winnersView.style.display = 'block';
      garageView.style.display = 'none';
      this.api.getWinners(1);
      await this.updateStateWinners.render();
      const winnerView = document.getElementById('winners-view') as HTMLElement;
      winnerView.innerHTML = await this.renderWinners.render();
    });
  }
}
