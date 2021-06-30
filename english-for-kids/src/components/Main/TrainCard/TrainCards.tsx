import { TrainCard } from "./TrainCard";
import { CardsType } from "../../Shared/interface";

export const TrainCards: React.FC<CardsType> = ({ cards }) => {
  return (
    <>
      {cards.map((c) => (
        <TrainCard
          key={cards.indexOf(c)}
          word={c.word}
          translation={c.translation}
          image={c.image}
          audioSrc={c.audioSrc}
        />
      ))}
    </>
  );
};
