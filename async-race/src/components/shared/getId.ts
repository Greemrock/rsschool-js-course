export const getId = (nameSelector: string, event: Event): number => {
  const target = event.target as HTMLButtonElement;
  const id = +target.id.split(nameSelector)[1];
  return id;
};
