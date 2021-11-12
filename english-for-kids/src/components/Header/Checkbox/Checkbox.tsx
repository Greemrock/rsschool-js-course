import { IButtonProps } from "../../shared/interface/interface";
import {
  StyledCheckbox,
  SwitchButton,
  SwitchCheckbox,
  SwitchLabel,
} from "./Checkbox.styled";

export const Checkbox: React.FC<IButtonProps> = (props) => {
  const { statusCheckbox, setStatusCheckbox } = props;
  return (
    <StyledCheckbox>
      <SwitchCheckbox
        checked={statusCheckbox}
        onChange={setStatusCheckbox}
        id="react-switch-new"
        type="checkbox"
      />
      <SwitchLabel statusCheckbox={statusCheckbox} htmlFor="react-switch-new">
        <SwitchButton />
      </SwitchLabel>
    </StyledCheckbox>
  );
};
