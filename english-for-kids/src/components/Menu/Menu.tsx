import { useState, useRef } from 'react';
import { StyledMenu, StyledLink } from './Menu.styled';
import { useOnClickOutside } from '../../hooks';
import { Hamburger } from '../Hamburger/Humburger';
import categories from '../categories';

export const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => { return setOpen(false); };

  useOnClickOutside(node, () => { return setOpen(false); });

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => { return close(); }}>Main page</StyledLink>
        {categories.map((cat) => {
          return <StyledLink onClick={() => { return close(); }}>{cat.name}</StyledLink>;
        })}
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};
