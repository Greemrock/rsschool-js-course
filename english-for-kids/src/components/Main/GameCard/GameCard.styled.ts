import styled from "styled-components";

export const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 4 - 25px);
  height: 260px;
  max-width: 320px;
  border-radius: 5px;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  transform-style: preserve-3d;
  list-style-type: none;
  box-shadow: 1px 3px 4px rgb(0 0 0 / 5%);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 16px rgb(0 0 0 / 25%);
    cursor: pointer;
    transition: all 0.5s ease;
  }

  @media (max-width: 1300px) {
    width: calc(100% / 3 - 25px);
  }

  @media (max-width: 1100px) {
    width: calc(100% / 2 - 25px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    color: #000000;
    width: 100%;
    height: 100%;
  }
`;

export const CardFront = styled.div<{ match?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  opacity: ${({ match }) => (!match ? "1" : "0.5")};
`;

export const Rotate = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url(${`${process.env.PUBLIC_URL}/assets/images/rotate.svg`});
  background-size: 32px;
  background-repeat: no-repeat;
  background-position: center;
  bottom: 2px;
  right: 5px;
  transition: all 0.5s ease;
  opacity: 0.5;

  :hover {
    transform: rotate(180deg);
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  padding: 1rem;
  background-color: #ffffffad;
  text-transform: capitalize;
  text-align: center;
  transition: all 0.8s ease;

  :hover {
    background-color: #ffffffcf;
    ${Rotate} {
      opacity: 1;
    }
  }
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);

  & ${CardTitle} {
    background-color: #ffffffcf;
  }
`;
