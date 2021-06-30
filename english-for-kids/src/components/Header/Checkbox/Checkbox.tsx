import {
  StyledCheckbox,
  SwitchButton,
  SwitchCheckbox,
  SwitchLabel,
} from "../Styled/Checkbox.styled";

type ButtonType = {
  isOn: boolean;
  handleToggle: () => void;
};

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
