export const selectValue = (idSelect: string) => {
  const select = document.getElementById(idSelect) as HTMLSelectElement;
  select?.addEventListener('click', () => {
    localStorage.setItem(`${idSelect}`, select.value);
    const maxCards = 10;
    const index = 2;
    const num = (maxCards - Number(select.value)) * index;
    localStorage.setItem('cards', String(num));
  });
};
