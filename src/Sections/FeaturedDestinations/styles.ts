import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  height: 100px;
  max-width: 1100px;
  justify-content: space-between;
  width: 100%;
  margin: 0 16px;
  @media (max-width: 556px) {
    flex-direction: column;
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 60px;
    color: #fb8f1d;
    display: flex;
    align-items: center;
  }
  h2 {
    display: flex;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    @media (max-width: 556px) {
      align-items: flex-start;
    }
  }
`;

export const ImagesContainer = styled.div`
  margin-top: 55px !important;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  @media (max-width: 1144px) {
    align-items: center;
    justify-content: center;
    > img {
      margin: 5px;
    }
  }
  img {
    flex-grow: 0;
    flex-shrink: 1;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-50px);
    }
    margin : 0 15px;

    @media (max-width: 1144px) {
      width: 200px;
      height: auto;
      > img {
        margin-right: 5px;
      }
    }
    @media (max-width: 500px) {
      width : 261px;
      height : 337px;
      height : auto!important;
      > img {
        margin-right: 0px !important;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 240px !important;
  div {
    max-width: 1200px !important;
    margin: 0 auto;
    display: flex;
  }
`;
