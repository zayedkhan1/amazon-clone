import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
   
    const addToCart=(product)=>{
        // cart.push(product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
   
    return (
        <div className='shop-container'>
            <div className='products-container'>
                  {
                   products.map(product=><Product 
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                       ></Product>  )
                  }
                
            </div>
            <h4>Order SUmmary

            <p>selected item: {cart.length} </p>

            </h4>
            
            
        </div>
    );
};

export default Shop;