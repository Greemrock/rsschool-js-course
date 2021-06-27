import styled from "styled-components";
import { TrainCard, CardInner } from "./TrainCard";
import { CardsType } from "../Shared/interface";

export const StyledCard = styled.div`
  max-width: 300px;
  width: 100%;
  height: 260px;
  padding: 20px;
  cursor: pointer;

  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }
`;

export const Cards: React.FC<CardsType> = ({ cards }) => {
  return (
    <>
      {cards.map((c) => (
        <StyledCard key={cards.indexOf(c)}>
          <TrainCard
            id={cards.indexOf(c)}
            word={c.word}
            translation={c.translation}
            image={c.image}
            audioSrc={c.audioSrc}
          />
        </StyledCard>
      ))}
    </>
  );
};
