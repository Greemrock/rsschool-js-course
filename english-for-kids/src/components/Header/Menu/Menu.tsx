import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks";
import { Hamburger } from "../Hamburger/Humburger";
import { ITitleProps } from "../../Shared/interface";
import { StyledLink, StyledMenu } from "../Styled/Menu.styled";

export const Menu: React.FC<ITitleProps> = ({ title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledMenu open={open} ref={node}>
        <Link to="/main">
          <StyledLink
            onClick={() => {
              return close();
            }}
          >
            Main page
          </StyledLink>
        </Link>
        {title.map((t) => {
          return (
            <Link to={t.link}>
              <StyledLink
                onClick={() => {
                  return close();
                }}
              >
                {t.title}
              </StyledLink>
            </Link>
          );
        })}
      </StyledMenu>
    </>
  );
};
