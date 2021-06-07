import { UpdateGarage } from './updateGarage';
import { Garage } from './renderGarage';
import { Api } from '../api/api';

export class Listener {
  private form = document.forms;

  private readonly api: Api = new Api();

  private readonly renderGarage: Garage = new Garage();

  private readonly updateGarage: UpdateGarage = new UpdateGarage();

  start() {
    this.createCar();
    this.remove();
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
        console.log('create car: ', car);
        await this.api.createCar(car);
        await this.updateGarage.render();
        inputName.value = '';
        const item = event.target as HTMLInputElement;
        item.disabled = true;
      }
    });
  }

  remove() {
    const removeBtn = document.querySelectorAll('.remove-btn');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', async (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const id = +target.id.split('remove-car-')[1];
        console.log(id);
        await this.api.deleteCar(id);
        await this.updateGarage.render();
        this.remove();
      });
    });
  }
}
