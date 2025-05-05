import React from "react"
const ProductDetails =({product, reviews, addReview, goBack})=>{
    const [newReview,setNewReview] =useState({rating: 0, text: " "})

    const handlerReviewSubmit=(event)=>{
        event.preventDefault()
        addReview({...newReview, user:"USER"});
        setNewReview({rating: 0,text:""})
    }
    const handlerRatingChange=(event)=>{
        setNewReview({...newReview,text:event.target.value})
    }
    const averageRating=reviews.length?(reviews.reduce((acc,review)=>acc+review.rating,0)/reviews.length).toFixed(1):0
    return(
        <div className="product-details">
            <button onClick={goBack}>Back to product</button>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{maxWidth:'200px'}}/>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <h3>Average Rating:{averageRating}</h3>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review,index)=>(
                    <li key={index}>
                        <strong>{review.user}</strong>:{review.rating} stars - {review.text}
                    </li>
                ))}
            </ul>
            <h3>Write a Review</h3>
            <form onSubmit={handlerReviewSubmit}>
                <label>
                    Rating:
                    <select value={newReview.rating} onChange={handlerRatingChange}>
                        <option value="0">Select</option>
                        <option value="1">1 - Poor</option>
                        <option value="0">2 - Fair</option>
                        <option value="0">3 - Good</option>
                        <option value="0">4 - Very Good</option>
                        <option value="0">5 - Excellent</option>
                    </select>
                </label>
                <br/>
                <label>
                    Review:
                    <textarea value={newReview.text} onChange={handleTextChange}></textarea>

                </label>
                <br/>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}
export default ProductDetails
