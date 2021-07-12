import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks";
import { Hamburger } from "../Hamburger/Humburger";
import { IMenuProps } from "../../Shared/interface";
import { LoginBtn, StyledLink, StyledMenu } from "../Styled/Menu.styled";
import { fixed } from "../../Main/Login/Login";

export const Menu: React.FC<IMenuProps> = ({
  sections,
  setNumberCategory,
  setModal,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));
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
          {sections.map((title) => {
            return (
              <Link
                to={title.link}
                key={title.link}
                onClick={() => setNumberCategory(sections.indexOf(title))}
                style={
                  window.location.pathname === `/${title.link}`
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "#2b5a71",
                      }
                    : {
                        textDecoration: "none",
                      }
                }
              >
                <StyledLink onClick={() => close()}>{title.title}</StyledLink>
              </Link>
            );
          })}
        </div>
        <LoginBtn onClick={() => closeModal()}>Login</LoginBtn>
      </StyledMenu>
    </>
  );
};
