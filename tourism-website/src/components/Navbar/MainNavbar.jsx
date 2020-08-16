import React, { useState } from "react";
//Core components
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
//
import { Button, Grid } from "@material-ui/core";
//CSS
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item lg={10} xl={9} xs={12}>
        <Navbar
          style={{ backgroundColor: "#FFFFFF" }}
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand>
            <img src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="ml-5" id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                {" "}
                <a className="navItem">Home</a>
              </Nav.Link>
              <Nav.Link href="#pricing">Destinations</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Partner</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Button
                  size="large"
                  fullWidth
                  variant="outlined"
                  size="lg"
                  className="loginBtn"
                >
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button className="registerBtn">Register</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Grid>
    </Grid>
  );
};

export default MainNavbar;
