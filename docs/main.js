import React, { useState, useEffect } from 'react';
import Carousel from '../src/components/Carousel';
import SearchBar from '../src/components/SearchBar';
import ProductDetails from '../src/components/ProductDetails';
import './App.css'; // Ensure your styles apply here as well

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const addReview = (productId, newReview) => {
    setReviews(reviews => ({
      ...reviews,
      [productId]: reviews[productId] ? [...reviews[productId], newReview] : [newReview]
    }));
  };

  return (
    <div className="Main">
      <SearchBar setSearchQuery={setSearchQuery} />
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          reviews={reviews[selectedProduct.id] || []}
          addReview={(newReview) => addReview(selectedProduct.id, newReview)}
          goBack={() => setSelectedProduct(null)}
        />
      ) : (
        <Carousel
          products={products}
          searchQuery={searchQuery}
          onProductSelect={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default Main;
