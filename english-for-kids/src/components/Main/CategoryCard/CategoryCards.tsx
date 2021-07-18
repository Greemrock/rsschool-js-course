import { CategoryCard } from "./CategoryCard";
// import { ICategoryCardsProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";
import { categoriesStore } from "../../shared/categoriesStore";

export const CategoryCards: React.FC = () => {
  return (
    <>
      <Page>Main page</Page>
      {categoriesStore.map((category) => {
        return (
          <CategoryCard
            key={category.name}
            name={category.name}
            link={String(category.id)}
            image={`${process.env.PUBLIC_URL}${category.iconSrc}`}
          />
        );
      })}
    </>
  );
};
