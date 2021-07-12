import { Link } from "react-router-dom";
import { CategoryCardProps } from "../../Shared/interface";
import { Card, CardFront, CardTitle } from "../Styled/Card.styled";

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  link,
  setNumberCategory,
  index,
}) => {
  return (
    <Card onClick={() => setNumberCategory(index)}>
      <Link to={link}>
        <CardFront style={{ backgroundImage: `url(${image})` }}>
          <CardTitle>{name}</CardTitle>
        </CardFront>
      </Link>
    </Card>
  );
};
