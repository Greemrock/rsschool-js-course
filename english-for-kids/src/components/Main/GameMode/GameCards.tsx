import { useEffect, useState } from "react";
import useSound from "use-sound";
import { GameCard, GameCardActive } from "./GameCard";
import { ICardsType } from "../../Shared/interface";
import { Button, Page, PlayContainer } from "../Styled/Card.styled";
import { Star } from "./Star";
import { WinnerScoreboard } from "./WinnerScoreboard";
import { store } from "../../Shared/store";

// let star: boolean[] = [];
// let matchCards: number[] = [];

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

  const handleClick = (wordCard: string, id: number) => {
    if (wordCard === randomCards[countCard].word) {
      if (countCard !== NUMBER_OF_CARDS) {
        setCountCard(countCard + 1);
        store.star.push(true);
      } else {
        store.star = [];
        store.matchCards = [];
        setWin(true);
      }
      store.matchCards.push(id);
      playCorrect();
    } else if (wordCard !== randomCards[countCard].word) {
      if (store.matchCards.indexOf(id) === -1) {
        setMistake(mistake + 1);
        store.star.push(false);
        playError();
      }
    }
  };
  return (
    <>
      <Page>{title}</Page>
      <Star arrStar={store.star} />
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
          <>
            {store.matchCards.indexOf(cards.indexOf(card)) !== -1 ? (
              <GameCardActive
                key={card.word + cards.indexOf(card)}
                word={card.word}
                translation={card.translation}
                image={card.image}
                audioSrc={card.audioSrc}
                handleClick={handleClick}
                id={cards.indexOf(card)}
              />
            ) : (
              <GameCard
                key={card.word + cards.indexOf(card)}
                word={card.word}
                translation={card.translation}
                image={card.image}
                audioSrc={card.audioSrc}
                handleClick={handleClick}
                id={cards.indexOf(card)}
              />
            )}
          </>
        );
      })}
    </>
  );
};
