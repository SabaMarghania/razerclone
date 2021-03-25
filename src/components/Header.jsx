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

    const razerlogo='https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h5b/h8c/8796147679262/razer.svg'
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

                <div className="header__link">
                    <h5>Apps & Downloads</h5>
                </div>
                <div className="header__link">
                    <h5>Explore</h5>
                </div>
                <div className="header__link">
                    <h5>Support</h5>
                </div>
            </div>

            <div className="header__icons">
                    <SearchOutlinedIcon/>

                    <TollOutlinedIcon/>
                    <Link to='/cart' style={{color:'#999',textDecoration:'none'}}>
                        <span><ShoppingCartOutlinedIcon/>{basket.length}</span>
                    </Link>
            </div>
        </div>

    )
}

export default Header
