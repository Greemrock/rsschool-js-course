import { getId } from './getId';
import { UpdateGarage } from './updateGarage';
import { Garage } from './renderGarage';
import { Api } from '../api/api';

export class Listener {
  private form = document.forms;

  private readonly api: Api = new Api();

  private readonly renderGarage: Garage = new Garage();

  private readonly updateGarage: UpdateGarage = new UpdateGarage();

  private selectId = 0;

  start(): void {
    this.createCar();
    this.removeCar();
    this.selectCar();
    this.updateCar();
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
        await this.updateGarage.render();
        inputName.value = '';
        const item = event.target as HTMLInputElement;
        item.disabled = true;
      }
    });
  }

  removeCar(): void {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const id = getId('remove-car-', event);
        await this.api.deleteCar(id);
        await this.updateGarage.render();
        this.removeCar();
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
        this.selectCar();
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
        await this.updateGarage.render();
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
      }
    });
  }
}
