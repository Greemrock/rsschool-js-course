import {
  ItemStyled,
  Close,
  NameCategory,
  ButtonContainer,
} from "../Styled/CategoriesItem.styled";

export const CategoriesItem: React.FC = () => {
  return (
    <ItemStyled>
      <Close>
        <div />
        <div />
      </Close>
      <NameCategory>Clothes</NameCategory>
      <span>WORDS: 7</span>
      <ButtonContainer>
        <button type="button">Update</button>
        <button type="button">Add words</button>
      </ButtonContainer>
    </ItemStyled>
  );
};
