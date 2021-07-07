import { CategoryCard } from "./CategoryCard";
import { ICategoryCardsProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const CategoryCards: React.FC<ICategoryCardsProps> = ({
  title,
  setNumberCategory,
}) => {
  return (
    <>
      <Page>Main page</Page>
      {title.map((card) => {
        return (
          <CategoryCard
            key={card.title}
            name={card.title}
            image={card.image}
            link={card.link}
            setNumberCategory={setNumberCategory}
            index={title.indexOf(card)}
          />
        );
      })}
    </>
  );
};
