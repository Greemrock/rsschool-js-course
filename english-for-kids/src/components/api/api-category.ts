import { ICategory } from "../shared/interface/interface";
import { urlServer } from "./url";

const CATEGORIES = "categories";

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(urlServer(CATEGORIES));
  const data: ICategory[] = await response.json();
  return data;
};

export const deleteCategory = async ({ id }: { id: number }): Promise<void> => {
  await fetch(urlServer(`${CATEGORIES}/${id}`), {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
};

export const createCategory = async (data: { name: string }): Promise<void> => {
  await fetch(urlServer(CATEGORIES), {
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
  await fetch(`${urlServer(CATEGORIES)}/${data.id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
