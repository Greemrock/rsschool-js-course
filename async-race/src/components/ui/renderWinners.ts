export class Winners {
  private readonly nodeElement: Element;

  constructor() {
    this.nodeElement = document.createElement('div');
  }

  render() {
    return this.nodeElement.innerHTML = `
      <h1>Winners ({store.winnersCount})</h1>
      <h2>Page #{store.winnersPage}</h2>
      <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
          <th>Number</th>
          <th>Car</th>
          <th>Name</th>
          <th class="table-btn table-wins">Wins</th>
          <th class="table-btn table-time">Best time, sec</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
