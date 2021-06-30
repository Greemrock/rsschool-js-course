import { IButtonType } from "../../Shared/interface";
import {
  StyledCheckbox,
  SwitchButton,
  SwitchCheckbox,
  SwitchLabel,
} from "../Styled/Checkbox.styled";

export const Checkbox: React.FC<IButtonType> = (props) => {
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
