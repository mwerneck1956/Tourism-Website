import React from "react";

//Core components
import { Grid } from "@material-ui/core";
//Images
import Fanjinghsan from "../../assets/images/Fanjingshan.png";
import Skadar from "../../assets/images/Skadar.png";
import RajaAmpat from "../../assets/images/RajaAmpat.png";
import Vevey from "../../assets/images/Vevey.png";
//CSS
import "../FeaturedDestinations/style/FeaturedDestinations.css";
let destinations = [
  {
    name: "Fanjinghsan",
    coutnry: "China",
    url: Fanjinghsan,
  },
  {
    name: "Skadar",
    coutnry: "Montenegrop",
    url: Skadar,
  },
  {
    name: "Vevey",
    coutnry: "Switerzland",
    url: Vevey,
  },
  {
    name: "Raja ampat",
    coutnry: "Indonesia",
    url: RajaAmpat,
  },
];

export default function FeaturedDestinations() {
  function renderImages() {
    destinations.map((destination) => {
      return (
        <Grid direction="column" lg={2}>
          <img src={destination.url} />
        </Grid>
      );
    });
  }
  return (
    <Grid
      lg={12}
      style={{ marginTop: "120px" }}
      justify="space-around"
      alignItems="center"
      direction="row"
      container
    >
      <Grid xs={12}>
        <h1 className="featuredDestinationsTitle">Featured Destinations</h1>
      </Grid>
      <Grid xl={1} />
      {destinations.map((destination) => {
        return (
          <Grid direction="column" lg={2}>
            <img src={destination.url} />
          </Grid>
        );
      })}
      <Grid xl={1} />
    </Grid>
  );
}
