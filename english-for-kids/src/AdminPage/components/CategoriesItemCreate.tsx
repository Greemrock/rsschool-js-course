import { NameCategory, ItemStyled } from "../Styled/CategoriesItem.styled";
import { Add } from "../Styled/CategoriesItemCreate.styled";

export const CategoriesItemCreate: React.FC = () => {
  return (
    <ItemStyled>
      <NameCategory>Create new Category</NameCategory>
      <Add>
        <div />
        <div />
      </Add>
    </ItemStyled>
  );
};
