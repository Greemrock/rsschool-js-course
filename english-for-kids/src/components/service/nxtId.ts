/* eslint-disable no-plusplus */
let nextId = 100;
export const getNextId = (): number => {
  return nextId++;
};
