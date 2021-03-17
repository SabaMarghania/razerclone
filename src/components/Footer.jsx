import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer__row">
                <div className="Footer__row_cont">
                    <span>Company</span>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Room </p>
                    <p>Investor Relations </p>
                    <p>zVentures </p>
                    <p>Contact Us </p>

                    <div className="Footer__right_infos">
                        <h5>For gamers. by gamers.™</h5>

                        <div className="footer__right_icons">
                            <div className="Footer__icon">
                                <FacebookIcon style={{fontSize:24,color: '#44d62c'}}/>
                            </div>

                            <div className="Footer__icon">
                                <InstagramIcon style={{fontSize:24,color: '#44d62c'}}/>
                            </div>

                              <div className="Footer__icon">
                                <TwitterIcon style={{fontSize:24,color: '#44d62c'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer__row_cont">
                    <span>Shop</span>
                    <p>Store Locator</p>
                    <p>Razer.come Purchase Program</p>
                    <p>Exclusives</p>
                    <p>Newsletter  </p>
                </div>
                <div className="Footer__row_last">
                    <span>Razer.com</span>
                    <p>Copyright © 2021 Razer Inc. All rights reserved.</p>
                    <p>Site map</p>
                    <p>Legal Terms</p>
                    <p>Privacy Policy  </p>
                    <p>Cookie Policy  </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
