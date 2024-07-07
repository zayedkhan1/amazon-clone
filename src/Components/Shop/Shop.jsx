import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                  {
                   products.map(product=><Product 
                    product={product}
                    key={product.id}
                       ></Product>  )
                  }
                
            </div>
            <h4>Order SUmmary</h4>
            
        </div>
    );
};

export default Shop;