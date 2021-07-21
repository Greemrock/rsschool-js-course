import styled from "styled-components";

export const ItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 3 - 10px);
  height: 244px;
  max-width: 360px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-bottom: 40px;
  transition: all 0.8s ease;
  transform-style: preserve-3d;
  list-style-type: none;
  box-shadow: 1px 3px 4px rgb(0 0 0 / 5%);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 16px rgb(0 0 0 / 25%);
    transition: all 0.5s ease;
  }

  @media (max-width: 1100px) {
    width: calc(100% / 2 - 25px);
  }

  @media (max-width: 845px) {
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  :hover {
    div {
      background-color: #db2929;
    }
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: #d2d2d2;

    :first-child {
      top: -5px;
      transform: rotate(45deg);
    }

    :nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const TitleNameStyled = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin: 30px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4fbe79;
  padding: 15px;

  @media (max-width: 845px) {
    align-items: center;
    flex-direction: column;
  }

  button {
    width: 135px;
    min-width: 85px;
    height: 30px;
    margin: 5px 10px;
    font-size: 22px;
    line-height: 26px;
    color: #fff;
    background: none;
    border: 2px solid #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background: #0cdb92bd;
    }
  }
`;

export const InformationStyled = styled.div<{ update: boolean }>`
  display: ${({ update }) => (update ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
`;

export const FormCardStyled = styled.form<{
  update: boolean;
}>`
  display: ${({ update }) => (!update ? "none" : "flex")};
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;

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

export const InputStyled = styled.input`
  height: 35px;
  padding: 0 10px;
  font-size: 22px;
  line-height: 26px;
  border: none;
  border-bottom: 1px solid #3f51b5;

  :focus {
    border-bottom: 1px solid #4fbe79;
  }

  :focus-visible {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4fbe79;
  padding: 15px;

  @media (max-width: 845px) {
    align-items: center;
    flex-direction: column;
  }

  input {
    width: 135px;
    min-width: 85px;
    height: 30px;
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
