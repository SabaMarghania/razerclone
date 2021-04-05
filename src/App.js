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
import Cart from './components/Cart'
import Services from './components/Services'
import Mobile from './components/Mobile';
function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route path="/cart">
          <Header/>
          <Cart/>
          <Footer/>
        </Route>
    <Route path="/learnMore/Airpods">
          <Header/>
          <LearnMoreAirpods
          id='9'
          title='Razer THS Case for AirPods Pro - Black'
          image='//assets3.razerzone.com/OSml05ThFIon314-XgIG4o3_ykg=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh59%2Fhd3%2F9099885871134%2FPHOENIX-HERO-razer-ths-case-airpods-pro-2.jpg'
          text='Protective Cover for AirPods Pro Charging Case'
          price={29.99}/>
          <Footer/>
        </Route>
     <Route path="/learnMore/earbuds/HammerHead">
          <Header/>
          <LearnMoreHammerhead
          id='8'
          title='Razer Hammerhead True Wireless Earbuds - Quartz  '
          image='//assets3.razerzone.com/YYBUEWwrshbzU10EKEwWd9_M1a4=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh14%2Fhdd%2F9085328195614%2FHHtruewireless-Gallery-quartz1-1500x1000.jpg'
          text='True Wireless Earbuds'
          price={99.99}/>
          <Footer/>
        </Route>
     <Route path="/learnMore/headset/Kraken">
          <Header/>
          <LearnMoreHeadsetKraken
           id='7'
           title='Razer Kraken X - Mercury'
           image='//assets3.razerzone.com/fcJgl3x2Ef89aH8Kh0aW0q-CxTY=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhae%2Fh70%2F9081232424990%2Frazer-kraken-x-mercury-gallery-hero.jpg'
           text='Multi-Platform Wired Gaming Headset'
           price={49.99}/>
          <Footer/>
        </Route>

    <Route path="/learnMore/headset/blackShark">
          <Header/>
          <LearnMoreHeadset
          id='6'
          title='Razer BlackShark V2 Special Edition'
          image='//assets3.razerzone.com/t3vuBVdFcCs_IobMRZ-Dx7qU7i4=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh44%2Fha7%2F9083348025374%2Fblackshark-Phoenix-1500x1000-SE-hero.jpg'
          text='Multi-platform wired esports headset'
          price={109.9}
          />
          <Footer/>
        </Route>

    <Route path="/learnMore/RazerViperUltimate">
          <Header/>
          <LearnMoreViperUltimate
          id='2'
          title='Razer Viper Ultimate with Charging Dock - Cyberpunk 2077 Edition'
          image='//assets3.razerzone.com/CbUjCHxcgkzPei8Ja6XmM9L-vro=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb3%2Fh83%2F9099485675550%2Fcyberpunk-2077-viper-ultimate-1500x1000-1.jpg'
          text='Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless '
          price={159.9}/>
          <Footer/>
        </Route>
    <Route path="/learnMore/RazerQuartz">
          <Header/>
          <LearnMoreQuartz
          id='5'
          title='Razer Atheris Quartz'
          image='//assets3.razerzone.com/-98E7eOMu6R0u690u0SqnVGNpZA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc6%2Fh6f%2F9081444761630%2Fatheris-quartz-gallery-hero.jpg'
          text='Ultimate Wireless Notebook Ergonomic Mouse
          '
          price={59.99}/>
          <Footer/>
        </Route>

    <Route path="/learnMore/RazerViper">
          <Header/>
          <LearnMoreViper
              id='3'
              title='Razer Viper Ultimate with Charging Dock - Mercury'
              image='//assets3.razerzone.com/HGM9zYZvi7mtaS3VeGzsoheixoY=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhac%2Fhd9%2F9085328097310%2Fviper-ultimate-mercury-Hero.jpg'
              text='Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireles '
              price={149}           />
          <Footer/>
        </Route>
       
    <Route path="/learnMore/RazerNaga">
          <Header/>
          <LearnMoreNaga
          id='4'
          title='Razer Naga Left-Handed Edition'
          image='//assets3.razerzone.com/eYjVnOIhezgNUoP5Ji_c36rd98s=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhff%2Fh63%2F9081450889246%2FRazer-Naga-Left-Handed-Edition-Gallery0.jpg'
          text='Ergonomic MMO Gaming Mouse for Left-Handed Users'
          price={99.99}/>
          <Footer/>
        </Route>

        <Route path="/services">
          <Header/>
          <Services/>
          <Footer/>
        </Route>
        
     <Route path="/mobile">
          <Header/>
          <Mobile/>
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
