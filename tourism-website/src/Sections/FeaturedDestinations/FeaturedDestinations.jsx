import React from 'react'


//Core components
import {Grid} from "@material-ui/core"
//Images
import Fanjinghsan from '../../assets/images/Fanjingshan.png'
import Skadar from '../../assets/images/Skadar.png'
import RajaAmpat from '../../assets/images/RajaAmpat.png'
import Vevey from '../../assets/images/Vevey.png'



let destinations= [
     {
         name : "Fanjinghsan",
         coutnry: "China",
         url : Fanjinghsan
     },
     {
        name : "Skadar",
        coutnry: "Montenegrop",
        url : Skadar,
    },
    {
        name : "Vevey",
        coutnry: "Switerzland",
        url : Vevey
    },
    {
        name : "Raja ampat",
        coutnry: "Indonesia",
        url : RajaAmpat
    }
 ]

 
 export default function FeaturedDestinations() {
     return (
         <Grid>

         </Grid>
     )
 }
 