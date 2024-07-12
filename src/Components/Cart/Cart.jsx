import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart=props.cart;//option 1
//   const {cart}=props;//option 2
let total=0;
let totalShipping=0;
for(const product of cart){
    total+=product.price;
    totalShipping+=product.shipping;
}
const Tax=total*7/100;
const grandTotal=total+totalShipping+Tax;
    return (
        <div className='cart' >
             <h4>Order SUmmary</h4>

           <p>selected item: {cart.length} </p>
           <p>TOtal price: ${total}  </p>
           <p>Total shipping: ${totalShipping}   </p>
           <p>Tax: ${Tax} </p>
           <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;