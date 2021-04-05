import React from 'react'
import './LearnMore.css'
import { useStateValue } from "./StateProvider";
function LearnMore({id,title,image,text,price}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            text:text,
            price: price,
          },
        });
      };
    
    return (
        <div className='LearnMore'>
            <div className="LearnMore__left">
                <div className="LearnMore__left__image">
                    <img src={image} alt=''/>
                </div>
            </div>

            <div className="LearnMore__right">
                <div className="LearnMore__right__cont">
                    <div className="LearnMore__right_title">
                        <h2>{title}</h2>
                    </div>
                    <div className="LearnMore__right_text">
                        <p>{text}</p>
                    </div>
                    <div className="LearnMore__right_price">
                        <h3>${price}
</h3>
                    </div>
                    <div className="LearnMore__right_details">
                        <li>Clear & Accurate Positional Audio</li>
                        <li>Ultra-Light Ergonomic Build at 250g</li>
                        <li>Crystal Clear Communication</li>
                    </div>

                    <div className="LearnMore__right_card">
                        <p>Ships next business day</p>

                        <button onClick={addToBasket} type='submit'>Add to Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LearnMore
