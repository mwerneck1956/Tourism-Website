import React  , {Fragment} from 'react';

//Components
import  MainNavbar from './components/Navbar/MainNavbar'
//Sections
import Header from './Sections/Header/Header'
import LearnMore from './Sections/LearnMore/LearnMore'
import FeaturedDestiantions from './Sections/FeaturedDestinations/FeaturedDestinations'
function App() {
  return (
    <Fragment>
      <MainNavbar/>
      <Header/>
      <LearnMore/>  
      <FeaturedDestiantions/>
    </Fragment>
  );
}

export default App;
