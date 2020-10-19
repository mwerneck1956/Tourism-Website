import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Nav, NavContainer, Menu } from "./styles";
import Button from "../../components/Button";
import { IoIosMenu, IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Nav isOpen={isOpen}>
        <Menu>
          {!isOpen && (
            <IoIosMenu
              color="#fb8f1d"
              onClick={() => setIsOpen(!isOpen)}
              size={40}
            />
          )}
          {isOpen && (
            <IoIosCloseCircleOutline
              color="#fb8f1d"
              onClick={() => setIsOpen(!isOpen)}
              size={40}
            />
          )}
        </Menu>
        <img src={logo} />
        <li>
          <a href="">Home</a>
          <a href="">Destinations</a>
          <a href="">About</a>
          <a href="">Partner</a>
          <Button outlined={true}>Login</Button>
          <Button outlined={false}>Register</Button>
        </li>
      </Nav>
    </NavContainer>
  );
}
