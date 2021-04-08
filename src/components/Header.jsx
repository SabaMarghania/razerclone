import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './Header.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TollOutlinedIcon from '@material-ui/icons/TollOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from "./StateProvider";
function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const razerlogo='https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h56/h3c/9163652366366/razer-ths-logo.svg'
    return (
        <div className='header'>
            <Link to="/home" style={{marginLeft:'8%'}}>
            <div className="header__image">
                <img src={razerlogo} alt="Razer logo"/>
            </div>
            </Link>
            <div className="header__links">
             <Link to="/exclusive" style={{textDecoration:'none'}}>
                <div className="header__link">
                    <h5>Exclusives</h5>
                </div>
                </Link>

                <Link to="/products" style={{textDecoration:'none'}}>
                  <div className="header__link">
                    <h5>Products</h5>
                  </div>
                </Link>

                <Link to="/mobile" style={{textDecoration:'none'}}>
                <div className="header__link">
                    <h5>Mobile</h5>
                </div>
                </Link>

                <Link to="/services" style={{textDecoration:'none'}}>
                <div className="header__link">
                    <h5>Services</h5>
                </div>
                </Link>
            </div>

            <div className="header__icons">
                    <SearchOutlinedIcon/>

                    <TollOutlinedIcon/>
                    <Link to='/cart' style={{color:'#999',textDecoration:'none'}}>
                        <span style={{display:'flex'}}><ShoppingCartOutlinedIcon/>{basket.length}</span>
                    </Link>
            </div>
        </div>

    )
}

export default Header
