import { IButtonType } from "../../Shared/interface";
import {
  StyledCheckbox,
  SwitchButton,
  SwitchCheckbox,
  SwitchLabel,
} from "../Styled/Checkbox.styled";

export const Checkbox: React.FC<IButtonType> = (props) => {
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
