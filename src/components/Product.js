import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${product.product_name}?`)) {
            onDelete(product.product_id);
        }
    };

    return (
        <div>
            <h3>{product.product_name}</h3>
            <p>{product.product_desc}</p>
            <Link to={`/product/${product.product_id}`}>View Details</Link>
            <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
                Delete Product
            </button>
        </div>
    );
};

export default Product;
