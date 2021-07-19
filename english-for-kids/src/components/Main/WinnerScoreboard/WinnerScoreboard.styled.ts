import styled from "styled-components";

export const Scoreboard = styled.div<{ win: boolean }>`
  display: ${({ win }) => (win ? "flex" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 50px;
  background-color: #2a2a2ac2;
  z-index: 2;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 30px 100px;
    width: 20rem;
    height: 25rem;
    background-color: #fff;
    box-shadow: 1px 3px 20px 5px rgb(255 255 255 / 47%);
  }

  img {
    width: 50%;
  }

  span {
    margin-top: 40px;
  }
  button {
    width: 100px;
    height: 40px;
    position: absolute;
    bottom: 0;
    margin: 30px;
    cursor: pointer;
  }
`;
