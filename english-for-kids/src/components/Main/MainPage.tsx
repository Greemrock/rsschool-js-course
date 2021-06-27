import styled from "styled-components";
import { CardCategory } from "./CardCategory";
import { ICategoriesArr } from "../Shared/interface";

const CardsContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const CardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const MainPage: React.FC<ICategoriesArr> = ({ title }) => {
  return (
    <CardsContainer>
      <CardsList>
        {title.map((t) => {
          return <CardCategory name={t.title} image={t.image} />;
        })}
      </CardsList>
    </CardsContainer>
  );
};
