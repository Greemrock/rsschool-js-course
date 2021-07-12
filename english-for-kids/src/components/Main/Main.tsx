import { collectionCards } from "../Shared/collectionCards";
import { routes } from "../Shared/routes";
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
                title={routes[category].name}
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
