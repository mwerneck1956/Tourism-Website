import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import headerImage from "../../assets/images/headerImage.svg";
//CSS
import './Header.css'
const Header = (props) => {
  return (
    <Grid
      container
      lg={12}
      xl={12}
      spacing={4}
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid spacing={3} container item direction="row" xs={12} sm={6} lg={4}>
        <Grid item>
          <h1 className="headerTitle">Explore and travel</h1>
        </Grid>
        <Grid item xs={12} lg={12}>
          <h3 className="headerSubTitle">Holiday Finder</h3>
        </Grid>
        
        <Grid item direction="column" xs={6} sm={5} lg={5}>
          <Form.Control placeholder="Location" as="select" size="md">
            <option>Location</option>
          </Form.Control>
        </Grid>
        <Grid item xs={6}  sm={5} lg={5}>
          <Form.Control placeholder="Activity" as="select" size="md">
            <option>Activity</option>
          </Form.Control>
        </Grid>
        <Grid item direction="column" xs={6}  sm={5} lg={5}>
          <Form.Control placeholder="Grade" as="select" size="md">
            <option>Grade</option>
          </Form.Control>
        </Grid>
        <Grid item  xs={6}  sm={5} lg={5}>
          <Form.Control placeholder="date" as="select" size="md">
            <option>Date</option>
          </Form.Control>
        </Grid>
        <p></p>
      </Grid>
      <Grid item direction="column" xs={8} sm={4} lg={4} item>
        <img src={headerImage} style={{ maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Header;
