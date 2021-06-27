import styled from "styled-components";
import { ICategoriesArr } from "../../App";
import { Menu } from "../Menu/Menu";

export type CategoriesType = {
  title: string;
  id: string;
  link: string;
};

export type PropsType = {
  title: CategoriesType[];
};

export const StyledHeader = styled.div`
  display: flex;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  min-height: 6rem;
  max-height: 8rem;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  z-index: 3;
`;

export const Header: React.FC<ICategoriesArr> = ({ title }) => {
  return (
    <StyledHeader>
      <Menu title={title} />
    </StyledHeader>
  );
};
