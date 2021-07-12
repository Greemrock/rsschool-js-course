import { CategoryCard } from "./CategoryCard";
import { ICategoryCardsProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";
import { collectionCards } from "../../Shared/collectionCards";

export const CategoryCards: React.FC<ICategoryCardsProps> = ({
  routes,
  setNumberCategory,
}) => {
  const findImg = (idCategory: number): string => {
    return collectionCards[0][idCategory].image;
  };
  return (
    <>
      <Page>Main page</Page>
      {routes.map((card, index) => {
        const img = `${process.env.PUBLIC_URL}${findImg(index)}`;
        return (
          <CategoryCard
            key={card.name}
            name={card.name}
            link={card.path}
            image={img}
            setNumberCategory={setNumberCategory}
            index={index}
          />
        );
      })}
    </>
  );
};
