import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData);
    const handleAddProduct = (props)=>{
        console.log('Product added ',props);
        const newCart = [...cart,props];
        setCart(newCart);
    }

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd1 =>
                        <Product pd2 ={pd1}
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