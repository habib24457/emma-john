import React, { useEffect,useState } from 'react';
import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../../Components/ReviewItem/ReviewItem';
import {removeFromDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

const Review = () => {

    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        console.log(productKey);
        const cartProducts = productKey.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]; //adding the amount of products to the database.
            return product;
        });
        console.log(cartProducts);
        setCart(cartProducts);
    },[])

    const removeProduct = (productKey)=>{
        console.log(productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            {
                cart.map(pd =><ReviewItem removeProduct={removeProduct}  
                    key = {pd.key} product={pd}></ReviewItem> )
            }
            </div>
           
           <div>
               <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Review;