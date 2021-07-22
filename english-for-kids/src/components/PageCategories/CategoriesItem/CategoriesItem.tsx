import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ItemStyled,
  TitleNameStyled,
  ButtonContainer,
  InformationStyled,
  FormCardStyled,
  InputStyled,
  InputContainer,
  Close,
} from "./CategoriesItem.styled";
import { deleteCategory, updateCategory } from "../../api/api-category";
import { getCategoryWords } from "../../api/api-word";
import { ICardProps } from "../../shared/interface/interface";

interface ICategoriesItem {
  name: string;
  idCategory: number;
  getAllCategories: () => Promise<void>;
}

export const CategoriesItem: React.FC<ICategoriesItem> = ({
  name,
  idCategory,
  getAllCategories,
}) => {
  const [update, setUpdate] = useState(false);
  const [categoryWords, setCategoryWords] = useState<ICardProps[]>([]);
  const [newCategoryValue, setNewCategoryValue] = useState("");
  const history = useHistory();

  const getWords = async () => {
    setCategoryWords(await getCategoryWords(idCategory));
  };

  const updateCat = async () => {
    const data = { id: idCategory, name: newCategoryValue };
    await updateCategory(data);
  };

  const delCategory = async () => {
    await deleteCategory(idCategory);
  };

  const goToPage = () => {
    const path = `/words/${idCategory}`;
    history.push(path);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <ItemStyled>
      <Close
        onClick={async () => {
          await delCategory();
          await getAllCategories();
        }}
      >
        <div />
        <div />
      </Close>
      <InformationStyled update={update}>
        <TitleNameStyled>{name}</TitleNameStyled>
        <span>{`WORDS: ${categoryWords.length}`}</span>
        <ButtonContainer>
          <button onClick={() => setUpdate(true)} type="button">
            Update
          </button>
          <button type="button" onClick={() => goToPage()}>
            Add words
          </button>
        </ButtonContainer>
      </InformationStyled>
      <FormCardStyled
        update={update}
        onSubmit={async (event) => {
          event.preventDefault();
          await updateCat();
          await getAllCategories();
          setUpdate(false);
          setNewCategoryValue("");
        }}
      >
        <fieldset>
          <legend>Category Name:</legend>
          <InputStyled
            type="text"
            required
            value={newCategoryValue}
            onChange={(event) => setNewCategoryValue(event.target.value)}
          />
        </fieldset>
        <InputContainer>
          <input
            onClick={() => setUpdate(false)}
            type="button"
            value="Cancel"
          />
          <input type="submit" value="Create" />
        </InputContainer>
      </FormCardStyled>
    </ItemStyled>
  );
};
