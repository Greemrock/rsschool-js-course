import styled from "styled-components";

export const AddStyled = styled.div<{ update: boolean }>`
  position: relative;
  width: 85px;
  height: 85px;
  display: ${({ update }) => (update ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 3px solid #d2d2d2;
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.3s linear;
  transform-origin: 1px;

  :hover {
    border-color: #4fbe79;

    div {
      background-color: #4fbe79;
    }
  }

  div {
    position: relative;
    width: 4rem;
    height: 0.5rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: #d2d2d2;

    :nth-child(2) {
      position: absolute;
      left: 50%;
      top: 5px;
      transform: rotate(90deg);
    }
  }
`;

export const FormNewCardStyled = styled.form<{ update: boolean }>`
  display: ${({ update }) => (!update ? "none" : "flex")};
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-start;

  fieldset {
    border: none;
    margin: 10px;
  }

  legend {
    font-size: 9px;
    line-height: 11px;
    color: #3f51b5;
    opacity: 1;
  }
`;
