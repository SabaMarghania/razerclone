import React from 'react'
import './Cart.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Cart() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
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

          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              text={item.text}
            />
          ))}
        </div>
    )
}

export default Cart
