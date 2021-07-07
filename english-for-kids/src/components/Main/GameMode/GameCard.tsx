import useSound from "use-sound";
import { useState } from "react";
import {
  Card,
  CardFront,
  CardBack,
  CardTitle,
  Rotate,
} from "../Styled/Card.styled";
import { IGameCardProps } from "../../Shared/interface";
import { store } from "../../Shared/store";

export const GameCard: React.FC<IGameCardProps> = ({
  translation,
  audioSrc,
  image,
  handleClick,
  word,
  id,
}) => {
  const [play] = useSound(audioSrc);
  const [rotate, setRotate] = useState(false);
  const transform = rotate ? "rotateY(180deg)" : "rotateY(0)";
  return (
    <Card
      onClick={() => (store.playMode ? handleClick(word, id) : play())}
      onMouseLeave={() => (store.playMode ? "" : setRotate(false))}
      style={
        store.playMode
          ? { transform: "rotateY(0deg)" }
          : { transform: `${transform}` }
      }
    >
      <CardFront
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
        }}
      >
        {store.playMode ? (
          ""
        ) : (
          <CardTitle>
            {word} <Rotate onClick={() => setRotate(!rotate)} />
          </CardTitle>
        )}
      </CardFront>
      <CardBack
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
        }}
      >
        <CardTitle>{translation}</CardTitle>
      </CardBack>
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
