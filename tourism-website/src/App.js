import React  , {Fragment} from 'react';

//Components
import Navbar from './components/Navbar/Navbar'
//Sections
import LearnMore from './Sections/LearnMore/LearnMore'
import FeaturedDestiantions from './Sections/FeaturedDestinations/FeaturedDestinations'
function App() {
  return (
    <Fragment>
      <Navbar/>
      <LearnMore/>  
      <FeaturedDestiantions/>
    </Fragment>
  );
}

export default App;
