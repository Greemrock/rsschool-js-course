export const selectValue = (idSelect: string) => {
  const select = document.getElementById(idSelect) as HTMLSelectElement;
  select?.addEventListener('click', () => {
    localStorage.setItem(`${idSelect}`, select.value);
    const num = (10 - Number(select.value)) * 2;
    localStorage.setItem('cards', String(num));
  });
};
