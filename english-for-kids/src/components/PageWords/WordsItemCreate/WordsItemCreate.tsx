import { AddWordStyled, TitleNewCard } from "./WordsItemCreate.styled";
import { WordsItemStyled } from "../WordsItem/WordsItem.styled";

export const WordsItemCreate: React.FC = () => {
  return (
    <WordsItemStyled>
      <TitleNewCard>Add new word</TitleNewCard>
      <AddWordStyled open={false}>
        <div />
        <div />
      </AddWordStyled>
    </WordsItemStyled>
  );
};
