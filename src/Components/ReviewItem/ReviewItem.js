import React from 'react';
import {useState} from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const{name,quantity,key,price} = props.product;
    const reviewStyle ={
        borderBottom: '1px solid grey',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft: '100px',

    };
    return (
        <div style={reviewStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Price = ${price}</p>
            <p>Quantity = {quantity}</p>
            
            <button onClick={() => props.removeProduct(key)} className="remove-button ">Remove</button>
        </div>
    );
};

export default ReviewItem;