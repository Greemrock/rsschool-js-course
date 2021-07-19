import { Link } from "react-router-dom";
import { CategoryCardProps } from "../../shared/interface/interface";
import { Card, CardFront, CardTitle } from "../GameCard/GameCard.styled";

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  link,
}) => {
  return (
    <Card>
      <Link to={`cards/${link}`}>
        <CardFront style={{ backgroundImage: `url(${image})` }}>
          <CardTitle>{name}</CardTitle>
        </CardFront>
      </Link>
    </Card>
  );
};
