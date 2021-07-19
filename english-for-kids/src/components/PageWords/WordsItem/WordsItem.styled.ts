import styled from "styled-components";
import {
  ButtonContainer,
  InputContainer,
  ItemStyled,
} from "../../PageCategories/CategoriesItem/CategoriesItem.styled";

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

export const CancelInputStyled = styled(InputContainer)`
  justify-content: center;

  input {
    width: 135px;
    min-width: 85px;
    height: 60px;
    margin: 5px 10px;
    font-size: 22px;
    line-height: 26px;
    color: #fff;
    background: none;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;

    :first-child {
      :hover {
        color: #e53935;
        border: 2px solid #e53935;
        background: none;
      }
    }

    :hover {
      background: #0cdb92bd;
    }
  }
`;

export const UploadFileStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 22px;
  line-height: 26px;
  margin: 5px;
  padding: 0 20px;

  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  input {
    display: none;
  }

  label {
    width: 135px;
    height: 30px;
    margin: 5px 10px;
    color: #00bf82;
    background: none;
    border: 2px solid #00bf82;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    :hover {
      background-color: #f2f2f2;
    }
  }
`;
