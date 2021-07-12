import { CategoriesItem } from "../components/CategoriesItem";
import { CategoriesItemCreate } from "../components/CategoriesItemCreate";

export const Categories: React.FC = () => {
  return (
    <>
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItem />
      <CategoriesItemCreate />
    </>
  );
};
