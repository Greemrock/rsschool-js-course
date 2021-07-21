import { Rating, StarEmpty, StarWin } from "./Star.styled";

interface IStarProps {
  arrStar: boolean[];
}

export const Star: React.FC<IStarProps> = ({ arrStar }) => {
  return (
    <Rating>
      {arrStar.map((item: boolean) =>
        item ? (
          <StarWin key={`${arrStar.indexOf(item)}win`} />
        ) : (
          <StarEmpty key={`${arrStar.indexOf(item)}empty`} />
        )
      )}
    </Rating>
  );
};
