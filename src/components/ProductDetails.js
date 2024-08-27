import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.product_id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <div>
        <h2>{product.product_name}</h2>
        <img src={product.product_image} alt={product.product_name} />
        <p>{product.product_desc}</p>
        <p>Price: {product.product_price}</p>
        </div>
    );
};

export default ProductDetails;

