import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd=> pd.key === productKey);
    console.log("New:",product);
    return (
        <div>
            <h1>Product Details:{productKey}</h1>
            <Product pd2={product}></Product>
        </div>
    );
};

export default ProductDetail;