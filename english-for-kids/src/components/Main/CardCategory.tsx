import styled from "styled-components";
import { CategoryCardProps } from "../Shared/interface";
import { CardFront, CardTitle } from "./TrainCard";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 2 - 20px);
  height: 260px;
  max-width: 320px;
  border-radius: 5px;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover,
  &:focus {
    box-shadow: 0px 0px 28px 10px rgba(0, 0, 0, 0.25);
    transform: scale(1.1, 1.1);
    cursor: pointer;
    transition: all 0.8s ease;
  }

  @media (max-width: 1300px) {
    height: 200px;
  }

  @media (max-width: 950px) {
    height: 150px;
  }
`;

export const CardCategory: React.FC<CategoryCardProps> = ({ name, image }) => {
  return (
    <Card data-categories={name}>
      <CardFront style={{ backgroundImage: `url(${image})` }}>
        <CardTitle>{name}</CardTitle>
      </CardFront>
    </Card>
  );
};
