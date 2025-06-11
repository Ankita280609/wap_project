import React from "react"
const Carousel = ({products, searchQuery, onProductSelect})=>{
    const filteredProducts=products.filter(product=>
        product.title.toLowerCase().includes(searchQuery)
    )
    return (
        <section className="carousel-featured-products">
            <h2 style={{ color: "black" }}>Featured Product</h2>

            <div className="carousel">
                {filteredProducts.map(product=>(
                    <div key={product.id} className="carousel-item">
                <img src={product.image} alt={product.title}>
                </img>
                <h3>{product.title}</h3>
                <p>{product.description.substring(0,100)}...</p>
                <p>${product.price}</p>
                <button onClick={()=>onProductSelect(product)}>Learn More</button>
            </div>
            ))}
            </div>
        </section>
    )
}

export default Carousel
