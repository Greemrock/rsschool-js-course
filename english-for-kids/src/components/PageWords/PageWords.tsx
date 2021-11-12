import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { getCategories } from "../api/api-category";
import { getCategoryWords } from "../api/api-word";
import { findId } from "../service/findId";
import {
  DetailParams,
  ICardProps,
  ICategory,
} from "../shared/interface/interface";
import { TitleCategoryStyled } from "./PageWords.styled";
import { WordsItem } from "./WordsItem/WordsItem";
import { WordsItemCreate } from "./WordsItemCreate/WordsItemCreate";

interface IPageWordsProps {
  matchId: match<DetailParams>;
}

export const PageWords: React.FC<IPageWordsProps> = ({ matchId }) => {
  const [categoryWords, setCategoryWords] = useState<ICardProps[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    params: { id },
  } = matchId;

  const getAllWords = async () => {
    setCategoryWords(await getCategoryWords(+id));
  };

  const getAllCategories = async () => {
    setCategories(await getCategories());
  };

  useEffect(() => {
    getAllCategories();
    getAllWords();
  }, []);

  return categories.length ? (
    <>
      <TitleCategoryStyled>{`Category: ${
        findId(categories, id)?.name
      }`}</TitleCategoryStyled>
      {categoryWords.map((word) => {
        return (
          <WordsItem
            key={word.id}
            idCard={word.id}
            wordCard={word.word}
            translationCard={word.translation}
            audioCard={word.audioSrc}
            imageCard={word.image}
            idCategory={categories[word.categoryId - 1].id}
            getAllWords={getAllWords}
          />
        );
      })}
      <WordsItemCreate
        idCategory={findId(categories, id)}
        getAllWords={getAllWords}
      />
    </>
  ) : null;
};
