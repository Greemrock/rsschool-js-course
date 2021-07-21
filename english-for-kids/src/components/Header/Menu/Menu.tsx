import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hamburger } from "../Hamburger/Hamburger";
import { ICategory } from "../../shared/interface/interface";
import { LoginBtn, StyledLink, StyledMenu } from "./Menu.styled";
import { fixBody } from "../../service/fixBody";

interface IMenuProps {
  routes: ICategory[];
  setModal: (stateModal: boolean) => void;
}

export const Menu: React.FC<IMenuProps> = ({ routes, setModal }) => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const stateModal = () => {
    fixBody(true);
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
              location.pathname === `/`
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
              <Link
                to={`/category/${String(route.id)}`}
                key={route.id}
                style={
                  location.pathname === `/cards/${String(route.id)}`
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
            );
          })}
        </div>
        <LoginBtn
          onClick={() => {
            stateModal();
            alert("login: admin; pass: 12345");
          }}
        >
          Login
        </LoginBtn>
      </StyledMenu>
    </>
  );
};
