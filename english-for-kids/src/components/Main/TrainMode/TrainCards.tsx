import { TrainCard } from "./TrainCard";
import { ICardsType } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const TrainCards: React.FC<ICardsType> = ({ cards, title }) => {
  return (
    <>
      <Page>{title}</Page>
      {cards.map((card) => (
        <TrainCard
          key={card.word}
          word={card.word}
          translation={card.translation}
          image={card.image}
          audioSrc={card.audioSrc}
        />
      ))}
    </>
  );
};
