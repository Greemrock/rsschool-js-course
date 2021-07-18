import { Menu } from "./Menu/Menu";
import { IHeaderProps } from "../shared/interface";
import { StyledHeader } from "./Styled/Header.styled";
import { Checkbox } from "./Checkbox/Checkbox";

export const Header: React.FC<IHeaderProps> = ({
  routes,
  statusCheckbox,
  setStatusCheckbox,
  setModal,
}) => {
  return (
    <StyledHeader>
      <Menu routes={routes} setModal={setModal} />
      <Checkbox
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={() => setStatusCheckbox(!statusCheckbox)}
      />
    </StyledHeader>
  );
};
