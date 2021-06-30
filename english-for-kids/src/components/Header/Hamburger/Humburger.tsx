import { IHamburgerProps } from "../../Shared/interface";
import { StyledHamburger } from "../Styled/Humburger.styled";

export const Hamburger: React.FC<IHamburgerProps> = ({
  open,
  setOpen,
}): JSX.Element => {
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
