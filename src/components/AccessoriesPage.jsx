import React from 'react'
import './AccessoriesPage.css'
function AccessoriesPage({price,image,title,item1,item2,item3}) {
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
                        <li>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
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
                    <button type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AccessoriesPage
