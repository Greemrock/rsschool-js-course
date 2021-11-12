import styled from "styled-components";
import { AddStyled } from "../../PageCategories/CategoriesItemCreate/CategoriesItemCreate.styled";

export const AddWordStyled = styled(AddStyled)`
  width: 150px;
  height: 150px;
  margin: 50px 0;

  div {
    width: 6rem;
    height: 0.8rem;

    :nth-child(2) {
      top: 17px;
    }
  }
`;

export const TitleNewCard = styled.div`
  margin: 25px;
  font-size: 36px;
  line-height: 42px;
  font-weight: bold;
  text-align: center;
`;
