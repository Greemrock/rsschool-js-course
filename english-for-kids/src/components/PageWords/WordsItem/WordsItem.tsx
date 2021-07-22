import { useState } from "react";
import useSound from "use-sound";
import {
  Close,
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
  ReapiteButton,
} from "./WordsItem.styled";

interface IWordItemProps {
  word: string;
  translation: string;
  image: string;
  audio: string;
  getAllCategories: () => Promise<void>;
}

export const WordsItem: React.FC<IWordItemProps> = ({
  word,
  translation,
  image,
  audio,
}) => {
  const [update, setUpdate] = useState(false);
  const [play] = useSound(audio);
  const audioName = audio.split("/").slice(3, 4);
  return (
    <WordsItemStyled>
      <Close>
        <div />
        <div />
      </Close>
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
          <span>{audioName}</span>
          <ReapiteButton onClick={() => play()} />
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
            type="button"
            value="Cancel"
          />
          <input type="submit" value="Update" />
        </CancelInputStyled>
      </FormCardStyled>
    </WordsItemStyled>
  );
};
