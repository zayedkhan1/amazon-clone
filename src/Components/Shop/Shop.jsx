import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
        let newCart=[];
        // const newCart=[...cart,product];
        //if product doesnt't exist in the c art ,then set quantity =1
        // if exist update quantity by 1
        const exist =cart.find(pd=>pd.id==product.id);
        if(!exist){
          product.quantity=1;
          newCart=[...cart,product]
        }else{
          exist.quantity=exist.quantity+1;
          const remaining=cart.filter(pd=>pd.id!= product.id);
          newCart=[...remaining,exist];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(()=>{
      const storedCart=getShoppingCart();
      const savedCart=[];
      //step-1: get id of the addedProduct
      for(const id in storedCart){
      //step-3: get product from products state by uding id
      const addedProduct=products.find(product=>{product.id==id});
      if(addedProduct){
        //step-3:add quantity
         const quantity=storedCart[id]
         addedProduct.quantity=quantity;
         //step-4:add the added product to hte saved cart
         savedCart.push(addedProduct)
      }
      // console.log('added product',addedProduct)

      }
      //step-5: set the cart
      console.log(savedCart)
      setCart(savedCart)
    },[products])
   
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