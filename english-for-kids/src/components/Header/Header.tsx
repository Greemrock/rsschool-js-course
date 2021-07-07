import { Menu } from "./Menu/Menu";
import { IHeaderProps } from "../Shared/interface";
import { StyledHeader } from "./Styled/Header.styled";
import { Checkbox } from "./Checkbox/Checkbox";

export const Header: React.FC<IHeaderProps> = ({
  title,
  statusCheckbox,
  setStatusCheckbox,
  setNumberCategory,
}) => {
  return (
    <StyledHeader>
      <Menu sections={title} setNumberCategory={setNumberCategory} />
      <Checkbox
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={() => setStatusCheckbox(!statusCheckbox)}
      />
    </StyledHeader>
  );
};
