import React from 'react'
import './ProductGpuPage.css'
function ProductGpuPage({price,image,title,item1,item2,item3}) {
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
                        <li>{item1}</li>
                        <li>{item2}</li>
                        <li>{item3}</li>
                    </ul>
                </div>
                <div className="ProductGpuPage__detials">
                    <p>View details</p>
                </div>
                <div className="ProductGpuPage__price">
                    <h4>{price}</h4>
                </div>
                <div className="ProductGpuPage__button">
                    <button type="submit">Add to card</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductGpuPage
