import { StyledHamburger } from './Humburger.styled';

export interface HamburgerProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (v: boolean) => void;
}

export const Hamburger = (props: HamburgerProps): JSX.Element => {
  return (
    <StyledHamburger
      // eslint-disable-next-line react/destructuring-assignment
      open={props.open}
      onClick={() => {
        return props.setOpen(!props.open);
      }}
    >
      <div />
      <div />
      <div />
    </StyledHamburger>
  );
};
