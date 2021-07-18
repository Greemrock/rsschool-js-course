import { ICardProps } from "../../components/shared/interface";
/* eslint-disable @typescript-eslint/no-unused-vars */
const CATEGORIES = "categories";
const WORDS = "words";
const port = 3000;

const url = (endpoint: string) => `http://localhost:${port}/api/${endpoint}`;

interface ICategory {
  id: number;
  name: string;
  path: string;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(url(CATEGORIES));
  const data: ICategory[] = await response.json();
  return data;
};

export const deleteCategory = async ({ id }: { id: number }): Promise<void> => {
  await fetch(url(`${CATEGORIES}/${id}`), {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

export const getWords = async (): Promise<ICardProps[]> => {
  const response = await fetch(url(WORDS));
  const data: ICardProps[] = await response.json();
  return data;
};

export const createCategory = async (data: string): Promise<void> => {
  const body = { name: data };
  await fetch(url(""), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};
