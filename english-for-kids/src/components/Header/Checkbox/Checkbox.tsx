import styled from "styled-components";

type ButtonType = {
  isOn: boolean;
  // eslint-disable-next-line prettier/prettier
  handleToggle: () => void;
};

export const StyledCheckbox = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 2vw;
  right: 2vw;
  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  .react-switch-label:before {
    content: "Train";
    position: relative;
    right: 60px;
    z-index: 20;
  }
  .react-switch-label:after {
    content: "Play";
    position: relative;
    right: -35px;
    z-index: 20;
  }
  .react-switch-label {
    display: flex;
    position: absolute;
    top: 2px;
    right: 80px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 1.5rem;
    width: 80px;
    height: 40px;
    background: ${({ isOn }) => {
      return !isOn
        ? "linear-gradient(40deg,#00bf82,#0099ae)"
        : "linear-gradient(40deg,#ffd86f,#fc6262)";
    }};
    border-radius: 80px;
    transition: background-color 0.2s;
    z-index: 20;

    .react-switch-button {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 36px;
      height: 36px;
      border-radius: 45px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`;

export const Checkbox: React.FC<ButtonType> = (props) => {
  const { isOn, handleToggle } = props;
  return (
    <StyledCheckbox isOn={isOn}>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor="react-switch-new">
        <span className="react-switch-button" />
      </label>
    </StyledCheckbox>
  );
};
