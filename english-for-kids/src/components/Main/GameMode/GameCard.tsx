import { Card, CardFront } from "../Styled/Card.styled";
import { IGameCardProps } from "../../Shared/interface";

export const GameCard: React.FC<IGameCardProps> = ({
  image,
  handleClick,
  word,
  id,
}) => {
  return (
    <Card
      onClick={() => {
        handleClick(word, id);
      }}
    >
      <CardFront style={{ backgroundImage: `url(${image})` }} />
    </Card>
  );
};

export const GameCardActive: React.FC<IGameCardProps> = ({
  image,
  handleClick,
  word,
  id,
}) => {
  return (
    <Card
      onClick={() => {
        handleClick(word, id);
      }}
      style={{ opacity: "0.5" }}
    >
      <CardFront style={{ backgroundImage: `url(${image})` }} />
    </Card>
  );
};
