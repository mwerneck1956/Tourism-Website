import styled from "styled-components";

interface NavProps {
  isOpen: boolean;
}

export const NavContainer = styled.div`
  width : 100%;
  display : flex;
  align-items : center;
  height : 75px;
  box-shadow: 0 1px 1px whitesmoke;
`;

export const Nav = styled.nav<NavProps>`
  width: 100%;
  max-width: 1368px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 0 16px;
  }
  li {
    @media (max-width: 830px) {
      opacity: ${(props) => (props.isOpen ? 1 : 0)};
      display: flex;
      flex-direction: column;
      background: whitesmoke;
      width: 300px;
      position: fixed;
      top: 0;
      left: 0px;
      height: 100vh;
      align-items: flex-start;
      justify-content: flex-start;
      padding-top: 100px;
      transition: opacity 0.4s;
      a {
        font-size: 20px !important;
        margin-top: 20px !important;
      }
      button {
        margin-top: 20px !important;
      }
    }

    list-style: none;
    text-decoration: none;
    a {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      line-height: 19, 36px;
      color: #b8becd;
      text-decoration: none;
      transition: color 0.25s;
      &:hover {
        color: #202336;
      }
    }
    > button {
      margin: 0 15px;
    }
    > a {
      margin: 0 15px;
    }
  }
`;

export const Menu = styled.div`
  display: none;
  @media (max-width: 830px) {
    display: flex;
  }
  svg {
    transition: back 2s;
    margin: 0px 16px;
    z-index: 1;
  }
`;
