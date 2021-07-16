import { CategoryCard } from "./CategoryCard";
import { ICategoryCardsProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";
import { categoriesStore } from "../../Shared/categoriesStore";

export const CategoryCards: React.FC<ICategoryCardsProps> = ({
  setNumberCategory,
}) => {
  return (
    <>
      <Page>Main page</Page>
      {categoriesStore.map((category) => {
        return (
          <>
            <CategoryCard
              key={category.name}
              name={category.name}
              link={category.path}
              image={`${process.env.PUBLIC_URL}${category.iconSrc}`}
              setNumberCategory={setNumberCategory}
              index={category.id}
            />
          </>
        );
      })}
    </>
  );
};
