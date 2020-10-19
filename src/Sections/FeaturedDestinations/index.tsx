import React from "react";
import RajaAmpat from "../../assets/RajaAmpat.png";
import Skadar from "../../assets/Skadar.png";
import Fanjingshan from "../../assets/Fanjingshan.png";
import Vevey from "../../assets/Vevey.png";
import { Container, Header, ImagesContainer } from "./styles";
import { IoIosArrowForward } from "react-icons/io";

export const FeaturedDestinations: React.FC = () => {
  return (
    <Container>
      <div>
        <Header>
          <h2>Featured Destinations</h2>
          <a onClick={()=>alert('VIu todos')}>View All <IoIosArrowForward size ={20}/></a>
  
        </Header>
      </div>
      <div>
        <ImagesContainer>
          <img src={RajaAmpat} alt="Raja Ampat" />
          <img src={Fanjingshan} alt="Fanjingshan" />
          <img src={Vevey} alt="Vevey" />
          <img src={Skadar} alt="Skadar" />
        </ImagesContainer>
      </div>
    </Container>
  );
};

export default FeaturedDestinations;
