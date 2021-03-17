import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/E7rynmmxeUX48H0I2WGsnS7JScc=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhff%2Fh34%2F9075935051806%2FRazer-Naga-Left-Handed-Edition-Gallery0.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Naga Left-Handed Edition</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Ergonomic MMO Gaming Mouse for Left-Handed Users</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$99.99</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>True Left-Handed Ergonomic Design</li>
                        <li>19+1 Programmable Buttons</li>
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
