import styled from "styled-components";
import { Link } from "react-router-dom";
import { CategoryCardProps } from "../Shared/interface";
import { CardFront, CardTitle } from "./TrainCard";

const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 3 - 20px);
  height: 260px;
  max-width: 320px;
  border-radius: 5px;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  box-shadow: 1px 3px 4px rgb(0 0 0 / 5%);
  &:hover,
  &:focus {
    box-shadow: 0px 4px 16px rgb(0 0 0 / 25%);
    cursor: pointer;
    transition: all 0.5s ease;
  }

  @media (max-width: 1300px) {
    height: 200px;
  }

  @media (max-width: 950px) {
    height: 150px;
  }

  a {
    color: #000000;
    width: 100%;
    height: 100%;
  }
`;

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  link,
}) => {
  return (
    <Card>
      <Link to={link}>
        <CardFront style={{ backgroundImage: `url(${image})` }}>
          <CardTitle>{name}</CardTitle>
        </CardFront>
      </Link>
    </Card>
  );
};
