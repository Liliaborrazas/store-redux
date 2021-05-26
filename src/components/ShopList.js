import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import ShopItem from './ShopItem';
import './style.css'

 const ShopList = () =>{
    const [result, setResult] = useState([]) 
    useEffect(()=>{
        getStore()
     },[])   

const getStore = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    setResult(res.data)
    console.log(res.data)

} 
   console.log(result)
     return(
     <div className="container-list">
         <h1>Lis Store</h1>
         <button>Añadir un nuevo producto</button>
         <ul className='shop-list'>{result?.map((li, index)=>{
             return(<ShopItem li={li} index={index} />)
         })}</ul>
     </div>
     )

}
const mapStateToProps = (state)=>{
return{
} 
}
export default connect(mapStateToProps)(ShopList);