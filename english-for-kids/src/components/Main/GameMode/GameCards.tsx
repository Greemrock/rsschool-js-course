import styled from "styled-components";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { GameCard } from "./GameCard";
import { ICardsType } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";

export const Rating = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  display: flex;
  justify-content: flex-end;
  max-width: 1350px;
  height: 40px;
`;

export const Star = styled.div`
  flex-shrink: 0;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/img/star.svg);
`;

export const Button = styled.button<{ play: boolean }>`
  box-sizing: border-box;
  padding: 5px;
  font-size: 24px;
  width: 100%;
  max-width: 150px;
  height: 40px;
  background: linear-gradient(40deg, #ffd86f, #fc6262);
  color: #fff;
  border-radius: 10px;
  outline: 0 !important;
  border-width: 1px;
  transition: 0.3s;
  cursor: pointer;
  ${({ play }) =>
    play
      ? `width: 40px; font-size: 0; background-image: url(${process.env.PUBLIC_URL}/assets/img/repeat.svg),linear-gradient(40deg, #ffd86f, #fc6262); border-radius: 50%; background-repeat: no-repeat; background-size: 35px 35px, cover; background-position: 40%`
      : ""};
`;

export const PlayContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
`;

export const GameCards: React.FC<ICardsType> = ({
  cards,
  title,
  randomCards,
}) => {
  const NUMBER_OF_CARDS = randomCards.length - 1;
  const [play, setPlay] = useState(false);
  const [countCard, setCountCard] = useState(0);
  const [match, setMatch] = useState("");
  const inner = play ? "" : "Start";
  const [playSound] = useSound(randomCards[countCard].audioSrc);
  const [playError] = useSound(
    `${process.env.PUBLIC_URL}/assets/audio/error.mp3`
  );

  useEffect(() => {
    if (match) {
      playSound();
    }
  }, [playSound]);

  const handleClick = (wordCard: string) => {
    if (countCard === NUMBER_OF_CARDS) {
      setCountCard(countCard);
      setMatch("true");
      console.log("end game");
    } else if (wordCard === randomCards[countCard].word) {
      setCountCard(countCard + 1);
      setMatch("true");
    } else if (wordCard !== randomCards[countCard].word) {
      playError();
    }
  };

  return (
    <>
      <Page>{title}</Page>
      <Rating>
        <Star />
      </Rating>
      <PlayContainer>
        <Button
          play={play}
          onClick={() => {
            setPlay(true);
            playSound();
          }}
        >
          {inner}
        </Button>
      </PlayContainer>
      {cards.map((card) => {
        return (
          <GameCard
            key={card.word}
            word={card.word}
            translation={card.translation}
            image={card.image}
            audioSrc={card.audioSrc}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};
