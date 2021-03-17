import React from 'react'
import './LearnMore.css'
function LearnMore() {
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src='https://assets3.razerzone.com/Lgdwy_LCcsL90ymR1vme0WuV1Ck=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5a%2Fh78%2F9011293093918%2Fatheris-quartz-gallery-hero.jpg' alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>Razer Atheris Quartz</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>Ultimate Wireless Notebook Ergonomic Mouse</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>US$59.99</h3>

                    </div>
                    <div className="LearnMore__right_details">
                        <li>350-Hour Continuous Use on a Pair of AA Batteries</li>
                        <li>7,200 DPI Optical Sensor</li>
                        <li>2.4 GHz With Adaptive Frequency Technology</li>

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
