export const getPositionElement = (
  elem: HTMLElement
): { x: number; y: number } => {
  const { top, left, width, height } = elem.getBoundingClientRect();
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
};
