import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total,pr)=>total+pr.price,0); //calculating the total price using reduce
    let total =0;
    for (let i =0;i<cart.length;i++){
        const product = cart[i];
        total = (total+product.price)*product.quantity;
        console.log(product.quantity);
    }

    let shipping = 0;
    if(total>140){
        shipping = .99;
    }else if(total>15){
        shipping = 2.99;
    }

    let tax =(total/10).toFixed(2);

    let finalTotal =parseFloat(total + shipping + tax).toFixed(2);
    

    return (
        <div >
           <h4 className="text-danger">Order Summary:</h4>
           <p>Items Ordered:{cart.length}</p> 
           <p>Shipping cost:{shipping}</p>
           <p>Tax:{tax}</p>
           <p>Total Price:{finalTotal}</p>
           
           <Link to="/Review">
           <button className="btn btn-primary">Review Orders</button>
           </Link>
        </div>
    );
};

export default Cart;