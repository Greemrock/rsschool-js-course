// import { useEffect, useState } from "react";
import { categoriesStore } from "../shared/categoriesStore";
import { randomizer } from "../shared/randomizer";
import { GameCards } from "./GameMode/GameCards";
import { collectionsStore } from "../shared/collectionsStore";

// import { ICardProps } from "../Shared/interface";
// import { getWords } from "../../AdminPage/api/api";

interface IMainP {
  // category: number;
  match: any;
}

export const Main: React.FC<IMainP> = ({ match }) => {
  // const [items, setItems] = useState<ICardProps[][]>([]);
  // useEffect(() => {
  //   const categories = getWords();
  //   const data = async () => {
  //     setItems(await categories);
  //   };
  //   data();
  // }, [items]);
  const {
    params: { id },
  } = match;
  const collection = collectionsStore.filter(
    (card) => String(card.categoryId) === id
  );
  const randomCards = randomizer(collection);
  return (
    <GameCards
      cards={collection}
      title={categoriesStore[id - 1].name}
      randomCards={randomCards}
    />
  );
};
