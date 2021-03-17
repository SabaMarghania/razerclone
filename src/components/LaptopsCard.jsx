import { TitleRounded } from '@material-ui/icons'
import React from 'react'
import './LaptopsCard.css'
function LaptopsCard({price,image,title,processor,windows,monitor,gpu,storage}) {
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
                    <h4>{price}</h4>
                </div>
                <div className="laptopscard__button">
                    <button type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default LaptopsCard
