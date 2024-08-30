import React from 'react';
import Product from './Product';

const Category = ({ category, products, onDelete }) => {
    return (
        <div>
            <h2>{category}</h2>
            <div>
                {products.map(product => (
                    <Product key={product.product_id} product={product} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default Category;
