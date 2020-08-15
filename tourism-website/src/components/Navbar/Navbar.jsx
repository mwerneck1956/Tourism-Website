import React, { useState } from "react";
//Core components
import { Grid, Button } from "@material-ui/core";
//Css
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <Grid
      className ="navBg"
      spacing={1}
      justify="flex-end"
      alignItems="center"
      container
      direction="row"
    >
      <Grid lg={1} direction="column">
        <a href="google.com.br"  className="navItem">Home</a>
      </Grid>
      <Grid lg={1} direction="column">
        <a href="teste.com.br" className="navItem">Destinations</a>
      </Grid>
      <Grid lg={1} direction="column">
        <a className="navItem">About</a>
      </Grid>
      <Grid lg={1} direction="column">
        <a className="navItem">Partner</a>
      </Grid>
      <Grid xl = {1} justifyContent ='center' justify = "center" alignItems ="center" lg={2}>
          <Button variant = "outlined" className = "loginBtn">
              Login
          </Button>
       
      </Grid>
      <Grid  style={{width :"80%"}} xl ={1}lg={2} container justifyContent="center" alignItems="center">
        <Button variant="contained" className="registerBtn">
          Register
        </Button>
      </Grid>
    </Grid>
  );
}
