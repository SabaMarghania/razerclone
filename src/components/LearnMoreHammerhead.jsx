import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/YYBUEWwrshbzU10EKEwWd9_M1a4=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh14%2Fhdd%2F9085328195614%2FHHtruewireless-Gallery-quartz1-1500x1000.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Hammerhead True Wireless Earbuds - Quartz</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>True Wireless Earbuds</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$69.99</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>Low latency connection</li>
                        <li>Water-resistant IPX4 design</li>
                        <li>Custom-tuned 13mm drivers</li>
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
