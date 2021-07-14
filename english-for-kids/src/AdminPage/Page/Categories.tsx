import { useEffect, useState } from "react";
import { getCategories } from "../api/api";
import { CategoriesItem } from "../components/CategoriesItem";
import { CategoriesItemCreate } from "../components/CategoriesItemCreate";

interface ICategory {
  id: number;
  name: string;
}
export const Categories: React.FC = () => {
  const [items, setItems] = useState<ICategory[]>([]);

  useEffect(() => {
    const categories = getCategories();
    const data = async () => {
      setItems(await categories);
    };
    data();
  }, [items]);
  return (
    <>
      {items.map((item) => {
        return (
          <CategoriesItem key={item.id} name={item.name} idCategory={item.id} />
        );
      })}
      <CategoriesItemCreate />
    </>
  );
};
