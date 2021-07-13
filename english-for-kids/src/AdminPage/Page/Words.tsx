import { TitleCategoryStyled } from "../Styled/Words";
import { WordsItem } from "../components/WordsItem";
import { WordsItemCreate } from "../components/WordsItemCreate";

export const Words: React.FC = () => {
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
