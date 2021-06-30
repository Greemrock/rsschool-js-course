import useSound from "use-sound";
import { useState } from "react";
import {
  Card,
  CardBack,
  CardFront,
  CardTitle,
  Rotate,
} from "../Styled/Card.styled";
import { ICardType } from "../../Shared/interface";

export const TrainCard: React.FC<ICardType> = ({
  word,
  translation,
  image,
  audioSrc,
}) => {
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
      <CardFront style={{ backgroundImage: `url(${image})` }}>
        <CardTitle onClick={() => setRotate(!rotate)}>
          {word} <Rotate />
        </CardTitle>
      </CardFront>
      <CardBack style={{ backgroundImage: `url(${image})` }}>
        <CardTitle>{translation}</CardTitle>
      </CardBack>
    </Card>
  );
};
