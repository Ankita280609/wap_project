import React, {useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import HeroSection from "./components/HeroSection"
import Carousel from "./components/Carousel"
import ProductDetails from "./components/ProductDetails"
import Footer from "./components/Footer"
import "./App.css"
function App(){
    const [searchQuery, setSearchQuery]=useState("")
    const [products, setProducts]=useState([])
    const [selectedProduct, setSelectedProduct]=useState(null)
    const [reviews, setReviews]=useState({})
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(Response=>Response.json())
    .then(data=>setProducts(data))
    .catch(error=>console.error("Error:", error))
},[])
const handleProductSelect=(product)=>{
    setSelectedProduct(product);
}
const addReview=(productId,newReview)=>{
    setReviews(reviews=>({
        ...reviews,
        [productId]: reviews[productId]?[...reviews[productId],newReview]:[newReview]
    }))
}
return(
    <div className="App">
        <Navbar/>
        <SearchBar setSearchQuery={setSearchQuery}/>
        <HeroSection/>
        {selectedProduct?(
            <ProductDetails
             product={selectedProduct}
             reviews={reviews[selectedProduct.id]||[]}
             addReview={(newReview)=>addReview(selectedProduct.id,newReview)}
             goback={()=>setSelectedProduct(null)}
            />
        ):(
            <Carousel products={products} searchQuery={searchQuery} onProductSelect={handleProductSelect}/>
        )}
        <Footer/>
    </div>
)
}
export default App;