import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';
import ProductDetails from './components/ProductDetails';
import HelpCenter from './components/HelpCenter';
import AddProduct from './components/AddProduct';
import NotFound from './components/NotFound';
import Error from './components/Error';
import useFetch from './hooks/useFetch';
import './App.css';

const App = () => {
  const { data: products, loading, error } = useFetch('http://localhost:5000/products');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setProductList(products);
    }
  }, [products]);

  const handleDeleteProduct = (productId) => {
    fetch(`http://localhost:5000/products/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        setProductList(productList.filter(product => product.product_id !== productId));
      })
      .catch(error => {
        alert(`Error: ${error.message}`);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <Error message="There was a problem fetching the product data. Please try again later." />;

  const categories = productList.reduce((acc, product) => {
    if (!acc[product.product_category]) {
      acc[product.product_category] = [];
    }
    acc[product.product_category].push(product);
    return acc;
  }, {});

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={Object.keys(categories).length ? (
              Object.keys(categories).map(category => (
                <Category
                  key={category}
                  category={category}
                  products={categories[category]}
                  onDelete={handleDeleteProduct}
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          />
          <Route path="/product/:id" element={<ProductDetails products={productList} />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
