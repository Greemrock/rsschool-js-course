import styled from "styled-components";
import { ButtonContainer, ItemStyled } from "./CategoriesItem.styled";

export const WordsItemStyled = styled(ItemStyled)`
  height: 458px;
  padding-top: 20px;
  @media (max-width: 790px) {
    width: 100%;
  }
`;

export const DivWordStyled = styled.div`
  font-size: 22px;
  line-height: 26px;
  margin: 10px;
`;

export const ImgCardStyled = styled.img`
  width: 100%;
  height: 100%;
  max-width: 253px;
  max-height: 170px;
`;

export const ButtonWordContainerStyled = styled(ButtonContainer)`
  justify-content: center;

  button {
    width: 100%;
    height: 100%;
    max-width: 250px;
    height: 60px;
    font-size: 22px;
    line-height: 26px;
  }
`;
