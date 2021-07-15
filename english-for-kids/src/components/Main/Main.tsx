// import { useEffect, useState } from "react";
import { routes } from "../Shared/routes";
import { randomizer } from "../Shared/randomizer";
import { GameCards } from "./GameMode/GameCards";
import { collectionCards } from "../Shared/collectionCards";
import { ICardProps } from "../Shared/interface";
// import { ICardProps } from "../Shared/interface";
// import { getWords } from "../../AdminPage/api/api";

interface IMainP {
  category: number;
}

export const Main: React.FC<IMainP> = ({ category }) => {
  // const [items, setItems] = useState<ICardProps[][]>([]);
  // useEffect(() => {
  //   const categories = getWords();
  //   const data = async () => {
  //     setItems(await categories);
  //   };
  //   data();
  // }, [items]);
  const collection: ICardProps[] = [];
  collectionCards.map((card) =>
    card.categoryId === category ? collection.push(card) : ""
  );
  const randomCards = randomizer(collection).slice();

  return (
    <>
      <GameCards
        cards={collection}
        title={routes[category].name}
        randomCards={randomCards}
      />
    </>
  );
};
