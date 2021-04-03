import React from 'react'
import './Body.css'
function Body() {
    return (
        <div className='Body'>
            <div className="Body__first_image">
                <div className="Body__first__text">
                    <h1>Visionary Sound</h1>
                    <span>Shop Razer Anzu Smart Glasses</span>
                </div>
            </div>
            <div className="Body__second_image">
                <div className="Body__first__text">
                    <h1>RAZER BLADE 15<br/>GEFORCE RTX™ 30 SERIES.<br/>NOW SHIPPING.</h1>
                    <span>Shop Razer Blade 15</span>
                </div>
            </div>

            <div className="Body__third__image">
                <div className="Body__first__text">
                    <h1>GO CRAZY FOR RGB</h1>
                    <span>Shop Exclusive Deals</span>
                </div>
            </div>

            <div className="Body__highlights">
                <div className="Body_card Body__first_card">
                    <div className="Body__first__text">
                    <h1 className="body__text">GAMING CHAIR WITH BUILT-IN <br/> LUMBAR SUPPORT. <br/> NOW AVAILABLE IN BLACK.</h1>
                    <span>Shop Razer Iskur</span>
                     </div>
                </div>

                <div className="Body_card Body__second_card">
                    <div className="Body__first__text">
                    <h1 className="body__text">MORE POWER. MORE CORES.<br/>MORE FRAMES.</h1>
                    <span>Up to $500 in Savings. Shop Razer Blade 15</span>
                     </div>
                </div>

                <div className="Body_card Body__third_card">
                    <div className="Body__first__text">
                    <h1 className="body__text">ULTRA-FAST. ULTRA-THIN. <br/>ULTRA-POWERFUL.<br/> NOW WITH GEFORCE RTX™ 30 SERIES.</h1>
                    <span>The Razer Blade Pro 17 Now Shipping</span>
                     </div>
                </div>

                <div className="Body_card Body__fourth_card">
                    <div className="Body__first__text">
                    <h1 className="body__text">COMPACT. MODULAR. PERFORMANCE.</h1>
                    <span>Razer Tomahawk Gaming Desktop Now Shipping</span>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Body
