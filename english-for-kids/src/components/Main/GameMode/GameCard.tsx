import { Card, CardFront } from "../Styled/Card.styled";
import { IGameCardProps } from "../../Shared/interface";

export const GameCard: React.FC<IGameCardProps> = ({
  image,
  handleClick,
  word,
}) => {
  return (
    <Card
      onClick={() => {
        handleClick(word);
      }}
    >
      <CardFront style={{ backgroundImage: `url(${image})` }} />
    </Card>
  );
};
