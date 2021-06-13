export class RandomGenerateCar {
  private readonly models = ['Tesla', 'Opel', 'Honda', 'Mercedes-Benz', 'Ford', 'Skoda', 'Nisan', 'Hyundai', 'Kia',
    'Audi', 'Aston Martin', 'BMW', 'Moskvich', 'Geely', 'Toyota', 'Cadilac', 'Mitsubishi', 'Lada', 'Chevrolet'];

  private readonly names = ['Model S', 'Model X', 'Model Y', 'Escord', 'Carnaval', 'Gv80', 'XT4', 'Vesta', 'Granta',
    'Largus', 'X-Trail', 'Qashqai', 'Strem', 'A', 'AMG GT', 'Maybach S', 'M8', '8', 'Pajero Sport', 'Octavia',
    'Rapid', 'Solaris', 'Sonata', 'Vintage F1 Edition', 'Valkyrie', 'Camaro', 'Corvette', 'Patriot'];

  private readonly letters = '0123456789ABCDEF';

  getRandomName() {
    const model = this.models[Math.floor(Math.random() * this.models.length)];
    const name = this.names[Math.floor(Math.random() * this.names.length)];
    const nameCar = `${model} ${name}`;
    return nameCar;
  }

  getRandomColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += this.letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  generateRandomCars(count = 100) {
    return new Array(count)
    .fill({ name: '', color: '' })
    .map(() => ({ name: this.getRandomName(), color: this.getRandomColor() }));
  }
}
