import { CategoryCard } from "./CategoryCard";
import { ITitleProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const CategoryCards: React.FC<ITitleProps> = ({ title }) => {
  return (
    <>
      <Page>Main page</Page>
      {title.map((t) => {
        return (
          <CategoryCard
            key={title.indexOf(t)}
            name={t.title}
            image={t.image}
            link={t.link}
          />
        );
      })}
    </>
  );
};
