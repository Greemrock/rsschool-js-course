import { CategoryCard } from "./CategoryCard";
import { ITitleProps } from "../Shared/interface";

export const CategoryCards: React.FC<ITitleProps> = ({ title }) => {
  return (
    <>
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
