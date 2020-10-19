import React from "react";
import learnMoreImage from "../../assets/LearnMore.svg";
import {
  LearnMoreContainer,
  ImageContainer,
  Content,
  HolidayFinderContainer,
} from "./styles";
import Button from "../../components/Button";
export default function LearnMore() {
  return (
    <HolidayFinderContainer>
      <Content>
        <ImageContainer>
          <img src={learnMoreImage} alt="Explore Image" />
        </ImageContainer>
        <LearnMoreContainer>
          <h2>A new way to explore the world </h2>
          <p>
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </p>

          <Button>Learn More</Button>
        </LearnMoreContainer>
      </Content>
    </HolidayFinderContainer>
  );
}
