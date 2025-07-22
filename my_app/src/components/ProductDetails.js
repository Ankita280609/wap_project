// import React,{useState} from "react"
// const ProductDetails =({product, reviews, addReview, goBack})=>{
//     const [newReview,setNewReview] =useState({rating: 0, text: ""})

//     const handleReviewSubmit=(event)=>{
//         event.preventDefault()
//         addReview({...newReview, user:"USER"});
//         setNewReview({rating: 0,text:""})
//     }
//     const handleTextChange = (event) => {
//         setNewReview({ ...newReview, text: event.target.value });
//       };
//     const handleRatingChange=(event)=>{
//         setNewReview({...newReview,rating:Number(event.target.value)})
//     }
//     const averageRating=reviews.length?(reviews.reduce((acc,review)=>acc+review.rating,0)/reviews.length).toFixed(1):0
//     return(
//         <div className="product-details">
//             <button onClick={goBack}>Back to Products</button>
//             <h2>{product.title}</h2>
//             <img src={product.image} alt={product.title} style={{maxWidth:'200px'}}/>
//             <p>{product.description}</p>
//             <p>Price: ${product.price}</p>
//             <h3>Average Rating:{averageRating}</h3>
//             <h3>Reviews</h3>
//             <ul>
//                 {reviews.map((review,index)=>(
//                     <li key={index}>
//                         <strong>{review.user}</strong>:{review.rating} stars - {review.text}
//                     </li>
//                 ))}
//             </ul>
//             <h3>Write a Review</h3>
//             <form onSubmit={handleReviewSubmit}>
//                 <label>
//                     Rating:
//                     <select value={newReview.rating} onChange={handleRatingChange}>
//                         <option value="0">Select</option>
//                         <option value="1">1 - Poor</option>
//                         <option value="2">2 - Fair</option>
//                         <option value="3">3 - Good</option>
//                         <option value="4">4 - Very Good</option>
//                         <option value="5">5 - Excellent</option>
//                     </select>
//                 </label>
//                 <br/>
//                 <label>
//                     Review:
//                     <textarea value={newReview.text} onChange={handleTextChange}></textarea>

//                 </label>
//                 <br/>
//                 <button type="submit">Submit Review</button>
//             </form>
//         </div>
//     )
// }
// export default ProductDetails;
// import React, { useState } from 'react';

// const ProductDetails = ({ product, reviews, addReview, goBack }) => {
//   const [newReview, setNewReview] = useState({ rating: 0, text: '' });
//   const [hoveredRating, setHoveredRating] = useState(null);

//   const handleReviewSubmit = (event) => {
//     event.preventDefault();
//     addReview({ ...newReview, user: 'Anonymous' });
//     setNewReview({ rating: 0, text: '' });
//     setHoveredRating(null);
//   };

//   const handleStarClick = (rating) => {
//     setNewReview({ ...newReview, rating });
//   };

//   const handleStarMouseEnter = (rating) => {
//     setHoveredRating(rating);
//   };

//   const handleStarMouseLeave = () => {
//     setHoveredRating(null);
//   };

//   const handleTextChange = (event) => {
//     setNewReview({ ...newReview, text: event.target.value });
//   };

//   const averageRating = reviews.length
//     ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
//     : 0;

//   return (
//     <div className="product-details-amzn">
//       <button className="back-btn" onClick={goBack}>Back to Products</button>

//       <div className="pd-content">
//         <div className="pd-image-col">
//           <img src={product.image} alt={product.title} />
//         </div>

//         <div className="pd-info-col">
//           <h2>{product.title}</h2>
//           <p className="pd-desc">{product.description}</p>
//           <div className="pd-price">Price: <span>${product.price}</span></div>
//           <div className="pd-average">Average Rating: <b>{averageRating}</b></div>

//           <h3>Reviews</h3>
//           <ul className="pd-reviews">
//             {reviews.length === 0 ? (
//               <li style={{ color: "#999" }}>No reviews yet.</li>
//             ) : (
//               reviews.map((review, index) => (
//                 <li key={index}>
//                   <strong>{review.user}</strong>: {review.rating} stars - {review.text}
//                 </li>
//               ))
//             )}
//           </ul>

//           <h3>Write a Review</h3>
//           <form className="pd-form" onSubmit={handleReviewSubmit}>
//             <label>
//               Rating:
//               <div className="rating-stars">
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <button
//                     key={num}
//                     type="button"
//                     className={star-btn${(hoveredRating ? num <= hoveredRating : num <= newReview.rating) ? " selected" : ""}}
//                     onClick={() => handleStarClick(num)}
//                     onMouseEnter={() => handleStarMouseEnter(num)}
//                     onMouseLeave={handleStarMouseLeave}
//                   >
//                     <span className="star">&#9733;</span>
//                   </button>
//                 ))}
//               </div>
//             </label>
//             <label>
//               Review:
//               <textarea value={newReview.text} onChange={handleTextChange}></textarea>
//             </label>
//             <button type="submit">Submit Review</button>
//           </form>
//         </div>
//       </div>

//       <div className="back-btn-wrapper">
//         <button className="back-btn full-width-btn" onClick={goBack}>Back to Products</button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;import React, { useState } from 'react';

import React, { useState } from 'react';

const ProductDetails = ({ product, reviews, addReview, goBack }) => {
  const [newReview, setNewReview] = useState({ rating: 0, text: '' });
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    addReview({ ...newReview, user: 'Anonymous' });
    setNewReview({ rating: 0, text: '' });
    setHoveredRating(null);
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleStarMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleStarMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleTextChange = (event) => {
    setNewReview({ ...newReview, text: event.target.value });
  };

  const averageRating = reviews.length
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="product-details-amzn">
      <button className="back-btn" onClick={goBack}>Back to Products</button>

      <div className="pd-content">
        <div className="pd-image-col">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="pd-info-col">
          <h2>{product.title}</h2>
          <p className="pd-desc">{product.description}</p>
          <div className="pd-price">Price: <span>${product.price}</span></div>
          <div className="pd-average">Average Rating: <b>{averageRating}</b></div>

          <h3>Reviews</h3>
          <ul className="pd-reviews">
            {reviews.length === 0 ? (
              <li style={{ color: "#999" }}>No reviews yet.</li>
            ) : (
              reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.user}</strong>: {review.rating} stars - {review.text}
                </li>
              ))
            )}
          </ul>

          <h3>Write a Review</h3>
          <form className="pd-form" onSubmit={handleReviewSubmit}>
            <label>
              Rating:
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`star-btn${(hoveredRating ? num <= hoveredRating : num <= newReview.rating) ? " selected" : ""}`}
                    onClick={() => handleStarClick(num)}
                    onMouseEnter={() => handleStarMouseEnter(num)}
                    onMouseLeave={handleStarMouseLeave}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                ))}
              </div>
            </label>
            <label>
              Review:
              <textarea value={newReview.text} onChange={handleTextChange}></textarea>
            </label>
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>

      <div className="back-btn-wrapper">
        <button className="back-btn full-width-btn" onClick={goBack}>Back to Products</button>
      </div>
    </div>
  );
};

export default ProductDetails;