import { useState } from "react";
import {
  ItemStyled,
  TitleNameStyled,
  ButtonContainer,
  InformationStyled,
  FormCardStyled,
  InputStyled,
  InputContainer,
} from "./CategoriesItem.styled";
import { CloseItem } from "../../shared/CloseItem/CloseItem";

export const CategoriesItem: React.FC<{ name: string; idCategory: number }> = ({
  name,
  idCategory,
}) => {
  const [update, setUpdate] = useState(false);

  return (
    <ItemStyled>
      <CloseItem id={idCategory} />
      <InformationStyled update={update}>
        <TitleNameStyled>{name}</TitleNameStyled>
        <span>WORDS: 7</span>
        <ButtonContainer>
          <button onClick={() => setUpdate(true)} type="button">
            Update
          </button>
          <button type="button">Add words</button>
        </ButtonContainer>
      </InformationStyled>
      <FormCardStyled update={update}>
        <fieldset>
          <legend>Category Name:</legend>
          <InputStyled type="text" required />
        </fieldset>
        <InputContainer>
          <input
            onClick={() => setUpdate(false)}
            type="button"
            value="Cancel"
          />
          <input type="button" value="Create" />
        </InputContainer>
      </FormCardStyled>
    </ItemStyled>
  );
};
