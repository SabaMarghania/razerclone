import React from 'react'
import './Exclusive.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Learnmore from './Learnmore';
function Exclusive() {
    return (
        <div className='Exclusive'>
            <div className="Exclusive__image"></div>
            <div className="Exclusive__intro">
                <div className="Exclusive__intro-title">
                    <h2>RAZER EXCLUSIVES</h2>
                </div>
                <div className="Exclusive__intro-subtitle">
                    <p>There is no better place to buy the latest 
                        Razer gear than here at our official online 
                        store—with exclusive products and deals for 
                        our biggest fans.</p>
                </div>
            </div>

            <div className="Exclusive__razer_info">
                <div className="Exclusive__razer_info_title">
                    <h1>WHY BUY FROM RAZER.COM</h1>
                </div>

                <div className="Exclusive__razer_info_grid__cont">

                <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/exclusive-items-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>Exclusive Razer Gear and Swag</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p>Get limited edition Razer gear which you can only find on Razer.com.</p>
                    </div>
                    </div>



                <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/razercare-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>Get Protection with RazerCare</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p> help you enjoy your Razer gear without worry. 
                            Currently available for customers in 
                            France, Germany, United Kingdom and United States, 
                            exclusively on Razer.com.</p>
                    </div>
                    </div>



                <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/processing-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>Fast Processing and Delivery</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p>We get just as excited whenever we purchase gaming gear too. 
                            That’s why we make sure your order 
                            ships the very next business day.</p>
                    </div>
                    </div>


                <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/risk-free-return-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>14-Day Risk Free Return</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p>The last thing we want is for you to be 
                            unhappy with your purchase —
                             enjoy a 14-day full refund policy for select Razer gear.</p>
                    </div>
                    </div>

                    <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/customer-support-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>Comprehensive Customer Support</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p>Your purchases and enquiries are backed by top notch Razer 
                            customer service support so you’ll always have a peace of mind.</p>
                    </div>
                    </div>

                    <div className="Exclusive__razer_info_grid">
                  <div className="Exclusive__razer_info_image">
                    <img src='//assets2.razerzone.com/images/pnx.assets/1ff47ba883e4d75e6a7fdbfa7cc0cc8a/customer-support-icon.png' alt=''/>
                </div>
                    <div className="Exclusive__razer_grid_title">
                        <h4>The Largest Array Of Razer Gear</h4>
                    </div>
                    <div className="Exclusive__razer_grid_text">
                        <p>Razer.com is the official online Razer store
                             where you can purchase the latest 
                             Razer gear and discover exclusive deals.</p>
                    </div>
                    </div>

                    
            </div>
            </div>



                <div className="Exclusive__title">
                    <h2>EXCLUSIVE MICE</h2>
                </div>
            <div className="Exclusive__mice">
            
            <div className="Exclusive__mice__cont">
               

                <div className="Exclusive__mice_card">
                    <div className="Exclusive__mice__image">
                        <Link to='learnMore/razerViper'>
                          <img src="//assets2.razerzone.com/images/pnx.assets/d0dd1932e0e8cddf5f86ec9a181abf5e/exclusives-advantage-viper-ult-mercury.jpg" alt=''/>
                         </Link>
                    </div>
                    <div className="Exclusive__mice__bottom">
                      <div className="Exclusive__mice__title">
                          <h3>Razer Viper Ultimate With Dock - Mercury</h3>
                        </div>
                        <div className="Exclusive__mice__text">
                            <p>Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless</p>
                        </div>

                        <div className="Exclusive__mice__detail">
                        <Link to='learnMore/razerViper'>
                            <p>Learn more</p>
                         </Link>

                        </div>
                    </div>
                </div>
                </div>


                <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                       <Link to='/learnMore/razerNaga'>
                          <img src="//assets2.razerzone.com/images/pnx.assets/d0dd1932e0e8cddf5f86ec9a181abf5e/exclusives-advantage-naga-left-handed.jpg" alt=''/>
                       </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer Naga Left-Handed Edition</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>Ergonomic MMO Gaming Mouse for Left-Handed Users</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/razerNaga'>
                               <p>Learn more</p>
                           </Link>
                       </div>
                   </div>
               </div>
               </div>


               <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                       <Link to='/learnMore/razerQuartz'>
                         <img src="//assets2.razerzone.com/images/pnx.assets/d0dd1932e0e8cddf5f86ec9a181abf5e/exclusives-advantage-atheris-quartz.jpg" alt=''/>
                        </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer Atheris Quartz</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>Ultimate Wireless Notebook Ergonomic Mouse</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/razerQuartz'>
                           <p>Learn more</p>
                        </Link>

                       </div>
                   </div>
               </div>
               </div>

               <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                   <Link to='/learnMore/razerViperUltimate'>
                       <img src="//assets2.razerzone.com/images/pnx.assets/d0dd1932e0e8cddf5f86ec9a181abf5e/exclusives-advantage-viper-ult-cyberpunk2077.jpg" alt=''/>
                    </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer Viper Ultimate Cyberpunk 2077 Edition</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/razerViperUltimate'>
                            <p>Learn more</p>
                        </Link>

                       </div>
                   </div>
               </div>
               </div>

            </div>
            
            <div className="Exclusive__title">
                    <h2> EXCLUSIVE AUDIO</h2>
                </div>
            <div className="Exclusive__mice">
            
            <div className="Exclusive__mice__cont">
               

                <div className="Exclusive__mice_card">
                    <div className="Exclusive__mice__image">
                       <Link to='/learnMore/headset/blackShark'>
                          <img src="//assets2.razerzone.com/images/pnx.assets/84d7e7ff682fe8cb11a70c0371446881/exclusives-advantage-black-shark-v2-pro.jpg" alt=''/>
                        </Link>
                    </div>
                    <div className="Exclusive__mice__bottom">
                      <div className="Exclusive__mice__title">
                          <h3>Razer BlackShark V2 Special Edition</h3>
                        </div>
                        <div className="Exclusive__mice__text">
                            <p>Multi-Platform Wired Esports Headset </p>
                        </div>

                        <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/headset/blackShark'>
                            <p>Learn more</p>
                        </Link>

                        </div>
                    </div>
                </div>
                </div>


                <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                       <Link to='/learnMore/headset/Kraken'>
                          <img src="//assets2.razerzone.com/images/pnx.assets/84d7e7ff682fe8cb11a70c0371446881/exclusives-advantage-kraken-x-mercury.jpg" alt=''/>
                       </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer Kraken X - Mercury</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>Multi-Platform Wired Gaming Headset</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                        <Link to='/learnMore/headset/Kraken'>
                           <p>Learn more</p>
                       </Link>

                       </div>
                   </div>
               </div>
               </div>


               <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                   <Link to='/learnMore/earbuds/HammerHead'>
                       <img src="//assets2.razerzone.com/images/pnx.assets/84d7e7ff682fe8cb11a70c0371446881/exclusives-advantage-hhtw-quartz.jpg" alt=''/>
                       </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer Hammerhead True Wireless - Quartz</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>True Wireless Earbuds</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/earbuds/HammerHead'>
                           <p>Learn more</p>
                       </Link>
                       </div>
                   </div>
               </div>
               </div>


               <div className="Exclusive__mice__cont">
               

               <div className="Exclusive__mice_card">
                   <div className="Exclusive__mice__image">
                        <Link to='/learnMore/airpods'>
                            <img src="//assets2.razerzone.com/images/pnx.assets/84d7e7ff682fe8cb11a70c0371446881/exclusives-advantage-ths-case-airpods-pro-mercury.jpg" alt=''/>
                       </Link>
                   </div>
                   <div className="Exclusive__mice__bottom">
                     <div className="Exclusive__mice__title">
                         <h3>Razer THS Case for AirPods Pro</h3>
                       </div>
                       <div className="Exclusive__mice__text">
                           <p>Protective Cover for AirPods Pro Charging Case</p>
                       </div>

                       <div className="Exclusive__mice__detail">
                       <Link to='/learnMore/airpods'>
                           <p>Learn more</p>
                       </Link>
                       </div>
                   </div>
               </div>
               </div>

            </div>
            
        </div>
    )
}

export default Exclusive
