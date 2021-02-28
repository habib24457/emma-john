import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const product = (props) => {
    //console.log(props.handleAddProduct);
    const {img, name,seller,price,stock}=props.pd2;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt=""/>
            </div>
            
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By:{seller}</small></p>
                <br/>
                <p>Price:${price}</p>
                <p>Only {stock} products left.</p>

                <button className="cart-btn" onClick={()=>props.handleAddProduct(props.pd2)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart
                    </button>
            </div>     
        </div>
    );
};

export default product;