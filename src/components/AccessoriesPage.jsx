import React from 'react'
import { useStateValue } from "./StateProvider";
import './AccessoriesPage.css'
function AccessoriesPage({price,id,image,title,about,info,info2}) {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            about: about,
            info:info,
            info2:info2,
          },
        });
      };
    
    return (
        <div className='AccessoriesPage'>
         <div className='AccessoriesPage__cont'>
            <div className="AccessoriesPage__image">
                <img src={image} alt="" style={{width:200}} />
            </div>
            <div className="AccessoriesPage__bottom_cont">
                <div className="AccessoriesPage__title">
                    <h4>{title}</h4>
                </div>
            <div className="AccessoriesPage__info_cont">

                <div className="AccessoriesPage__specifications">
                    <ul>
                        <li>{about}</li>
                        <li>{info}</li>
                        <li>{info2}</li>
                    </ul>
                </div>
                <div className="AccessoriesPage__detials">
                    <p>View details</p>
                </div>

                <div className="AccessoriesPage__price">
                    <h4>{price}</h4>
                </div>
                </div>
                <div className="AccessoriesPage__button">
                    <button onClick={addToBasket} type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AccessoriesPage
