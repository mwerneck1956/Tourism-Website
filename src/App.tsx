import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Navbar from './Sections/Navbar/index';
import ExploreAndTravel from './Sections/ExploreAndTravel';
import LearnMore from './Sections/Learnmore';
import FeaturedDestinations from './Sections/FeaturedDestinations';
function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <ExploreAndTravel/>
      <LearnMore/>
      <FeaturedDestinations/>
    </>
  );
}

export default App;
