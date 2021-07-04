import { ICardType } from "./interface";

// Fisher–Yates shuffle
export const randomizer = (arr: ICardType[]): ICardType[] => {
  const result: ICardType[] = arr.slice();
  for (let i: number = result.length - 1; i > 0; i -= 1) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
