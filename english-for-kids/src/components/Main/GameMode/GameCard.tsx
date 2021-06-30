import useSound from "use-sound";
import { useState } from "react";
import { Card, CardFront } from "../Styled/Card.styled";
import { ICardType } from "../../Shared/interface";

export const GameCard: React.FC<ICardType> = ({ image, audioSrc }) => {
  const [play] = useSound(audioSrc);
  const [rotate, setRotate] = useState(false);
  const transform = rotate ? "rotateY(180deg)" : "rotateY(0)";
  return (
    <Card
      onMouseDown={() => {
        play();
      }}
      onMouseLeave={() => setRotate(false)}
      style={{ transform: `${transform}` }}
    >
      <CardFront style={{ backgroundImage: `url(${image})` }} />
    </Card>
  );
};
