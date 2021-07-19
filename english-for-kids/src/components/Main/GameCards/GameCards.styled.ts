import styled from "styled-components";

export const Page = styled.h2`
  width: 100%;
  margin-bottom: 20px;
  color: #646464;
`;

export const Button = styled.button<{ play: boolean }>`
  box-sizing: border-box;
  padding: 5px;
  font-size: 24px;
  width: 100%;
  max-width: 90px;
  height: 90px;
  color: #fff;
  border: none;
  border-radius: 50%;
  border-width: 1px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${({ play }) =>
    play
      ? `
      width: 90px; font-size: 0;
      background-image: url(${process.env.PUBLIC_URL}/assets/images/repeat.svg),
        linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
      background-repeat: no-repeat;
      background-size: 70px 70px, cover;
      background-position: 40%
      `
      : "background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);"};
`;

export const PlayContainer = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  @media (max-width: 1300px) {
    width: calc(100% / 3 - 25px);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
