import { useState } from "react";
import useSound from "use-sound";
import { deleteWord, updateWord } from "../../api/api-word";
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
  idCard: number;
  wordCard: string;
  translationCard: string;
  imageCard: string;
  audioCard: string;
  idCategory: number;
  getAllWords: () => void;
}

export const WordsItem: React.FC<IWordItemProps> = ({
  idCard,
  wordCard,
  translationCard,
  imageCard,
  audioCard,
  idCategory,
  getAllWords,
}) => {
  const [open, setOpen] = useState(false);
  const [play] = useSound(audioCard);
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");

  const audioName = audioCard.split("/").slice(3, 4);

  const newCardData = {
    id: idCard,
    word: wordValue,
    translation: translationValue,
    image: imageCard,
    audioSrc: audioCard,
    categoryId: idCategory,
  };

  const updateCard = async () => {
    const data = {
      categoryId: idCategory,
      cardData: newCardData,
      cardId: idCard,
    };
    await updateWord(data);
  };

  const deleteCard = async () => {
    const data = {
      categoryId: idCategory,
      cardId: idCard,
    };
    await deleteWord(data);
  };

  return (
    <WordsItemStyled>
      <Close
        onClick={async () => {
          await deleteCard();
          await getAllWords();
        }}
      >
        <div />
        <div />
      </Close>
      <InformationStyled open={open}>
        <DivWordStyled>
          <b>Word: </b>
          <span>{wordCard}</span>
        </DivWordStyled>
        <DivWordStyled>
          <b>Translation: </b>
          <span>{translationCard}</span>
        </DivWordStyled>
        <DivWordStyled>
          <b>Sound file: </b>
          <span>{audioName}</span>
          <ReapiteButton onClick={() => play()} />
        </DivWordStyled>
        <DivWordStyled>
          <b>Image:</b>
        </DivWordStyled>
        <ImgCardStyled src={imageCard} alt="img" />
        <ButtonWordContainerStyled>
          <button onClick={() => setOpen(true)} type="button">
            Change
          </button>
        </ButtonWordContainerStyled>
      </InformationStyled>
      <FormCardStyled
        open={open}
        onSubmit={async (event) => {
          event.preventDefault();
          await updateCard();
          await getAllWords();
          setOpen(false);
        }}
      >
        <fieldset>
          <legend>Word:</legend>
          <InputStyled
            type="text"
            required
            value={wordValue}
            onChange={(event) => setWordValue(event.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Translation:</legend>
          <InputStyled
            type="text"
            required
            value={translationValue}
            onChange={(event) => setTranslationValue(event.target.value)}
          />
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
          <input onClick={() => setOpen(false)} type="button" value="Cancel" />
          <input type="submit" value="Update" />
        </CancelInputStyled>
      </FormCardStyled>
    </WordsItemStyled>
  );
};
