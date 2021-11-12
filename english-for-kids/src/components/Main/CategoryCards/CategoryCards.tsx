import { CategoryCard } from "../CategoryCard/CategoryCard";
import { Page } from "../GameCards/GameCards.styled";
// import { categoriesStore } from "../../shared/categoriesStore";
import { ICategory } from "../../shared/interface/interface";

interface ICategoryCardsProps {
  categories: ICategory[];
}

export const CategoryCards: React.FC<ICategoryCardsProps> = ({
  categories,
}) => {
  return (
    <>
      <Page>Main page</Page>
      {categories.map((category) => {
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
