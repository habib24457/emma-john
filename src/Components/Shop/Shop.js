import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart,getDatabaseCart} from '../../utilities/databaseManager';


const Shop = () => {

    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]); 

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
        //console.log(savedCart);
    },[])
    
    const handleAddProduct = (props)=>{
        const toBeAddedKey =props.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey); 
        let count =1;
        let newCart;
        if (sameProduct) {
           count = sameProduct.quantity+1;
           sameProduct.quantity = count;
           const others = cart.filter(pd => pd.key !== toBeAddedKey);
           newCart=[...others,sameProduct];//after filter we get an array. so we can write [...others]
        }else{
            props.quantity =1;
            newCart = [...cart,props];
        }
        setCart(newCart);  
        addToDatabaseCart(props.key,count);
        console.log("Here is = ",cart);
    }

    
    /*
    ->array destructuring. that's why=> const[products,setProducts] = useState();
    ->When Destructuring Object. => const{products,setProducts} = useState();
    */

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd1 =>   
                        <Product pd2 ={pd1}
                        key = {pd1.key}
                        handleAddProduct ={handleAddProduct}
                        >

                        </Product>)
                    }             
            </div>

            <div className="cart-container">
                    <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;