import {
  ItemStyled,
  NameCategory,
  ButtonContainer,
} from "../Styled/CategoriesItem.styled";
import { CloseItem } from "./Cross";

export const CategoriesItem: React.FC = () => {
  return (
    <ItemStyled>
      <CloseItem />
      <NameCategory>Clothes</NameCategory>
      <span>WORDS: 7</span>
      <ButtonContainer>
        <button type="button">Update</button>
        <button type="button">Add words</button>
      </ButtonContainer>
    </ItemStyled>
  );
};
