import { CategoryCard } from "./CategoryCard";
import { ICardProps, ICategoryCardsProps } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";
import { collectionCards } from "../../Shared/collectionCards";

export const CategoryCards: React.FC<ICategoryCardsProps> = ({
  routes,
  setNumberCategory,
}) => {
  return (
    <>
      <Page>Main page</Page>
      {routes.map((route) => {
        // eslint-disable-next-line consistent-return
        const findSrc = (elem: ICardProps) => {
          return elem.categoryId === route.id ? elem.categoryId : "";
        };
        const srcImg = collectionCards.find(findSrc);
        return (
          <>
            <CategoryCard
              key={route.name}
              name={route.name}
              link={route.path}
              image={`${process.env.PUBLIC_URL}${srcImg?.image}`}
              setNumberCategory={setNumberCategory}
              index={route.id}
            />
          </>
        );
      })}
    </>
  );
};
