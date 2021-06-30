import { Menu } from "./Menu/Menu";
import { ITitleProps } from "../Shared/interface";
import { StyledHeader } from "./Styled/Header.styled";

export const Header: React.FC<ITitleProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Menu title={title} />
    </StyledHeader>
  );
};
