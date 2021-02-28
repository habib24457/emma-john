import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total,pr)=>total+pr.price,0); //calculating the total price using reduce
    let total =0;
    for (let i =0;i<cart.length;i++){
        const product = cart[i];
        total = (total+product.price).toFixed(2);
    }

    let shipping = 0;
    if(total>140){
        shipping = 0;
    }else if(total>15){
        shipping = 2.99;
    }

    let tax = Math.round(total/10);

    let finalTotal = (total + shipping + tax);
    

    return (
        <div>
           <h4>Order Summary:</h4>
           <p>Items Ordered:{cart.length}</p> 
           <p>Shipping cost:{shipping}</p>
           <p>Tax:{tax}</p>
           <p>Total Price:{finalTotal}</p>
        </div>
    );
};

export default Cart;