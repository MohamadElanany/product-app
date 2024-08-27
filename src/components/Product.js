import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div>
        <h3>{product.product_name}</h3>
        <p>{product.product_desc}</p>
        <Link to={`/product/${product.product_id}`}>View Details</Link>
        </div>
    );
};

export default Product;

