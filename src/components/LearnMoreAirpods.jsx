import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/OSml05ThFIon314-XgIG4o3_ykg=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh59%2Fhd3%2F9099885871134%2FPHOENIX-HERO-razer-ths-case-airpods-pro-2.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer THS Case for AirPods Pro - Black</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Protective Cover for AirPods Pro Charging Case</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$29.99</h3>

                    </div>
                    <div className="LearnMore__right_details">
                        <li>Durable TPU Case With Carabiner Clip</li>
                        <li>Wireless Charging Compatible</li>
                        <li>LED Indicator Opening</li>

                    </div>

                    <div className="LearnMore__right_card">
                        <p>Ships next business day</p>

                        <button type='submit'>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LearnMore
