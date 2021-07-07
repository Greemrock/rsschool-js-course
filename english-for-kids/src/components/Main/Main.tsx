import { SECTIONS, collectionCards } from "../Shared/collectionCards";
import { randomizer } from "../Shared/randomizer";
import { GameCards } from "./GameMode/GameCards";

interface IMainP {
  category: number;
}

export const Main: React.FC<IMainP> = ({ category }) => {
  return (
    <>
      {collectionCards.map((collection) => {
        const randomCards = randomizer(collection).slice();
        return (
          <>
            {collection === collectionCards[category] ? (
              <GameCards
                cards={collection}
                title={SECTIONS[category].title}
                randomCards={randomCards}
              />
            ) : (
              ""
            )}
          </>
        );
      })}
    </>
  );
};
