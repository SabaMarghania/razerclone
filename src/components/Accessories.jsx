import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Accessories.css'
  import AccessoriesPage from './AccessoriesPage'
function Accessories() {
    return (
        <div className="Accessories">
            <div className="Accessories__navbar">
                <div className="Accessories__text">
                    <h2>PC</h2>
                </div>
                <div className="Accessories__navbar__links">
                  <div className="Accessories__navbar__cont">
                      <Link to='/products' style={{textDecoration:'none'}}>
                          <p className='laptopsPage__active'>Laptops</p>
                      </Link>
                      <Link to='/egpus'style={{textDecoration:'none'}}>
                        <p>egpus</p>
                    </Link>
                    <Link to='/accessories'style={{textDecoration:'none'}}>
                        <p>Accessories</p>
                    </Link>
                    </div>
                </div>
                </div>
                <div className="laptopsPage__cards">
                <AccessoriesPage
                price='US$149.99'
                image='https://assets3.razerzone.com/RhaKUwEnP1uq6Q8GJWde6RUY03A=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhab%2Fhce%2F9143450697758%2Flaptop-stand-chroma-v2-%20500x500.png'
                title='Razer Laptop Stand Chroma V2'
                about='Integrated USB-C Hub'
                info='Dual Monitor Output'
                info2='Durable and Ergonomic'
               />
             
                <AccessoriesPage
                price='US$329.99'
                image='https://assets3.razerzone.com/tnz4WkIHMvhsEVfgbwTGaumoHyA=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh65%2Fhd1%2F9143450730526%2Fthunderbolt4dockchroma-500x500.png'
                title='Razer Thunderbolt™ 4 Dock Chroma'
                about='  Connectivity to Maximize Your Setup'
                info='Future-proof and Backwards-compatible'
                info2='Pass-through Charging'/>
                
               
                <AccessoriesPage
                price='US$34.99'
                image='https://assets3.razerzone.com/LNuF1wLUOow6_51tQ_rhk1KGcKI=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf2%2Fha0%2F9102634909726%2FNeoprene-Sleeve-V2-500x500.jpg'
                title='Razer Neoprene Sleeve V2 - For 13.3” Notebooks'
                about='Protective Exterior and Padded Interior'
                info='Custom fit for the Razer Blade Stealth 13'
                info2='Ultra-slim profile'/>

                <AccessoriesPage
                price='US$44.99'
                image='https://assets3.razerzone.com/3ZTbryKkz2yuKIWLrxvWe80-BfM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5d%2Fha1%2F9102634942494%2FProtective-Sleeve-V2-15-500x500.png'
                title='Razer Protective Sleeve V2 - For 15.6 Notebooks'
                about='Tough water-resistant material'
                info=' Smooth interior surface with built-in mouse mat'
                info2=' Custom fit for our Razer Blade laptops'/>
                

           

                <AccessoriesPage
                price='US$49.99'
                image='https://assets3.razerzone.com/vhdZyWBXsIwo-4ZkFDfZHsrmHbs=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf5%2Fh9d%2F9102634844190%2FProtective-Sleeve-V2-17-500x500.png'
                title='Razer Protective Sleeve V2 - For 17.3 Notebooks'
                item1='Tough water-resistant material'
                info=' Smooth interior surface with built-in mouse mat'
                info2=' Custom fit for our Razer Blade laptops'/>
                

                <AccessoriesPage
                price='US$399.99'
                image='https://assets3.razerzone.com/VKQb8klb84W1JRmfCS-XKp6oLVU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf1%2Fh99%2F9094272614430%2Frazer-chroma-addressable-rgb-controller-500x500.png'
                title='Razer Chroma Addressable RGB Controller'
                item1='6 Addressable RGB headers'
                info='Support for WS2812b or equivalent LED types'
                info2='USB connection (USB 2.0 Micro-B)'/>

               

               

        </div>
            
        </div>
    )
}

export default Accessories
