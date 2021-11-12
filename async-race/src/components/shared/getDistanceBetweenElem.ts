import { getPositionElement } from './getPositionElem';

export const getDistanceBetweenElement = (
  firstElement: HTMLElement,
  secondElement: HTMLElement
): number => {
  const firstPosition = getPositionElement(firstElement);
  const secondPosition = getPositionElement(secondElement);
  const hypot = Math.hypot(
    firstPosition.x - secondPosition.x,
    firstPosition.y - secondPosition.y
  );
  return hypot;
};
