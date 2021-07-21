import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { getCategories, getCategoryWords } from "../api/api";
import { findId } from "../service/findId";
import { ICardProps, ICategory } from "../shared/interface/interface";
import { TitleCategoryStyled } from "./PageWords.styled";
import { WordsItem } from "./WordsItem/WordsItem";
import { WordsItemCreate } from "./WordsItemCreate/WordsItemCreate";

interface DetailParams {
  id: string;
}

interface IPageWordsProps {
  matchId: match<DetailParams>;
}

export const PageWords: React.FC<IPageWordsProps> = ({ matchId }) => {
  const [categoryWords, setCategoryWords] = useState<ICardProps[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    params: { id },
  } = matchId;

  useEffect(() => {
    const words = async () => {
      setCategoryWords(await getCategoryWords(+id));
    };
    const allCategories = async () => {
      setCategories(await getCategories());
    };

    allCategories();
    words();
  }, [id]);

  return categories.length ? (
    <>
      <TitleCategoryStyled>{`Category: ${findId(
        categories,
        id
      )}`}</TitleCategoryStyled>
      {categoryWords.map((word) => {
        return (
          <WordsItem
            word={word.word}
            translation={word.translation}
            image={word.image}
          />
        );
      })}
      <WordsItemCreate />
    </>
  ) : null;
};
