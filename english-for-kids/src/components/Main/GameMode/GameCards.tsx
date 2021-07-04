import styled from "styled-components";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { GameCard } from "./GameCard";
import { ICardsType } from "../../Shared/interface";
import { Page } from "../Styled/Card.styled";
import { Star } from "./Star";
import { WinnerScoreboard } from "./WinnerScoreboard";

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
  position: relative;
  top: 0;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
`;

let star: boolean[] = [];

export const GameCards: React.FC<ICardsType> = ({
  cards,
  title,
  randomCards,
}) => {
  const NUMBER_OF_CARDS = randomCards.length - 1;
  const [play, setPlay] = useState(false);
  const [countCard, setCountCard] = useState(0);
  const [mistake, setMistake] = useState(0);
  const [win, setWin] = useState(false);
  const inner = play ? "" : "Start";
  const [playSound] = useSound(randomCards[countCard].audioSrc);
  const [playError] = useSound(
    `${process.env.PUBLIC_URL}/assets/audio/error.mp3`
  );
  const [playCorrect] = useSound(
    `${process.env.PUBLIC_URL}/assets/audio/correct.mp3`
  );
  useEffect(() => {
    if (countCard > 0) {
      setTimeout(() => playSound(), 1000);
    }
  }, [playSound]);

  const handleClick = (wordCard: string) => {
    if (wordCard === randomCards[countCard].word) {
      if (countCard !== NUMBER_OF_CARDS) {
        setCountCard(countCard + 1);
        star.push(true);
      } else {
        star = [];
        setWin(true);
      }
      playCorrect();
    } else if (wordCard !== randomCards[countCard].word) {
      setMistake(mistake + 1);
      star.push(false);
      playError();
    }
  };

  return (
    <>
      <Page>{title}</Page>
      <Star arrStar={star} />
      <WinnerScoreboard win={win} mistake={mistake} />
      <PlayContainer>
        <Button
          play={play}
          onClick={() => {
            setPlay(true);
            setTimeout(() => playSound(), 500);
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
