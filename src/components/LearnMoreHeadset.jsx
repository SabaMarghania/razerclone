import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/t3vuBVdFcCs_IobMRZ-Dx7qU7i4=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh44%2Fha7%2F9083348025374%2Fblackshark-Phoenix-1500x1000-SE-hero.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer BlackShark V2 Special Edition</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Multi-platform wired esports headset</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$99.99</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>Razer™ Triforce Titanium 50 mm Drivers</li>
                        <li>Razer™ HyperClear Cardioid Mic With USB Sound Card</li>
                        <li>Advanced passive noise cancellation</li>
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
