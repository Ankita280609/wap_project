import React from "react"
const Carousel = ({products, searchQuery, onProductSelect})=>{
    const filteredProducts=products.filter(product=>
        product.title.toLowerCase().includes(searchQuery?.toLowerCase?.() || "")
    );
    return (
        <section className="carousel-featured-products">
            <h2 style={{ color: "black",textAlign:"center",marginBottom:"1em" }}>Featured Product</h2>
            <div className="carousel-vertical-grid">
                {filteredProducts.map(product=>(
                    <div key={product.id} className="carousel-item">
                <img src={product.image} alt={product.title}/>

                <h3>{product.title}</h3>
                <p className="product-desc">{product.description.substring(0,100)}...</p>
                <div className="product-price">${product.price}</div>
                <button onClick={()=>onProductSelect(product)}>Learn More</button>
            </div>
            ))}
            </div>
        </section>
    )
}

export default Carousel
