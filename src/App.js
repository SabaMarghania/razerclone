import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Laptopspage from './components/LaptopsPage'
import Exclusive from './components/Exclusive'
import ProductGpu from './components/ProductGpu'
import Accessories from './components/Accessories'
import LearnMoreNaga from './components/LearnMoreNaga'
import LearnMoreViper from './components/LearnMoreViper'
import LearnMoreQuartz from './components/LearnMoreQuartz'
import LearnMoreViperUltimate from './components/LearnMoreViperUltimate'
import LearnMoreHeadset from './components/LearnMoreHeadset'
import LearnMoreHeadsetKraken from './components/LearnMoreHeadsetKraken'
import LearnMoreHammerhead from './components/LearnMoreHammerhead'
import LearnMoreAirpods from './components/LearnMoreAirpods'
function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route path="/learnMore/Airpods">
          <Header/>
          <LearnMoreAirpods/>
          <Footer/>
        </Route>
     <Route path="/learnMore/earbuds/HammerHead">
          <Header/>
          <LearnMoreHammerhead/>
          <Footer/>
        </Route>
     <Route path="/learnMore/headset/Kraken">
          <Header/>
          <LearnMoreHeadsetKraken/>
          <Footer/>
        </Route>

    <Route path="/learnMore/headset/blackShark">
          <Header/>
          <LearnMoreHeadset/>
          <Footer/>
        </Route>

    <Route path="/learnMore/RazerViperUltimate">
          <Header/>
          <LearnMoreViperUltimate/>
          <Footer/>
        </Route>
    <Route path="/learnMore/RazerQuartz">
          <Header/>
          <LearnMoreQuartz/>
          <Footer/>
        </Route>

    <Route path="/learnMore/RazerViper">
          <Header/>
          <LearnMoreViper/>
          <Footer/>
        </Route>
       
    <Route path="/learnMore/RazerNaga">
          <Header/>
          <LearnMoreNaga/>
          <Footer/>
        </Route>
       
    <Route path="/accessories">
          <Header/>
          <Accessories/>
          <Footer/>
        </Route>
       
    <Route path="/egpus">
          <Header/>
          <ProductGpu/>
          <Footer/>
        </Route>
       
       <Route path="/products">
          <Header/>
          <Laptopspage/>
          <Footer/>
        </Route>
        <Route path="/exclusive">
          <Header/>
          <Exclusive/>
          <Footer/>
        </Route>

         <Route path="/">
           <Header/>
           <Body/>
          <Footer/>

        </Route>
        </Switch>


    </Router>
    </>
  );
}

export default App;
