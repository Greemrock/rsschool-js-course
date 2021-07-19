import { Menu } from "./Menu/Menu";
import { IHeaderProps } from "../shared/interface/interface";
import { StyledHeader } from "./Header.styled";
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
