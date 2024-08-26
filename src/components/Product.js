import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
        <h3>{product.product_name}</h3>
        <p>{product.product_desc}</p>
        </div>
    );
};

export default Product;
