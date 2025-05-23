import React from "react";
const TestimonialCarousel=()=>{
    const testimonial=[
        {name:"Ankita Thakur" , review:'Well-designed and intuitive platform for sharing and exploring product reviews.',photo:"https://i.postimg.cc/2y7SHqXX/Screenshot-2025-05-23-at-11-13-24-PM.png"},
        {name:"Shagun Dahiya" , review:"This service exceeded my expectations! highly recommend to everyone",photo:"https://i.postimg.cc/HkksWkVb/Screenshot-2025-05-23-at-11-17-53-PM.png"},
        {name:"Siddhi Singhal" , review:"Amazing experience! the team is super helpful.",photo:"https://i.postimg.cc/76BBSXqB/Screenshot-2025-05-23-at-11-14-22-PM.png"},
        {name:"Sameeksha" , review:"I'am really happy with the unique idea of this website",photo:"https://i.postimg.cc/SxqCgkX5/Whats-App-Image-2025-05-23-at-23-01-55.jpg"},
        {name:"Riddhi Singhal" , review:"Clean and easy-to-use review site that makes product feedback clear and accessible.",photo:"https://i.postimg.cc/QxzR2NG6/Screenshot-2025-05-23-at-11-14-04-PM.png"},  
    ]
    return (
        <section className="testimonial-carousel">
            <h2>What Our Customers Say</h2>
            <div className="carousel">
                {testimonial.map((testimonial,index)=>(
                    <div key={index} className="testimonial-card">
                        {testimonial.photo && <img src={testimonial.photo} alt={`${testimonial.name}'s photo`}/>}
                        <blockquotes>"{testimonial.review}"</blockquotes>
                        <p>- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default TestimonialCarousel