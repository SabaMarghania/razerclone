import React from 'react'
import './ProductGpuPage.css'
import { useStateValue } from "./StateProvider";

function ProductGpuPage({price,id,image,title,compatible,windows,boost,}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            windows:windows,
            boost:boost,
            compatible:compatible,
            price: price,
          },
        });
      };
    
    return (
        <div className='ProductGpuPage'>
         <div className='ProductGpuPage__cont'>
            <div className="ProductGpuPage__image">
                <img src={image} alt="" style={{width:200}} />
            </div>
            <div className="ProductGpuPage__bottom_cont">
                <div className="ProductGpuPage__title">
                    <h4>{title}</h4>
                </div>
                <div className="ProductGpuPage__specifications">
                    <ul>
                        <li>{boost}</li>
                        <li>{windows}</li>
                        <li>{compatible}</li>
                    </ul>
                </div>
                <div className="ProductGpuPage__detials">
                    <p>View details</p>
                </div>
                <div className="ProductGpuPage__price">
                    <h4>${price}</h4>
                </div>
                <div className="ProductGpuPage__button">
                    <button onClick={addToBasket} type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductGpuPage
