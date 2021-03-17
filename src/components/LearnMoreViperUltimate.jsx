import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/CbUjCHxcgkzPei8Ja6XmM9L-vro=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb3%2Fh83%2F9099485675550%2Fcyberpunk-2077-viper-ultimate-1500x1000-1.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Viper Ultimate with Charging Dock - Cyberpunk 2077 Edition</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Ambidextrous Gaming Mouse with Razer™ HyperSpeed Wireless</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$159.99</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>Razer™ Hyperspeed Wireless technology</li>
                        <li>Razer™ Focus+ Optical Sensor</li>
                        <li>Razer™ Optical Mouse Switch</li>
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
