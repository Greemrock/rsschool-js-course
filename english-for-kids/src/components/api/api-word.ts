import { ICardProps } from "../shared/interface/interface";
import { urlServer } from "./url";

const WORDS = "words";

export const getCategoryWords = async (id: number): Promise<ICardProps[]> => {
  const response = await fetch(`${urlServer(WORDS)}/${id}`);
  const data: ICardProps[] = await response.json();
  return data;
};
