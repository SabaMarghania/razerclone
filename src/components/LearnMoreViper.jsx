import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/HGM9zYZvi7mtaS3VeGzsoheixoY=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhac%2Fhd9%2F9085328097310%2Fviper-ultimate-mercury-Hero.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Viper Ultimate with Charging Dock - Mercury</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$149.99</h3>

                    </div>
                    <div className="LearnMore__right_details">
                        <li>Only available at Razer.com</li>
                        <li>Razer™ Hyperspeed Wireless technology</li>
                        <li>Razer™ Focus+ Optical Sensor</li>


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
