import {
  ButtonWordContainerStyled,
  DivWordStyled,
  ImgCardStyled,
  WordsItemStyled,
} from "../Styled/WordsItem.styled";
import { CloseItem } from "./Cross";

export const WordsItem: React.FC = () => {
  return (
    <WordsItemStyled>
      <CloseItem />
      <DivWordStyled>
        <b>Word: </b>
        <span>Draw</span>
      </DivWordStyled>
      <DivWordStyled>
        <b>Translation: </b>
        <span>Рисовать</span>
      </DivWordStyled>
      <DivWordStyled>
        <b>Sound file: </b>
        <span>draw.mp3</span>
      </DivWordStyled>
      <DivWordStyled>
        <b>Image:</b>
      </DivWordStyled>
      <ImgCardStyled src="#" alt="img" />
      <ButtonWordContainerStyled>
        <button type="button">Change</button>
      </ButtonWordContainerStyled>
    </WordsItemStyled>
  );
};
