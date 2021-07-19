import { match } from "react-router-dom";
import { categoriesStore } from "../shared/categoriesStore";
import { randomizer } from "../service/randomizer/randomizer";
import { GameCards } from "./GameCards/GameCards";
import { collectionsStore } from "../shared/collectionsStore";

interface DetailParams {
  id: string;
}

interface IMainP {
  matchId: match<DetailParams>;
}

export const Main: React.FC<IMainP> = ({ matchId }) => {
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
  } = matchId;
  const collection = collectionsStore.filter(
    (card) => String(card.categoryId) === id
  );
  const randomCards = randomizer(collection);
  const categoryId = +id - 1;
  return (
    <GameCards
      cards={collection}
      title={categoriesStore[categoryId].name}
      randomCards={randomCards}
    />
  );
};
