import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hamburger } from "../Hamburger/Hamburger";
import { ICategory } from "../../shared/interface/interface";
import { LoginBtn, StyledLink, StyledMenu } from "./Menu.styled";

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
    setModal(true);
  };

  const changeStyleLink = (link: string) => {
    return location.pathname === `${link}`
      ? {
          textDecoration: "underline",
          textDecorationColor: "#2b5a71",
        }
      : {
          textDecoration: "none",
        };
  };

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <StyledMenu open={open} ref={node}>
        <div>
          <Link to="/" style={changeStyleLink("/")}>
            <StyledLink onClick={() => close()}>Main page</StyledLink>
          </Link>
          {routes.map((route) => {
            return (
              <Link
                to={`/category/${String(route.id)}`}
                key={route.id}
                style={changeStyleLink(`/category/${String(route.id)}`)}
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
