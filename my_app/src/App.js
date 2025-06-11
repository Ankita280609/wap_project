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

// ......
// import React, { useState} from 'react';
// import Navbar from './components/Navbar';
// // import SearchBar from './components/SearchBar';
// import HeroSection from './components/HeroSection';
// // import Carousel from './components/Carousel';
// import ProductDetails from './components/ProductDetails';
// import Footer from './components/Footer';
// import KeySellingPoints from './components/KeySellingPoints'; 
// import StatsSection from './components/StatsSection'
// import ReviewPurpose from './components/ReviewPurpose';
// import PartnerCarousel from './components/PartnerCarousel';
// import TestimonialCarousel from './components/TestimonialCarousel'; 
// import './App.css';

// function App() {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [reviews, setReviews] = useState({});
//   const addReview = (productId, newReview) => {
//     setReviews(reviews => ({
//       ...reviews,
//       [productId]: reviews[productId] ? [...reviews[productId], newReview] : [newReview]
//     }));
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <HeroSection/>
//      {selectedProduct ? (
//         <ProductDetails
//           product={selectedProduct}
//           reviews={reviews[selectedProduct.id] || []}
//           addReview={(newReview) => addReview(selectedProduct.id, newReview)}
//           goBack={() => setSelectedProduct(null)}
//         />
//       ) : (
//         <>
//           <StatsSection/>
//           <ReviewPurpose/>
//           <TestimonialCarousel />
//           <KeySellingPoints />
//           <PartnerCarousel/>
//         </>
//       )}
      

//       <Footer />
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import SearchBar from './components/SearchBar';
// import HeroSection from './components/HeroSection';
// import Carousel from './components/Carousel';
// import ProductDetails from './components/ProductDetails';
// import Footer from './components/Footer';
// import KeySellingPoints from './components/KeySellingPoints'; 
// import StatsSection from './components/StatsSection'
// import ReviewPurpose from './components/ReviewPurpose';
// import PartnerCarousel from './components/PartnerCarousel';
// import TestimonialCarousel from './components/TestimonialCarousel'; 
// import AboutPage from "./components/AboutPage";
// import './App.css';

// function App() {
//   const [page,setPage]=useState('home');
//   const [searchQuery, setSearchQuery] = useState('');
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
//       <Navbar currentPage={page} onChangePage={setPage}/>
//       {page==='about'?(
//         <>
//         <AboutPage/>
//         </>
//       ):(
//         <>
//         <HeroSection />
//         {selectedProduct ? (
//         <ProductDetails
//           product={selectedProduct}
//           reviews={reviews[selectedProduct.id] || []}
//           addReview={(newReview) => addReview(selectedProduct.id, newReview)}
//           goBack={() => setSelectedProduct(null)}
//         />
//          ) : (
//             <>
//               <StatsSection />
//               {/* <ReviewPurpose /> */}
//               <div style={{margin: "2em 0"}}>
//                 <SearchBar setSearchQuery={setSearchQuery} />
//                 <Carousel 
//                   products={products}
//                   searchQuery={searchQuery}
//                   onProductSelect={handleProductSelect}
//                 />
//               </div>
              
//               <KeySellingPoints />
//               <TestimonialCarousel />
//               <PartnerCarousel/>
//             </>
//           )}
//         </>
//       )}
//       <Footer />
//     </div>
//   );
// }
//   export default App;
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
// import ReviewPurpose from './components/ReviewPurpose';
// import TestimonialCarousel from './components/TestimonialCarousel';
// import KeySellingPoints from './components/KeySellingPoints';
// import Footer from './components/Footer';
// import AboutPage from './components/AboutPage';
// import ServicesPage from './components/ServicesPage'; 
// import './App.css';
// import PartnerCarousel from './components/PartnerCarousel';

// function App() {
//   const [page, setPage] = useState('home');

//   return (
//     <div className="App">
//       <Navbar currentPage={page} onChangePage={setPage} />
//       {page === 'about' ? (
//         <>
         
//           <AboutPage />
//         </>
//       )
//       : page === 'products' ? (
//         <>
//           <ServicesPage />
//         </>
//       )
//       : (
//         <>
//           <HeroSection />
//           <StatsSection />
          


//           <KeySellingPoints />
//           <TestimonialCarousel />
//           <PartnerCarousel/>
//         </>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default App;??

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ReviewPurpose from './components/ReviewPurpose';
import TestimonialCarousel from './components/TestimonialCarousel';
import KeySellingPoints from './components/KeySellingPoints';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage'; 
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';
import ProductDetails from './components/ProductDetails';
import FAQSection from './components/FAQSection';
import './App.css';
import PartnerCarousel from './components/PartnerCarousel';

function App() {
  // Page switching
  const [page, setPage] = useState('home');

  // Product/review/search state shared by home & services
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
    <div className="App">
      <Navbar currentPage={page} onChangePage={setPage} />
      {page === 'about' ? (
        <AboutPage />
      ) : page === 'products' ? (
        <ServicesPage
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          products={products}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          reviews={reviews}
          addReview={addReview}
        />
      ) : (
        // HOME PAGE (add carousel & searchbar, just like services)
        <>
          <HeroSection />
          <StatsSection />
          
          <div style={{ margin: "2em 0" }}>
            <SearchBar setSearchQuery={setSearchQuery} />
            {selectedProduct ? (
              <ProductDetails
                product={selectedProduct}
                reviews={reviews[selectedProduct.id] || []}
                addReview={(newReview) =>
                  addReview(selectedProduct.id, newReview)
                }
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
          <KeySellingPoints />
          <TestimonialCarousel />
          <PartnerCarousel/>
          
          
        </>
      )}
      <Footer onChangePage={setPage} />
    </div>
  );
}

export default App;








// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
// import ReviewPurpose from './components/ReviewPurpose';
// import TestimonialCarousel from './components/TestimonialCarousel';
// import KeySellingPoints from './components/KeySellingPoints';
// import Footer from './components/Footer';
// import AboutPage from './components/AboutPage';
// import ServicesPage from './components/ServicesPage'; // <-- new, holds product search & carousel logic
// import './App.css';

// function App() {
//   // Which "page" to show in this SPA
//   const [page, setPage] = useState('home');

//   return (
//     <div className="App">
//       <Navbar currentPage={page} onChangePage={setPage} />

//       {/* ABOUT PAGE */}
//       {page === 'about' ? (
//         <>
//           <HeroSection tagline="Together, We Build the Future" />
//           <AboutPage />
//         </>
//       )
//       // PRODUCTS / SERVICES PAGE
//       : page === 'products' ? (
//         <>
//           <ServicesPage />
//         </>
//       )
//       // HOME PAGE (default)
//       : (
//         <>
//           <HeroSection />
//           <StatsSection />
//           <ReviewPurpose />
//           <TestimonialCarousel />
//           <KeySellingPoints />
//         </>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default App;