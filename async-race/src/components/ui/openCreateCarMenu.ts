export const openCreateCarMenu = () => {
  const btn = document.getElementById('create-car-menu') as HTMLButtonElement;
  btn.addEventListener('click', () => {
    const form = document.getElementById('create') as HTMLFormElement;
    form.classList.toggle('hide');
  });
};
