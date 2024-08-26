import React from 'react';
import Product from './Product';

const Category = ({ category, products }) => {
    return (
        <div>
        <h2>{category}</h2>
        <div>
            {products.map(product => (
            <Product key={product.product_id} product={product} />
            ))}
        </div>
        </div>
    );
};

export default Category;
