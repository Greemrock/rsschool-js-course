import { IStartAnimation } from '../shared/interfaces';

export const animation = (car: HTMLElement, distance: number, animationTime: number) => {
  let start: DOMHighResTimeStamp | null = null;
  const state = {} as IStartAnimation;

  function step(timestamp: DOMHighResTimeStamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;

    const passed = Math.round(time * (distance / animationTime));
    console.log(`${time} * (${distance} / ${animationTime} = ${passed}`);
    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
    console.log(`${passed} < ${distance}`);
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
};
