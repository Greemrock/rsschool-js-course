export const selectPack = (idSelect: string) => {
  const select = document.getElementById(idSelect) as HTMLSelectElement;
  select?.addEventListener('click', () => {
    localStorage.setItem(`${idSelect}`, select.value);
  });
};
