import { TitleNameStyled, ItemStyled } from "../Styled/CategoriesItem.styled";
import { AddStyled } from "../Styled/CategoriesItemCreate.styled";

export const CategoriesItemCreate: React.FC = () => {
  return (
    <ItemStyled>
      <TitleNameStyled>Create new Category</TitleNameStyled>
      <AddStyled>
        <div />
        <div />
      </AddStyled>
    </ItemStyled>
  );
};
