import React from 'react'
import './ProductGpu.css'
import ProductGpuPage from './ProductGpuPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function ProductGpu() {
    return (
            <div className="ProductGpu">
            <div className="ProductGpu__navbar">
                <div className="ProductGpu__text">
                    <h2>PC</h2>
                </div>
                <div className="ProductGpu__navbar__links">
                  <div className="ProductGpu__navbar__cont">
                      <Link to='/products' style={{textDecoration:'none'}}>
                          <p>Laptops</p>
                      </Link>
                      <Link to='/egpus'style={{textDecoration:'none'}}>
                        <p>egpus</p>
                    </Link>
                    <Link to='/accessories'style={{textDecoration:'none'}}>
                    <p>accessories</p>
                    </Link>

                    </div>
                </div>
              
            </div>
            <div className="laptopsPage__cards">
                <ProductGpuPage
                price='US$399.99'
                image='https://assets3.razerzone.com/jRDh1eGG4MVlILsCQGJC_dNpzx4=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb8%2Fhf4%2F9085174874142%2F500x500-Core-X-Mercury.png'
                title='Razer Core X - Mercury'
                item1='Boost Thunderbolt™ 3 laptops'
                item2='Windows 10 and macOS support'
                item3='Compatible with PCI-Express graphics cards'
               />
             
                <ProductGpuPage
                price='US$499.99'
                image='https://assets3.razerzone.com/sb-kkobVkGFP520y__W6Aic08po=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8f%2Fhfa%2F8965970952222%2FRC21-01430100-R3U1.png'
                title='Razer Core X Chroma'
                item1='Boost Thunderbolt™ 3 laptops'
                item2='Windows 10 and macOS support'
                item3='Compatible with PCI-Express graphics cards'/>
                

                <ProductGpuPage
                price='US$399.99'
                image='https://assets3.razerzone.com/JWA_jN9QOE3B0uKaxjVPM1UiK6I=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe3%2Fh4c%2F9102624063518%2Frazer-core-x-black-500x500.png'
                title='Razer Core X - Black'
                item1='Boost Thunderbolt™ 3 laptops'
                item2='Windows 10 and macOS support'
                item3='Compatible with PCI-Express graphics cards'/>

               

        </div>
        </div>
    )
}

export default ProductGpu
