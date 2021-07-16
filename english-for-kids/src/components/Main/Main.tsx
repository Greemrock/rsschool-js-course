// import { useEffect, useState } from "react";
import { categoriesStore } from "../Shared/categoriesStore";
import { randomizer } from "../Shared/randomizer";
import { GameCards } from "./GameMode/GameCards";
import { collectionsStore } from "../Shared/collectionsStore";
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
  collectionsStore.map((card) =>
    card.categoryId === category ? collection.push(card) : ""
  );
  const randomCards = randomizer(collection).slice();

  return (
    <>
      <GameCards
        cards={collection}
        title={categoriesStore[category].name}
        randomCards={randomCards}
      />
    </>
  );
};
