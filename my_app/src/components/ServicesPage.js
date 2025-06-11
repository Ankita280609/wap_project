import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import ProductDetails from "./ProductDetails";
import ServicesHeroSection from "./ServicesHeroSection";
import FAQSection from "./FAQSection";


const ServicesPage = () => {
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

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const addReview = (productId, newReview) => {
    setReviews(reviews => ({
      ...reviews,
      [productId]: reviews[productId] ? [...reviews[productId], newReview] : [newReview]
    }));
  };

  return (
    <main>

      <div style={{ margin: "2em 0" }}>
      <ServicesHeroSection tagline="Explore Our Premium Products" />
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
            onProductSelect={handleProductSelect}
          />
        )}
      </div>
      
      <FAQSection />
    </main>
  );
};

export default ServicesPage;