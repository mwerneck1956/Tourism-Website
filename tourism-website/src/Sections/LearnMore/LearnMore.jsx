import React from "react";
//Css
import "./styles/LearnMore.css";
//Core components
import { Grid, Button } from "@material-ui/core";
//Images
import learnMoreImage from  '../../assets/images/learnMoreImage.png'
export default function LearnMore() {
  return (
    <Grid spacing={6} justify="space-around" alignItems = "center" container direction="row">
      <Grid direction="column" xl={5} lg={5}>
        <img className="learnMoreIlustration"  src ={learnMoreImage} />
      </Grid>

      <Grid direction="column" xl={4} lg={5}>
        <h2 className="learnMoreTitle">A new way to explore the world</h2>
        <p className= "learnMoreText">
          For decades travellers have reached for Lonely Planet books when   
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <Button    className="learnMoreButton" variant ="contained">
          Learn More  
        </Button>
      </Grid>
    </Grid>
  );
}
