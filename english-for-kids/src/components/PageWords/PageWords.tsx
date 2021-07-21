// import { useEffect, useState } from "react";
import { match } from "react-router-dom";
// import { getCategories, getCategoryWords } from "../api/api";
// import { ICardProps, ICategory } from "../shared/interface/interface";
// import { TitleCategoryStyled } from "./PageWords.styled";
// import { WordsItem } from "./WordsItem/WordsItem";
// import { WordsItemCreate } from "./WordsItemCreate/WordsItemCreate";

interface DetailParams {
  id: string;
}

interface IPageWordsProps {
  matchId: match<DetailParams>;
}

export const PageWords: React.FC<IPageWordsProps> = ({ matchId }) => {
  // const [categoryWords, setCategoryWords] = useState<ICardProps[]>([]);
  // const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    params: { id },
  } = matchId;
  // useEffect(() => {
  //   const words = async () => {
  //     setCategoryWords(await getCategoryWords(+id));
  //   };
  //   const allCategories = async () => {
  //     setCategories(await getCategories());
  //   };

  //   allCategories();
  //   words();
  // }, [matchId]);
  return (
    <div>{id}</div>
    // <>
    //   <TitleCategoryStyled>
    //     Category: <b>{categories[+id]}</b>
    //   </TitleCategoryStyled>
    //   <WordsItem
    //     word={categoryWords[+id].word}
    //     translation={categoryWords[+id].translation}
    //     image={categoryWords[+id].image}
    //   />
    //   <WordsItemCreate />
    // </>
  );
};
