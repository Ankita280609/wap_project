// import React, {useState, useEffect} from "react"
// import Navbar from "./components/Navbar"
// import SearchBar from "./components/SearchBar"
// import HeroSection from "./components/HeroSection"
// import Carousel from "./components/Carousel"
// import ProductDetails from "./components/ProductDetails"
// import Footer from "./components/Footer"
// import "./App.css"
// function App(){
//     const [searchQuery, setSearchQuery]=useState("")
//     const [products, setProducts]=useState([])
//     const [selectedProduct, setSelectedProduct]=useState(null)
//     const [reviews, setReviews]=useState({})
// useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then(Response=>Response.json())
//     .then(data=>setProducts(data))
//     .catch(error=>console.error("Error:", error))
// },[])
// const handleProductSelect=(product)=>{
//     setSelectedProduct(product);
// }
// const addReview=(productId,newReview)=>{
//     setReviews(reviews=>({
//         ...reviews,
//         [productId]: reviews[productId]?[...reviews[productId],newReview]:[newReview]
//     }))
// }
// return(
//     <div className="App">
//         <Navbar/>
//         <SearchBar setSearchQuery={setSearchQuery}/>
//         <HeroSection/>
//         {selectedProduct?(
//             <ProductDetails
//              product={selectedProduct}
//              reviews={reviews[selectedProduct.id]||[]}
//              addReview={(newReview)=>addReview(selectedProduct.id,newReview)}
//              goback={()=>setSelectedProduct(null)}
//             />
//         ):(
//             <Carousel products={products} searchQuery={searchQuery} onProductSelect={handleProductSelect}/>
//         )}
//         <Footer/>
//     </div>
// )
// }
// export default App;
// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// // import SearchBar from './components/SearchBar';
// import HeroSection from './components/HeroSection';
// import Carousel from './components/Carousel';
// import ProductDetails from './components/ProductDetails';
// import Footer from './components/Footer';
// import TestimonialCarousel from './components/TestimonialCarousel';
// import './App.css';

// function App() {
//   // const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [reviews, setReviews] = useState({}); 

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error("Error fetching products:", error));
//   }, []);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//   };

//   const addReview = (productId, newReview) => {
//     setReviews(reviews => ({
//       ...reviews,
//       [productId]: reviews[productId] ? [...reviews[productId], newReview] : [newReview]
//     }));
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       {/* <SearchBar setSearchQuery={setSearchQuery} /> */}
//       <HeroSection />
//       {selectedProduct ? (
//         <ProductDetails
//           product={selectedProduct}
//           reviews={reviews[selectedProduct.id] || []}
//           addReview={(newReview) => addReview(selectedProduct.id, newReview)}
//           goBack={() => setSelectedProduct(null)}
//         />
//       ) : (
//         <Carousel products={products}  onProductSelect={handleProductSelect} />
//       )}
//       <TestimonialCarousel/>
//       <Footer />
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
// import Carousel from './components/Carousel';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import KeySellingPoints from './components/KeySellingPoints'; 
import StatsSection from './components/StatsSection'
import ReviewPurpose from './components/ReviewPurpose';
import TestimonialCarousel from './components/TestimonialCarousel'; 
import './App.css';

function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState({});

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error("Error fetching products:", error));
  // }, []);

  // const handleProductSelect = (product) => {
  //   setSelectedProduct(product);
  // };

  const addReview = (productId, newReview) => {
    setReviews(reviews => ({
      ...reviews,
      [productId]: reviews[productId] ? [...reviews[productId], newReview] : [newReview]
    }));
  };

  return (
    <div className="App">
      <Navbar />
      {/* <SearchBar setSearchQuery={setSearchQuery} /> */}
      <HeroSection />
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          reviews={reviews[selectedProduct.id] || []}
          addReview={(newReview) => addReview(selectedProduct.id, newReview)}
          goBack={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          {/* <Carousel products={products}  onProductSelect={handleProductSelect} /> */}
          <ReviewPurpose/>
          <TestimonialCarousel />
          <StatsSection/>

          <KeySellingPoints />  
          
           
          
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;