import { useEffect, useState } from "react";
import { getCategories } from "../api/api";
import { ICategory } from "../shared/interface/interface";
import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { CategoriesItemCreate } from "./CategoriesItemCreate/CategoriesItemCreate";

export const PageCategories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const allCategories = async () => {
      setCategories(await getCategories());
    };

    allCategories();
  }, [categories]);

  return (
    <>
      {categories.map((item) => {
        return (
          <CategoriesItem key={item.id} name={item.name} idCategory={item.id} />
        );
      })}
      <CategoriesItemCreate />
    </>
  );
};
