// import { CardsList } from "../../components/Main/Styled/Main.styled";
import { useState } from "react";
import { createCategory } from "../api/api";
import {
  ItemStyled,
  TitleNameStyled,
  InputContainer,
  InputStyled,
} from "../Styled/CategoriesItem.styled";
import {
  AddStyled,
  FormNewCardStyled,
} from "../Styled/CategoriesItemCreate.styled";

export const CategoriesItemCreate: React.FC = () => {
  const [update, setUpdate] = useState(false);
  const [newCategoryValue, setNewCategoryValue] = useState("");

  return (
    <ItemStyled>
      <TitleNameStyled>Create new Category</TitleNameStyled>
      <AddStyled onClick={() => setUpdate(true)} update={update}>
        <div />
        <div />
      </AddStyled>
      <FormNewCardStyled
        onSubmit={(event) => {
          event.preventDefault();
          createCategory(newCategoryValue);
        }}
        update={update}
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
      </FormNewCardStyled>
    </ItemStyled>
  );
};
