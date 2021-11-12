import { ICategory } from "../shared/interface/interface";

export const findId = (categories: ICategory[], id: string): ICategory => {
  const selectedCategory = categories.find(
    (category) => category.id === +id
  ) as ICategory;
  return selectedCategory;
};
