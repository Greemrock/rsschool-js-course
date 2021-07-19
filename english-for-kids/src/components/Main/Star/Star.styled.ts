import styled from "styled-components";

export const Rating = styled.div`
  position: relative;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  margin-left: 16px;
  margin-bottom: 10px;
  width: 400%;
  height: 40px;
  overflow: hidden;
`;

export const StarEmpty = styled.div`
  flex-shrink: 0;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/img/star.svg);
`;

export const StarWin = styled.div`
  flex-shrink: 0;
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-image: url(${process.env.PUBLIC_URL}/assets/img/star-win.svg);
  background-color: #fefefefe;
`;
