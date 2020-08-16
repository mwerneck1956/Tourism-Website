import React from "react";
import { Grid, Button } from "@material-ui/core";
import headerImage from "../../assets/images/headerImage.svg";
const Header = (props) => {
  return (
    <Grid
    container
      lg={12}
      xl={10}
      spacing={4}
      justify="center"
      alignItems="center"
      
      direction="row"
    >
      <Grid item direction="column" lg={4} >
        <h1>Explore and travel</h1>
        <h3>Holiday Finder</h3>
      </Grid>
      <Grid item direction="column" lg={4} item>
        <img src={headerImage} style={{ maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Header;
