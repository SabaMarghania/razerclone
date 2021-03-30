import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image,boost,compatible,info,info2,about, title,processor,windows,monitor, price,gpu, storage,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
               <div className="checkoutProduct__info_cont">
                 <p className='checkoutProduct__title'>{title}</p>
                 <ul>
{/* laptops                      */}
                     {processor && <li>{processor}</li>}
                    {windows && <li>{windows}</li>}
                    {monitor && <li>{monitor}</li>}
                    {gpu && <li>{gpu}</li>}
                    {storage && <li>{storage}</li>}
                    {monitor && <li>{monitor}</li>}
{/* egpus */}
                    {boost && <li>{boost}</li>}
                    {compatible && <li>{compatible}</li>}
{/* accessories */}
                    {about && <li>{about}</li>}
                    {info && <li>{info}</li>}
                    {info2 && <li>{info2}</li>}
                 </ul>
                   
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove</button>
                )}
            
               
                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                </p>
                
            </div>
        </div>
    )
}

export default CheckoutProduct