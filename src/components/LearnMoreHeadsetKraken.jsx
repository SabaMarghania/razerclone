import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/yDeALZ3gelMSIsoW7Q7j2TE6CWA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh10%2Fhad%2F9011306463262%2Frazer-kraken-x-mercury-gallery-hero.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Kraken X - Mercury</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Multi-Platform Wired Gaming Headset</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$49.99
</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>Clear & Accurate Positional Audio</li>
                        <li>Ultra-Light Ergonomic Build at 250g</li>
                        <li>Crystal Clear Communication</li>
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
