import React from 'react'
import { useStateValue } from "./StateProvider";
import './LaptopsCard.css'
function LaptopsCard({price,id,image,title,processor,windows,monitor,gpu,storage}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            processor:processor,
            windows:windows,
            monitor:monitor,
            gpu:gpu,
            storage:storage,
            monitor:monitor,
            price: price,
          },
        });
      };
    
    return (
        <div className='LaptopsCard'>
         <div className='LaptopsCard__cont'>
            <div className="LaptopsCard__image">
                <img src={image} alt="" style={{width:200}} />
            </div>
            <div className="LaptopsCard__bottom_cont">
                <div className="LaptopsCard__title">
                    <h4>{title}</h4>
                </div>
                <div className="LaptopsCard__specifications">
                    <ul>
                        <li>{processor}</li>
                        <li>{windows}</li>
                        <li>{monitor}</li>
                        <li>{gpu}</li>
                        <li>{storage}</li>
                    </ul>
                </div>
                <div className="Laptopscard__detials">
                    <p>View details</p>
                </div>
                <div className="laptopscard__price">
                    <h4>${price}</h4>
                </div>
                <div className="laptopscard__button">
                    <button onClick={addToBasket} type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LaptopsCard
