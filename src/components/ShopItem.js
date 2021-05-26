import React from 'react';
import './style.css'


const ShopItem = ({li, index}) => {
    return(
        <li key={index} className='item-container'>
         <h4 className='item-title'>{li.title}</h4>
         <div className='container-img'>
             <img src={li.image} className='item-image'/>
         </div>  
         <p>{li.description}</p>  
        <p className="item-price">{li.price}€</p>
        <div className="item-button-container">
        <button>Add carrito</button>
        <button>Eliminar</button>
        </div>
        </li>
    )
}
export default ShopItem;