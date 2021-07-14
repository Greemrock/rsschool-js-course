/* eslint-disable @typescript-eslint/no-unused-vars */
const CATEGORIES = "categories";
const WORDS = "words";
const url = (endpoint: string) => `http://localhost:8080/api/${endpoint}`;

interface ICategory {
  id: number;
  name: string;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(url(CATEGORIES));
  const data: ICategory[] = await response.json();
  return data;
};

export const createCategory = async (data: string): Promise<void> => {
  const body = { name: data };
  await fetch(url(""), {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

export const deleteCategory = ({ id }: { id: number }): void => {
  fetch(url(`${CATEGORIES}/${id}`), {
    method: "DELETE",
  });
};

export const postLogin = async (name: string, pass: string): Promise<void> => {
  const body = { username: name, password: pass };
  await fetch(url(""), {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(body),
  });
};
