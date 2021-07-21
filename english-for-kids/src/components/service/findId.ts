import { ICategory } from "../shared/interface/interface";

export const findId = (
  categories: ICategory[],
  id: string
): string | undefined => {
  const selectedCategory = categories.find((category) => category.id === +id);
  return selectedCategory?.name;
};
