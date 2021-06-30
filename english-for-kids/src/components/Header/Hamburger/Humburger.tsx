import { StyledHamburger } from "../Styled/Humburger.styled";

export interface HamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
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
