import { IHamburgerProps } from "../../shared/interface";
import { StyledHamburger } from "../Styled/Humburger.styled";

export const Hamburger: React.FC<IHamburgerProps> = ({ open, setOpen }) => {
  return (
    <StyledHamburger
      open={open}
      onClick={() => {
        return setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
};
