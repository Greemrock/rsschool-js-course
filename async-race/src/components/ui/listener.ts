import { UpdateGarage } from './updateGarage';
import { Garage } from './renderGarage';
import { Api } from '../api/api';

export class Listener {
  private form = document.forms;

  private readonly api: Api = new Api();

  private readonly renderGarage: Garage = new Garage();

  private readonly updateGarage: UpdateGarage = new UpdateGarage();

  start() {
    const createForm = document.getElementById('create');
    createForm?.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const inputName = this.form[0].name as unknown as HTMLInputElement;
      const inputColor = this.form[0].color as unknown as HTMLInputElement;
      const car = {
        name: inputName.value,
        color: inputColor.value,
      };
      console.log('create car: ', car);
      await this.api.createCar(car);
      await this.updateGarage.render();
      inputName.value = '';
      // document.getElementById('garage')?.innerHTML = this.renderGarage.render();
    });
      }
}
