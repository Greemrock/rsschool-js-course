import { match } from "react-router-dom";
import { useEffect, useState } from "react";
import { randomizer } from "../service/randomizer";
import { GameCards } from "./GameCards/GameCards";
import {
  DetailParams,
  ICardProps,
  ICategory,
} from "../shared/interface/interface";
import { getCategories } from "../api/api-category";
import { getCategoryWords } from "../api/api-word";

interface IMainProps {
  matchId: match<DetailParams>;
}

export const Main: React.FC<IMainProps> = ({ matchId }) => {
  const [categoryWords, setCategoryWords] = useState<ICardProps[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    params: { id },
  } = matchId;
  const randomCards = randomizer(categoryWords);

  useEffect(() => {
    const words = async () => {
      setCategoryWords(await getCategoryWords(+id));
    };
    const allCategories = async () => {
      setCategories(await getCategories());
    };

    allCategories();
    words();
  }, [matchId]);

  const findId = () => {
    const selectedCategory = categories.find((category) => category.id === +id);
    return selectedCategory?.name;
  };
  return categoryWords.length && categories.length ? (
    <GameCards
      categoryWords={categoryWords}
      title={findId()}
      randomCards={randomCards}
    />
  ) : null;
};
