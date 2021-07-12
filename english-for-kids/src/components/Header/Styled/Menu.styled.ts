import styled from "styled-components";

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
  justify-content: space-between;
  padding: 10rem 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
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

export const LoginBtn = styled.button`
  width: 248px;
  height: 60px;
  font-size: 22px;
  line-height: 26px;
  color: #fff;
  margin: 0 32px;
  background: none;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: #0cdb92bd;
  }
`;
