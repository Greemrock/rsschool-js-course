import { useState } from "react";
import { createCategory } from "../../api/api";
import {
  ItemStyled,
  TitleNameStyled,
  InputContainer,
  InputStyled,
} from "../CategoriesItem/CategoriesItem.styled";
import { AddStyled, FormNewCardStyled } from "./CategoriesItemCreate.styled";

interface ICategoriesItemCreate {
  getAllCategories: () => Promise<void>;
}

export const CategoriesItemCreate: React.FC<ICategoriesItemCreate> = ({
  getAllCategories,
}) => {
  const [open, setOpen] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState("");
  const newCategory = async () => {
    await createCategory({ name: newCategoryValue });
  };
  return (
    <ItemStyled>
      <TitleNameStyled>Create new Category</TitleNameStyled>
      <AddStyled onClick={() => setOpen(true)} open={open}>
        <div />
        <div />
      </AddStyled>
      <FormNewCardStyled
        onSubmit={(event) => {
          event.preventDefault();
          newCategory();
          getAllCategories();
          getAllCategories();
          setNewCategoryValue("");
          setOpen(false);
        }}
        open={open}
      >
        <fieldset>
          <legend>Category Name:</legend>
          <InputStyled
            type="text"
            required
            value={newCategoryValue}
            onChange={(event) => {
              setNewCategoryValue(event.target.value);
            }}
          />
        </fieldset>
        <InputContainer>
          <input
            onClick={() => {
              setOpen(false);
              setNewCategoryValue("");
            }}
            type="button"
            value="Cancel"
          />
          <input
            type="submit"
            value="Create"
            onClick={() => getAllCategories()}
          />
        </InputContainer>
      </FormNewCardStyled>
    </ItemStyled>
  );
};
