import { StyledHamburger } from "./Humburger.styled";

export interface HamburgerProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (v: boolean) => void;
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
