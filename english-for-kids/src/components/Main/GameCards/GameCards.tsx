import { useEffect, useState } from "react";
import useSound from "use-sound";
import { GameCard, GameCardActive } from "../GameCard/GameCard";
import { Button, Page, PlayContainer, Container } from "./GameCards.styled";
import { Star } from "../Star/Star";
import { WinnerScoreboard } from "../WinnerScoreboard/WinnerScoreboard";
import { store } from "../../shared/store/store";
import { ICardProps } from "../../shared/interface/interface";

interface ICardsProps {
  categoryWords: ICardProps[];
  title: string | undefined;
  randomCards: ICardProps[];
}

export const GameCards: React.FC<ICardsProps> = ({
  categoryWords,
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
  const [playError] = useSound("/assets/audio/error.mp3");
  const [playCorrect] = useSound("/assets/audio/correct.mp3");
  useEffect(() => {
    if (countCard > 0) {
      setTimeout(() => playSound(), 1000);
    }
  }, [playSound]);

  if (!store.playMode) {
    store.star = [];
    store.matchCards = [];
  }
  const handleClick = (wordCard: string, id: number) => {
    if (wordCard === randomCards[countCard].word && play) {
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
    } else if (wordCard !== randomCards[countCard].word && play) {
      if (store.matchCards.indexOf(id) === -1) {
        setMistake(mistake + 1);
        store.star.push(false);
        playError();
      }
    }
  };
  return (
    <>
      <Container>
        <Page>{title}</Page>
        <Star arrStar={store.star} />
      </Container>
      <WinnerScoreboard win={win} mistake={mistake} />
      {categoryWords.map((card) => {
        return (
          <>
            {store.matchCards.indexOf(categoryWords.indexOf(card)) !== -1 ? (
              <GameCardActive
                word={card.word}
                translation={card.translation}
                image={card.image}
                audioSrc={card.audioSrc}
                handleClick={handleClick}
                id={categoryWords.indexOf(card)}
              />
            ) : (
              <GameCard
                word={card.word}
                translation={card.translation}
                image={card.image}
                audioSrc={card.audioSrc}
                handleClick={handleClick}
                id={categoryWords.indexOf(card)}
              />
            )}
          </>
        );
      })}
      {store.playMode ? (
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
      ) : (
        ""
      )}
    </>
  );
};
