import { AddWordStyled, TitleNewCard } from "./WordsItemCreate.styled";
import { WordsItemStyled } from "../WordsItem/WordsItem.styled";

export const WordsItemCreate: React.FC = () => {
  return (
    <WordsItemStyled>
      <TitleNewCard>Add new word</TitleNewCard>
      <AddWordStyled update={false}>
        <div />
        <div />
      </AddWordStyled>
    </WordsItemStyled>
  );
};
