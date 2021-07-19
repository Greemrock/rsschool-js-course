import { TitleCategoryStyled } from "./PageWords.styled";
import { WordsItem } from "./WordsItem/WordsItem";
import { WordsItemCreate } from "./WordsItemCreate/WordsItemCreate";

export const PageWords: React.FC = () => {
  return (
    <>
      <TitleCategoryStyled>
        Category: <b>Action (set A)</b>
      </TitleCategoryStyled>
      <WordsItem />
      <WordsItemCreate />
    </>
  );
};
