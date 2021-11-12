import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import { IWinProps } from "../../shared/interface/interface";
import { store } from "../../shared/store/store";
import { Scoreboard } from "./WinnerScoreboard.styled";

export const WinnerScoreboard: React.FC<IWinProps> = ({ win, mistake }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
    store.matchCards = [];
  };
  const [playSuccess] = useSound("/assets/audio/success.mp3", { volume: 0.25 });
  const [playFailure] = useSound("/assets/audio/failure.mp3", { volume: 0.25 });
  const success = `/assets/images/success.png`;
  const failure = `/assets/images/failure.png`;
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
