import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin : 0;
    padding : 0;
    outline : 0;
    box-sizing : border-box;
 
  }
  h1,h2,h3,h4,h5{
    font-family: "Playfair Display", serif;
  }
  body,input,button{
    font-size : 16px;
    background : #fff;
    color : #202336;
    -webkit-font-smoothing:antialiased;
  }
  button , a{
    cursor : pointer;
  }  
`;
