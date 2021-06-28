import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks";
import { Hamburger } from "../Hamburger/Humburger";
import { ITitleProps } from "../../Shared/interface";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }

  a {
    margin: 5px;
    text-decoration: none;
  }
`;

export const StyledLink = styled.div`
  padding: 0 2rem;
  font-size: 2rem;
  color: #fdf2e9;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #fbe69b;
  }
`;

export const Menu: React.FC<ITitleProps> = ({ title }) => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => {
    return setOpen(false);
  };

  useOnClickOutside(node, () => {
    return setOpen(false);
  });

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
