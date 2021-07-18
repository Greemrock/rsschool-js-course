import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import { IWinProps } from "../../shared/interface";
import { Scoreboard } from "../Styled/Win.styled";

export const WinnerScoreboard: React.FC<IWinProps> = ({ win, mistake }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const [playSuccess] = useSound(
    `${process.env.PUBLIC_URL}/assets/audio/success.mp3`,
    { volume: 0.25 }
  );
  const [playFailure] = useSound(
    `${process.env.PUBLIC_URL}/assets/audio/failure.mp3`,
    { volume: 0.25 }
  );
  const success = `${process.env.PUBLIC_URL}/assets/img/success.png`;
  const failure = `${process.env.PUBLIC_URL}/assets/img/failure.png`;
  if (mistake > 0 && win) {
    playFailure();
  }
  if (mistake === 0 && win) {
    playSuccess();
  }
  return (
    <Scoreboard win={win}>
      <div>
        <img src={mistake > 0 ? failure : success} alt="smile" />
        <span>{`Mistake: ${mistake}`}</span>
        <button type="button" onClick={handleClick}>
          Close
        </button>
      </div>
    </Scoreboard>
  );
};
