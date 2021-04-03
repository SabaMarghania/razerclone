import React from 'react'
import './Totalsum.css'
import {useStateValue} from './StateProvider'
import CurrencyFormat from 'react-currency-format'
import {totalAmount} from './reducer'
function Totalsum() {
    const [{ basket,  }, dispatch] = useStateValue();
    return (
        <div className='Cart'>
   
        <CurrencyFormat
        renderText={(value) => (
            <div className="Cart__top">
                <div className="Cart__items">
                    <h3>Cart( {basket.length} Items)</h3>
                </div>
                <div className="Cart__info">
                    <div className="Cart__sum">
                      <h4>{value}</h4>
                    </div>
                    <div className="Cart__btn">
                        <button type="submit">Checkout</button>
                    </div>
                </div>
               
            </div>
        )}
        decimalScale={2}
        value={totalAmount(basket)} 
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
 
            </div>

    )
}

export default Totalsum
