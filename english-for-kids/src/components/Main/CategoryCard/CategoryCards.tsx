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
      {routes.map((route, index) => {
        return (
          <>
            {route.isPrivate ? (
              ""
            ) : (
              <CategoryCard
                key={route.name}
                name={route.name}
                link={route.path}
                image={`${process.env.PUBLIC_URL}${findImg(index)}`}
                setNumberCategory={setNumberCategory}
                index={index}
              />
            )}
          </>
        );
      })}
    </>
  );
};
