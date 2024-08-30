import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            product_name: productName,
            product_desc: productDesc,
            product_category: productCategory,
            product_price: productPrice,
            product_image: productImage,
        };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            return response.json();
        })
        .then(data => {
            setMessage('Product added successfully!');
            // Clear form fields
            setProductName('');
            setProductDesc('');
            setProductCategory('');
            setProductPrice('');
            setProductImage('');
        })
        .catch(error => {
            setMessage(`Error: ${error.message}`);
        });
    };

    return (
        <div className="add-product">
            <h1>Add New Product</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Description:</label>
                    <textarea
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Category:</label>
                    <input
                        type="text"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Image URL:</label>
                    <input
                        type="text"
                        value={productImage}
                        onChange={(e) => setProductImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
