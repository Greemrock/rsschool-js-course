import styled from "styled-components";

export const AdminHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 6rem;
  padding: 0 80px;
  background: #00bf82;
  margin-bottom: 40px;

  span {
    text-decoration: none;
    margin: 0 20px;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    margin: 0 20px;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
