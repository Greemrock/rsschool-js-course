import { ICardProps } from "../shared/interface/interface";
import { urlServer } from "./url";

const WORDS = "words";

export const getCategoryWords = async (id: number): Promise<ICardProps[]> => {
  const response = await fetch(`${urlServer(WORDS)}/${id}`);
  const data: ICardProps[] = await response.json();
  return data;
};

export const createCategory = async (
  categoryId: number,
  cardData: ICardProps,
  cardId: number
): Promise<void> => {
  await fetch(`${urlServer(WORDS)}/${categoryId}/${cardId}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cardData),
  });
};

export const updateWord = async (
  categoryId: number,
  cardData: ICardProps,
  cardId: number
): Promise<void> => {
  await fetch(`${urlServer(WORDS)}/${categoryId}/${cardId}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cardData),
  });
};

export const deleteWord = async (
  categoryId: number,
  cardId: number
): Promise<void> => {
  await fetch(urlServer(`${WORDS}//${categoryId}/${cardId}`), {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
};
