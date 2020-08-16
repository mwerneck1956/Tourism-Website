import React from "react";
//Css
import "./styles/LearnMore.css";
//Core components
import { Grid, Button } from "@material-ui/core";
//Images
import learnMoreImage from "../../assets/images/learnMoreImage.png";
export default function LearnMore() {
  return (
    <Grid
      lg={12}
      xl={12}
      spacing={6}
      justify="space-around"
      alignItems="center"
      container
      direction="row"
    >
      <Grid xl={1} />
      <Grid direction="column" sm={5} md={5} xs={10} xl={5} lg={5}>
        <img className="learnMoreIlustration" src={learnMoreImage} />
      </Grid>

      <Grid direction="column" sm={6} md={5} xs={12} xl={4} lg={5}>
        <h2 className="learnMoreTitle">A new way to explore the world</h2>
        <p className="learnMoreText">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <Button className="learnMoreButton" variant="contained">
          Learn More
        </Button>
      </Grid>
      <Grid xl={1} />
    </Grid>
  );
}
