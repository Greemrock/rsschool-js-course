import styled from 'styled-components';

export const StyledMenu =
  styled.nav <
  { open: boolean } >
  `
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background: linear-gradient(180deg, #0099AE 0%, #00BF82 100%);;
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => {
    return open ? 'translateX(0)' : 'translateX(-100%)';
  }};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: #fdf2e9;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #fbe69b;
  }
`;
