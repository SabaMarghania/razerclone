import React from 'react'
import Header from './Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './LaptopsPage.css'
import LaptopsCard from './LaptopsCard'
function LaptopsPage() {
    return (
        <div className="laptopsPage">
            <div className="laptopsPage__navbar">
                <div className="laptopsPage__text">
                    <h2>PC</h2>
                </div>
                <div className="laptopsPage__navbar__links">
                  <div className="laptopsPage__navbar__cont">
                    <Link to='/products'style={{textDecoration:'none'}}>
                        <p className='laptopsPage__active'>Laptops</p>
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
                <LaptopsCard
                price='US$2,599.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Advanced Edition - Full HD 360Hz - GeForce RTX 3080 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='15.6" 360Hz Full HD'
                gpu='GeForce RTX 3080'
                storage='32GB RAM, 1TB SSD'/>
             
                <LaptopsCard
                price='US$2,199.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Base Edition - QHD 165Hz - GeForce RTX 3070 - Black'
                processor='Intel Core i7-10750H'
                windows='Windows 10 Home'
                monitor='15.6" 165Hz QHD'
                gpu='GeForce RTX 3070'
                storage=' 16GB RAM, 512GB SSD'/>

                <LaptopsCard
                price='US$2,599.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Advanced Edition - Full HD 360Hz - GeForce RTX 3070 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='15.6" 360Hz Full HD'
                gpu='GeForce RTX 3070'
                storage='16GB RAM, 1TB SSD'/>

                <LaptopsCard
                price='US$2,399.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade Pro 17 - Full HD 360Hz - GeForce RTX 3060 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='17.3" 360Hz Full HD'
                gpu='GeForce RTX 3060'
                storage='16GB RAM, 512GB SSD'/>

                <LaptopsCard
                price='US$1,999.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Base Edition - Full HD 144Hz - GeForce RTX 3070 - Black'
                processor='Intel Core i7-10750H'
                windows='Windows 10 Home'
                monitor='15.6" 144Hz Full HD'
                gpu='GeForce RTX 3070'
                storage='16GB RAM, 512GB SSD'/>
                
                <LaptopsCard
                price='US$2,299.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Advanced Edition - Full HD 360Hz - GeForce RTX 3080 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='17.3" 165Hz QHD'
                gpu='GeForce RTX 3060'
                storage='16GB RAM, 512GB SSD'/>

                <LaptopsCard
                price='US$2,599.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade Pro 17 - QHD 165Hz - GeForce RTX 3070 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='17.3" 165Hz QHD'
                gpu='GeForce RTX 3070'
                storage='16GB RAM, 512GB SSD'/>

                <LaptopsCard
                price='UUS$2,499.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Advanced Edition - QHD 240Hz - GeForce RTX 3070 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='15.6" 240Hz QHD'
                gpu='GeForce RTX 3070'
                storage='16GB RAM, 1TB SSD'/>
                <LaptopsCard
                price='US$2,599.99'
                image='https://assets3.razerzone.com/1KA0GNAysVFn20_WwdEcXK-BEkk=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fhf8%2F9135865692190%2Frazer-blade-15-early2021-advanced-FHD-500x500.png'
                title='Razer Blade 15 Advanced Edition - Full HD 360Hz - GeForce RTX 3080 - Black'
                processor='Intel Core i7-10875H'
                windows='Windows 10 Home'
                monitor='15.6" 360Hz Full HD'
                gpu='GeForce RTX 3080'
                storage='32GB RAM, 1TB SSD'/>
            </div>
        </div>
    )
}

export default LaptopsPage
