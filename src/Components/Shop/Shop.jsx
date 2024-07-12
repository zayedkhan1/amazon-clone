import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
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
            <div>
          <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;