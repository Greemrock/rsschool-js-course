import { AddWordStyled, TitleNewCard } from "../Styled/WordsItemCreate.styled";
import { WordsItemStyled } from "../Styled/WordsItem.styled";

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
