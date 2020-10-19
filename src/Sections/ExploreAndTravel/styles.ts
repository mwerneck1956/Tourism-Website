import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  img {
    max-width: 80vw;
    max-height: 80vh;
  }
`;

export const Content = styled.div`
  margin-top : 70px!important;
  @media(max-width : 750px){
    margin-top : 30px!important;
  }
  display: flex;
  justify-content : space-between;
  margin : 0 auto;
  max-width: 1368px !important;
  height : auto;
  @media(max-width : 900px){
    padding : 5%;
    flex-direction : column;
    align-items : center; 
  }
`;

export const HolidayFinderContainer = styled.div`
  width : 100%; 
  
`;

export const ImageContainer = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  img {
    max-width: 80%;
    max-height: 80vh;
  }
`;

export const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding : 0 15px;
  h1 {
    font-size: 64px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
    font-family: "Playfair Display", serif;
    max-width: 356px;
    margin-bottom: 35px;
  }
  span {
    font-family: "Inter", sans-serif;
    margin-top: 40px;
    font-weight: 600;
  }
  div {
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    max-width : 500px;
   
    select {
      flex-grow : 1;
      flex-shrink : 0;
      width : 200px;
      margin: 15px 0px;
      height: 52px;
      border: 0.8px solid #afb0b9;
      border-radius: 6px;
      color: #4a4c53;
      background: none;
      padding: 15px;
      font-family: "Inter", sans-serif;
      @media(min-width : 500px){
        :nth-child(2n){
        margin-left : 15px;
      }
      }
      
      @media(max-width : 937px){
        margin-left : none!important;
      }
      
    }
    
  }
`;
