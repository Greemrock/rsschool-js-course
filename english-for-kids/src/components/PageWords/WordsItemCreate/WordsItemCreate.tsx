import { useState } from "react";
import { AddWordStyled, TitleNewCard } from "./WordsItemCreate.styled";
import {
  CancelInputStyled,
  UploadFileStyled,
  WordsItemStyled,
} from "../WordsItem/WordsItem.styled";
import {
  FormCardStyled,
  InputStyled,
} from "../../PageCategories/CategoriesItem/CategoriesItem.styled";
import { createWord } from "../../api/api-word";
import { ICategory } from "../../shared/interface/interface";
import { getNextId } from "../../service/nxtId";

interface IWordsItemCreate {
  idCategory: ICategory;
  getAllWords: () => void;
}

export const WordsItemCreate: React.FC<IWordsItemCreate> = ({
  idCategory,
  getAllWords,
}) => {
  const [open, setOpen] = useState(false);
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");
  const idCard = getNextId();

  const newCardData = {
    id: idCard,
    word: wordValue,
    translation: translationValue,
    image: "",
    audioSrc: "",
    categoryId: idCategory.id,
  };
  const newWord = async () => {
    const data = {
      categoryId: idCategory.id,
      cardData: newCardData,
      cardId: idCard,
    };
    await createWord(data);
  };
  return (
    <WordsItemStyled>
      <TitleNewCard>Add new word</TitleNewCard>
      <AddWordStyled open={open} onClick={() => setOpen(true)}>
        <div />
        <div />
      </AddWordStyled>
      <FormCardStyled
        style={{ justifyContent: "flex-start" }}
        open={open}
        onSubmit={async (event) => {
          event.preventDefault();
          await newWord();
          await getAllWords();
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
