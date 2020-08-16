import React, { useState, useEffect } from "react";

//Core components
import { Grid } from "@material-ui/core";
//Images
import Fanjinghsan from "../../assets/images/Fanjingshan.png";
import Skadar from "../../assets/images/Skadar.png";
import RajaAmpat from "../../assets/images/RajaAmpat.png";
import Vevey from "../../assets/images/Vevey.png";
//CSS
import "../FeaturedDestinations/style/FeaturedDestinations.css";
let height = window.innerHeight;
let width = window.innerWidth;
//Height and width
/*
window.addEventListener("resize", () => {
  height = window.innerHeight;
  width = window.innerWidth;
  console.log("Altura", height, "Largura", width);
});
*/
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
let a;

export default function FeaturedDestinations() {
  const [justify, setJustify] = useState("space-around");
  const [width,setWidth] = useState(200)
  function justifySpace(){
    window.addEventListener("resize" , () => {
        
        setWidth(window.innerWidth)
        if(window.innerWidth > 400)
        setJustify("space-around")
        else
        setJustify("center")
        console.log('widht' , width ,'justify' , justify)
    } )
  }
  useEffect(() => {
    justifySpace()
  }, []);
  return (
    <Grid style={{ marginTop: "120px" }}>
      <Grid lg={8} direction="row" justify="flex-start" container>
        <Grid xs={2} />
        <h1 className="featuredDestinationsTitle">Featured Destinations</h1>
      </Grid>
      <Grid
        lg={12}
        justify="center"
        alignItems="center"
        direction="row"
        container
      >
        <Grid xl={1} />
        {destinations.map((destination) => {
          return (
            <Grid className ='imgGrid' direction="column" sm ={5} md={5} xs={8} lg={2}>
              <img className="destinationsImages" src={destination.url} />
            </Grid>
          );
        })}
        <Grid xl={1} />
      </Grid>
    </Grid>
  );
}
