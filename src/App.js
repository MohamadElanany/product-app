import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';
import ProductDetails from './components/ProductDetails';
import HelpCenter from './components/HelpCenter';
import useFetch from './hooks/useFetch';
import './App.css';

const App = () => {
  const { data: products, loading, error } = useFetch('http://localhost:5000/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const categories = products.reduce((acc, product) => {
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
            element={Object.keys(categories).map(category => (
              <Category key={category} category={category} products={categories[category]} />
            ))}
          />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
