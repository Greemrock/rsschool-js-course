import styled from "styled-components";

export const FooterConteiner = styled.div`
  border-top: 1px solid #000;
  padding: 10px 60px;
  font-weight: 900;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  @media (max-width: 430px) {
    padding: 10px;
  }
`;

export const GitHub = styled.a`
  height: 45px;
  padding-left: 45px;
  background-image: url(${`${process.env.PUBLIC_URL}/assets/img/github.svg`});
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: left center;
  line-height: 45px;
  filter: brightness(0.5);
`;

export const Rss = styled.a`
  width: 86px;
  height: 32px;
  background-image: url(${`${process.env.PUBLIC_URL}/assets/img/rss.svg`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
`;
