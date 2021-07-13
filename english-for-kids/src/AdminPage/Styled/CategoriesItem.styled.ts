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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Close = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

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

export const NameCategory = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  margin: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #4fbe79;
  padding: 15px;

  @media (max-width: 750px) {
    align-items: center;
    flex-direction: column;
  }

  button {
    width: 135px;
    min-width: 85px;
    height: 30px;
    margin: 5px 10px;
    font-size: 1rem;
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
