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

interface IWordItemProps {
  word: string;
  translation: string;
  image: string;
  getAllCategories: () => Promise<void>;
}

export const WordsItem: React.FC<IWordItemProps> = ({
  word,
  translation,
  image,
  getAllCategories,
}) => {
  const [update, setUpdate] = useState(false);

  return (
    <WordsItemStyled>
      <CloseItem id={0} getAllCategories={getAllCategories} />
      <InformationStyled update={update}>
        <DivWordStyled>
          <b>Word: </b>
          <span>{word}</span>
        </DivWordStyled>
        <DivWordStyled>
          <b>Translation: </b>
          <span>{translation}</span>
        </DivWordStyled>
        <DivWordStyled>
          <b>Sound file: </b>
          <span>draw.mp3</span>
        </DivWordStyled>
        <DivWordStyled>
          <b>Image:</b>
        </DivWordStyled>
        <ImgCardStyled src={image} alt="img" />
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
