import { TrainCard } from "./TrainCard";
import { ICardsType } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const TrainCards: React.FC<ICardsType> = ({ cards, title }) => {
  return (
    <>
      <Page>{title}</Page>
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
