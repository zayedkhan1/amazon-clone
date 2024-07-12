import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {img,name,seller,ratings,price}=props.product;
   const addToCart=props.addToCart;
   


    return (
        <div className='product' >
            <img src={img} alt="" />
           <div className='product-info' >
           <h6 className='product-name' >Name:{name} </h6>
            <p>Price: ${price} </p>
            <p>Manufacturar: {seller} </p>
            <p>Ratings: {ratings} stars </p>

           </div>
           <button 
           onClick={()=>{addToCart(props.product)}}
           className='btn-cart'  >
            Add to Cart
             <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;