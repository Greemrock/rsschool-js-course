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
  const img = `${process.env.PUBLIC_URL}${image}`;
  return (
    <Card onClick={() => setNumberCategory(index)}>
      <Link to={link}>
        <CardFront style={{ backgroundImage: `url(${img})` }}>
          <CardTitle>{name}</CardTitle>
        </CardFront>
      </Link>
    </Card>
  );
};
