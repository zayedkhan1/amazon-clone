import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,quantity,ratings,price}=props.product;
    return (
        <div className='product' >
            <img src={img} alt="" />
           <div className='product-info' >
           <h6 className='product-name' >Name:{name} </h6>
            <p>Price: ${price} </p>
            <p>Manufacturar: {seller} </p>
            <p>Ratings: {ratings} stars </p>

           </div>
           <button className='btn-cart' >Add to Cart</button>
        </div>
    );
};

export default Product;