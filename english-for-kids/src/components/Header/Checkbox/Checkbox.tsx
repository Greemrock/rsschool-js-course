import styled from "styled-components";

type ButtonType = {
  isOn: boolean;
  // eslint-disable-next-line prettier/prettier
  handleToggle: () => void;
};

const SwitchButton = styled.span`
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
`;

const SwitchLabel = styled.label<{ isOn: boolean }>`
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

  :after {
    content: "Play";
    position: relative;
    right: -35px;
    z-index: 20;
  }

  :before {
    content: "Train";
    position: relative;
    right: 60px;
    z-index: 20;
  }

  ${SwitchButton} {
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

  :active ${SwitchButton} {
    width: 60px;
  }
`;

const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + ${SwitchLabel} ${SwitchButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

const StyledCheckbox = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
  z-index: 0;
`;

export const Checkbox: React.FC<ButtonType> = (props) => {
  const { isOn, handleToggle } = props;
  return (
    <StyledCheckbox>
      <SwitchCheckbox
        checked={isOn}
        onChange={handleToggle}
        id="react-switch-new"
        type="checkbox"
      />
      <SwitchLabel isOn={isOn} htmlFor="react-switch-new">
        <SwitchButton />
      </SwitchLabel>
    </StyledCheckbox>
  );
};
