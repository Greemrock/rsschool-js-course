import { StyledHamburger } from "./Hamburger.styled";

interface IHamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Hamburger: React.FC<IHamburgerProps> = ({ open, setOpen }) => {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
};
