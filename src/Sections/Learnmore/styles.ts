import styled from "styled-components";



export const Content = styled.div`
  margin-top : 149px!important;
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
  align-items : flex-start;
  justify-content : center;
  @media(max-width : 900px){
    order : 1;
  }
  img {
    max-width: 80%;
    max-height: 80vh;
  }
`;

export const LearnMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding : 0 15px;
  max-width : 481px;
  @media(max-width : 900px){
    order : 0;
  }
  h2 {
    font-size: 36px;
    @media (max-width: 750px) {
      font-size: 36px;
    }
    font-family: "Playfair Display", serif;
    max-width: 356px;
    margin-bottom: 35px;
    font-weight : bold;
  }
  p{
    font-family: 'Mulish', sans-serif;
    line-height : 30px;
    font-size : 17px;
    color : #7D7987;
    text-align : justify;
    margin-bottom : 39px;
  }
`;
