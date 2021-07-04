import styled from "styled-components";
import { IStarProps } from "../../Shared/interface";

export const Rating = styled.div`
  position: absolute;
  top: 0;
  right: 80px;
  display: flex;
  justify-content: flex-end;
  max-width: 1350px;
  height: 40px;
`;

export const StarEmpty = styled.div`
  flex-shrink: 0;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/img/star.svg);
`;

export const StarWin = styled.div`
  flex-shrink: 0;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/img/star-win.svg);
  background-color: #fefefefe;
`;

export const Star: React.FC<IStarProps> = ({ arrStar }) => {
  return (
    <Rating>
      {arrStar.map((item: boolean) =>
        item ? (
          <StarWin key={arrStar.indexOf(item)} />
        ) : (
          <StarEmpty key={arrStar.indexOf(item)} />
        )
      )}
    </Rating>
  );
};
