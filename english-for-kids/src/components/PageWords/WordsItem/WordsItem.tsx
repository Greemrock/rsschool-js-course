import { useState } from "react";
import {
  FormCardStyled,
  InformationStyled,
  InputStyled,
} from "../../PageCategories/CategoriesItem/CategoriesItem.styled";
import {
  ButtonWordContainerStyled,
  DivWordStyled,
  ImgCardStyled,
  WordsItemStyled,
  UploadFileStyled,
  CancelInputStyled,
} from "./WordsItem.styled";
import { CloseItem } from "../../shared/CloseItem/CloseItem";

export const WordsItem: React.FC = () => {
  const [update, setUpdate] = useState(false);

  return (
    <WordsItemStyled>
      <CloseItem id={0} />
      <InformationStyled update={update}>
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
          <button onClick={() => setUpdate(true)} type="button">
            Change
          </button>
        </ButtonWordContainerStyled>
      </InformationStyled>
      <FormCardStyled update={update}>
        <fieldset>
          <legend>Word:</legend>
          <InputStyled type="text" required />
        </fieldset>
        <fieldset>
          <legend>Translation:</legend>
          <InputStyled type="text" required />
        </fieldset>
        <UploadFileStyled>
          <span>Sound: </span>
          <label htmlFor="audio">Select file</label>
          <input id="audio" type="file" accept=".mp3" />
        </UploadFileStyled>
        <UploadFileStyled>
          <span>Image: </span>
          <label htmlFor="image">Select file</label>
          <input
            id="image"
            type="file"
            accept=".jpg, .jpeg, .png"
            placeholder="Image:"
          />
        </UploadFileStyled>
        <CancelInputStyled>
          <input
            onClick={() => setUpdate(false)}
            type="submit"
            value="Cancel"
          />
        </CancelInputStyled>
      </FormCardStyled>
    </WordsItemStyled>
  );
};
