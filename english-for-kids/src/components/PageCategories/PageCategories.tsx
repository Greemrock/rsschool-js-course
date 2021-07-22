import { useEffect, useState } from "react";
import { getCategories } from "../api/api-category";
import { ICategory } from "../shared/interface/interface";
import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { CategoriesItemCreate } from "./CategoriesItemCreate/CategoriesItemCreate";

export const PageCategories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const getAllCategories = async () => {
    setCategories(await getCategories());
  };

  useEffect(() => {
    getAllCategories();
  }, [setCategories]);

  return (
    <>
      {categories.map((category) => {
        return (
          <CategoriesItem
            key={category.id}
            name={category.name}
            idCategory={category.id}
            getAllCategories={getAllCategories}
          />
        );
      })}
      <CategoriesItemCreate getAllCategories={getAllCategories} />
    </>
  );
};
