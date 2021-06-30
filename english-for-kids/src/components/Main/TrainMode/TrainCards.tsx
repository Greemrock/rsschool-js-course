import { TrainCard } from "./TrainCard";
import { ICardsType } from "../../Shared/interface";

export const TrainCards: React.FC<ICardsType> = ({ cards }) => {
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
