import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Hamburger } from "../Hamburger/Hamburger";
import { ICategory } from "../../shared/interface/interface";
import { LoginBtn, StyledLink, StyledMenu } from "./Menu.styled";
import { fixed } from "../../Main/Login/Login";

interface IMenuProps {
  routes: ICategory[];
  setModal: (stateModal: boolean) => void;
}

export const Menu: React.FC<IMenuProps> = ({ routes, setModal }) => {
  const [open, setOpen] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const closeModal = () => {
    fixed(true);
    setModal(true);
  };
  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledMenu open={open} ref={node}>
        <div>
          <Link
            to="/"
            style={
              window.location.pathname === `/`
                ? {
                    textDecoration: "underline",
                    textDecorationColor: "#2b5a71",
                  }
                : {
                    textDecoration: "none",
                  }
            }
          >
            <StyledLink onClick={() => close()}>Main page</StyledLink>
          </Link>
          {routes.map((route) => {
            return (
              <>
                <Link
                  to={`/cards/${String(route.id)}`}
                  key={route.id}
                  style={
                    window.location.pathname === route.path
                      ? {
                          textDecoration: "underline",
                          textDecorationColor: "#2b5a71",
                        }
                      : {
                          textDecoration: "none",
                        }
                  }
                >
                  <StyledLink onClick={() => close()}>{route.name}</StyledLink>
                </Link>
              </>
            );
          })}
        </div>
        <LoginBtn onClick={() => closeModal()}>Login</LoginBtn>
      </StyledMenu>
    </>
  );
};
