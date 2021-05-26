import React from 'react';
import './style.css'


const ShopItem = ({li, index}) => {
    return(
        <li key={index} className='item-container'>
         <h4 className='item-title'>{li.title}</h4>
         <div className='container-img'>
             <img src={li.image} className='item-image'/>
         </div>    
        <p className="item-price">{li.price}€</p>
        <button>Añadir</button>
        </li>
    )
}
export default ShopItem;