import React from "react";
import exploreImage from "../../assets/explore-and-travel.png";
import {
  ExploreContainer,
  ImageContainer,
  Content,
  HolidayFinderContainer,
} from "./styles";
import Button from "../../components/Button";
export default function ExploreAndTravel() {
  return (
    <HolidayFinderContainer>
      <Content>
        <ExploreContainer>
          <h1>Explore and Travel</h1>
          <span>Holiday Finder</span>
          <div>
            <select name="" id="">
              <option>Location</option>
            </select>
            <select name="Activity" id="">
              <option value="Activity">Activity</option>
            </select>
            <select name="" id="">
              <option>Location</option>
            </select>
            <select name="Activity" id="">
              <option value="Activity">Activity</option>
            </select>
          </div>

          <Button>Explore</Button>
        </ExploreContainer>
        <ImageContainer>
          <img src={exploreImage} alt="Explore Image" />
        </ImageContainer>
      </Content>
    </HolidayFinderContainer>
  );
}
