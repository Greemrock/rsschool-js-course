import { ICardProps, ICategory } from "../shared/interface/interface";

const CATEGORIES = "categories";
const WORDS = "words";

// const port = 8080;
// const url = (endpoint: string) => `http://localhost:${port}/api/${endpoint}`;

const url = (endpoint: string) =>
  `https://english-for-kids-greemrock.herokuapp.com/api/${endpoint}`;

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(url(CATEGORIES));
  const data: ICategory[] = await response.json();
  return data;
};

export const deleteCategory = async ({ id }: { id: number }): Promise<void> => {
  await fetch(url(`${CATEGORIES}/${id}`), {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
};

export const getCategoryWords = async (id: number): Promise<ICardProps[]> => {
  const response = await fetch(`${url(WORDS)}/${id}`);
  const data: ICardProps[] = await response.json();
  return data;
};

export const createCategory = async (data: { name: string }): Promise<void> => {
  await fetch(url(CATEGORIES), {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateCategory = async (data: {
  id: number;
  name: string;
}): Promise<void> => {
  await fetch(`${url(CATEGORIES)}/${data.id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
