import styled from "styled-components";

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
