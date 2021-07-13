import { NameCategory, ItemStyled } from "../Styled/CategoriesItem.styled";
import { AddStyled } from "../Styled/CategoriesItemCreate.styled";

export const CategoriesItemCreate: React.FC = () => {
  return (
    <ItemStyled>
      <NameCategory>Create new Category</NameCategory>
      <AddStyled>
        <div />
        <div />
      </AddStyled>
    </ItemStyled>
  );
};
