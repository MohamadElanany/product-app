import React from 'react';
import Header from './components/Header';
import Category from './components/Category';
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
    <div>
      <Header />
      <div className="container">
        {Object.keys(categories).map(category => (
          <Category key={category} category={category} products={categories[category]} />
        ))}
      </div>
    </div>
  );
};

export default App;
