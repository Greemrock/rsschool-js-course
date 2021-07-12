import { Menu } from "./Menu/Menu";
import { IHeaderProps } from "../Shared/interface";
import { StyledHeader } from "./Styled/Header.styled";
import { Checkbox } from "./Checkbox/Checkbox";

export const Header: React.FC<IHeaderProps> = ({
  title,
  statusCheckbox,
  setStatusCheckbox,
  setNumberCategory,
  setModal,
}) => {
  return (
    <StyledHeader>
      <Menu
        sections={title}
        setNumberCategory={setNumberCategory}
        setModal={setModal}
      />
      <Checkbox
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={() => setStatusCheckbox(!statusCheckbox)}
      />
    </StyledHeader>
  );
};
