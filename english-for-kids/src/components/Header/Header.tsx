import { Menu } from "./Menu/Menu";
import { StyledHeader } from "./Header.styled";
import { Checkbox } from "./Checkbox/Checkbox";
import { ICategory } from "../shared/interface/interface";

export interface IHeaderProps {
  categories: ICategory[];
  statusCheckbox: boolean;
  setStatusCheckbox: (statusCheckbox: boolean) => void;
  setModal: (stateModal: boolean) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  categories,
  statusCheckbox,
  setStatusCheckbox,
  setModal,
}) => {
  return (
    <StyledHeader>
      <Menu routes={categories} setModal={setModal} />
      <Checkbox
        statusCheckbox={statusCheckbox}
        setStatusCheckbox={() => setStatusCheckbox(!statusCheckbox)}
      />
    </StyledHeader>
  );
};
