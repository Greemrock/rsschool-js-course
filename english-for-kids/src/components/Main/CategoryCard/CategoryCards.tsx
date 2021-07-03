import { CategoryCard } from "./CategoryCard";
import { ITitleProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const CategoryCards: React.FC<ITitleProps> = ({ title }) => {
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
          />
        );
      })}
    </>
  );
};
