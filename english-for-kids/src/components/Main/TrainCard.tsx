import useSound from "use-sound";
import styled from "styled-components";
import { CardType } from "../Shared/interface";

export const CardInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% / 2 - 20px);
  height: 260px;
  max-width: 320px;
  border-radius: 5px;
  margin-bottom: 28px;
  transition: all 0.8s ease;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: transform 0.6s;
  transform-style: preserve-3d;

  @media (max-width: 1300px) {
    height: 200px;
  }

  @media (max-width: 950px) {
    height: 150px;
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
`;

export const CardTitle = styled.h3`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  padding: 1rem;
  background-color: #fff8;
  text-transform: capitalize;
  text-align: center;
}`;

export const TrainCard: React.FC<CardType> = ({
  word,
  translation,
  image,
  audioSrc,
}) => {
  const [play, { stop }] = useSound(audioSrc);

  return (
    <>
      <div
        onMouseEnter={() => {
          play();
        }}
        onMouseLeave={() => {
          stop();
        }}
      >
        <CardInner>
          <CardFront style={{ backgroundImage: `url(${image})` }}>
            <CardTitle>{word}</CardTitle>
          </CardFront>
          <CardBack style={{ backgroundImage: `url(${image})` }}>
            <CardTitle>{translation}</CardTitle>
          </CardBack>
        </CardInner>
      </div>
    </>
  );
};
