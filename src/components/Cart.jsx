import React from 'react'
import './Cart.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Cart() {
    const [{ basket,  }, dispatch] = useStateValue();
    return (
      <>
        <div className='Cart'>
            <div className="Cart__top">
                <div className="Cart__items">
                    <h3>Cart( {basket.length} Items)</h3>
                </div>
                <div className="Cart__info">
                    <div className="Cart__sum">
                      <h4>0</h4>
                    </div>
                    <div className="Cart__btn">
                        <button type="submit">Checkout</button>
                    </div>
                </div>
               
            </div>
            
          {basket.length <= 0 ?
          <div className="Cart__noItems">
            <h3>Your cart is empty</h3> 
            <p>Fear not, have a look at our latest<br></br> products and start shopping.</p>
           <Link to="/">
             <button type="submit">Shop razer.com</button>
           </Link>

          </div>
         :
             basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                text={item.text}
                processor={item.processor}
                windows={item.windows}
                monitor={item.monitor}
                gpu={item.gpu}
                boost={item.boost}
                compatible={item.compatible}
                storage={item.storage}
                about={item.about}
                info={item.info}
                info2={item.info2}
              />
))
        }


        </div>
        
             
             </>
    )
}

export default Cart
