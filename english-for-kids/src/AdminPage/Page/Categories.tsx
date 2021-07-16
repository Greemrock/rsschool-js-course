// import { useEffect, useState } from "react";
// import { ICategory } from "../../components/Shared/interface";
// import { getCategories } from "../api/api";
import { routePages } from "../../components/Shared/routes";
import { CategoriesItem } from "../components/CategoriesItem";
import { CategoriesItemCreate } from "../components/CategoriesItemCreate";

export const Categories: React.FC = () => {
  // const [items, setItems] = useState<ICategory[]>([]);
  // useEffect(() => {
  //   const categories = getCategories();
  //   const data = async () => {
  //     setItems(await categories);
  //   };
  //   data();
  // }, [items]);

  return (
    <>
      {routePages.map((item) => {
        return (
          <CategoriesItem key={item.id} name={item.name} idCategory={item.id} />
        );
      })}
      <CategoriesItemCreate />
    </>
  );
};
