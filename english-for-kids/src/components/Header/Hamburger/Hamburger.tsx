import { StyledHamburger } from "./Hamburger.styled";

interface IHamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

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
